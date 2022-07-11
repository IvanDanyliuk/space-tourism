import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import NextImage from 'next/image';


interface ISlideImage {
  url: string;
  altText: string;
};

const ImageContainer = styled(Box)`
  position: unset !important;
`;

const Image = styled(NextImage)`
  position: relative;
  object-fit: contain !important;
  object-position: bottom right;
`;


const SlideImage: React.FC<ISlideImage> = ({ url, altText, ...rest }) => {
  return (
    <ImageContainer>
      <Image src={url} alt={altText} layout='fill' { ...rest } />
    </ImageContainer>
  );
};

export default SlideImage;