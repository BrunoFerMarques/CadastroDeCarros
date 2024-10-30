class Car {
  constructor(private brand: string, private model: string, private plate: string, private price: string) {
    this.brand = brand
    this.model = model
    this.plate = plate
    this.price = price
  }

  /**
   * log
   */
  private log() {
    console.log(`Brand: ${this.brand}`)
    console.log(`Model: ${this.model}`)
    console.log(`plate: ${this.plate}`)
    console.log(`Brand: ${this.price}`)
  }

  /**
   * displayInfo
   */
  public displayInfo() {
    this.log()
  }

}
const create = () => {
  
  const car1 = new Car("Volksvagem", "Gol", "ABC1234", "20000")
  
  
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <form className="grid grid-cols-2 gap-4 bg-gray-400 border-2 p-5" id="car-form">
        <div>
          <label className="block p-5 font-bold">Digite a marca do carro:</label>
          <input className="block w-full mb-4 p-3" placeholder="Marca do carro aqui" type='text' id="brand" />
          <label className="block p-5 font-bold">Digite o modelo do carro:</label>
          <input className="block w-full mb-4 p-2" placeholder="Modelo do carro" type='text' id="model" />
        </div>
        <div>
          <label className="block p-5 font-bold">Digite a placa do carro:</label>
          <input className="block w-full mb-4 p-3" placeholder="Placa do carro" type='text' id="plate" />
          <label className="block p-5 font-bold">Digite o valor do carro:</label>
          <input className="block w-full mb-4 p-2" placeholder="Valor do carro" type='text' id="price" />
        </div>
        <div className="col-span-2 flex justify-center">
          <button type="submit" className="bg-black text-white mt-5 px-4 py-2">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default create
