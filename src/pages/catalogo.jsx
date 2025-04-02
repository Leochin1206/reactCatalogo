import { useState } from "react";
import { Modal } from "../components/modal";
import headerSenna from "../assets/headerSenna.jpg"
import Logo from "../assets/logo.png"
import { CarrosselCards } from "../components/carrosselCards";

export function Catalogo() {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                            <div className="!p-4">
                                <h2 className="text-2xl font-bold !mb-2">a</h2>
                                <p className="text-black"><strong>Nota:</strong> b</p>
                                <p className="text-black"><strong>Duração:</strong> c</p>
                                <p className="text-black"><strong>Sinopse:</strong> d</p>
                                <p className="text-black"><strong>Produtor:</strong> e</p>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                                >
                                    Fechar
                                </button>
                            </div>
                        </Modal>
                    )}
                </div>

            </div>

            <h1 className="text-[26px] text-white !mt-8 !mb-4">Catálogo de filmes</h1>

            <CarrosselCards />
        </main>
    );
}
