// components/ModalLogin.tsx
import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { Client } from '@/models/Client';
import CloseIcon from '@mui/icons-material/Close';




interface ModalLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (clientData: Client[]) => void; // Callback function to handle successful login
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
};

const ModalLogin: React.FC<ModalLoginProps> = ({ isOpen, onClose }) => {
    const [dataStoredClients, setStoredDataClients] = useState<Client[]>([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const clients = localStorage.getItem('dataClients');
            setStoredDataClients(clients ? JSON.parse(clients) : []);
        }
    }, []);

    const handleLogin = () =>{
        if (!email || !password) {
            alert("Por favor, preencha todos os campos!");
            return; 
        }
        const client = dataStoredClients.find((client) => 
            client.email.toString() === email && 
            client.password.toString() === password
        );  

    if (client) {
        alert("Login efetuado com sucesso");
        client.logged = true;
        localStorage.setItem("loggedClient", JSON.stringify(client));

    }
        else{
            alert("Email ou senha incorreta")
        }
        onClose()
    }

    


    return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-login" aria-describedby="modal-login-description">
      <Box sx={style}>
      <IconButton aria-label="delete" size="small" onClick={onClose}>
        <CloseIcon/>
      </IconButton>
        <div className='grid grid-cols-4 font-modal'>
            <label>Digite seu Email:</label>
            <input 
                className="border-2 border-red-600 rounded"
                type='email'
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value)
                }}
                /> 
            <label>Digite sua senha:</label>
            <input 
                className="border-2 border-red-600 rounded"
                type='password'
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value)
                }}
            /> 
        </div>
        <button 
            className='bg-red-600 text-white rounded-md p-2'
            type='submit'
            onClick={handleLogin}
        >   
            Entrar</button>
      </Box>
    </Modal>
  );
};



export default ModalLogin;
