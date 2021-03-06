import React, { useState, useEffect, Fragment } from "react";

// Routing
import { useHistory } from "react-router-dom";

// Style
import styled from "styled-components";

//  Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

import { MovieState } from "../movieState";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;

  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <Fragment>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </Fragment>
  );
};

const Details = styled(motion.div)`
  color: white;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1300px) {
    margin: 2rem 2rem;
    display: block;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.5rem;
  }
  .line {
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    img {
      object-fit: contain;
      height: 100%;
    }
  }
`;

// Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
