import './App.scss';
import SideBar from './components/Features/SideBar/SideBar';
import Header from './components/Features/Header/Header';
import MainContent from './components/Features/MainContent/MainContent';
import {useState , useEffect} from 'react';
import axios from 'axios'

function App() {
  const [animeList, setAnimeList] = useState([])
  const [topAnime, setTopAnime] = useState([])
  const [search, setSearch] = useState("")
  
  const GetToAnime = async () => {
    const tempTop = await axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity')
    .then(res => res.data);

    return setTopAnime(tempTop.top.slice(0,5))
  }

  useEffect(()=>{
    GetToAnime();
    fetchAnime(search)
  },[])

  const HandlerSearch = e => {
  e.preventDefault();
  fetchAnime(search)

  }

  const fetchAnime = async (query)=> {
   const temp = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=1000`)
    .then(res => res.data)
    
    return setAnimeList(temp.results)
    
  }
console.log(animeList);
  return (
    <div className="App">
       <Header/>
       <div className="content-wrap">
         <SideBar 
           topAnime={topAnime}/>
           <MainContent 
           HandlerSearch={HandlerSearch}
           search={search}
           animeList={animeList}
           setSearch={setSearch}/>
       </div>
    </div>
  );
}

export default App;
