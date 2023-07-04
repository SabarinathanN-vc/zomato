import React, { useState, useEffect } from "react";
import Input from "../../Atom/input";
import DropDownDiv from '../../Atom/DropDownDiv';
import './RegisterHotel.scss';
import Button from "../../Atom/Button";
import RadioButton from '../../Atom/RadioButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckBox from "../../Atom/CheckBox";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const RegisterHotel = (() => {
    const options = [{ value: "Delivery & Dinning", label: "Delivery & Dinning" }, { value: "Delivery", label: "Delivery" }, { value: "Dinning", label: "Dinning" }]
    const checkBoxOptions = [
        { value: "Bakery", label: "Bakery",name:"Bakery"},
        { value: "Beverage Shop", label: "Beverage Shop",name:"BeverageShop"},
        { value: "Cafe", label: "Cafe",name:"Cafe"},
        { value: "Casual Dining", label: "Casual Dining",name:"CasualDining"},
        { value: "Dhaba", label: "Dhaba" ,name:"Dhaba"},
        { value: "Food Court", label: "Food Court" ,name:"Food Court"},
        { value: "Mess", label: "Mess" ,name:"Mess"},
        { value: "Sweet Shop", label: "Sweet Shop" ,name:"SweetShop"},
        { value: "Fine Dining", label: "Fine Dining" ,name:"FineDining"}]
        const [enablecheckBox,setEnableCheckBox] = useState(false)
        const checkBoxEnable =(()=>{
            setEnableCheckBox(!enablecheckBox)
        })
        const[value,setValue]= useState("");
        const [array,setarray] = useState(new Map())
        const onchange=((val)=>{
            setValue(val)
            if(array.get(val)){
                setarray(res => new Map(res.set(val,false)))
            }
            else{
                setarray(res => new Map(res.set(val,true)))
            }
            
        })
        array.forEach((value,key)=>{
          console.log(key)
        })

        // console.log(onchange())
    return (<>
        {/* <div className="register-form-container">
            <div className="register-form-wrapper">
                <div className="restaurant-info-title">Restaurant Information</div>
                <div className="form-wrapper">
                    <div className="children-wrapper"><DropDownDiv divContent={"Restaurant details"}>
                        <div className="name-input-field">
                            <Input
                                onchange={() => null}
                                onblur={() => null}
                                id={Math.random()}
                                placeholder={"Restaurant Name"}
                                type={"text"}
                                required={true}
                                name={"restaurantName"}
                                // value = {}
                                // helperText = {}
                                label={"Restaurant Name"}
                                error={false}
                                className={"input-field"} /></div>
                        <div className="address-input-field">
                            <Input
                                onchange={() => null}
                                onblur={() => null}
                                id={Math.random()}
                                placeholder={"Restaurant complete address"}
                                type={"text"}
                                required={true}
                                name={"restaurantAddress"}
                                // value = {}
                                // helperText = {}
                                label={"Restaurant complete address"}
                                error={false}
                                className={"input-field"} /></div>

                        <div className="form-warning-contant">Please ensure this is same as the address on your FSSAI document (if applicable)</div>
                    </DropDownDiv></div>
                    <div className="children-wrapper"><DropDownDiv divContent={"Contact number at restaurant"}>
                        <div className="phoneNumber-input-field"><Input
                            onchange={() => null}
                            onblur={() => null}
                            id={Math.random()}
                            placeholder={"Phone Number"}
                            type={"number"}
                            required={true}
                            name={"phonenumber"}
                            // value = {}
                            // helperText = {}
                            label={"Phone Number"}
                            error={false}
                            className={"input-field"} /></div>
                        <div>or want to share landline number</div>

                        <div className="landline-input-field">
                            <Input
                                onchange={() => null}
                                onblur={() => null}
                                id={Math.random()}
                                placeholder={"Landline Number"}
                                type={"number"}
                                required={true}
                                name={"landlinenumber"}
                                // value = {}
                                // helperText = {}
                                label={"Landline Number"}
                                error={false}
                                className={"input-field"} />
                        </div>

                    </DropDownDiv></div>
                    <div className="children-wrapper"><DropDownDiv divContent={"Restaurant owner details"}>
                        <div className="ownerphoneNumber-input-field"><Input
                            onchange={() => null}
                            onblur={() => null}
                            id={Math.random()}
                            placeholder={"Phone Number"}
                            type={"number"}
                            required={true}
                            name={"ownerphonenumber"}
                            // value = {}
                            // helperText = {}
                            label={"Phone Number"}
                            error={false}
                            className={"input-field"} /></div>

                        <div className="ownerName-input-field">
                            <Input
                                onchange={() => null}
                                onblur={() => null}
                                id={Math.random()}
                                placeholder={"Owner Name"}
                                type={"text"}
                                required={true}
                                name={"ownerName"}
                                // value = {}
                                // helperText = {}
                                label={"Owner Name"}
                                error={false}
                                className={"input-field"} />
                        </div>

                        <div className="ownerName-input-field">
                            <Input
                                onchange={() => null}
                                onblur={() => null}
                                id={Math.random()}
                                placeholder={"Owner Email"}
                                type={"text"}
                                required={true}
                                name={"ownerEmail"}
                                // value = {}
                                // helperText = {}
                                label={"Owner Email"}
                                error={false}
                                className={"input-field"} />
                        </div>

                    </DropDownDiv></div>

                    <div className="restaurant-type-time">Restaurant Type & Timings</div>
                    <div className="children-wrapper"><DropDownDiv divContent={"Establishment type"}>
                        <RadioButton options={options} />

                    </DropDownDiv>
                    </div>

                    <div className="children-wrapper">
                        <DropDownDiv divContent={"What describes your outlet best"}>
                            <div className="about-restaurant">
                                <div className="drop-down-section">Select up to 2 best choices<div onClick={checkBoxEnable}> {enablecheckBox ?<ArrowDropUpIcon/> :  <ArrowDropDownIcon />}</div></div>
                                <div className="check-box-section">
                                {enablecheckBox && checkBoxOptions.map((res,indx)=>{
                                        return(<CheckBox labelText={res.label} name={res.name} className={"checkBox-container"} onchange={onchange} value={res.value} checkedValue={array}/>)
                                    })}
                                </div>
                                   
            
                            </div>
                        </DropDownDiv>
                    </div>


                    <div><Button
                        type={'submit'}
                        disabled={false}
                        onclick={() => null}
                        buttonText={"Submit"}
                    /></div>
                </div>
            </div>
        </div> */}
        
    </>)
})

export default RegisterHotel;