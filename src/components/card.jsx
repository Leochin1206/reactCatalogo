
export function Card({movie}) {
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h3>{movie.title}</h3>
        </div>
    );
}