import React from 'react'
import Image from 'next/image'
    import Placeholder from '../public/Perfil.jpeg'

const Perfil = () => {
  return (
    <div className='rounded-full text-white p-2'>
      <Image
        src={Placeholder}
        width={50}
        height={50}
        alt='perfil'
        >
      </Image>
        
    </div>
  )
}

export default Perfil