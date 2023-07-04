import React from "react";
import './HotelCard.scss'
import { Link } from "react-router-dom";

const HotelCard = ((props) => {
    const{
        hotelname="",
        hotelAthentic="",
        hotelImage="",
        onclick = () => null
    }=props

    return ( <>
    
        <div className="food-card-container" onClick={onclick}>
        <Link to="/hotellist/menuList">
            <div className="card-image-container">
                <img src={hotelImage} alt="restaurant image"/>
            </div>
            <div className="card-description">
                <div className="desc-left"> 
                <p className="hotel-name">{hotelname}</p>
                    <p className="taste-type">{hotelAthentic}</p>  
                </div>
                <div className="desc-right">
                   

                </div>
            </div>
            </Link>
        </div>
       
    </> );
})
 
export default HotelCard;