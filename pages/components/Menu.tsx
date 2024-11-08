import Link from "next/link"

const Menu = () => {
  return (
    <div className="flex">
      <div className="p-5 bg-gray-700 hover:bg-black text-white transition duration-300 ease-in-out border-2 border-gray-700 hover:border-red-600"><Link href="/">Pagina Inicial</Link></div>  
      <div className="p-5 bg-gray-700 hover:bg-black text-white transition duration-300 ease-in-out border-2 border-gray-700 hover:border-red-600"><Link href="/create">Criar</Link></div>
      <div className="p-5 bg-gray-700 hover:bg-black text-white transition duration-300 ease-in-out border-2 border-gray-700 hover:border-red-600"><Link href="/client">Area do cliente</Link></div>
    </div>
  )
}

export default Menu