import React from 'react'
import {vip_ar} from '../data/Vip.js'
function VipInfo(props) {
    let indexParam = props.match.params.id;
    let item=vip_ar[indexParam];
  return (
    <div>
    <h1>{item}</h1>
      
    </div>
  )
}

export default VipInfo
