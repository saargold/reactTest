import React from 'react'

export const MovieList = (props) => {
  return (
    <div className='container'>
    <h2>Movies:</h2>
     <div className='row'>
    {props.movies_ar.map(item =>{
        return(
            <div className='col-lg-6 border p-3' key={item.imdbID}>
                <h2>{item.Title}</h2>
                <div>Year : {item.Year}</div>

            </div>

        )
    })}
    
        </div>
    </div>
  )
}
