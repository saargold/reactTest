import React from 'react'
import { MoviesInput } from '../input/MoviesInput'
import { MovieList } from './MovieList'

function AppMovies() {
  return (
    <div>
      App Movies
      <MoviesInput/>
      <MovieList/>
    </div>
  )
}

export default AppMovies
