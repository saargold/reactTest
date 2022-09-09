import React from 'react'
import { Link } from' react-router-dom';
import {vip_ar} from '../data/Vip.js'
function VipInfo(props) {
    let indexParam = props.match.params.id;
    let item=vip_ar[indexParam];
  return (
    <div>
    <h1>{item.name}</h1>
    <div>Year birth : {item.birth_year}</div>
    <div>Money : {item.worth}</div>
    <Link to="/vip">Back</Link>
    </div>
  )
}

export default VipInfo
