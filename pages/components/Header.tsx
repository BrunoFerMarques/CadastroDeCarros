import Carlogo from '../public/Carlogo.jpg'
import Image from 'next/image'
import Menu from './Menu'
import Link from 'next/link'
const Header = () => {
  return (
      <div className='flex justify-between bg-red-600 p-2'>
        <Link href="/"><Image
        src={Carlogo}
        width={100}
        height={50}
        alt='logo' 
        /></Link>
        <div className='p-5'><Menu/></div>
      </div>
  )
}

export default Header