import React, { use, useState } from 'react'
import Header from './components/Header'
import Modalregister from '@/pages/components/Modalregister'
import ModalLogin from './components/Modallogin'
import { useEffect } from 'react'
import { Client } from '@/models/Client'


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
        if (typeof window === 'undefined'){
            const isExistClient = localStorage.getItem('loggedClient')
            if(isExistClient){
                setExistClient(true)
                setLoggedClient(JSON.parse(isExistClient))
            }
        }
    }, [])
    console.log(loggedClient)
    

    return (
    <div>
        <Header/>
        <div className='flex bg-gradient-to-r from-gray-900 via-gray-950 to-black min-h-screen items-center justify-center'>
            
            {existClient ? (
                <div className='flex text-white space-x-8 align-center justify-center'>
                <button
                className='p-5 bg-black hover:bg-red-600 border-2 border-gray-800 rounded-md hover:border-red-600 transition duration-300 ease-in-out font-modal' 
                onClick={openModalLogin}
                >Fazer login</button>
                <ModalLogin isOpen={openLogin} onClose={closeModalLogin} />
                <button 
                className='p-5 bg-black hover:bg-red-600 border-2 border-gray-800 rounded-md hover:border-red-600 transition duration-300 ease-in-out font-modal'
                onClick={openModal}>
                Cadastrar-se
                </button>
                <Modalregister isOpen={open} onClose={closeModal} />
            </div>
            ) : (
                <div>
                    <h1>Olá </h1>
                </div>
            )}
        </div>
    </div>
  )

}

export default client