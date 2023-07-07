import React from "react";
import { TextField, FormControl } from '@mui/material';
import './Input.scss'
const Input = (props) => {
    const{
        onchange =() =>null,
        onblur =() => null,
        id = "",
        placeholder = "",
        type = "",
        required = false,
        name = "",
        value = "",
        helperText = "",
        label = "",
        error = false,
        className = "",
    } = props;
    return ( <FormControl fullWidth>
        <TextField
        id={id}
        onChange={(e)=>onchange(e.target.value,name,id)}
        onBlur={(e)=>onblur(e.target.value,name,id)}
        required={required}
        label={label}
        helperText={helperText}
        type={type}
        variant="outlined"
        error={error}
        name={name}
        placeholder={placeholder}
        value={value}
        className={className}
        />
    </FormControl> );
}
 
export default Input;