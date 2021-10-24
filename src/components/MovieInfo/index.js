import React from "react";
import PropTypes from "prop-types";

//Style
import { Wrapper, Content, Text } from "./MovieInfo.styles";
//Components
import Thumb from "../Thumb";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//No image
import NoImage from "../../images/no_image.jpg";
const MovieInfo = ({ movie }) => {
  document.title = movie.title;
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="movie-thumb"
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>Plot</h3>
          <p>{movie.overview}</p>
          <div className="rating-directors">
            <div>
              <h3>Rating</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>{movie.directors.length > 1 ? "Directors" : "Director"}</h3>
              {movie.directors.map((director) => (
                <p key={director.credits_id}>{director.name}</p>
              ))}
            </div>
            <div className="status">
              <h3>Status</h3>
              <div>{movie.status}</div>
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
