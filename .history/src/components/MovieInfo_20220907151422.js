import React, { useEffect,useState } from 'react'
import axios from 'axios';

export const MovieInfo = (props) => {
    let [item,setItem] =useState({});
    useEffect(()=>{ 
        doSearchApi()    
        },[])
        
        const doSearchApi = async()=>{
            let movID = props.match.params.id;
            let url= `https://www.omdbapi.com/?i=${movID}&apikey=dba4daf7`;
            // let response = await fetch(url);
            // let data = await response.json();
            let response = await axios.get(url);
            console.log(response.data);
            setItem(response.data);

        }
    
  return (
    <div className='container'>
    <div className='col-lg-6 shadow p-3'>
    <img src={item.Poster} alt="" />
    <h2>Title:</h2>
    <div>Score:</div>
    <div>Votes count:</div>
    <div>Year:</div>    
    </div>

    </div>
  )
}
