import React from "react";
import './CheckBox.scss';
import Checkbox from '@mui/material/Checkbox';

const CheckBox = ((props) => {
    const {
        name = "",
        className = "",
        required = "",
        value = "",
        onchange = () => null,
        labelText="",
        checkedValue=""
    } = props;

    return (<>
        <Checkbox
            onChange={(e) => onchange(e.target.checked, name)}
            name={name}
            className={className}
            required={required}
            value={value}
        />
        <label>{labelText}</label>
    </>)
})

export default CheckBox;