import React from "react";
import './CardWithCrtBtn.scss';
import Button from "./Button";

const CradWithCrtBtn =((props)=>{
    const{
        imageSource="",
        foodName="",
        price="",
        onclick=()=> null,
        disabled= false
    }=props;

    return(<>
    <div className="food-item-card-container">
        <div className="item-wrapper">
           <div className="left-contant"> <img src={imageSource} className="image-content"/></div>
           <div className="rigth-contant">
            <p className="foodName">{foodName}</p>
            <p className="price">&#8377;{price}</p> 
            <Button type="submit" buttonText={"Add"} btnclass={"cart-button"} onclick={onclick} disabled={disabled}/></div>
        </div>
    </div>
    </>)
})

export default CradWithCrtBtn;