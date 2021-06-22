import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  margin-bottom: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  right: 5px;
  bottom: 40px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Year = styled.span`
  font-size: 10px;
  opacity: 0.6;
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../Assets/noPosterSmall.png").default
          }
        />
        <Rating>
          <span role="img" arai-aria-label="rating">
            ⭐
          </span>
          {rating}/10
        </Rating>
        <Title>
          {title.length > 18 ? `${title.substring(0, 15)}...` : title}
        </Title>
        <Year>{year}</Year>
      </ImageContainer>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
