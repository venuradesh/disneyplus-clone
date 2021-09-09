import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectMovies } from "../features/Movie/movieSlice";
import { Link } from "react-router-dom";

const Movies = () => {
  const movies = useSelector(selectMovies);
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`detail/${movie.id}`}>
                <img src={movie.cardImg} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  margin-bottom: 150px;
`;

const Content = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0/ 73%) 0px 16px 10px -10px;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
