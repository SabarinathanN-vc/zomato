import React,{Children, useState} from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './DropDownDiv.scss';
const DropDown = ((props)=>{
    const{
      divContent ="",
      children
    }=props;
const[makedown, setMakeDOwn] = useState(false)
    const makedropDown =(()=>{
          setMakeDOwn(!makedown)
    })


    return (<>
    <div className="drop-down-container">
        <div className="drop-down-content">
            <div className="left-section">{divContent}</div>
            <div className="right-section">
{makedown ?  <ArrowDropUpIcon onClick={makedropDown}/>:<ArrowDropDownIcon onClick={makedropDown}/>  }

            </div>
        </div>
       
    </div>{
        makedown && <div className="children-prop">{children}</div>
    }
   
    </>)
})

export default DropDown;