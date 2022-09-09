import React,{useEffect, useState} from 'react'

function Apicomp() {
    let [ar,setAr] = useState([]);
    useEffect(()=>{
        doApi()
        },[]);
        const doApi = async()=>{
        let url= "http://fs1.co.il/bus/shop.php";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setAr(data);
     
            }
  return (
    <div>
    <h1>List Of Products:</h1>
    <ul>
        {ar.map(item =>{
            <li  key={item.id}>
                {item.name} - {item.price} Nis
            </li>
        })}
    </ul>
      
    </div>
  )
}

export default Apicomp
