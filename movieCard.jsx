import React from "react";

const MovieCard = ({movie}) => {
  return (
    <div>
    {movie? (
      <div className='movie'>
    <div>
    <img src={movie.Poster} alt={movie.Title} />
    <div className="details">
    <h5>MOVIE</h5>
    <h5>{movie.Title}</h5>
    <h6>{movie.Year}</h6>
      </div>
    </div>
  </div>
    ):(
      <h1>Movie not Found</h1>
    )}
</div>
  )
}
export default MovieCard
