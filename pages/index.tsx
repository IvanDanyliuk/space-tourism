import type { NextPage } from 'next';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';


const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: url('/assets/img/desktop/homepage_bg.png');
  background-size: cover;
`;

const Content = styled(Box)`
  width: 1100px;
`;

const TextContainer = styled(Box)``;

const UpperText = styled(Typography)``;

const Heading = styled(Typography)``;

const BottomText = styled(Typography)``;


const Home: NextPage = () => {
  return (
    <Container>
      <Content>
        
      </Content>
    </Container>
  )
}

export default Home
