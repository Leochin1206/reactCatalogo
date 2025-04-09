
export function Card({movie}) {
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="h-[357px]" />
            <h3 className="!mt-2 !mb-2">{movie.title}</h3>
        </div>
    );
}