import React from "react"
import { useState } from "react"

class Car {
  
  constructor (public brand: string, public model: string, public plate: string, public price: string){}


  
  private log() {
    console.log(`Brand: ${this.brand}`)
    console.log(`Model: ${this.model}`)
    console.log(`plate: ${this.plate}`)
    console.log(`Brand: ${this.price}`)
  }
  
  

  public displayInfo() {
    this.log()
  }

}
const Create = () => {
  const [data, setData] = useState<Car[]>([]);
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [plate, setPlate] = useState('')
  const [price, setPrice] = useState('')
  
  

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault()
    const newCar = new Car(brand, model, plate,price)
    setData(prevData =>{
      const newData = [...prevData, newCar]
      console.log(newData);
      return newData;
    })
    setBrand('')
    setModel('')
    setPlate('')
    setPrice('')
    data.forEach((item: Car)=>{
      console.log(item)
    })
  }
  

  
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <form className="grid grid-cols-2 gap-4 bg-gray-400 border-2 p-5" id="car-form" onSubmit={handleSave}>
        <div>
          <label className="block p-5 font-bold">Digite a marca do carro:</label>
          <input 
            className="block w-full mb-4 p-3" 
            placeholder="Marca do carro aqui" 
            type='text' id="brand" 
            value={brand} 
            onChange={(e: React.ChangeEvent<HTMLInputElement> ) => {
              setBrand(e.target.value)
            }
          }/>
          <label className="block p-5 font-bold">Digite o modelo do carro:</label>
          <input 
            className="block w-full mb-4 p-2" 
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
            className="block w-full mb-4 p-3" 
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
            className="block w-full mb-4 p-2" 
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
    </div>
  );
};

export default Create
