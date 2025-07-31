import React, { use, useState } from 'react'
import Header from './components/Header'
import Modalregister from '@/pages/components/Modalregister'
import ModalLogin from './components/Modallogin'
import { useEffect } from 'react'
import { Client } from '@/models/Client'
import { log } from 'console'


const client : React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const [openLogin, setOpenLogin] = useState<boolean>(false)
    const openModalLogin = () => setOpenLogin(true);
    const closeModalLogin = () => setOpenLogin(false);
    const [loggedClient, setLoggedClient] = useState<Client[]>([])
    const [existClient, setExistClient] = useState<boolean>(false);


    useEffect(() => {
        const handleStorageChange = () => {
            const storedClient = localStorage.getItem('loggedClient');
            if (storedClient) {
                setExistClient(true);
                setLoggedClient(JSON.parse(storedClient));
            } else {
                setExistClient(false);
                setLoggedClient([]);
            }
            console.log(storedClient)
        };
       
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);
    
    const handleLogout = () => {
        setExistClient(false)
        setLoggedClient([])
        alert("Deslogado com sucesso")
    }
    const updateClient = (clientData: Client[]) => {
        setExistClient(true);
        setLoggedClient(clientData);
        localStorage.setItem('loggedClient', JSON.stringify(clientData));
    };



    return (
    <div>
        <Header/>
        <div className='flex bg-gradient-to-r from-gray-900 via-gray-950 to-black min-h-screen items-center justify-center'>
            
            {!existClient ? (
            <div className='flex text-white space-x-8 align-center justify-center'>
                <button
                className='p-5 bg-black hover:bg-red-600 border-2 border-gray-800 rounded-md hover:border-red-600 transition duration-300 ease-in-out font-modal' 
                onClick={openModalLogin}
                >Fazer login</button>
                <ModalLogin isOpen={openLogin} onClose={closeModalLogin} onLoginSuccess = {updateClient}/>
                <button 
                className='p-5 bg-black hover:bg-red-600 border-2 border-gray-800 rounded-md hover:border-red-600 transition duration-300 ease-in-out font-modal'
                onClick={openModal}>
                Cadastrar-se
                </button>
                <Modalregister isOpen={open} onClose={closeModal} />
            </div>
            ) : (
                <div>
                    <div className='text-white'>
                        <h1>Olá {loggedClient[0].name}</h1> 
                        {loggedClient[0].announcements.length > 0 ? (
                            loggedClient[0].announcements.map((car, index)=>(
                                <div key={index}>
                                    <p>
                                        <strong>Marca:</strong> {car.brand}
                                    </p>
                                    <p>
                                        <strong>Modelo:</strong> {car.model}
                                    </p>
                                        <p>
                                        <strong>Placa:</strong> {car.plate}
                                    </p>
                                    <p>
                                        <strong>Preço:</strong> {car.price}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <div>
                                <h1>voce ainda nao tem anuncios</h1>
                            </div>
                        )}
                    </div>
                </div> 
                
               
                
            )}
         
        </div>
    </div>
  )

}

export default client