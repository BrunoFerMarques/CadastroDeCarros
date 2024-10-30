import { Html, Head, Main, NextScript } from "next/document";
import Menu from "./components/Menu";
import Link from "next/link";
export default function Document() {
  return (
    <Html lang="pt-br">
      <Head/>
      <header className="static flex justify-between itens-center bg-red-600 h-full bg-red-600">
       <Link href="/" className="p-5"></Link>
        <div className="p-10"><Menu/></div>
      </header>
      <body className="antialiased overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
