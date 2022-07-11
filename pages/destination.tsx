import type { NextPage } from 'next';
import { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { Box, Divider, Tab, Tabs, Typography } from '@mui/material';
import TabPanel from '../components/TabPanel';
import Image from 'next/image';


const Container = styled.div`
  padding-top: 110px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: url('/assets/img/desktop/destination_bg.png');
  background-size: cover;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding-top: 10vh;
    background: url('/assets/img/tablet/destination_bg.png') cover;
  }
`;

const Content = styled(Box)`
  width: 1100px;

  @media (max-width: 900px) {
    width: 85%;
  }
`;

const Heading = styled(Typography)`
  padding-top: 7vh;
`;

const HeadingNumber = styled.span`
  margin-right: 20px;
  font-weight: 600;
  color: #9b9b9b;
`;

const HeadingText = styled.span``;

const TabContainer = styled(Box)`
  position: relative;
  width: 100%;
`;

const TabButtons = styled(Tabs)`
  @media (max-width: 900px) {
    margin: 5vh 0 3vh 0;
  }
`;

const TabButton = styled(Tab)`
  font-size: 16px;
`;

const TabText = styled(Box)`
  width: 45%;

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const TabDivider = styled(Divider)`
  margin: 50px 0;
  width: 100%;
`;

const TabDetails = styled(Box)`
  margin-top: 25px;
  width: 100%;
  display: flex;
`;

const Distance = styled(Box)`
  width: 50%;
`;

const TravelTime = styled(Box)`
  width: 50%;
`;


const Destination: NextPage = () => {
  const [value, setValue] = useState(0);

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const handleTabChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs = [
    {
      value,
      index: 0,
      imgUrl: '/assets/img/desktop/destination_moon.png',
      title: 'Moon',
      text: 'See our planet as you\'ve never seen it before. A perfect relaxing trip away to help regain respective and come back refreshed. While you\'re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,499 km',
      travelTime: '3 days',
    },
    {
      value,
      index: 1,
      imgUrl: '/assets/img/desktop/destination_mars.png',
      title: 'Mars',
      text: 'Don\'t forget to pack your hiking boots. You\'ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It\'s two and a half times the size of Everest!',
      distance: '225 mil. km',
      travelTime: '9 months',
    },
    {
      value,
      index: 2,
      imgUrl: '/assets/img/desktop/destination_europa.png',
      title: 'Europa',
      text: 'The smallest of the four Galilean moons, orbiting Jupiter. Europa is a winter lover\'s dream. With an icy surface, it\'s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 mil. km',
      travelTime: '3 years',
    },
    {
      value,
      index: 3,
      imgUrl: '/assets/img/desktop/destination_titan.png',
      title: 'Titan',
      text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 bil. km',
      travelTime: '7 years',
    },
  ];

  return (
    <Container>
      <Content>
        <Heading variant='h5' color='primary'>
          <HeadingNumber>01</HeadingNumber>
          <HeadingText>Pick your destination</HeadingText>
        </Heading>
        <TabContainer>
          {
            tabs.map(tab => (
              <TabPanel 
                value={tab.value}
                index={tab.index}
              >
                <Image src={tab.imgUrl} alt={tab.title} width={'445px'} height={'445px'} />
                <TabText>
                  <TabButtons value={value} onChange={handleTabChange} aria-label='destination-tabs'>
                    <TabButton label='Moon' { ...a11yProps(0) } />
                    <TabButton label='Mars' { ...a11yProps(1) } />
                    <TabButton label='Europa' { ...a11yProps(2) } />
                    <TabButton label='Titan' { ...a11yProps(3) } />
                  </TabButtons>
                  <Typography variant='h2' color='primary'>{tab.title}</Typography>
                  <Typography variant='body1' color='secondary'>{tab.text}</Typography>
                  <TabDivider color='#7c7c7c' />
                  <TabDetails>
                    <Distance>
                      <Typography variant='subtitle2' color='secondary'>Avg. Distance</Typography>
                      <Typography variant='subtitle1' color='primary'>{tab.distance}</Typography>
                    </Distance>
                    <TravelTime>
                      <Typography variant='subtitle2' color='secondary'>Est. Travel Time</Typography>
                      <Typography variant='subtitle1' color='primary'>{tab.travelTime}</Typography>
                    </TravelTime>
                  </TabDetails>
                </TabText>
              </TabPanel>
            ))
          }
        </TabContainer>
      </Content>
    </Container>
  );
};

export default Destination;