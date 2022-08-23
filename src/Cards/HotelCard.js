import React from 'react'
import '../Styles/HotelCard.css';



function HotelCard(props) {
  return (
    <div id="container">	
	
    <div class="product-details">
    <div className = "wrapperName-Status"><h1>{props.HotelName}</h1> <h1>{props.status}</h1></div>
    
    {/* <span class="hint-star star">
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>
    </span> */}
      
        <p class="information">{props.description}</p>
  
      
      
  <div class="control">
    
    <button class="btn">
    
  
     <div className="buy">Go To  Dashboard</div>
   </button>
    
  </div>
        
  </div>
    
  <div class="product-image">
    
    <img src={props.image} alt="" />
    
  
  <div class="info">
    <h2> Description</h2>
    <ul>
      <li><strong>Height : </strong>5 Ft </li>
      <li><strong>Shade : </strong>Olive green</li>
      <li><strong>Decoration: </strong>balls and bells</li>
      <li><strong>Material: </strong>Eco-Friendly</li>
      
    </ul>
  </div>
  </div>
  
  </div>
  
  
  
  )
}

export default HotelCard