import './RadioButton.scss';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import RadioGroup from '@mui/material/RadioGroup';

const RadioButton = ((props) => {

    const {
        options = [],
        error = false,
        helperText = "",
        onchange = (() => null),
        name = ""
    } = props
    return (<>
        <FormControl error={error} variant="standard">
            <RadioGroup
                name={name}
                //   value={value}
                onChange={(e) => onchange(e.target.value)}
            >
                {options.map((res) => {
                    return (<FormControlLabel value={res.value} control={<Radio />} label={res.label} />)
                })
                }
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    </>);
})

export default RadioButton;