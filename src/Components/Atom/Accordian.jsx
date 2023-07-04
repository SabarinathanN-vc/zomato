import React,{useState} from "react";
import './Accordian.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Accordian = ((props) => {
    const {
     children,
     linkHeading=""
    } = props;
const [childEnable,setChildEnable] = useState(false)
    const enableChildren=(()=>{
      setChildEnable(!childEnable)
    })
    return (<>
    <div className="accordian-container">
        <div className="accordian-wrapper"> 
            <div className="accordian-content">
                <div className="accor-heading-layout"><p>{linkHeading}</p><div onClick={enableChildren}>{childEnable ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</div></div>
               {childEnable && <div className="accor-children">{children}</div>}
            </div>
        </div>
    </div>
    </>);
});
export default Accordian;