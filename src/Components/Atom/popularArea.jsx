import React,{useState,useEffect} from "react";
import "./PopularArea.scss";
import ListCityCard from "./ListCityCard";
import { Link } from "react-router-dom";

const PopularArea = ((props) => {
    const{
    headingCity= "",
    seletedVals=[],
    }= props;
  
    const getHotelList =((arg)=>{
        localStorage.removeItem("filltered_hotelList");
        localStorage.setItem("filltered_hotelList", JSON.stringify(arg))
        console.log("hi",arg)
    })      


    return (<>
    <div className="pop-locality-heading">
        <p className="locality-heading-container">Popular localities in and around <span>{headingCity}</span></p>
        <div className="list-popularcity">
            {seletedVals && seletedVals[0]?.subCity.map((res)=>{
                return <div className="list-city-card" onClick={()=>{getHotelList(res.hotels_list)}}><Link to="/hotellist"><ListCityCard 
                    SubcityData={res.sub_location}
                    totalPlaces={res.sub_location.length-1} 
                     ></ListCityCard></Link></div>
             })}
           
        </div>
    </div>
    </>);
})
 
export default PopularArea;