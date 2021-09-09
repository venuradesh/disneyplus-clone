import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //save the data in the useState
          setMovie(doc.data());
        } else {
          //redirect to homepage
        }
      });
  }, []);
  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} />
          </Background>
          <ImgTitle>
            <img src={movie.titleImg} />
          </ImgTitle>
          <BtnContainer>
            <PlayBtn>
              <img src="/images/play-icon-black.png" />
              <span>Play</span>
            </PlayBtn>
            <TrailerBtn>
              <img src="/images/play-icon-white.png" />
              <span>Trailer</span>
            </TrailerBtn>
            <AddButton>
              <span>+</span>
            </AddButton>
            <WatchGroupButton>
              <img src="/images/group-icon.png" />
            </WatchGroupButton>
          </BtnContainer>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: max-content;
  min-width: 200px;
  margin-bottom: 60px;
  img {
    margin-top: 30px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const BtnContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

const PlayBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0 24px;
  background: rgb(249, 249, 249);
  border: none;
  border-radius: 4px;
  font-weight: 300;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin-right: 22px;
  height: 56px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerBtn = styled(PlayBtn)`
  color: white;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-right: 16px;
  cursor: pointer;

  &:hover {
  }
`;

const WatchGroupButton = styled(AddButton)`
  background: black;
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin-top: 26px;
  min-height: 26px;
  opacity: 0.7;
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  max-width: 700px;
  line-height: 1.4;
  font-size: 1rem;
  margin-top: 16px;
`;
