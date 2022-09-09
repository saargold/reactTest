import React, { useEffect,useState } from 'react'
import { MoviesInput } from '../input/MoviesInput'
import { MovieList } from './MovieList'
import axios from 'axios';
import {sortBy} from 'lodash'
function AppMovies() {
    let [ar,setAr] = useState([]);
    let [search,setSearch]=useState("white");

    useEffect(()=>{ 
    doSearchApi()    
    },[search])

    const sortMovies = (_sort) =>{
      let temp_ar = sortBy(ar,_sort);
      setAr(temp_ar);
    }
    const doSearchApi = async()=>{
        let url= `https://www.omdbapi.com/?s=${search}&apikey=dba4daf7`;
        // let response = await fetch(url);
        // let data = await response.json();
        let response = await axios.get(url);
        console.log(response.data);
        setAr(response.data.Search);
    }
  return (
    <div>
      <MoviesInput setSearch={setSearch} sortMovies={sortMovies} />
      <MovieList movies_ar={ar}/>
    </div>
  )
}

export default AppMovies
