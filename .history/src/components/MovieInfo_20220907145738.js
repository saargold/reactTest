import React from 'react'

export const MovieInfo = (props) => {
    let indexParam = props.match.params.imdbID;
    let item=props.movies_ar[indexParam];
    console.log("here")
  return (
    <div>MovieInfo</div>
  )
}
