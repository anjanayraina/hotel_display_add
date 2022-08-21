import React from 'react'
import '../Styles/HotelCard.css';



function HotelCard(props) {
  return (
    <div className = "HotelCardWrapper">
    <img src = {props.image} alt = "Image Not loaded"></img>
    <div className = "HotelName">{props.HotelName}</div>
    

    </div>
  )
}

export default HotelCard