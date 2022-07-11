import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';


interface ILayout {
  children: React.ReactNode;
};


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