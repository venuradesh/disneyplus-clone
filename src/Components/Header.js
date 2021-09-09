import React, { useEffect } from "react";
import styled from "styled-components";
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/User/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";

const Header = () => {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const SignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const SignOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Navigation>
      <Logo src="/images/logo.svg"></Logo>
      {!userName ? (
        <Login onClick={SignIn}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" />
              <span>Home</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" />
              <span>Search</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" />
              <span>WatchList</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" />
              <span>Originals</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" />
              <span>Movies</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" />
              <span>series</span>
            </a>
          </NavMenu>
          <UserImg src={userPhoto} onClick={SignOut} />
        </>
      )}
    </Navigation>
  );
};

export default Header;

const Navigation = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  aling-items: center;
  justify-content: space-between;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      width: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        tranform-orign: center center;
        transition: all 0.3s ease;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-self: center;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  color: #f9f9f9;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  display: flex;
  align-items: Center;
  align-self: center;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 6px;
  letter-spacing: 1.5px;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: #f9f9f9;
    color: #090b13;
  }
`;
