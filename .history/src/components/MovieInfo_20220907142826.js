import React from 'react'

export const MovieInfo = (props) => {
    let indexParam = props.match.params.id;
    let item=props.movies_ar[indexParam];
  return (
    <div>MovieInfo</div>
  )
}
