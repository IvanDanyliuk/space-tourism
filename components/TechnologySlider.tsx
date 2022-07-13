import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { v4 as uuid } from 'uuid';
import { Box, Typography } from '@mui/material';
import SlideImage from './SlideImage';


interface ITechnologySlider {
  info: {
    title: string;
    description: string;
    imageUrl: string;
  }[],
};


const Slide = styled.div`
  position: relative;
  width: 100%;
  min-height: 70vh;
  display: flex !important;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 900px) {
    min-height: 30vh;
    flex-direction: column-reverse !important;
  }
`;

const TextSection = styled(Box)`
  padding: 0 0 0 160px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: '#ffffff';
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 18vh 5vw 0 5vw;
    width: 100%;
  }
`;

const SlideTitle = styled(Typography)`
  margin: 11px 0 17px 0;
`;

const ImageSection = styled(Box)`
  position: relative;
  width: 40%;

  @media (max-width: 900px) {
    width: 100%;
    height: 31vh;
  }
`;

const DotList = styled.ul`
  position: absolute !important;
  top: 25%;
  left: 0;
  padding: 0;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;

  @media (max-width: 900px) {
    top: 35vh;
    left: 25%;
    width: 50%;
    height: 80px;
    flex-direction: row;
    box-sizing: border-box;
  }
`;


const TechnologySlider: React.FC<ITechnologySlider> = ({ info }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => {
      return <DotList>{dots}</DotList>
    },
    customPaging: (i: number) => {
      const active = {
        content: '',
        cursor: 'pointer',
        width: '80px',
        height: '80px',
        border: 'none',
        borderRadius: '50%',
        background: '#ffffff',
      };
  
      const inactive = {
        content: '',
        cursor: 'pointer',
        width: '80px',
        height: '80px',
        border: '2px solid #929292',
        borderRadius: '50%',
        background: 'transparent',
        color: '#ffffff',
      };
  
      return (
        <button style={i === activeSlideIndex ? active : inactive}>
          <Typography variant='h4'>
            {i + 1}
          </Typography>
        </button>
      )
    },
    beforeChange: (prev: number, next: number) => {
      setActiveSlideIndex(next);
    },
    dotsClass: 'crew-dots'
  }
  return (
    <Slider {...settings}>
      {
        info.map(item => (
          <Slide key={uuid()}>
            <TextSection>
              <Typography variant='caption' color='secondary'>The Terminology</Typography>
              <SlideTitle variant='h3' color='primary'>{item.title}</SlideTitle>
              <Typography variant='body1' color='secondary'>{item.description}</Typography>
            </TextSection>
            <ImageSection>
              <SlideImage url={item.imageUrl} altText={item.title} />
            </ImageSection>
          </Slide>
        ))
      }
    </Slider>
  );
};

export default TechnologySlider;