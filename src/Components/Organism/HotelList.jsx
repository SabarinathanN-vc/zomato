import React, { useEffect, useState } from "react";
import HotelCard from "../Atom/HotelCard";
import './HotelList.scss';
import { Link } from "react-router-dom";



const HotelList = ((props) => {

    const [hoteldata, sethotelData] = useState([])

    const data = JSON.parse(localStorage.getItem("filltered_hotelList"));

    const setdata = (() => {
        sethotelData(data)
    })
    // [0].subCity.map((res)=>{return res.hotels_list.map((res)=>{return res})})
    // console.log("hi",hoteldata)
    // const sanityHotelData =(()=>{
    //   return hoteldata.reduce((r,e)=>(r.push(...e), r),[])
    // })

    useEffect(() => {
        setdata();
    }, [])

    const addingClickedHotel = ((arg) => {
        console.log("log",arg)
        localStorage.setItem("hotelsList", JSON.stringify(arg))
    })
    let secondaryData =JSON.parse(localStorage.getItem("selectedValue"))

    return (<>
        <div className="hotel-card-list-page">
            <div className="zomato-backtoHome"></div>
            <div className="header-loaction">Delivery Restaurants in <span>{secondaryData[0].city}</span></div>
            <div className="hotel-card-container">
                {hoteldata.map((res) => {
                    return <HotelCard onclick={()=>addingClickedHotel(res)} hotelImage={res.hotel_image} hotelname={res.hotel_Name} hotelAthentic={res.regionWiseTast.join()} />
                })}

            </div>
        </div>
    </>);
})

export default HotelList;