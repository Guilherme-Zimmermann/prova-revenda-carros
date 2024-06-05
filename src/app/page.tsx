"use client"
import Carro from "@/components/Carro";
import Destaque from "@/components/Destaque";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [filtro, setFiltro] = useState('');''

  return (
    <div className="bg-zinc-900 w-full h-max">
      <Header />
      <div className="mx-8 mt-8  text-zinc-900 absolute">
        <select onChange={(e) => setFiltro(e.target.value)}>
          <option value="">Selecione uma opção</option>
          <option value="venda">Venda</option>
          <option value="alugar">Alugar</option>
        </select>
      </div>
      <main className="w-full mt-24 flex flex-wrap justify-center gap-4">
        <Destaque filtro={filtro}/>
      </main>
      <section className="w-full p-16 flex flex-wrap justify-center gap-4">
        <Carro filtro={filtro}/>
      </section> 
    </div>
  );
}
