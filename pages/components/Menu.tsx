import Link from "next/link"

const Menu = () => {
  return (
    <div className="flex bg-black text-white align-center">
      <Link href="/create" className="m-5">Criar</Link>
      <Link href="/update" className="m-5">Atualizar</Link>
      <Link href="/delete" className="m-5">Deletar</Link>
      <Link href="/read" className="m-5">Listar</Link>
    </div>
  )
}

export default Menu