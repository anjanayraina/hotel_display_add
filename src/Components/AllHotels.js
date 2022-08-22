import React from 'react'
import HotelCard from '../Cards/HotelCard.js';
import image from '../AiraXing.jpg';

function AllHotels() {
  return (
    <div className = "ParentClass">
    <HotelCard HotelName = "Test Hotel" status = "Active"  description = "This is the description" image ={image}/>
    </div>
  )
  
}

export default AllHotels;