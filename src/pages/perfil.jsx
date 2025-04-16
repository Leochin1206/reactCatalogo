import imgPerfil from "../assets/imgPerfil.jpg"

export function Perfil() {

    let filmesFav = [
        {
            titulo: "Velozes e Furiosos 5",
            srcImg: "https://upload.wikimedia.org/wikipedia/pt/c/c5/Fast_five_poster_04.jpg"
        },
        {
            titulo: "X-Men Origins: Wolverine",
            srcImg: "https://upload.wikimedia.org/wikipedia/pt/e/ec/X-Men_Origins_Wolverine.jpg"
        },
        {
            titulo: "Django Livre",
            srcImg: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Django_Unchained_Poster.jpg/250px-Django_Unchained_Poster.jpg"
        },
        {
            titulo: "Clube da Luta",
            srcImg: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2b/FightClubPoster.jpg/230px-FightClubPoster.jpg"
        },
        {
            titulo: "Desafio em Tóquio",
            srcImg: "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f1/TFF-TokyoDrift-p%C3%B4ster.jpg/250px-TFF-TokyoDrift-p%C3%B4ster.jpg"
        },
        {
            titulo: "The Batman (2022)",
            srcImg: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/The_Batman_%28film%29_poster.jpg/220px-The_Batman_%28film%29_poster.jpg"
        },
        {
            titulo: "Harry Potter e o Cálice de Fogo",
            srcImg: "https://upload.wikimedia.org/wikipedia/pt/7/7b/Harry_Potter_C%C3%A1lice_Fogo_2004.jpg"
        },
        {
            titulo: "Harry Potter e o Enigma do Príncipe",
            srcImg: "https://upload.wikimedia.org/wikipedia/pt/b/b0/Harry_Potter_Half_Blood_Prince_2009.jpg"
        },
    ];

    let animeSerie = [
        {
            titulo: "One Piece",
            srcImg: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg"
        },
        {
            titulo: "Attack on Titan",
            srcImg: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/250px-Shingeki_no_Kyojin_manga_volume_1.jpg"
        },
        {
            titulo: "One-Punch Man",
            srcImg: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/OnePunchMan_manga_cover.png/250px-OnePunchMan_manga_cover.png"
        },
        {
            titulo: "Naruto: Shippuden",
            srcImg: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Naruto_-_Shippuden_DVD_season_1_volume_1.jpg/250px-Naruto_-_Shippuden_DVD_season_1_volume_1.jpg"
        },
        {
            titulo: "Blue Lock",
            srcImg: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1c/Blue_Lock_-_capa_do_volume_1.jpg/250px-Blue_Lock_-_capa_do_volume_1.jpg"
        },
        {
            titulo: "Kaiju No. 8",
            srcImg: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/92/Kaiju_N%C2%BA_8.jpg/250px-Kaiju_N%C2%BA_8.jpg"
        },
        {
            titulo: "peaky blinders",
            srcImg: "https://upload.wikimedia.org/wikipedia/en/f/fd/Tommy_Shelby.jpg"
        },
        {
            titulo: "dexter",
            srcImg: "https://upload.wikimedia.org/wikipedia/en/0/0f/Dexter_season_6_DVD.jpg"
        },
    ];
    
    return(
        <main className="flex flex-col items-center justify-center bg-black">
            <div className="flex items-center justify-center w-full !mt-10">
                <img src={imgPerfil} className="w-[350px] h-auto rounded-full border-4 border-[#D81F26]" />
            </div>

            <div className="flex items-center justify-center flex-col w-[90%] !mt-8">
                <div className="flex items-center justify-center text-[25px] text-white bg-[#D81F26] w-full !p-3 rounded-t-xl">
                    <h1>Meus filmes favoritos</h1>
                </div>
                <div className="flex items-center justify-center border-3 border-[#D81F26] !p-3 w-full gap-4">
                    {filmesFav.map((filme, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <img src={filme.srcImg} className="w-auto h-[300px] !mt-5" />
                            <h1 className="text-white text-[20px] !mt-2">{filme.titulo}</h1>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-center flex-col w-[90%] !mt-8">
                <div className="flex items-center justify-center text-[25px] text-white bg-[#D81F26] w-full !p-3 rounded-t-xl">
                    <h1>Minhas Séries / Animes favoritos</h1>
                </div>
                <div className="flex items-center justify-center border-3 border-[#D81F26] !p-3 w-full gap-4">
                    {animeSerie.map((animeSerie, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <img src={animeSerie.srcImg} className="w-auto h-[300px] !mt-5" />
                            <h1 className="text-white text-[20px] !mt-2">{animeSerie.titulo}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}