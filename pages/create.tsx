import React, { useEffect } from "react"
import { useState } from "react"
import Header from "./components/Header"
import { Car } from "../models/Car";
import Link from "next/link";
import { LinkOutlined } from "@mui/icons-material";
 
const Create = () => {
  const [dataCar, setdataCar] = useState<Car[]>([]);
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [plate, setPlate] = useState('')
  const [price, setPrice] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const handleSave = (event: React.FormEvent) => {
    event.preventDefault()
    if (!brand || !model || !plate || !price) {
      // Exibe um pop-up caso algum campo esteja vazio
      alert("Por favor, preencha todos os campos!");
      return; // Impede que os dados sejam salvos
    }
    const newCar: Car = {brand, model,plate, price}
    setdataCar(prevdataCar =>{
      const newdataCar = [...prevdataCar, newCar]
      console.log(newdataCar);
      return newdataCar;
    })
    setBrand('')
    setModel('')
    setPlate('')
    setPrice('')
  } 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('dataCar', JSON.stringify(dataCar));
    }
  }, [dataCar]);

  return (

      <div>
        <Header/>
        <div className=" bg-gradient-to-r from-gray-900 via-gray-950 to-black min-h-screen flex items-center justify-center text-white"> 
      {isLogged == false ? 
      (
        <div>Para criar um anúncio, você precisa estar logado, <Link href="/client"><div className="font-bold">clique aqui e faça login ou registro. </div></Link></div>
      ) : (
      
        <form className="grid grid-cols-2 gap-4 bg-red-600 border-2 border-red-600 p-5" id="car-form" onSubmit={handleSave}>
          <div>
            <label className="block p-5 font-bold">Digite a marca do carro:</label>
            <input 
              className="block w-full mb-4 p-3 border-2 border-black hover:bg-gray-200" 
              placeholder="Marca do carro aqui" 
              type='text' id="brand" 
              value={brand} 
              onChange={(e: React.ChangeEvent<HTMLInputElement> ) => {
                setBrand(e.target.value)
              }
            }/>
            <label className="block p-5 font-bold">Digite o modelo do carro:</label>
            <input 
              className="block w-full mb-4 p-2 border-2 border-black hover:bg-gray-200" 
              placeholder="Modelo do carro" 
              type='text' 
              id="model" 
              value={model}
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
                setModel(e.target.value)
              }}
            />
          </div>
          <div>
            <label className="block p-5 font-bold">Digite a placa do carro:</label>
            <input 
              className="block w-full mb-4 p-3 border-2 border-black hover:bg-gray-200" 
              placeholder="Placa do carro" 
              type='text' 
              id="plate" 
              value={plate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
                setPlate(e.target.value)
              }}
            />
            <label className="block p-5 font-bold">Digite o valor do carro:</label>
            <input 
              className="block w-full mb-4 p-2 border-2 border-black hover:bg-gray-200"  
              placeholder="Valor do carro" 
              type='text' 
              id="price" 
              value={price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {
                setPrice(e.target.value)
              }}
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <button 
            type="submit" 
            className="bg-black text-white mt-5 px-4 py-2"
            >Cadastrar</button>
          </div>
        </form>
     
      )}
       </div>
    </div>
  );
};

export default Create
