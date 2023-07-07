import React, { useState, useEffect } from "react";
import Input from "../../Atom/input";
import RadioButton from '../../Atom/RadioButton';
import TextArea from "../../Atom/TextArea";
import Select from '../../Atom/Select';
import Button from "../../Atom/Button";
import CheckBox from "../../Atom/CheckBox";
import { Regex } from '../../../utils/constants';
import './RegisterHotel.scss';
import { Link } from "react-router-dom";


const RegisterHotel = (() => {
    const options = [{ value: "Night Out", label: "Night Out", name: "nightout" }, { value: "Delivery", label: "Delivery", name: "delivery" }, { value: "Dinning", label: "Dinning", name: "dinning" }]
    const foodtypeoptions = [{ value: "Veg", label: "Veg" }, { value: "nonVeg", label: "Non-Veg" }, { value: "vegandnonveg", label: "Veg and Non-veg" }]
    const menutypeoptions = [{ value: "Veg", label: "Veg" }, { value: "nonVeg", label: "Non-Veg" }]
    const checkBoxOptions = [
        { value: "Bakery", label: "Bakery", name: "Bakery" },
        { value: "Beverage Shop", label: "Beverage Shop", name: "BeverageShop" },
        { value: "Cafe", label: "Cafe", name: "Cafe" },
        { value: "Casual Dining", label: "Casual Dining", name: "CasualDining" },
        { value: "Dhaba", label: "Dhaba", name: "Dhaba" },
        { value: "Food Court", label: "Food Court", name: "Food Court" },
        { value: "Mess", label: "Mess", name: "Mess" },
        { value: "Sweet Shop", label: "Sweet Shop", name: "SweetShop" },
        { value: "Fine Dining", label: "Fine Dining", name: "FineDining" }]
    const locationList = [{ location: "coimbatore", subLocation: [{ location: "peelamedu" }, { location: "Rs puram" }, { location: "Race Course" }, { location: "Gandhipuram" }, { location: "chilsez" }] }
        , { location: "madurai", subLocation: [{ location: "Nehru nagar" }, { location: "Alisa garden" }, { location: "Rs nagar" }, { location: "Trichy road" }, { location: "west madurai" }, { location: "Thillai Nagar" }] },
    { location: "chennai", subLocation: [{ location: "Chrompet" }, { location: "Thambaram" }, { location: "velacheri" }, { location: "Nungampakam" }, { location: "ECR" }, { location: "Nehru nagar" }] },
    { location: "trichy", subLocation: [{ location: "Thillai Nagar" }, { location: "Cantonment" }, { location: "Mount Litrazy" }, { location: "Rock Fort" }, { location: "Chathiram" }] },
    { location: "tanjore", subLocation: [{ location: "Agenta Nagar" }, { location: "Rp street" }, { location: "Temple Road" }, { location: "Race Course" }, { location: "chilsez" }] }];

    const [increForm, setIncreForm] = useState([{
        menuname: '', menuprice: '', description: '', menulistfoodtype: '', menuimage: '',
        menuname_error: '', menuprice_error: '', menuimage_error: '', description_error: ''
    }])
   
    const [hotelInput, setHotelInput] = useState(
        { hotelname: '', 
        hotelsublocation: '', 
        hotelcity: 'coimbatore',
         hotelphonenumber: '',
          hotelimageUrl: '' }
    )
    const [service, setService] = useState({ delivery: false, dinning: false, nightout: false })
    const [wholeform, setWholeForm] = useState(false)
    const [makeSubmitDis, setSubmitDisable] = useState(
        {
            dynamicform: false,
            remove: false
        })
    const [sublocationData, setSublocationData] = useState()
    const [error, setError] = useState(
        {
            hotelName: '',
            hoteladdress: '',
            hotelsublocation: '',
            hotelcity: '',
            hotelphonenumber: '',
            hotelimageUrl: ''
        })
    const [serviceError, setServiceError] = useState(false)
    const [menulistError, setmenulistError] = useState(false)
    const [finalFormValue, setFinalFOrmValue] = useState();

    const validateMenuname = ((arg, ind, name) => {
        const data = [...increForm];
        let trimmedvals = arg.trim();
        if (trimmedvals === "") {
            data[ind][name + "_error"] = "Enter Menu Name";
        }
        else if (!trimmedvals.match(Regex.CharName)) {
            data[ind][name + "_error"] = "Enter Valid Name";
        }
        else {
            data[ind][name + "_error"] = "";
        }

    })

    const validateMenuPrice = ((arg, ind, name) => {
        const data = [...increForm];
        if (arg === "") {
            data[ind][name + "_error"] = "Enter Menu Price";
        }
        else if (!arg.match(Regex.numbers)) {
            data[ind][name + "_error"] = "Enter Valid price";
        }
        else {
            data[ind][name + "_error"] = "";
        }
    })
    const validateMenuDescription = ((arg, ind, name) => {
        const data = [...increForm];
        let trimmedvals = arg.trim();
        if (trimmedvals === "") {
            data[ind][name + "_error"] = "Enter Description";
        }
       
        else {
            data[ind][name + "_error"] = "";
        }
    })
    const validateMenuImage = ((arg, ind, name) => {
        const data = [...increForm];
        if (arg === "") {
            data[ind][name + "_error"] = "Enter Image URL";
        }
        else {
            data[ind][name + "_error"] = "";
        }
    })

    const onchangemenulist = ((vals, name, indx) => {
        const data = [...increForm];
        data[indx][name] = vals;
        setIncreForm(data);

        if (name === "menuname") {
            validateMenuname(vals, indx, name)
        }
        else if (name === "menuprice") {
            validateMenuPrice(vals, indx, name)
        }
        else if (name === "description") {
            validateMenuDescription(vals, indx, name)
        }
        else if (name === "menuimage") {
            validateMenuImage(vals, indx, name)
        }
    })

    const addAnotherResponse = (() => {
        let obj = { menuname: '', menuprice: '', description: '', menulistfoodtype: '', menuimage: '' }
        setIncreForm([...increForm, obj])
    })

    const onchange = ((vals, name) => {
        setService({ ...service, [name]: vals })
    })

    const makeServiceTrue = (() => {

        if (!(service.delivery || service.dinning || service.nightout)) {
            setServiceError(true)
        }
        else {
            setServiceError(false)
        }
    })
    useEffect(() => {
        makeServiceTrue();
    }, [service])
 
    const makeMenuListTrue = (() => {
        increForm.map((res) => {
    
            if((res.description === "" 
            || res.menuimage ==="" 
            || res.menuprice ==="" 
            || res.menuname === "" 
            || res.foodtypeoptions)){
                setmenulistError(true)
            }
            else{
                setmenulistError(false)
            }
        })

    })
    useEffect(() => {
        makeMenuListTrue();
    }, [increForm])
   
    const addHotelResponse = (() => {
        const resturantData = {
            hotelName: hotelInput.hotelname,
            hoteladdress: hotelInput.hoteladdress,
            hotelcity: hotelInput.hotelcity,
            hotelsublocation: hotelInput.hotelsublocation,
            hotelistfoodtype: hotelInput.hotelistfoodtype,
            hotelservice: service,
            HotelMenuList: increForm
        }
        // setFinalFOrmValue(resturantData);
        // localStorage.setItem("resturantDataNew",JSON.stringify(finalFormValue))
        if(localStorage.getItem("resturantDataNew")){
            let datatostore =JSON.parse(localStorage.getItem("resturantDataNew"));
            datatostore.push(resturantData)
            localStorage.setItem("resturantDataNew",JSON.stringify(datatostore))

        }
        else{
            localStorage.setItem("resturantDataNew",JSON.stringify([resturantData]))
        
        }
    })

    const removeMenuForm = ((arg) => {
        const removedata = [...increForm];
        removedata.splice(arg, 1)
        setIncreForm(removedata)
    })
console.log("error",error)
    const validateName = ((arg) => {
        let trimmedvals = arg.trim();
        if (trimmedvals === "") {
            setError({ ...error, hotelName: "Please Enter Hotel Name" })
        }
        else if (!trimmedvals.match(Regex.CharName)) {
            setError({ ...error, hotelName: "Please Enter Valid Name" })
        }
        else {
            setError({ ...error, hotelName: "" })
        }
    })

    const validateAddress = ((arg) => {
        let trimmedvals = arg.trim();
        if (trimmedvals === "") {
            setError({ ...error, hoteladdress: "Enter Hotel Address" })
        }
        else if (!trimmedvals.match(Regex.CharName)) {
            setError({ ...error, hoteladdress: "Enter Valid Address" })
        }
        else if (trimmedvals.length > 30) {
            setError({ ...error, hoteladdress: "Address should be 30char only" })
        }
        else {
            setError({ ...error, hoteladdress: "" })
        }
    })

    const validateCity = ((arg) => {
        let trimmedvals = arg.trim();
        if (trimmedvals === "") {
            setError({ ...error, hotelcity: "Select Hotel City" })
        }
        else {
            setError({ ...error, hotelcity: "" })
        }
    })

    const validateSublocation = ((arg) => {
        if (arg === "") {
            setError({ ...error, hotelsublocation: "Select the SubLocation" })
        }
        else {
            setError({ ...error, hotelsublocation: "" })
        }
    })

    const validateHotelPhoneNumb = ((arg) => {
        let trimmedvals = arg.trim();
        if (trimmedvals === "") {
            setError({ ...error, hotelphonenumber: "Enter phone Number" })
        }
        else if (!trimmedvals.match(Regex.OnlyNumeric)) {
            setError({ ...error, hotelphonenumber: "Enter Valid Number" })
        }
        else {
            setError({ ...error, hotelphonenumber: "" })
        }
    })

    const validateImageUrl = ((arg) => {
        let trimmedvals = arg.trim();
        if (trimmedvals === "") {
            setError({ ...error, hotelimageUrl: "Enter image url" })
        }
        else {
            setError({ ...error, hotelimageUrl: "" })
        }
    })

    const onchangeHotelDta = ((vals, name) => {
        if (name === "hotelname") {
            validateName(vals)
        }
        else if (name === "hoteladdress") {
            validateAddress(vals)
        }
        else if (name === "hotelsublocation") {
            validateSublocation(vals)
        }
        else if (name === "hotelcity") {
            validateCity(vals)
        }
        else if (name === "hotelphonenumber") {
            validateHotelPhoneNumb(vals)
        }
        else if (name === "hotelimageUrl") {
            validateImageUrl(vals)
        }
        setHotelInput({ ...hotelInput, [name]: vals })
    })

    const subLocalData = (() => {
        locationList.map((res) => {
            if (res.location === hotelInput.hotelcity) {
                setSublocationData(res.subLocation)
            }
        })
    })

    useEffect(() => {
        subLocalData();
    }, [hotelInput.hotelcity, setSublocationData])

    const onblurHotelDta = ((vals, name) => {
        if (name === "hotelname") {
            validateName(vals)
        }
        else if (name === "hoteladdress") {
            validateAddress(vals)
        }
        else if (name === "hotelsublocation") {
            validateSublocation(vals)
        }
        else if (name === "hotelcity") {
            validateCity(vals)
        }
        else if (name === "hotelphonenumber") {
            validateHotelPhoneNumb(vals)
        }
        else if (name === "hotelimageUrl") {
            validateImageUrl(vals)
        }
    })
    const makeFinalSubmitForm =(()=>{
        // if (!(error.hotelName
        //     || error.hoteladdress
        //     || error.hotelcity
        //     || error.hotelimageUrl
        //     || error.hotelphonenumber
        //     || error.hotelsublocation)
        //  && !(hotelInput.hotelname === ""
        //     || hotelInput.hoteladdress === ""
        //     || hotelInput.hotelcity === ""
        //     || hotelInput.hotelimageUrl === ""
        //     || hotelInput.hotelphonenumber === ""
        //     || hotelInput.hotelsublocation === "")) {
        //         setWholeForm(true)
        // }
        // else {
        //     setWholeForm(false)
        // }
        if(serviceError 
            || menulistError 
            || error.hotelName !==""
            || error.hoteladdress !==""
            || error.hotelcity !==""
            || error.hotelimageUrl !==""
            || error.hotelphonenumber !==""
            || error.hotelsublocation !==""
            || hotelInput.hotelname ==="" 
            || hotelInput.hotelcity === ""
            || hotelInput.hotelimageUrl ==="" 
        || hotelInput.hotelphonenumber === "" 
        || hotelInput.hotelsublocation === "" 
        ){
            setWholeForm(false);
        }
        else{
            setWholeForm(true)
        }
    })

    useEffect(() => {
        makeFinalSubmitForm();
    }, [error,menulistError,serviceError, increForm])


    return (<>
        <div className="cart-header-con">
            <div className="cart-zmt-img-container">
                <Link to="/">  <img className="image-container" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" /></Link>
            </div>

        </div>
        <div className="register-form-container">
            <div className="form-wrapper">
                <div className="input-section">
                    <Input
                        onchange={onchangeHotelDta}
                        required={true}
                        label={"Hotel Name"}
                        type={"text"}
                        variant="outlined"
                        name={"hotelname"}
                        placeholder={"Enter Hotel Name"}
                        helperText={error.hotelName}
                        error={error.hotelName ? true : false}
                        value={hotelInput['hotelname'] || ""}
                        onblur={onblurHotelDta}
                    // className={className}
                    />
                </div>

                <div className="input-section">
                    <Input
                        onchange={onchangeHotelDta}
                        required={true}
                        label={"Hotel Address"}
                        type={"text"}
                        variant="outlined"
                        name={"hoteladdress"}
                        placeholder={"Enter Hotel Address"}
                        helperText={error.hoteladdress}
                        error={error.hoteladdress ? true : false}
                        value={hotelInput['hoteladdress'] || ""}
                        onblur={onblurHotelDta}
                    // className={className}
                    />
                </div>

                <div className="input-section">
                    <Select
                        onchange={onchangeHotelDta}
                        preselctval={hotelInput['hotelcity'] || ""}
                        required={true}
                        label={"Hotel City"}
                        name={"hotelcity"}
                        option={locationList}
                        helperText={error.hotelcity}
                        error={error.hotelcity ? true : false}
                        // className={className}
                        onblur={onblurHotelDta}
                    />
                </div>

                <div className="input-section">
                    <Select
                        name={"hotelsublocation"}
                        option={sublocationData}
                        onchange={onchangeHotelDta}
                        label={"Hotel Sublocation"}
                        required={true}
                        preselctval={hotelInput['hotelsublocation'] || ""}
                        helperText={error.hotelsublocation}
                        error={error.hotelsublocation ? true : false}
                        onblur={onblurHotelDta}
                    />
                </div>



                <div className="input-section">
                    <Input
                        onchange={onchangeHotelDta}
                        name={"hotelphonenumber"}
                        placeholder={"Enter Hotel Phone Number"}
                        required={true}
                        label={"Hotel Phone Number"}
                        type={"text"}
                        variant="outlined"
                        helperText={error.hotelphonenumber}
                        error={error.hotelphonenumber ? true : false}
                        value={hotelInput['hotelphonenumber'] || ""}
                        onblur={onblurHotelDta}
                    // className={className}
                    />
                </div>

                <div className="input-section-with-label">
                    <label className="input-label">Service Available</label>
                    <div className="radio-input">
                        {options.map((res, indx) => {
                            return (<CheckBox
                                labelText={res.label}
                                name={res.name}
                                className={"checkBox-container"}
                                onchange={onchange}
                                value={res.value} />)
                        })}
                    </div>
                </div>

                <div className="input-section-with-label">
                    <label className="input-label">Hotel Type</label>
                    <div className="radio-input">
                        <RadioButton
                            options={foodtypeoptions}
                            name={"hotelistfoodtype"}
                            helperText={error.hotelistfoodtype}
                            error={error.hotelistfoodtype ? true : false}
                            onchange={onchangeHotelDta}
                        />
                    </div>
                </div>

                <div className="input-section">
                    <Input
                        onchange={onchangeHotelDta}
                        name={"hotelimageUrl"}
                        placeholder={"Enter Hotel Image"}
                        required={true}
                        label={"Hotel Image"}
                        type={"text"}
                        variant="outlined"
                        onBlur={onblurHotelDta}
                        // className={className}
                        helperText={error.hotelimageUrl}
                        error={error.hotelimageUrl ? true : false}
                        value={hotelInput['hotelimageUrl'] || ""}
                    />
                </div>

            </div>
        </div>
        <div className="register-form-container">
            <div className="form-wrapper">
                {increForm.map((res, index) => {
                    return (
                        <>
                            <div className="menu-heading">
                                <h3>Menu List -{index + 1}</h3>
                            </div>

                            <div className="input-section">
                                <Input
                                    onchange={onchangemenulist}
                                    id={index}
                                    required={true}
                                    label={"Menu Name"}
                                    type={"text"}
                                    variant="outlined"
                                    name={"menuname"}
                                    placeholder={"Enter Menu Name"}
                                    value={res.menuname}
                                    helperText={res.menuname_error}
                                    error={res.menuname_error ? true : false}
                                // onBlur={onblur}
                                // className={className}
                                />
                            </div>
                            <div className="input-section-with-label">
                                <label>Menu Type</label>
                                <div className="radio-input">
                                    <RadioButton
                                        id={index}
                                        options={menutypeoptions}
                                        onchange={onchangemenulist}
                                        name={"menulistfoodtype"}
                                    // error = {}
                                    // helperText = ""
                                    />
                                </div>
                            </div>
                            <div className="input-section">
                                <Input
                                    id={index}
                                    onchange={onchangemenulist}
                                    required={true}
                                    label={"Menu price"}
                                    type={"text"}
                                    variant="outlined"
                                    name={"menuprice"}
                                    placeholder={"Enter Menu Price"}
                                    value={res.menuprice}
                                    // className={className}
                                    // onBlur={onblur}
                                    helperText={res.menuprice_error}
                                    error={res.menuprice_error ? true : false}
                                />
                            </div>
                            <div className="input-section">
                                <Input
                                    id={index}
                                    onchange={onchangemenulist}
                                    required={true}
                                    label={"Menu Image"}
                                    type={"text"}
                                    variant="outlined"
                                    name={"menuimage"}
                                    placeholder={"Enter Menu Image"}
                                    value={res.menuimage}
                                    // className={className}
                                    // onBlur={onblur}
                                    helperText={res.menuimage_error}
                                    error={res.menuimage_error ? true : false}
                                />
                            </div>
                            <div className="input-section">
                                <TextArea
                                    id={index}
                                    placeholder={"Description"}
                                    labeltext={"Description about menu"}
                                    name={"description"}
                                    value={res.description}
                                    onchange={onchangemenulist}
                                    helperText={res.description_error}
                                    error={res.description_error ? true : false}
                                />
                            </div>
                            {increForm.length !== 1 && <div className="remove-btn"> <Button
                                onclick={() => removeMenuForm(index)}
                                buttonText={"Remove"}
                                type={"submit"}
                            /></div>}
                        </>
                    )

                })}

            </div>
        </div>
        <div className="button-container">
            <div className="button-wrapper">
                <div className="button-separator">
                    <Button
                        type='button'
                        disabled={makeSubmitDis.dynamicform}
                        onclick={addAnotherResponse}
                        buttonText="Add Another Menu"
                    />
                </div>
                <div className="button-separator">
                    <Button
                        type='submit'
                        disabled={!wholeform}
                        onclick={addHotelResponse}
                        buttonText="Add Hotel"
                    />
                </div>
            </div>
        </div>

    </>)
})

export default RegisterHotel;