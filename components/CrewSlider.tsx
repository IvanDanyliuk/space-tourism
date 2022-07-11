import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import { v4 as uuid } from 'uuid';
import SlideImage from './SlideImage';


interface ICrewSlider {
  info: {
    name: string;
    position: string;
    information: string;
    photoUrl: string;
  }[],
};

const Slide = styled.div`
  position: relative;
  width: 100%;
  display: flex !important;
  justify-content: space-between;
  box-sizing: border-box;
`;

const CrewMemberInfo = styled(Box)`
  position: relative;
  width: 56%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MemberName = styled(Typography)`
  margin: 15px 0 27px 0;
`;

const CrewMemberPhoto = styled(Box)`
  position: relative;
  width: 44%;
  min-height: 75vh;
`;

const DotList = styled.ul`
  position: absolute !important;
  bottom: 5vh !important;
  padding: 0;
  width: 20%;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;


const CrewSlider: React.FC<ICrewSlider> = ({ info }) => {
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
      const inactive = {
        content: '',
        cursor: 'pointer',
        width: '15px',
        height: '15px',
        border: 'none',
        borderRadius: '50%',
        background: '#ffffff',
      };

      const active = {
        content: '',
        cursor: 'pointer',
        width: '15px',
        height: '15px',
        border: 'none',
        borderRadius: '50%',
        background: '#929292',
      };
      return (
        <button style={i === activeSlideIndex ? inactive : active}></button>
      )
    },
    beforeChange: (prev: number, next: number) => {
      setActiveSlideIndex(next);
    },
    dotsClass: 'crew-dots'
  };

  return (
    <Slider {...settings}>
      {
        info.map(member => (
          <Slide key={uuid()}>
            <CrewMemberInfo>
              <Typography variant='h4' color='secondary'>{member.position}</Typography>
              <MemberName variant='h3' color='primary'>{member.name}</MemberName>
              <Typography variant='body1' color='secondary'>{member.information}</Typography>
            </CrewMemberInfo>
            <CrewMemberPhoto>
              <SlideImage url={member.photoUrl} altText={member.name} />
            </CrewMemberPhoto>
          </Slide>
        ))
      }
    </Slider>
  );
};

export default CrewSlider;