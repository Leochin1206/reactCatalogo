import React, { useRef } from 'react';

export function Home() {

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        videoRef.current.pause();
    };

    return (
        <main className="flex flex-col items-center justify-center bg-black">
            <h1 className="text-[26px] text-white !mt-8">Séries do momento</h1>

            <div className="flex gap-5">

                <div className="relative w-[700px] h-[400px] overflow-hidden cursor-pointer group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {/* Película escura + título */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xl font-bold opacity-100 transition-opacity duration-300 group-hover:opacity-0 z-10">
                        Título do Filme
                    </div>
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/oqxAJKy0ii4?autoplay=1&mute=1&loop=1&playlist=oqxAJKy0ii4"
                        title="YouTube video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="relative w-[700px] h-[400px] overflow-hidden cursor-pointer group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {/* Película escura + título */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xl font-bold opacity-100 transition-opacity duration-300 group-hover:opacity-0 z-10">
                        Título do Filme
                    </div>
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/Di310WS8zLk?autoplay=1&mute=1&loop=1&playlist=Di310WS8zLk"
                        title="YouTube video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

        </main>
    )
}