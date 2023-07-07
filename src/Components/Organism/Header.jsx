import React, { useEffect, useState } from "react";
import './Header.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Input from "../Atom/input";
import InputAdornment from '@mui/material/InputAdornment';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import HomeCard from "../Atom/HomeCard";
import PopularArea from "../Atom/popularArea";
import emailjs from '@emailjs/browser';
import { addLocalStorage } from '../../utils/getLocalData';
import { Link } from "react-router-dom";
import Accordian from "../Atom/Accordian";


const Header = (() => {
    const [initialLocation, setInitialLocation] = useState();
    const [searchLocation, setSearchoaction] = useState(false);
    const [localstoredVals, setLocalStoredVals] = useState([]);
    const [selectedValue, setSelectedValue] = useState([]);
    const [showHotelSearch, setShowHotelSearch] = useState(false);
    const [emaildata, setemaildata] = useState()
    const [servicesAval, setServiceAval] = useState({
        delivery: true,
        dining: true,
        nightout: true
    })
    const [searchValue, setSearchValue] = useState({
        search: "",
        searchhotel: ""
    });
    let cityList = ["coimbatore","madurai","chennai","trichy","tanjore"]
    let localData = JSON.parse(localStorage.getItem("resturantDataNew"))
    console.log("LocalData",localData)

    const addLocalStoragefunction = (() => {
        setLocalStoredVals(addLocalStorage().location);

    })

    const setinitialData = () => {
        setSelectedValue([localstoredVals[0]])
        setcityData(localstoredVals && localstoredVals.length > 0 ? localstoredVals[0].city : "");
       
    }
    const setcityData = (arg) => {
        setInitialLocation(arg)
    }
   

    const filterLocation = (() => {
        return cityList.filter((res) => res.toLowerCase().includes(searchValue.search))

    })
///////
   
//   console.log(filterHotels())  
  /////
//   .map((res)=>{res.subCity.map((res)=>{return res.hotels_list.map((res)=>{return res})})})
 
let data= localstoredVals.map((res)=>{return res.subCity.map((res)=>{return res.hotels_list.map((res)=>{return res})})})
let sanityData= data.reduce((r,e)=>(r.push(...e), r),[]).map((res)=>{return res.map((res)=>{return res.hotel_Name})})
let fineSanity= sanityData.reduce((r,e)=>(r.push(...e), r),[])
const filterHotels = (() => {
    return fineSanity.filter((res) => res.toLowerCase().includes(searchValue.searchhotel))
})
// console.log(filterHotels())
  //////

    const showSearchIOption = (() => {
        setSearchoaction(true)
    })
    const hideSearchOption = (() => {
        setSearchoaction(false)
    })

    const showHotelSearchfunction = (() => {
        setShowHotelSearch(true)
    })
    const hideHotelSearchfunction = (() => {
        setShowHotelSearch(false)
    })
    const onchange = ((val, name) => {
        setSearchValue({
            ...searchValue,
            [name]: val
        });
    })

    const getServiceData = ((arg)=>{
       setServiceAval(arg[0].available_Service)
    })

    const localDatasetting =((arg)=>{
        if(arg !== null && arg !== undefined){
            localStorage.setItem("selectedValue",JSON.stringify(arg))
            getServiceData(arg)
        }
        else if(selectedValue !== null && selectedValue !== undefined && selectedValue.length >0 && selectedValue[0] !== undefined ){
            localStorage.setItem("selectedValue",JSON.stringify(selectedValue))
            getServiceData(selectedValue)
        }
    
    })
    useEffect(()=>{
        localDatasetting();
    })
    const storeLocationData = ((localId, city) => {
        let allLocationData = localstoredVals.filter((res) => res.location_id === localId)
        setSelectedValue(allLocationData);
        setSearchoaction(false);
        setInitialLocation(city)
        localDatasetting(allLocationData);

    })

    const sendEmail = (e) => {
        e.preventDefault();
        let data = {
            email: emaildata
        }
        emailjs.sendForm('service_1e64eqn', 'template_ioh06vc', data.email, 'uzaIcoBw-2XXlYujE')
            .then((result) => {
                alert("mail sent su")
            }, (error) => {
                alert("buddy something went wrong")
            });
    };

    useEffect(() => {
        addLocalStoragefunction();
        filterLocation();
    }, [])

    useEffect(() => {
        setinitialData();
    }, [localstoredVals, setLocalStoredVals])

    // console.log("ch",selectedValue[0] && selectedValue[0].subCity.length > 0 ? selectedValue[0].subCity[0].hotels_list.map((res)=>{return res.map((res)=>{return res})}):"")
const sethotellist = (()=>{
    let hotelData =JSON.parse(localStorage.getItem("selectedValue"))
    let sanityData =hotelData[0].subCity.map((res)=>{return res.hotels_list})
    let secondaryData =sanityData.reduce((r,e)=>(r.push(...e), r),[])
    localStorage.setItem("filltered_hotelList", JSON.stringify(secondaryData))
})

 const redirectToMenuList = ((arg)=>{
    let hotelData =JSON.parse(localStorage.getItem("selectedValue"));
    let sanityData =hotelData[0].subCity.map((res)=>{return res.hotels_list});
    let secondaryData =sanityData.reduce((r,e)=>(r.push(...e), r),[]);
    let finedata= secondaryData.filter((res)=>{
        return res.hotel_Name === arg
     });
     localStorage.setItem("hotelsList", JSON.stringify(finedata[0]))
 })


 
    return (
        <>
            <div className="header-container">
                <div className="header-background-image">
                    <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" />
                    <div className="header-content">
                        <div className="header-logo">
                            <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" />
                        </div>
                        <div className="loaction-withgreet">
                            <h3>Discover the best food & drinks in <span>{initialLocation}</span></h3>
                        </div>
                        <div className="search-bar-wrapper">
                        <div className="dummy-dropdown" onClick={showSearchIOption}>
                            <div className="drop-down-leftside"><PlaceIcon color="primary" />
                                <p>{initialLocation}</p>
                            </div>
                            <ArrowDropDownIcon className="drop-down-icon" />
                       <div className="dummy-div"></div>
                        </div>
                        <div className="searchBar-container" onClick={showHotelSearchfunction}>
                            <SearchIcon opacity="0.5" />
                            <p className="search-bar-content">Search for restaurant, cuisine or a dish</p>
                        </div>
                        </div>
                    </div>
                </div>
                {searchLocation && <>
                    <div className='overlay-container'>
                        <div className='overlay-content'>
                            <div className="overlay-header"> <h3>Select delivery location</h3><CloseIcon onClick={hideSearchOption} />
                            </div>
                            <div className="location-search-bar">
                                <Input
                                    value={searchValue['search'] || ""}
                                    onchange={onchange}
                                    name={"search"}
                                    placeholder={"Search Location..."}
                                    className={"search-bar"}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">{SearchIcon}</InputAdornment>)
                                    }}></Input>
                            </div>
                            <div className="gps-location-link">
                                <div className="gps-location-header"> <GpsFixedIcon></GpsFixedIcon>
                                    <h3>Detect current location</h3></div>
                                <p>Using GPS</p>
                            </div>
                            <div className="search-result-container">
                                {filterLocation().length > 0 ? filterLocation().map((res) => {
                                    return (
                                        <p onClick={() => storeLocationData(res)}>{res}</p>
                                    )
                                }): <p>No city found....</p>}
                            </div>
                        </div>
                    </div>
                </>}
                {showHotelSearch && <>
                    <div className='overlay-container'>
                        <div className='overlay-content'>
                            <div className="overlay-header"> <h3>Search for restaurant, cuisine or a dish</h3><CloseIcon onClick={hideHotelSearchfunction} />
                            </div>
                            <div className="location-search-bar">
                                <Input
                                    value={searchValue['searchhotel'] || ""}
                                    onchange={onchange}
                                    name={"searchhotel"}
                                    placeholder={"Search Location..."}
                                    className={"search-bar"}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">{SearchIcon}</InputAdornment>)
                                    }}></Input>
                            </div>

                            <div className="search-result-container">
                                {filterHotels().length > 0 ? filterHotels().map((res) => {
                                    return (
                                        <p onClick={()=> redirectToMenuList(res)}><Link to={'/hotellist/menuList'}>{res}</Link></p>
                                    )
                                }):<p>No hotel Found</p>}
                            </div>
                        </div>
                    </div>
                </>}

            </div>
            <div className="service-card-layout">
                {servicesAval.delivery ?<Link to="/hotellist" className="service-card-link"> <HomeCard
                    cardImageSrc={"https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"}
                    descriptionHeading={"Order Online"}
                    descriptioncontent={"Stay home and order to your doorstep"}
                    altText={"Order Online"}
                    onclick ={()=>sethotellist()}
                /></Link> : ""}

                {servicesAval.dining ?<Link to="/hotellist" className="service-card-link"> <HomeCard
                    cardImageSrc={"https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"}
                    descriptionHeading={"Dining"}
                    descriptioncontent={"View the city's favourite dining venues"}
                    altText={"Order Online"}
                /> </Link>: ""}
                {servicesAval.nightout ?<Link to="/hotellist" className="service-card-link"> <HomeCard
                    cardImageSrc={"https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"}
                    descriptionHeading={"Nightlife and Clubs"}
                    descriptioncontent={"Explore the city’s top nightlife outlets"}
                    altText={"Order Online"}
                /></Link> : ""}

            </div>
            <div className="popularLocalities-container">
                <PopularArea
                    headingCity={initialLocation}
                    seletedVals={selectedValue}
                    
                />
            </div>
            <div className="sending-mail-container">
                <div className="mail-card-container">
                    <div className="mail-card-heading">
                        <p className="main-heading">Get the Zomato app</p>
                        <p className="sub-heading">We will send you a link, open it on your phone to download the app</p>
                    </div>
                    <div className="form-container">
                        <form onSubmit={sendEmail}>
                            <div className="label"><label>Email</label></div>

                            <div className="input-area">
                                <input type="email" name="user_email" onChange={(e) => setemaildata(e.target.value)} placeholder="Email" />
                                <input type="submit" value="Send" className="submit-button" />
                            </div>

                        </form>
                    </div>
                    <div className="os-based-download">
                        <div>
                            <div className="download-app">Download app from</div>
                            <div className="image-container">
                                <a href="https://play.google.com/store/games"><img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="download Android" /></a>
                                <a href="https://www.apple.com/in/app-store/"> <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="download IOS" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <SubLocationHotels></SubLocationHotels> */}
            <div className="accordian-wrap">
                <div className="explore-options">Explore options near me</div>
             <Accordian linkHeading="popular-cusine"> 
             <div><ul>
                <li>Bakery food near me</li>
                <li>Biryani food near me</li>
                <li>Chinese food near me</li>
                <li>North Indian food near me</li>
                <li>Pizza food near me</li>
                </ul></div>
             </Accordian>
             <Accordian linkHeading="Popular restaurant types near me"> 
             <div><ul>
                <li>Fine Dining near me</li>
                <li>Dhabas near me</li>
                <li>Chinese food near me</li>
                <li>Food Trucks near me</li>
                <li>Sweet Shops near me</li>
                </ul></div>
             </Accordian>
             <Accordian linkHeading="Cities We Deliver To"> 
             <ul>
             {localstoredVals.map((res)=>{ 
                return(
                        <li>{res.city}</li>
                )

             })}
             </ul>
             </Accordian>
            </div>
            <div className="account-info">
                <div className="initial-container">SN</div>
            </div>

        </>
    );
})

export default Header;