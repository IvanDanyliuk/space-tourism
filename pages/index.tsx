import type { NextPage } from 'next';
import { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';


const Container = styled.div`
  padding-top: 15vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: url('/assets/img/desktop/homepage_bg.png');
  background-size: cover;
  box-sizing: border-box;
`;

const Content = styled(Box)`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled(Box)`
  width: 40%;
`;

const UpperText = styled(Typography)`
  margin-bottom: 24px;
`;

const Heading = styled(Typography)``;

const BottomText = styled(Typography)`
  margin-top: 24px;
`;

const ButtonContainer = styled(Box)`
  width: 45%;
  display: flex;
  justify-content: center;
`;

const ExploreBtn = styled.button`
  cursor: pointer;
  width: 230px;
  height: 230px;
  background: '#ffffff';
  border: none;
  border-radius: 50%;
  transition: .2s ease-in-out;

  &:hover {
    outline-width: 55px;
    outline-color: rgba(255, 255, 255, .1);
    outline-style: solid;
  }
`;

const ButtonTitle = styled(Typography)``;


const Home: NextPage = () => {
  const router = useRouter();

  const handleExploreBtn = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push('/destination')
  };

  return (
    <Container>
      <Content>
        <TextContainer>
          <UpperText 
            variant='h5' 
            color='secondary'
          >
            So, You want to travel to
          </UpperText>
          <Heading 
            variant='h1' 
            color='primary'
          >
            Space
          </Heading>
          <BottomText 
            variant='body1' 
            color='secondary'
          >
            Let's face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we'll give you
            a truly out of this world experience!
          </BottomText>
        </TextContainer>
        <ButtonContainer>
            <ExploreBtn onClick={handleExploreBtn}>
              <ButtonTitle 
                variant='subtitle1' 
                color='info'
              >
                Explore
              </ButtonTitle>
            </ExploreBtn>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Home;
