import { useEffect, useState } from "react";
import { Card } from "./card";
import axios from "axios";
import { Modal } from "../components/modal";
import arrowBack from "../assets/arrow_back.svg";
import arrowForward from "../assets/arrow_forward.svg";

const API_key = '0d0a2b99c38be169447fb0d359d54043';
const API_URL = 'https://api.themoviedb.org/3';

export function CarrosselCards() {
    const [movies, setMovies] = useState([]);
    const [modalIndex, setModalIndex] = useState(null); // null = nenhum aberto
    const [startIndex, setStartIndex] = useState(0);
    const filmesPorPagina = 6;
    
    const proximoSlide = () => {
        if (startIndex + 1 < movies.length - filmesPorPagina + 1) {
            setStartIndex((prevIndex) => prevIndex + 1);
        }
    };

    const slideAnterior = () => {
        if (startIndex > 0) {
            setStartIndex((prevIndex) => prevIndex - 1);
        }
    };

    useEffect(() => {
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
            .then(response => {
                setMovies(response.data.results);
                console.log(response.data.results);
            })
            .catch(error => {
                console.log("Error", error);
            });
    }, []);

    return (
        <div className="relative flex flex-col items-center w-full">
            <div className="relative flex items-center w-full max-w-[1800px] overflow-hidden">
                <button onClick={slideAnterior} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white">
                    <img src={arrowBack} alt="Voltar" />
                </button>

                <div className="flex gap-4 transition-transform duration-500 ease-in-out"
                     style={{ transform: `translateX(-${startIndex * 240}px)` }}>
                    {movies.map((movie, index) => (
                        <div key={movie.id} className="text-white w-[238px] flex-shrink-0">
                            <Card movie={movie} />
                            <button
                                onClick={() => setModalIndex(index)}
                                className="!p-2 bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                            >
                                Ver mais
                            </button>
                        </div>
                    ))}
                </div>

                <button onClick={proximoSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white">
                    <img src={arrowForward} alt="Avançar" />
                </button>
            </div>

            {modalIndex !== null && movies[modalIndex] && (
                <Modal isOpen={true} onClose={() => setModalIndex(null)}>
                    <div className="!p-4">
                        <h2 className="text-2xl font-bold !mb-2">{movies[modalIndex]?.title}</h2>
                        <p className="text-black"><strong>Nota:</strong> {movies[modalIndex]?.vote_average}</p>
                        <p className="text-black"><strong>Qnt de Pessoas Votantes:</strong> {movies[modalIndex]?.vote_count}</p>
                        <p className="text-black"><strong>Data de Lançamento:</strong> {movies[modalIndex]?.release_date || 'N/A'}</p>
                        <p className="text-black"><strong>Sinopse:</strong> {movies[modalIndex]?.overview}</p>
                    </div>
                </Modal>
            )}
        </div>
    );
}
