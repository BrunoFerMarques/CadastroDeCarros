import React from 'react'
import { Box, Modal } from '@mui/material'
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface modalRegisterSucessfullProps {
    isOpen: boolean;
    onClose: () => void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const Modalregistersucessfull: React.FC<modalRegisterSucessfullProps> = ({ isOpen, onClose }) => {
    return (
    <Modal open={isOpen} onClose={onClose}  aria-labelledby="modal-register-success" aria-describedby="modal-success-description">
        <Box sx={style}>
        <IconButton aria-label="delete" size="small" onClick={onClose}>
            <CloseIcon/>
        </IconButton>
            <h1>Registro feito com sucesso</h1>
        </Box>
    </Modal>
  )
}

export default Modalregistersucessfull