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
    <div className="with-label-container">
        <Checkbox
            onChange={(e) => onchange(e.target.value, name)}
            name={name}
            className={className}
            required={required}
            value={value}
            checked={checkedValue.get(value) ? checkedValue.get(value) :false}
        />
        <label>{labelText}</label>
        </div>
    </>)
})

export default CheckBox;