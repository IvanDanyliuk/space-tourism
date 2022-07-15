import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import styled from 'styled-components';


const MenuContainer = styled.nav`
  width: 55vw;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 110px 0 120px;
  background: rgba(111, 113, 123, 0.1);
  backdrop-filter: blur(10px);
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 0 20px;
    width: 60vw;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const NavItem = styled.li`
  position: relative;
  margin-right: 50px;
  height: 12vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  list-style: none;
  text-transform: uppercase;
  color: rgb(255, 255, 255);

  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 0%;
    height: 3px;
    background: #ffffff;
    transition: 0.5s;
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: 900px) {
    margin-right: 25px;
  }
`;

const LinkNum = styled.span`
  margin-right: 10px;
  font-weight: 700;
`;

const LinkName = styled.span``;


const NavMenu: React.FC = () => {
  return (
    <MenuContainer>
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
    </MenuContainer>
  );
};

export default NavMenu;