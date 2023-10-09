import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  { useState } from 'react';
function MuiComponents() {
    const [inputTitle, setInputTitle] = useState('');
    const [displayedValue, setDisplayedValue] = useState('');

    const buttonForTitle = () => {
        setDisplayedValue(inputTitle)
    }
    return(
        <div>

            <TextField 
            label='input for title'
            variant="outlined"
            value={inputTitle}
            sx={{
                '& .MuiInputBase-root.MuiOutlinedInput-root': { 
                backgroundColor: '#b8dcce',
                },
            }}
            onChange={(e) => setInputTitle(e.target.value)}
            />
            <Button 
                variant="contained"
                color="primary"
                onClick={ buttonForTitle }>
                Show Title
            </Button>
            <h1>{displayedValue}</h1>
            
        </div>
)}
export default MuiComponents
