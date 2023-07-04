import React,{UseState,UseEffect} from "react";
import './HomeCard.scss';
import { Link } from "react-router-dom";


const HomeCard = ((props) => {
    const{
        cardImageSrc="",
        descriptionHeading="",
        descriptioncontent= "",
        altText="",
        onclick= () => null
    }= props
    
    return ( <>
    <div className="card-Container" onClick={onclick}>
        <div className="image-container">
            <img className="card-image" src={cardImageSrc} alt={altText}></img>
        </div>
        <div className="description-container">
            <h3>{descriptionHeading}</h3>
            <p>{descriptioncontent}</p>
        </div>
    </div>
    </> );
})
 
export default HomeCard;