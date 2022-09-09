import React, { useEffect,useState } from 'react'
import axios from 'axios';

export const MovieInfo = (props) => {
    let movID = props.match.params.id;
    useEffect(()=>{ 
        doSearchApi()    
        },[])
        
        const doSearchApi = async()=>{
            let url= `https://www.omdbapi.com/?i=${movID}&apikey=dba4daf7`;
            // let response = await fetch(url);
            // let data = await response.json();
            let response = await axios.get(url);
            console.log(response.data);

        }
    
  return (
    <div>

    </div>
  )
}
