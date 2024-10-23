import next from "next"
import mysql from 'mysql2'
import Document from "next/document"



const create = () => {
  return (
  <div className="bg-black min-h-screen flex items-center justify-center">
    <form className="grid grid-cols-2 gap-4 bg-gray-400 border-2 p-5">
      <div>
        <label className="block p-5">Marca do carro:</label>
        <input className="block w-full mb-4 p-2" placeholder="Digite a marca do carro aqui" type='name' id="brand"/>
        <label className="block p-5">Modelo do carro:</label>
        <input className="block w-full mb-4 p-2" placeholder="Modelo do carro" type='name' id="model" />
      </div>
      <div>
        <label className="block p-5">Placa do carro:</label>
        <input className="block w-full mb-4 p-2" placeholder="Placa do carro" id="plate"/>
        <label className="block p-5">Valor do carro:</label>
        <input className="block w-full mb-4 p-2" placeholder="Valor do carro" id="price"/>
      </div>
      <div className="col-span-2 flex justify-center">
        <button type="submit" className="bg-black text-white mt-5 px-4 py-2">Cadastrar</button>
      </div>
    </form>
  </div>

  )
}



export default create