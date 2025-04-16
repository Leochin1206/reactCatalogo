import React, { useRef } from 'react';

export function Home() {

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        videoRef.current.pause();
    };

    let videosHome = [
        {
            tituloSerie: "Squid Game",
            src: "https://www.youtube.com/embed/oqxAJKy0ii4?autoplay=1&mute=1&loop=1&playlist=oqxAJKy0ii4"
        },
        {
            tituloSerie: "Wednesday Addams",
            src: "https://www.youtube.com/embed/Di310WS8zLk?autoplay=1&mute=1&loop=1&playlist=Di310WS8zLk"
        },
        {
            tituloSerie: "THE WITCHER",
            src: "https://www.youtube.com/embed/ndl1W4ltcmg?autoplay=1&mute=1&loop=1&playlist=ndl1W4ltcmg"
        },
        {
            tituloSerie: "Stranger Things 2",
            src: "https://www.youtube.com/embed/R1ZXOOLMJ8s?autoplay=1&mute=1&loop=1&playlist=R1ZXOOLMJ8s"
        },
        {
            tituloSerie: "The Perfect Date",
            src: "https://www.youtube.com/embed/Hld-7oBn3Rk?autoplay=1&mute=1&loop=1&playlist=Hld-7oBn3Rk"
        },
        {
            tituloSerie: "ONE PIECE",
            src: "https://www.youtube.com/embed/Ades3pQbeh8?autoplay=1&mute=1&loop=1&playlist=Ades3pQbeh8"
        },
    ];

    return (
        <main className="flex flex-col items-center justify-center bg-black">
            <h1 className="text-[26px] text-white !mt-8">Séries do momento</h1>

            <div className='grid grid-cols-2 gap-4'>
                {videosHome.map((videos, index) => (
                    <div key={index} className='relative w-[700px] h-[400px] overflow-hidden cursor-pointer group' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className='absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xl font-bold opacity-100 transition-opacity duration-300 group-hover:opacity-0 z-10'>
                            {videos.tituloSerie}
                        </div>
                        <iframe
                            className="w-full h-full"
                            src={videos.src}
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>

        </main>
    )
}