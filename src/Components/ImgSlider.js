import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" />
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  button {
    z-index: 1;
  }

  .slick-list {
    overflow: visible;
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 4px solid transparent;
    box-shadow: rgb(0 0 0/69%) 0 26px 30px -10px, rgb(0 0 0/73%) 0 16px 10px -10px;
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba(249, 249, 249, 0.8);
    }
  }
`;
