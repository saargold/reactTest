import React, { useEffect } from 'react'
import { MoviesInput } from '../input/MoviesInput'
import { MovieList } from './MovieList'

function AppMovies() {
    useEffect(()=>{ 
    doSearchApi()    
    },[])
    const doSearchApi = async()=>{
        let url= "hhttps://www.omdbapi.com/?s=red&apikey=dba4daf7";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }
  return (
    <div>
      <MoviesInput/>
      <MovieList/>
    </div>
  )
}

export default AppMovies
