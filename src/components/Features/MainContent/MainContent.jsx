import AnimeCard from "../AnimeCard/AnimeCard"


const MainContent = ({HandlerSearch,search,animeList,setSearch}) => {
    return (
        <main >
            <div className="main-head">
            <form className="search-box" onSubmit={HandlerSearch}>
                <input
                type="search"
                placeholder="Search for an anime..."
                required
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                 />
            </form>
            </div>
            <div className="anime-list">
            {
                animeList.map((anime) => {
                    return <AnimeCard 
                               anime={anime} 
                               key={anime.mal_id}/>
                })
            }
            </div>
        </main>
    )
}

export default MainContent
