import React from "react";
import { Select as MSelect, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';


const Select = ((props)=>{

    const {
        className = "",
        name = "",
        option = [],
        preselctval = "",
        onchange = () => null,
        onblur = () => null,
        label = "",
        required = false,
        error = false,
        helperText = ""
    }= props

    return(
        <FormControl  error={error} fullWidth>
     <InputLabel>{label}</InputLabel>
    <MSelect
        value={preselctval}
        labelId={name}
        label={label}
        className={className}
        onChange={(e) => onchange(e.target.value, name)}
        variant = "outlined"
        onBlur={(e) => onblur(e.target.value, name)}
        required={required}
    >
        {option.map((opt,idx) => {
            return (<MenuItem
                value={opt.location}
                key={idx}>
                {opt.location}
            </MenuItem>
            )
        })}
    </MSelect>
      <FormHelperText>{helperText}</FormHelperText>
</FormControl>
    )
    
})

export default Select;