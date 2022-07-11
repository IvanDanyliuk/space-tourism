import type { NextPage } from 'next';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import TechnologySlider from '../components/TechnologySlider';


const Container = styled.div`
  padding-top: 15vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: url('/assets/img/desktop/technology_bg.png');
  background-size: cover;
  box-sizing: border-box;
`;

const Content = styled(Box)`
  position: relative;
  padding-left: 10vw;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Heading = styled(Typography)`
  height: 10vh;
  display: flex;
  align-items: flex-end;
  border: 1px solid yellow;
`;

const HeadingNumber = styled.span`
  margin-right: 20px;
  font-weight: 600;
  color: #9b9b9b;
`;

const HeadingText = styled.span``;

const SliderSection = styled(Box)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;


const technologyInfo = [
  {
    title: 'Launch Vehicle',
    description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or BedroomBabyOutlined. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
    imageUrl: '/assets/img/desktop/technology_launch_vehicle.png'
  },
  {
    title: 'Spaceport',
    description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth\'s rotation to launch.',
    imageUrl: '/assets/img/desktop/technology_spaceport.png'
  },
  {
    title: 'Space Capsule',
    description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
    imageUrl: '/assets/img/desktop/technology_space_capsule.png'
  }
]


const Technology: NextPage = () => {
  return (
    <Container>
      <Content>
        <Heading variant='h5' color='primary'>
          <HeadingNumber>03</HeadingNumber>
          <HeadingText>Space Launch 101</HeadingText>
        </Heading>
        <SliderSection>
          <TechnologySlider info={technologyInfo} />
        </SliderSection>
      </Content>
    </Container>
  );
};

export default Technology;