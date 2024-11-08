import React, { useState } from 'react'
import Header from './components/Header'

import Modallogin from './components/ModalLogin'
import { Modal } from '@mui/material'

const Client = () => {
    const [open, setOpen] = useState<boolean>(false)

  
    return (
    <div>
        <Header/>
        <div className='flex bg-gradient-to-r from-gray-900 via-gray-950 to-black min-h-screen items-center justify-center'>
            <div className='flex text-white space-x-8'>
                <div className='p-5 bg-black hover:bg-red-600 border-2 border-gray-800 rounded-md hover:border-red-600 transition duration-300 ease-in-out '>Cadastrar-se</div>
                <div 
                className='p-5 bg-black hover:bg-red-600 border-2 border-gray-800 rounded-md hover:border-red-600 transition duration-300 ease-in-out '
                onClick={ () =>setOpen(!open)}>
                    Fazer Login
                    {open ? <Modallogin/> : ""}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client