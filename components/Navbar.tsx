import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../public/assets/img/desktop/logo.png'
import NavMenu from './NavMenu';
import useWindowDimensions from '../hooks/useWindowDimentions';
import NavMenuMobile from './NavMenuMobile';


const Header = styled.header`
  padding: 0 0 0 60px;
  position: absolute;
  top: 3vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Barlow Condensed', sans-serif;
  box-sizing: border-box;
  z-index: 100;
  
  @media (max-width: 900px) {
    padding: 2vh 10vw;
    height: 10vh;
  }
`;

const Logo = styled(Box)``;


const Navbar = () => {
  const { width } = useWindowDimensions();
  return (
    <Header>
      <Logo>
        <Image src={logo} alt='logo' />
      </Logo>
      {
        width! > 420 ? <NavMenu /> : <NavMenuMobile />
      }
    </Header>
  )
};

export default Navbar;