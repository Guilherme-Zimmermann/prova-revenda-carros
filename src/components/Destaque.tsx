"use client"
import { CarroEntity, Carros } from "@/app/model/CarroEntity"
import Modal from 'react-modal';
import Image from "next/image"
import { useState } from "react";

export default function Destaque({ filtro }: { filtro: string}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [compraModalIsOpen, setCompraModalIsOpen] = useState(false);
    const [carroSelecionado, setCarroSelecionado] = useState<CarroEntity | null>(null);
    

    const abrirModal = (carro: any) => {
        setCarroSelecionado(carro);
        setModalIsOpen(true);
    }

    const fecharModal = () => {
        setModalIsOpen(false);
    }

    const abrirCompraModal = () => {
        setModalIsOpen(false);
        setCompraModalIsOpen(true);
    }

    const fecharCompraModal = () => {
        setCompraModalIsOpen(false);
    }

    return (
        <div className="flex flex-wrap justify-center gap-8">
            {Carros.filter(carro => filtro ? carro.vendaOuLocacao === filtro : true)
            .map((carro) => {
                if(carro.destaque) {
                    return (
                        <a href="" onClick={(e) => {e.preventDefault(); abrirModal(carro)}} key={carro.id}>
                        <div className="text-zinc-100 h-max p-1 bg-zinc-200 shadow shadow-zinc-50 rounded-lg">
                            <Image src={carro.urlImagem} alt="" width={580} height={1} className="rounded-lg" style={{ height: "380px" }}/>
                            <div className="text-zinc-900 flex flex-col p-2 gap-2">
                                <p>{carro.modelo}</p>
                                <div className="text-zinc-500">
                                    <p>{carro.ano}</p>
                                </div>
                                <p className="font-bold">R$ {carro.valor.toFixed(2)}</p>                    
                                <button className="bg-zinc-800 hover:bg-zinc-900 rounded-lg text-zinc-100 p-1">
                                    {carro.vendaOuLocacao === "venda" ? "Comprar" : "Alugar"}
                                </button>
                            </div>
                        </div>
                    </a>
                    )
                }
            })}

            <Modal isOpen={modalIsOpen} onRequestClose={fecharModal}>
                { carroSelecionado && (
                    <div className="flex gap-8 h-max">
                        <div>
                            <Image src={carroSelecionado.urlImagem} alt="" width={1300} height={1} className="rounded-lg" style={{ height: "540px" }}/>
                        </div>
                        <div className="bg-zinc-300 p-8 flex flex-col gap-8 w-full">
                            <h2>{carroSelecionado.modelo}</h2>
                            <div>
                                <p>Descrição: {carroSelecionado.descricao}</p>
                                <p>R$ {carroSelecionado.valor.toFixed(2)}</p>
                            </div>
                            <div className="mt-8 flex gap-16">
                                <button onClick={fecharModal} className="p-1 text-center bg-red-500 rounded-md text-white text-sm hover:bg-red-600">Fechar</button>
                                <button onClick={abrirCompraModal} className="p-1 text-center bg-blue-500 rounded-md text-white text-sm hover:bg-blue-600">Comprar</button>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            <Modal isOpen={compraModalIsOpen} onRequestClose={fecharCompraModal}>
                <form className="space-y-4 flex flex-col gap-4">
                    <label className="">
                        <span className="text-zinc-900">Nome:</span>
                        <input required type="text" name="nome" className="mt-1 border border-zinc-900 w-full rounded-md shadow-sm p-2" />
                    </label>
                    <label className="">
                        <span className="text-zinc-900">Telefone:</span>
                        <input required type="text" name="telefone" className="mt-1 border border-zinc-900 w-full rounded-md shadow-sm p-2" />
                    </label>
                    <label className="">
                        <span className="text-zinc-900">Email:</span>
                        <input required type="text" name="email" className="mt-1 border border-zinc-900 w-full rounded-md shadow-sm p-2" />
                    </label>
                    <input type="submit" value="Enviar" className="w-min py-2 px-4 text-center bg-blue-500 rounded-md text-white text-sm hover:bg-blue-600" />
                </form>
                <button onClick={fecharCompraModal} className="w-min py-2 px-4 text-center bg-red-500 mt-4 rounded-md text-white text-sm hover:bg-red-600">Fechar</button>
             </Modal>
        </div>
    )
}