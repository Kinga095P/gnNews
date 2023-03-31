import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { useAppSelector } from '../hooks/useTypeSelector';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

/**Controlled Popup Component */
export default function ControlledPopup() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const selectedLanguage = useAppSelector(state => state.languageSliceReducer.value);
    const msgPl: string = "Zadanie dotyczące Headera nie sprawiło żadnej trudności. Świetnie się bawiłam pisząc News Generator!"
    const msgEn: string = "The Header task was not difficult at all. I had a lot of fun writing the News Generator!"
    const title: string = "Header";
    const msg: string = selectedLanguage === "en" ? msgEn : msgPl;

    return (
        <div>
            <Button onClick={handleOpen} style={{ color: "#616161" }}><ThumbUpIcon /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {msg}
                    </Typography>
                </Box>
            </Modal>
        </div >
    );
}