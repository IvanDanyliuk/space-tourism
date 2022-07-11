import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { v4 as uuid } from 'uuid';
import { Typography } from '@mui/material';


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
  min-height: 75vh;
  display: flex !important;
  justify-content: space-between;
  box-sizing: border-box;
`;


const DotList = styled.ul`
  position: absolute !important;
  top: 35%;
  left: 0;
  padding: 0;
  height: 36vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
`;

const DotListItem = styled.li``;

const DotButton = styled.button`
  content: '';
  cursor: pointer;
  width: 10vh;
  height: 10vh;
  border: none;
  border-radius: 50%;
  background: '#ffffff';
`;


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
    return (
      <DotListItem>
        <DotButton>
          <Typography variant='h4'>
            {i + 1}
          </Typography>
        </DotButton>
      </DotListItem>
    )
  },
  dotsClass: 'crew-dots'
}


const TechnologySlider: React.FC<ITechnologySlider> = ({ info }) => {
  return (
    <Slider {...settings}>
      {
        info.map(item => (
          <Slide key={uuid()}>

          </Slide>
        ))
      }
    </Slider>
  );
};

export default TechnologySlider;