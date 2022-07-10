import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/assets/img/desktop/logo.png'


const Header = styled.header`
  padding-left: 60px;
  position: absolute;
  top: 3vh;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Barlow Condensed', sans-serif;
  box-sizing: border-box;
  z-index: 100;
`;

const Logo = styled(Box)``;

const NavMenu = styled.nav`
  width: 55vw;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 110px 0 120px;
  background: rgba(111, 113, 123, 0.1);
  backdrop-filter: blur(10px);
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 50px;
  cursor: pointer;
  list-style: none;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
`;

const LinkNum = styled.span`
  margin-right: 10px;
  font-weight: 700;
`;

const LinkName = styled.span``;


const Navbar = () => {
  return (
    <Header>
      <Logo>
        <Image src={logo} alt='logo' />
      </Logo>
      <NavMenu>
        <NavList>
          <NavItem>
            <Link href='/'>
              <Typography variant='inherit'>
                <LinkNum>00</LinkNum>
                <LinkName>Home</LinkName>
              </Typography>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/destination'>
              <Typography variant='inherit'>
                <LinkNum>01</LinkNum>
                <LinkName>Destination</LinkName>
              </Typography>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/crew'>
              <Typography variant='inherit'>
                <LinkNum>02</LinkNum>
                <LinkName>Crew</LinkName>
              </Typography>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/technology'>
              <Typography variant='inherit'>
                <LinkNum>03</LinkNum>
                <LinkName>Technology</LinkName>
              </Typography>
            </Link>
          </NavItem>
        </NavList>
      </NavMenu>
    </Header>
  )
};

export default Navbar;