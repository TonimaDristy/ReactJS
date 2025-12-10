import React from "react";

const MovieCard = ({ movie }) => {
    const { Title, Poster, Year, Type, Ratings, Language, Released } = movie;

    // Extract IMDb rating
    const imdbRating = Ratings?.find(r => r.Source === "Internet Movie Database")?.Value;

    return (
        <div className="movie-card">
            <img src={Poster !== "N/A" ? Poster : '/no-movie.png'} alt={Title} />
            <h3>{Title}</h3>
            <p>{Year}</p>
            <p>{Type}</p>

            <div className="content">
                <div className="rating">
                    <img src="star.svg" alt="Star Icon" />
                    <p>{imdbRating || 'N/A'}</p>
                </div>

                <span>•</span>
                <p className="lang">{Language}</p>

                <span>•</span>
                <p className="year">{Released || 'N/A'}</p>


            </div>
        </div>
    );
};

export default MovieCard;
