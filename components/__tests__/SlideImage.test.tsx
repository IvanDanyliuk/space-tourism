import '../../matchMediaMock.mock';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SlideImage from '../SlideImage';


const imageUrlMock = '/assets/img/desktop/crew_commander.png';
const altTextMock = 'commander';

describe('SlideImage tests', () => {
  it('should render the image', () => {
    render(
      <SlideImage url={imageUrlMock} altText={altTextMock} />
    );

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});