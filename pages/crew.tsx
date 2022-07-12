import type { NextPage } from 'next';
import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import styled from 'styled-components';


const Slider = dynamic(import('../components/CrewSlider'), {
  ssr: false
});


const Container = styled.div`
  padding-top: 15vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: url('/assets/img/desktop/crew_bg.png');
  background-size: cover;
  box-sizing: border-box;

  @media (max-width: 900px) {
    background: url('/assets/img/tablet/crew_bg.png') cover no-repeat;
  }
`;

const Content = styled(Box)`
  position: relative;
  width: 1100px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 87%;
  }
`;

const Heading = styled(Typography)`
  height: 4vh;
  display: flex;
  align-items: flex-end;
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


const crewInfo = [
  {
    name: 'Douglas Hurley',
    position: 'Commander',
    photoUrl: '/assets/img/desktop/crew_commander.png',
    information: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
  },
  {
    name: 'Mark Shuttleworth',
    position: 'Mission Specialist',
    photoUrl: '/assets/img/desktop/crew_mission_specialist.png',
    information: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
  },
  {
    name: 'Victor Glover',
    position: 'Pilot',
    photoUrl: '/assets/img/desktop/crew_pilot.png',
    information: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.'
  },
  {
    name: 'Anousheh Ansari',
    position: 'Flight Engineer',
    photoUrl: '/assets/img/desktop/crew_flight_engineer.png',
    information: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS and the first Iranian in space.'
  },
];


const Crew: NextPage = () => {
  return (
    <Container>
      <Content>
        <Heading variant='h5' color='primary'>
          <HeadingNumber>02</HeadingNumber>
          <HeadingText>Meet your crew</HeadingText>
        </Heading>
        <SliderSection>
          <Slider info={crewInfo} />
        </SliderSection>
      </Content>
    </Container>
  );
};

export default Crew;