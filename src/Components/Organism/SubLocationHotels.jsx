import React,{useState,useEffect} from "react";
import './SubLocationHotels.scss';
import HotelCard from "../Atom/HotelCard";

const SubLocationHotels = (props) => {

      const[hoteldata,sethotelData] =useState([])

      const data= JSON.parse(localStorage.getItem("filltered_hotelList"))
const renderdata =()=>{
    sethotelData(data)
}
useState(()=>{
    renderdata()
})


    return ( <>
    <div>
        <div>
            <div>{data[0].location}</div>
        {hoteldata.map((res)=>{
                  return  <HotelCard hotelImage={res.hotel_image} hotelname={res.hotel_Name} hotelAthentic={res.regionWiseTast.join()} />
            })}
        </div>
        </div>
    </> );
}
 
export default SubLocationHotels;