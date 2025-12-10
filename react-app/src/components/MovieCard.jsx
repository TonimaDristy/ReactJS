import React from "react";

const MovieCard = ({ movie }) => {
    const { Title, Year, Poster, Type } = movie;

    return (
        <div className="movie-card">
            <img src={Poster} alt={Title} />
            <h3>{Title}</h3>
            <p>{Year}</p>
            <p>{Type}</p>
        </div>


    );
};

export default MovieCard;
