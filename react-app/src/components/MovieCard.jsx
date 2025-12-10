import React from "react";

const MovieCard = ({ movie }) => {
    const { title, vote_average, poster_path, release_date, original_language } = movie;

    return (
        <div>
            <p className="text-white">{title}</p>
        </div>
    );
};

export default MovieCard;
