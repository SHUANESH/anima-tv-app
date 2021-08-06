import React from 'react'

const SideBar = ({topAnime}) => {
    return (
        <aside>
            <nav>
                <h3>Top Anime</h3>
                  <div className="nav-li">
                 {
                    topAnime.map((anime,index )=> {
                     return <a href={anime.url}
                                key={index}
                                target="_blank"
                                rel="noreferrer">
                                 {anime.title}
                            </a>
                    })
                }  
                  </div>


            </nav>
        </aside>
    )
}

export default SideBar
