import React from 'react'
import { Link } from 'react-router-dom'
import {vip_ar} from '../data/Vip.js'
function VipList() {
  return (
    <div className='container'>
        <h1>Vip List</h1>
        <ul>
            {vip_ar.map((item,i) =>{
                return(
                    <li key={item.name}>
                    <Link to={"/vip/"+i}>{item.name}</Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default VipList