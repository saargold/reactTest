import React ,{useEffect} from 'react'

function AppApi() {
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
    <div>appApi</div>
  );
}

export default AppApi