import Header from "./components/Header"
import { useEffect, useState } from 'react';
import { Car } from "../models/Car";

const Home= () => {
    const [storedData, setStoredData] = useState<Car[]>([])
    useEffect(() => {
        // Verifica se o código está no lado do cliente
        if (typeof window !== 'undefined') {
            const meuVetorString = localStorage.getItem('data');
            setStoredData(meuVetorString ? JSON.parse(meuVetorString) : []);
        }
    }, []);

  console.log(storedData)
  return (
    <div>
      <Header/>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-950 to-black rounded-sm border-2 border-black">      
        <main>
        <div className="mt-10 bg-gray-800 text-white p-5">
          <h2 className="text-xl font-bold mb-4">Carros Disponiveis</h2>
          <div className="space-y-4 justify-center align-center">
          {storedData.length > 0 ? (
                storedData.map((car, index) => (
                  <div key={index} className="border-b-2 border-gray-600 py-2">
                    <p>
                      <strong>Marca:</strong> {car.brand}
                    </p>
                    <p>
                      <strong>Modelo:</strong> {car.model}
                    </p>
                    <p>
                      <strong>Placa:</strong> {car.plate}
                    </p>
                    <p>
                      <strong>Preço:</strong> {car.price}
                    </p>
                  </div>
                ))
              ) : (
                <p>Não há carros cadastrados.</p>
              )}
          </div>
        </div>
        </main>
    </div>
    </div>
  );
}
export default Home