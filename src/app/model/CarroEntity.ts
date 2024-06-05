export interface CarroEntity {
    id: number,
    modelo: string,
    descricao: string,
    ano: number,
    urlImagem: string,
    valor: number,
    vendaOuLocacao: string,
    destaque: boolean
}

export const Carros: CarroEntity[] = [
    {
        id: 1,
        modelo: "BMW 320i",
        descricao: "Carro top de linha, com todos os opcionais possíveis.",
        ano: 2019,
        urlImagem: "/320i.jpg",
        valor: 280000,
        vendaOuLocacao: "venda",
        destaque: true
    },
    {
        id: 2,
        modelo: "BMW X6",
        descricao: "Carro ideal para viagens, lindo e confortável.",
        ano: 2022,
        urlImagem: "/x6.jpeg",
        valor: 670000,
        vendaOuLocacao: "venda",
        destaque: true
    },
    {
        id: 3,
        modelo: "Honda Civic",
        descricao: "Carro lindo e esportivo.",
        ano: 2019,
        urlImagem: "/hondaCivic.jpeg",
        valor: 700,
        vendaOuLocacao: "alugar",
        destaque: false
    },
    {
        id: 4,
        modelo: "Mercedes-Benz CLA 250",
        descricao: "Apresentamos a Mercedes-Benz CLA250, um símbolo de elegância e sofisticação no mundo automotivo.",
        ano: 2020,
        urlImagem: "/amg250.jpeg",
        valor: 219500,
        vendaOuLocacao: "venda",
        destaque: false
    },
    {
        id: 5,
        modelo: "Fiat Fastback",
        descricao: "Apresentamos o Fiat Fastback, um símbolo de elegância no mundo automotivo.",
        ano: 2023,
        urlImagem: "/fastback.jpeg",
        valor: 129990,
        vendaOuLocacao: "venda",
        destaque: false
    },
    {
        id: 6,
        modelo: "Toyota Corolla",
        descricao: "Carro top de linha, com todos os opcionais possíveis",
        ano: 2021,
        urlImagem: "/corolla.jpg",
        valor: 125700,
        vendaOuLocacao: "venda",
        destaque: false
    },
    {
        id: 7,
        modelo: "Fiat Cronos",
        descricao: "Carro top de linha, com todos os opcionais possíveis.",
        ano: 2022,
        urlImagem: "/cronos.jpeg",
        valor: 400,
        vendaOuLocacao: "alugar",
        destaque: false
    },
]