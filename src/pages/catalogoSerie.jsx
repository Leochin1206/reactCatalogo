import { useState } from "react";
import { Modal } from "../components/modal";
import headerST from "../assets/headerST.jpg"
import bannerST from "../assets/ST-Banner.jpg"
import Logo from "../assets/logo.png"
import { CarrosselCards } from "../components/carrosselCards";

export function CatalogoSeries() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const API_URL1 = 'https://api.themoviedb.org/3/tv/popular';         
    const API_URL2 = 'https://api.themoviedb.org/3/trending/tv/week';  
    const API_URL3 = 'https://api.themoviedb.org/3/tv/on_the_air';

    return (
        <main className="flex flex-col justify-center bg-black !p-6">

            <div className="relative">
                <img src={headerST} className="w-full h-[800px] filter brightness-70" />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600-300 opacity-30"></div>

                <div className="absolute top-70 left-5">
                    <div className="flex items-center">
                        <img src={Logo} />
                        <h1 className="text-[22px] text-white">Series</h1>
                    </div>
                    <h2 className="w-[30%] text-[18px] text-white !mt-3">Stranger Things é uma série de suspense e ficção científica que se passa nos anos 80, onde um grupo de amigos enfrenta forças sobrenaturais e segredos do governo ao tentar encontrar um garoto desaparecido, com a ajuda de uma misteriosa garota com poderes.</h2>

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
                                    <img src={bannerST} className="w-auto h-[300px]" />

                                    <div className="!ml-5">
                                        <h2 className="text-2xl font-bold text-white !mb-2">Stranger Things</h2>
                                        <p className="text-white"><strong>Nota: </strong>8.7/10</p>
                                        <p className="text-white"><strong>Duração: </strong>4 temporadas / 5ª em produção</p>
                                        <p className="text-white"><strong>Sinopse: </strong>Ambientada na cidade fictícia de Hawkins, Indiana, durante os anos 80, Stranger Things acompanha um grupo de amigos que se envolve em eventos sobrenaturais após o desaparecimento misterioso de um garoto chamado Will Byers. Enquanto procuram por ele, descobrem uma garota com poderes telecinéticos, chamada Eleven, e acabam desvendando uma conspiração do governo, experimentos secretos e uma realidade paralela aterrorizante conhecida como "O Mundo Invertido". A série combina nostalgia retrô com ficção científica, horror e amizade verdadeira.</p>
                                        <p className="text-white"><strong>Produtor: </strong> The Duffer Brothers, produzida pela 21 Laps Entertainment e Netflix</p>
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

            <h1 className="text-[26px] text-white !mt-8 !mb-4">Séries populares</h1>

            <CarrosselCards API_URL={API_URL1} />

            <h1 className="text-[26px] text-white !mt-8 !mb-4">Em alta na semana</h1>

            <CarrosselCards API_URL={API_URL2} />

            <h1 className="text-[26px] text-white !mt-8 !mb-4">Passando agora</h1>

            <CarrosselCards API_URL={API_URL3} />
        </main>
    );
}
