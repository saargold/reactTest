import React, { useEffect,useState } from 'react'
import { MoviesInput } from '../input/MoviesInput'
import { MovieList } from './MovieList'
import axios from 'axios';
import {sortBy} from 'lodash'
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom'
import { MovieInfo } from './MovieInfo';

function AppMovies() {
    let [ar,setAr] = useState([]);
    let [search,setSearch]=useState("white");
    let [sortSelect,setSortSelect]=useState("Title");

    useEffect(()=>{ 
    doSearchApi()    
    },[search])

    const sortMovies = (_sort) =>{
      let temp_ar = sortBy(ar,_sort);
      setAr(temp_ar);
      setSortSelect(_sort);
    }
    const doSearchApi = async()=>{
        let url= `https://www.omdbapi.com/?s=${search}&apikey=dba4daf7`;
        // let response = await fetch(url);
        // let data = await response.json();
        let response = await axios.get(url);
        console.log(response.data);
        let temp_ar=sortBy(response.data.Search,sortSelect)
        setAr(temp_ar);
    }
  return (
    <Router>
      <MoviesInput setSearch={setSearch} sortMovies={sortMovies} />

    <Switch>
    <Route exact path="/" render={() =>
      <div>
      <MovieList movies_ar={ar}/>
      </div>
    }/>
      <Route exact path="/info/:id" component={MovieInfo}/>
      <Route exact path="/*" component={MovieInfo}/>

      </Switch>

    </Router>

  )
}

export default AppMovies
