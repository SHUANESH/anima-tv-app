const AnimeCard = ({anime}) => {
    console.log(anime);
    return (
         <article className="anime-card">
            <a href={anime.url}
               target="_blank" 
               rel="noreferrer">
               <figure>
                    <img 
                    src={anime.image_url}
                    alt="anime img" />
                    <h3>{anime.title}</h3>
                </figure> 
            </a>
        </article>
    )
}

export default AnimeCard;
