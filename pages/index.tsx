import Menu from "./components/Menu";
import Tablecars from "./components/Tablecars";
export default function Home() {
  return (
    <div className="flex min-h-screen bg-black rounded-sm border-2 border-black ">
      <main>
        <h1>Abaixo de $100000</h1>
        <Tablecars/>
      </main>
    
    </div>
  );
}
