import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/Movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot((snap) => {
      let tempMovies = snap.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(tempMovies));
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    background-image: url("/images/home-background.png");
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    z-index: -1;
  }
`;
