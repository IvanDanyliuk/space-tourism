import React from 'react';
import styled from 'styled-components';
import { ILayout } from '../types';
import Navbar from './Navbar';


const Main = styled.main`
  position: relative;
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