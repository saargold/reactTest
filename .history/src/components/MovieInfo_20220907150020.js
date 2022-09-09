import React from 'react'

export const MovieInfo = (props) => {
    let indexParam = props.match.params.id;
    console.log("here")
  return (
    <div>MovieInfo {indexParam}</div>
  )
}
