import React from "react";

const MovieCard = ({ movie }) => {
    const { Title, Year, Poster, Type } = movie;

    return (
        <div className="movie-card">
            <img src={Poster} alt={Title} />

            <p>{Year}</p>
            <p>{Type}</p>


            <div className="mt-4">
                <h3>{Title}</h3>
            </div>
        </div>

    );
};

export default MovieCard;
