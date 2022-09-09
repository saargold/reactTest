import React from 'react'
import {vip_ar} from '../data/Vip.js'
function VipList() {
  return (
    <div className='container'>
        <h1>Vip List</h1>
        <ul>
            {vip_ar.map(item =>{
                return(
                    <li>{item.name}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default VipList