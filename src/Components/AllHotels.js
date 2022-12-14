import React from 'react'
import HotelCard from '../Cards/HotelCard.js';
import image from '../AiraXing.jpg';
import {useState , useEffect } from 'react';
import { db } from "../firebase.js";
import '../Styles/AllHotels.css';
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

    if(newName == "" || newDescription == "" || newStatus == ""){

      alert("Please Add Valid Values");
      return ;
    }
    await addDoc(AllHotelCollection, { HotelName: newName, ID: newID , Description: newDescription , status : newStatus});
    window.location.reload()
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
    
      <div class="box">
    <form name="search">
        <input type="text" className="input" name="txt" onmouseout="this.value = ''; this.blur();"  onChange = {e=> setSearch(e.target.value)} />
    </form>
    <i class="fas fa-search"></i>

</div>
    <div className = "AllHotels">
    {
      Hotels.filter(hotel => hotel.HotelName.toLowerCase().includes(newSearch.toLowerCase())).map((hotel)=>{
       
        return (
          <HotelCard HotelName = {hotel.HotelName} status = {hotel.status}  description = {hotel.Description} image ={image}/>
        );
      }
      )
    }
</div>
    <div className= "addHotel">
    <input className = "nameHotel"
        placeholder="Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        className = "nameHotel"
        placeholder="Description"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />

<input    
        className = "nameHotel"
        placeholder="Status"
        onChange={(event) => {
          setStatus(event.target.value);
        }}
      />

      <button className = "create" onClick={createHotel}> Create Hotel</button>
      </div>

      <div className="deleteHotel">
    {/* <input
        placeholder="Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      /> */}
   
   {/* <button
              onClick={() => {
                deleteHotel(newName);
              }}
            >
              {" "}
              Delete Hotel
            </button> */}
      </div>
    </div>
  )
  
}

export default AllHotels;