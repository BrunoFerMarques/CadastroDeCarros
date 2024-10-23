import { Html, Head, Main, NextScript } from "next/document";
import Menu from "./components/Menu";
import Carlogo from '../public/Carlogo.jpg'
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head/>
      <header className="flex justify-between itens-center bg-red-600 h-full bg-red-600">
        <a href="/" className="p-5"> <Image width = {100}src = {Carlogo} alt="Logo da empresa" /></a>
        <div className="p-10"><Menu/></div>
      </header>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
