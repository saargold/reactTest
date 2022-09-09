import React,{useEffect} from 'react'

function appApi() {

    useEffect(()=>{
        doApi()
        },[]);
        const doApi = async()=>{
        let url= "http://fs1.co.il/bus/shop.php";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
     
            }
  return (
    <div>
      
    </div>
  )
}

export default appApi
