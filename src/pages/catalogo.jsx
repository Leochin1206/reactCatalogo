import { useState } from "react";
import { Modal } from "../components/modal";
import headerSenna from "../assets/headerSenna.jpg"
import bannerSenna from "../assets/Senna-Banner.jpg"
import Logo from "../assets/logo.png"
import { CarrosselCards } from "../components/carrosselCards";

export function Catalogo() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const API_URL1 = 'https://api.themoviedb.org/3/movie/popular';
    const API_URL2 = 'https://api.themoviedb.org/3/trending/movie/week';
    const API_URL3 = 'https://api.themoviedb.org/3/movie/now_playing';

    return (
        <main className="flex flex-col justify-center bg-black !p-6">

            <div className="relative">
                <img src={headerSenna} className="w-full h-[800px] filter brightness-70" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600-300 opacity-30"></div>

                <div className="absolute top-70 left-5">
                    <div className="flex items-center">
                        <img src={Logo} />
                        <h1 className="text-[22px] text-white">Series</h1>
                    </div>
                    <h2 className="w-[30%] text-[18px] text-white !mt-3">A série Senna narra a jornada do piloto Ayrton Senna, desde suas origens no kart até se tornar um ícone
                        da Fórmula 1. Explora suas conquistas, rivalidades e momentos marcantes, culminando no trágico acidente em 1994.</h2>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="!p-2 bg-gray-500 px-4 py-2 rounded-[3px] text-[18px] text-white hover:bg-gray-600 !mt-5"
                    >
                        Ver mais
                    </button>

                    {isModalOpen && (
                        <Modal isOpen={true} onClose={() => setIsModalOpen(false)}>
                            <div className="flex flex-col items-center justify-center !p-4">
                                <div className="flex items-center">
                                    <img src={bannerSenna} className="w-auto h-[300px]" />

                                    <div className="!ml-5">
                                        <h2 className="text-2xl font-bold text-white !mb-2">Senna (minissérie)</h2>
                                        <p className="text-white"><strong>Nota: </strong>4.3/5.0</p>
                                        <p className="text-white"><strong>Duração: </strong>1 Temp / 6 eps</p>
                                        <p className="text-white"><strong>Sinopse: </strong>A minissérie Senna conta a história de Ayrton Senna, herói brasileiro dentro e fora das pistas da Fórmula 1. Ao longo de seis episódios, a produção mergulha na trajetória do piloto com um olhar intimista acerca de Ayrton, interpretado pelo ator Gabriel Leone, como piloto e como pessoa, contando com a colaboração ativa de sua família no desenvolvimento da série. A trama de Senna se desenrola a partir da largada da carreira do automobilista, partindo para a Europa pela primeira vez para correr na Fórmula Ford, e acompanha sua jornada, entre os desafios das pistas, os movimentos estratégicos nas trocas de escuderia, dos seus relacionamentos e do peso de ser uma figura pública tão significativa para sua terra-natal. A série também retrata o trágico acidente que tirou sua vida e deixou um país inteiro de luto, no Grande Prêmio de San Marino, na Itália.</p>
                                        <p className="text-white"><strong>Produtor: </strong> Vicente Amorim</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="!mt-5 bg-red-500 text-white px-4 py-2 hover:bg-red-700 w-[200px] h-[40px]"
                                >
                                    Fechar
                                </button>
                            </div>
                        </Modal>
                    )}
                </div>

            </div>

            <h1 className="text-[26px] text-white !mt-8 !mb-4">Filmes Populares</h1>

            <CarrosselCards API_URL={API_URL1} />

            <h1 className="text-[26px] text-white !mt-8 !mb-4">Populares no momento</h1>

            <CarrosselCards API_URL={API_URL2} />

            <h1 className="text-[26px] text-white !mt-8 !mb-4">Em cartaz</h1>

            <CarrosselCards API_URL={API_URL3} />
        </main>
    );
}
