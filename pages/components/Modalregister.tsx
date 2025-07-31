// components/ModalRegister.tsx
import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { Client } from '@/models/Client';
import CloseIcon from '@mui/icons-material/Close';
import Modalregistersucessfull from './Modalregistersucessfull';



interface ModalRegisterProps {
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
};

const ModalRegister: React.FC<ModalRegisterProps> = ({ isOpen, onClose }) => {
  const [dataClients, setdataClients] = useState<Client[]>([])
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [email, setEmail] = useState('') 
  const [telephone, setTelephone] = useState('')
  const [password, setPassword] = useState('') 
  const [confirmPassword, setconfirmPassword] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const [openSucessfull, setOpenSucessfull] = useState(false)


const handleSave = () => {
  const newClient: Client = {name, birthdate, email, telephone, password, announcements: [], logged: false}

  const storedClientsStr = localStorage.getItem("dataClients");
  const storedClients: Client[] = storedClientsStr ? JSON.parse(storedClientsStr) : [];
  
  const emailExists = storedClients.some(
    (client: Client) => client.email == email
  );

  if (!name || !birthdate || !email || !password || !confirmPassword) {
    alert("Por favor, preencha todos os campos!");
    return;
  } 
  
  if (password != confirmPassword) {
    alert("As senhas não coincidem");
    return;
  } 
  
  if (emailExists) {
    alert("Esse email já existe");
    return;
  }

  const updatedClients = [...storedClients, newClient];
  localStorage.setItem("dataClients", JSON.stringify(updatedClients));
  setdataClients(updatedClients);

  setName("");
  setBirthdate("");
  setEmail("");
  setTelephone("");
  setPassword("");
  setconfirmPassword("");
  setIsLogged(false);
  
  
  setOpenSucessfull(true);
};
  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-Register" aria-describedby="modal-Register-description">
      <Box sx={style}>
      <IconButton aria-label="delete" size="small" onClick={onClose}>
        <CloseIcon />
      </IconButton>
        <div className='grid grid-cols-4 font-modal'>
          <label>Digite seu nome:</label>
          <input 
            className="border-2 border-red-600 rounded"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value)
            }}
          /> 
          <label>Digite seu dia de nascimento: </label>
          <input 
            type="date" 
            className='border-2 border-red-600 rounded'
            value={birthdate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setBirthdate(e.target.value)
            }}
          />
          <label>Digite seu Email: </label>
          <input 
            className="border-2 border-red-600 rounded"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value)
            }}
          /> 
          <label>Digite seu telefone:</label>
          <input 
            className="border-2 border-red-600 rounded"
            value={telephone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTelephone(e.target.value)
            }}
          />
          <label>Digite sua senha: </label>
          <input 
            className="border-2 border-red-600 rounded"
            value={password}
            type='password'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value)
            }}
          /> 
          <label>Repita sua senha: </label>
          <input 
            className="border-2 border-red-600 rounded"
            value={confirmPassword}
            type='password'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setconfirmPassword(e.target.value)
            }}
            /> 
        </div>
        <div className="col-span-2 flex justify-center">
          <button 
          type="submit" 
          className="bg-black text-white mt-5 px-4 py-2"
          onClick={handleSave}
          >Cadastrar</button>
        </div>
        <Modalregistersucessfull isOpen={openSucessfull} onClose={() => setOpenSucessfull(false)}/>
      </Box>
    </Modal>
  );
};



export default ModalRegister;
