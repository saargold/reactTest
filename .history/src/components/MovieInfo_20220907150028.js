import React from 'react'

export const MovieInfo = (props) => {
    let indexParam = props.match.params.id;
  return (
    <div>MovieInfo {indexParam}</div>
  )
}
