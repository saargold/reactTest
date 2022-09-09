import React from 'react'
import { Link } from 'react-router-dom';

export const MovieList = (props) => {
  return (
    <div className='container'>
    <h2>Movies:</h2>
     <div className='row'>
    {props.movies_ar.map(item =>{
        return(
            <div className='col-lg-6 p-3' key={item.imdbID}>
            <Link to={"/vip/"+i}>{item.name}</Link>

            <div className='p-2 shadow overflow-hidden '>
    
                <img src={item.Poster} className="float-start me-2" height="140"  />
                <h2>{item.Title}</h2>
                <div>Year : {item.Year}</div>

            </div>
            </div>
        )
    })}
    
        </div>
    </div>
  )
}
