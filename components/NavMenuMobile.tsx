import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, Typography } from '@mui/material';
import Link from 'next/link';

const MenuContainer = styled.nav`
  
  
`;

const OpenMenuBtn = styled.button`
  padding: 0;
  background: transparent;
  border: none;

  svg {
    font-size: 50px;
  }
`;

const CloseMenuBtn = styled.button`
  position: absolute;
  top: 4vh;
  right: 7vw;
  padding: 0;
  background: transparent;
  border: none;
  z-index: 100;

  svg {
    font-size: 50px;
  }
`;

const NavList = styled.ul`
  position: relative;
  margin: 0;
  padding: 15vh 0 0 5vh;
  width: 100%;
  height: 100vh;
`;

const NavItem = styled.li`
  margin-bottom: 5vh;
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

const NavMenuMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      {
        !isOpen && (
          <OpenMenuBtn onClick={menuToggleHandler}>
            <MenuIcon fontSize='inherit' sx={{ color: '#ffffff' }} />
          </OpenMenuBtn>
        )
      }
      <Drawer
        anchor='right'
        open={isOpen}
        onClose={menuToggleHandler}
        PaperProps={{
          sx: {
            width: '55%',
            backgroundColor: 'rgba(111, 113, 123, 0.1)',
            backdropFilter: 'blur(10px)',
          }
        }}
      >
        <CloseMenuBtn onClick={menuToggleHandler}>
          <CloseIcon fontSize='inherit' sx={{ color: '#ffffff' }} />
        </CloseMenuBtn>
        <NavList>
          <NavItem>
            <Link href='/'>
              <Typography variant='caption'>
                <LinkNum>00</LinkNum>
                <LinkName>Home</LinkName>
              </Typography>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/destination'>
              <Typography variant='caption'>
                <LinkNum>01</LinkNum>
                <LinkName>Destination</LinkName>
              </Typography>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/crew'>
              <Typography variant='caption'>
                <LinkNum>02</LinkNum>
                <LinkName>Crew</LinkName>
              </Typography>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/technology'>
              <Typography variant='caption'>
                <LinkNum>03</LinkNum>
                <LinkName>Technology</LinkName>
              </Typography>
            </Link>
          </NavItem>
        </NavList>
      </Drawer>
    </MenuContainer>
  )
}

export default NavMenuMobile