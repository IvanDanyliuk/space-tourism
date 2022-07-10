import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import { v4 as uuid } from 'uuid';
import CrewImage from './CrewImage';


interface ICrewSlider {
  info: {
    name: string;
    position: string;
    information: string;
    photoUrl: string;
  }[],
};

const SliderContainer = styled(Slider)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Slide = styled.div`
  position: relative;
  width: 100%;
  display: flex !important;
  justify-content: space-between;
  box-sizing: border-box;
`;

const CrewMemberInfo = styled(Box)`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MemberName = styled(Typography)`
  margin: 15px 0 27px 0;
`;

const CrewMemberPhoto = styled(Box)`
  position: relative;
  width: 50%;
  min-height: 75vh;
`;

const DotList = styled.ul`
  position: absolute !important;
  bottom: 5vh !important;
  padding: 0;
  width: 20%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  list-style: none;
`;

const DotListItem = styled.li`
  
`;

const DotButton = styled.button`
  content: '';
  cursor: pointer;
  width: 15px;
  height: 15px;
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
        <DotButton></DotButton>
      </DotListItem>
    )
  },
  dotsClass: 'crew-dots'
};


const CrewSlider: React.FC<ICrewSlider> = ({ info }) => {
  return (
    <SliderContainer {...settings}>
      {
        info.map(member => (
          <Slide key={uuid()}>
            <CrewMemberInfo>
              <Typography variant='h4' color='secondary'>{member.position}</Typography>
              <MemberName variant='h3' color='primary'>{member.name}</MemberName>
              <Typography variant='body1' color='secondary'>{member.information}</Typography>
            </CrewMemberInfo>
            <CrewMemberPhoto>
              <CrewImage url={member.photoUrl} altText={member.name} />
            </CrewMemberPhoto>
          </Slide>
        ))
      }
    </SliderContainer>
  );
};

export default CrewSlider;