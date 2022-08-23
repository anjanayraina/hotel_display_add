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
import { connectStorageEmulator } from 'firebase/storage';
function AllHotels() {

  const [newName, setName] = useState("");
  const [newSearch, setSearch] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newStatus, setStatus] = useState("");
  const [newID, setID] = useState(0);
  const [Hotels, setHotels] = useState([]);
  const AllHotelCollection = collection(db, "Hotels");

  const createHotel = async () => {
    await addDoc(AllHotelCollection, { HotelName: newName, ID: newID , Description: newDescription , status : newStatus});
  };

  
  const deleteHotel = async (name) => {
    console.log(name);
    const hotelID = await getId(name);
    // console.log(hotelID);
    const userDoc = doc(db, "Hotels", hotelID);
    await deleteDoc(userDoc);
  };

  const getId =async (name) =>{

    const getHotels = async () => {
    
      Hotels.map((hotel) =>{
        // console.log(hotel.HotelName);
        if(hotel.HotelName ==name){return hotel.id;}
      });

      return "";
    };
    return await getHotels();

  }

  useEffect(() => {
    const getHotels = async () => {
      const data = await getDocs(AllHotelCollection);
      setHotels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getHotels();
  }, []);
  return (
    <div className = "ParentClass">
    
      <input placeholder="Search Hotel" className = "Search" onChange = {e=> setSearch(e.target.value)}/>
    
    <div className = "AllHotels">
    {
      Hotels.map((hotel)=>{
       
        return (
          <HotelCard HotelName = {hotel.HotelName} status = {hotel.status}  description = {hotel.Description} image ={image}/>
        );
      }
      )
    }
</div>
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