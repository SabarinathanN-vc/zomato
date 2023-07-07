import React from "react";
import './TextArea.scss';
import Textarea from '@mui/joy/Textarea';
import { FormLabel, FormControl,FormHelperText } from '@mui/material';

const TextArea = ((props) => {
    const {
        placeholder = "",
        helperText = "",
        labeltext="",
        error=false,
        name="",
        onchange=() => null,
        value="",
        id=0
    } = props
    return (
        <>
            <FormControl >
                <FormLabel>{labeltext}</FormLabel>
                <Textarea 
                id={id+1}
                placeholder={placeholder} 
                error={error}
                onChange={(e)=>onchange(e.target.value,name,id)}
                name={name}
                value={value}
                />
                <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
        </>
    )
})

export default TextArea;