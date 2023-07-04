import React from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './ListCityCard.scss'

const ListCityCard = ((props) => {
    const{
        SubcityData="",
        totalPlaces=0
    }=props
  
    return (  <>
    <div className="city-list-card-container">
      <div className="city-card-container">
      <div className="list-card-left">
        <p className="sub-city-name">{SubcityData}</p>
        <p className="total-place">{`${totalPlaces} Places`}</p>
      </div>
      <div className="list-card-right">
         <NavigateNextIcon></NavigateNextIcon>
      </div>
      </div>
    </div>
    </>);
})
 
export default ListCityCard;