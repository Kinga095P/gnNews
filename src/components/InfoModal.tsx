import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../hooks/useTypeSelector';
import { Link } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { ButtonProps } from '@mui/material/Button';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

/** Info modal */
export default function InfoModal() {

    const data = useAppSelector(state => state.infoSliceReducer.article);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const selectedLanguage = useAppSelector(state => state.languageSliceReducer.value);
    const openButtonLabel: string = selectedLanguage === "en" ? "Read more" : "Czytaj więcej";
    const closeButtonLabel: string = selectedLanguage === "en" ? "Close" : "Zamknij";
    const goToServiceLabel: string = selectedLanguage === "en" ? "Go to service" : "Przejdź do serwisu";

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(deepPurple[400]),
        backgroundColor: deepPurple[400],
        '&:hover': {
            backgroundColor: deepPurple[500],
        },
    }));

    const sampleText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <div>
            <ColorButton variant="contained" onClick={handleClickOpen} sx={{
                display: "inline-block",
                margin: "0 auto",
                textAlign: "center"
            }}>
                {openButtonLabel}
            </ColorButton>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {data.title}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {data.description != null ? data.description : sampleText}
                    </Typography>
                    <Typography gutterBottom>
                        <Link href={data.url} underline="hover">{goToServiceLabel}</Link>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        {closeButtonLabel}
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div >
    );
}