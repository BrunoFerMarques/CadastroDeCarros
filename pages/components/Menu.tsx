import Link from "next/link"
import Perfil from "./Perfil"
const Menu = () => {
  return (
    <div className="flex">
      <Link href="/" className="p-5 bg-gray-700 hover:bg-black text-white transition duration-300 ease-in-out border-2 border-gray-700 hover:border-red-600 font-modal">Pagina Inicial</Link> 
      <Link href="/create" className="p-5 bg-gray-700 hover:bg-black text-white transition duration-300 ease-in-out border-2 border-gray-700 hover:border-red-600 font-modal">Criar</Link>
      <Link href="/client" className="p-5 bg-gray-700 hover:bg-black text-white transition duration-300 ease-in-out border-2 border-gray-700 hover:border-red-600 font-modal">Area do cliente</Link>
      <Perfil/>
    </div>
  )
}

export default Menu