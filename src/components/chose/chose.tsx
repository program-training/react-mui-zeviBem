import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function CheckBox() {
    return (
        <FormGroup>    
            <FormControlLabel
                 control={<Checkbox  sx={{'&.Mui-checked': {
                    color: 'yellowgreen'
                 }}}/>}
                 label="Label" />
                 
        </FormGroup>
               
    )
}
export default CheckBox