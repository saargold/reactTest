import React, { useEffect,useState } from 'react'
import { MoviesInput } from '../input/MoviesInput'
import { MovieList } from './MovieList'

function AppMovies() {
    let [ar,setAr] = useState([]);

    useEffect(()=>{ 
    doSearchApi()    
    },[])
    const doSearchApi = async()=>{
        let url= "https://www.omdbapi.com/?s=red&apikey=dba4daf7";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setAr(data.Search);
    }
  return (
    <div>
      <MoviesInput/>
      <MovieList movies_ar={ar}/>
    </div>
  )
}

export default AppMovies
