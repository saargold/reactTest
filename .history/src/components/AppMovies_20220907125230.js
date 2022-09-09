import React from 'react'
import { MoviesInput } from '../input/MoviesInput'
import { MovieList } from './MovieList'

function AppMovies() {
  return (
    <div>
      <MoviesInput/>
      <MovieList/>
    </div>
  )
}

export default AppMovies
