import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';


interface ILayout {
  children: React.ReactNode;
};


const Main = styled.main`
  position: relative;
  height: 100vh;
  /* font-family: 'Bellefair', serif; */
`;


const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>
        { children }
      </Main>
    </>
  );
};

export default Layout;