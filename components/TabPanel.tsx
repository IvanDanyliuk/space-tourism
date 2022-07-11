import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';


interface ITabPanel {
  children?: React.ReactNode;
  index: number;
  value: number;
};


const PanelContainer = styled(Box)``;

const Content = styled(Box)`
  padding: 10vh 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    padding: 5vh 0;
    flex-direction: column;
  }
`;



const TabPanel: React.FC<ITabPanel> = ({ children, value, index, ...other }) => {
  return (
    <PanelContainer
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Content sx={{ p: 3 }}>
          {children}
        </Content>
      )}
    </PanelContainer>
  );
};

export default TabPanel;