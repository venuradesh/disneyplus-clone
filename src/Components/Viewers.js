import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrapper>
        <img src="/images/viewers-disney.png" />
        <video autoPlay={true} loop={true} muted playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-pixar.png" />
        <video autoPlay={true} loop={true} muted playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-marvel.png" />
        <video autoPlay={true} loop={true} muted playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-starwars.png" />
        <video autoPlay={true} loop={true} muted playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrapper>
      <Wrapper>
        <img src="/images/viewers-national.png" />
        <video autoPlay={true} loop={true} muted playsInline={true}>
          <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrapper>
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;

  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
`;

const Wrapper = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0/ 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;
