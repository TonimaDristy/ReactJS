import React from "react";

const MovieCard = ({ movie 
     { Title, Poster_path, votr_average, release_date, original_language }

}) => {

    return (
        <div className="movie-card">
            <img src={Poster} alt={Title} />

            <p>{Year}</p>
            <p>{Type}</p>

            <div className="mt-4">
                <h3>{Title}</h3>

                <div className="content">
                    <div className="rating">
                        <img src="star.svg" alt="Star Icon" />
                        <p>{imdbRating || 'N/A'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
