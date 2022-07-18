import '../../matchMediaMock.mock';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Technology from '../technology';


describe('Technology page tests', () => {
  it('should render the Technology page', () => {
    render(
      <Technology />
    );
    const slideBtns = screen.getAllByRole('button');
    expect(slideBtns.length).toBe(3);
  });
});