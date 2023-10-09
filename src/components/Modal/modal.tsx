import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function BasicModal() {
    const [myModal, setMyModal] = useState(false);
    const buttonMyModal = () => setMyModal(true);
    const closeMyModal = () => setMyModal(false);

    const [title, setTitle] = useState('');
    const [paragraph, setParagraph] = useState('');

    return (
        <div>

            <TextField 
                label='input for title'
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

            <TextField 
                label='input for a paragraph'
                variant="outlined"
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)} />

            <Button
                onClick={buttonMyModal}>
                    Show Modal
            </Button>
            <Modal  open= {myModal}  onClose={closeMyModal}>
                <Box >
                    <Typography  variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography  sx={{ mt: 2 }}>
                       {paragraph}
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
