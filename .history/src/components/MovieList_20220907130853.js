import React from 'react'

export const MovieList = (props) => {
  return (
    <div className='container'>
    <h2>Movies:</h2>
     <div className='row'>
    <ul>
        {ar.map(item =>{
            return(
                
            <li  key={item.imdbID}>
            <h1>{item.Title}</h1>

                {item.Type}
            </li>
            )
        })}
    </ul>
    
        </div>
    </div>
  )
}
