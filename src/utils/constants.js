const Location_Api ={
    LOCATION:"https://ipapi.co/json"
}
const Regex ={
    AlphawithNum: /^(?=.*[0-9])(?=.*[A-Z])([a-zA-Z0-9@$!%*#?&]+)$/g,
    CharName:/^[A-Za-z\s]+$/g,
    OnlyNumeric:/^[0-9]{10,}$/g,
    numbers:/^[0-9]*$/g
}

export {
    Location_Api,
    Regex
}