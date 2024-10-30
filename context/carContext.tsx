import { createContext, useContext, useState, ReactNode } from 'react';

interface CarData {
  brand: string;
  model: string;
  plate: string;
  price: string;
}

interface CarContextProps {
  carData: CarData | null;
  setCarData: (data: CarData) => void;
}

const CarContext = createContext<CarContextProps | undefined>(undefined);

export const CarProvider = ({ children }: { children: ReactNode }) => {
  const [carData, setCarData] = useState<CarData | null>(null);

  return (
    <CarContext.Provider value={{ carData, setCarData }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('useCarContext must be used within a CarProvider');
  }
  return context;
};
