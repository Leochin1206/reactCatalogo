import { useState } from "react";
import { Modal } from "../components/modal";

export function Catalogo() {
    const [modalIndex, setModalIndex] = useState(null); // null = nenhum aberto

    const primeiroCatalogo = [
        {
            titulo: "A Origem (Inception)",
            nota: "8.8",
            tempo: "2h 28min",
            sinopse: "Dom Cobb é um ladrão especializado em extrair segredos do subconsciente das pessoas enquanto elas dormem. Ele é contratado para realizar o contrário: implantar uma ideia na mente de alguém.",
            produtor: "Emma Thomas e Christopher Nolan",
            img: "https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg"
        },
        {
            titulo: "Parasita (Parasite)",
            nota: "8.5",
            tempo: "2h 12min",
            sinopse: "Uma família pobre se infiltra na casa de uma família rica fingindo serem empregados qualificados. O plano funciona, até que segredos sombrios começam a ser revelados.",
            produtor: "Kwak Sin-ae e Moon Yang-kwon",
            img: "https://upload.wikimedia.org/wikipedia/pt/b/be/Parasite_poster.jpg"
        },
        {
            titulo: "O Poderoso Chefão (The Godfather)",
            nota: "9.2",
            tempo: "2h 55min",
            sinopse: "A saga da poderosa família mafiosa Corleone nos anos 40. Quando o patriarca é atacado, seu filho Michael assume a liderança com mão de ferro.",
            produtor: "Albert S. Ruddy",
            img: "https://upload.wikimedia.org/wikipedia/pt/d/de/Godfather_1972.jpg"
        },
        {
            titulo: "A Vida é uma Festa (Coco)",
            nota: "8.4",
            tempo: "1h 45min",
            sinopse: "Miguel sonha em ser músico, mas sua família proíbe. No Dia dos Mortos, ele acaba na Terra dos Mortos e embarca em uma jornada sobre música e memória.",
            produtor: "Darla K. Anderson",
            img: "https://upload.wikimedia.org/wikipedia/pt/a/ae/Cocofilme.png"
        },
        {
            titulo: "Interestelar (Interstellar)",
            nota: "8.6",
            tempo: "2h 49min",
            sinopse: "A Terra está em colapso. Um grupo de astronautas viaja por um buraco de minhoca em busca de um novo planeta habitável para a humanidade.",
            produtor: "Emma Thomas, Christopher Nolan, Lynda Obst",
            img: "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png"
        }
    ];

    return (
        <main className="flex flex-col justify-center bg-black !p-6">

            <h1 className="text-[26px] text-white !mb-6">Catálogo de filmes</h1>

            <div className="flex !gap-6">

                {primeiroCatalogo.map((filme, index) => (

                    <div key={index} className="text-white w-[238px]">

                        <img src={filme.img} alt={filme.titulo} className="w-auto h-[350px] rounded !mb-4" />

                        <div className="flex flex-col items-center justify-between h-[110px]">

                            <h2 className="text-[20px] text-center font-bold !mb-2">{filme.titulo}</h2>

                            <button
                                onClick={() => setModalIndex(index)}
                                className="!p-2 bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                            >
                                Ver mais
                            </button>
                        </div>

                        {modalIndex === index && (
                            <Modal isOpen={true} onClose={() => setModalIndex(null)}>

                                <div className="!p-4">
                                    <h2 className="text-2xl font-bold !mb-2">{filme.titulo}</h2>
                                    <p className="text-black"><strong>Nota:</strong> {filme.nota}</p>
                                    <p className="text-black"><strong>Duração:</strong> {filme.tempo}</p>
                                    <p className="text-black"><strong>Sinopse:</strong> {filme.sinopse}</p>
                                    <p className="text-black"><strong>Produtor:</strong> {filme.produtor}</p>
                                </div>

                            </Modal>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}
