import React, { useEffect,useState } from 'react'

export const MovieInfo = (props) => {
    let indexParam = props.match.params.id;
  return (
    <div>
    <h1>{props..name}</h1>
    <div>Year birth : {item.birth_year}</div>
    <div>Money : {item.worth}</div>
    <Link to="/vip">Back</Link>
    </div>
  )
}
