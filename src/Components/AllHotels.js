import React from 'react'
import HotelCard from '../Cards/HotelCard.js';
import image from '../AiraXing.jpg';
import {useState , useEffect } from 'react';
import { db } from "../firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
function AllHotels() {

  const [newName, setName] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newStatus, setStatus] = useState("");
  const [newID, setID] = useState(0);
  const [Hotels, setHotels] = useState([]);
  const AllHotelCollection = collection(db, "Hotels");

  const createHotel = async () => {
    await addDoc(AllHotelCollection, { HotelName: newName, ID: newID , Description: newDescription , status : newStatus});
  };

  const deleteHotel = async (name) => {
    const userDoc = doc(db, "Hotels", name);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getHotels = async () => {
      const data = await getDocs(AllHotelCollection);
      setHotels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getHotels();
  }, []);
  return (
    <div className = "ParentClass">
    {
      Hotels.map((hotel)=>{
        console.log(Hotels.length);
        return (
          <HotelCard HotelName = {hotel.HotelName} status = {hotel.status}  description = {hotel.Description} image ={image}/>
        );
      }
      )
    }

    <div className= "addHotel">
    <input
        placeholder="Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        
        placeholder="Description"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />

<input    
        placeholder="Status"
        onChange={(event) => {
          setStatus(event.target.value);
        }}
      />

      <button onClick={createHotel}> Create Hotel</button>
      </div>

      <div className="deleteHotel">
    <input
        placeholder="Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
   
   <button
              onClick={() => {
                deleteHotel(newName);
              }}
            >
              {" "}
              Delete Hotel
            </button>
      </div>
    </div>
  )
  
}

export default AllHotels;