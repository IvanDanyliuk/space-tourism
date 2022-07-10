import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import NextImage from 'next/image';


interface ICrewImage {
  url: string;
  altText: string;
};

const ImageContainer = styled(Box)`
  position: unset !important;
`;

const Image = styled(NextImage)`
  position: relative;
  object-fit: contain !important;
  object-position: bottom ;
`;


const CrewImage: React.FC<ICrewImage> = ({ url, altText, ...rest }) => {
  return (
    <ImageContainer>
      <Image src={url} alt={altText} layout='fill' { ...rest } />
    </ImageContainer>
  );
};

export default CrewImage;