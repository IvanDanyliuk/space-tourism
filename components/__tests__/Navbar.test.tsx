import '../../matchMediaMock.mock';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';


describe('Navbar tests', () => {
  beforeEach(() => {
    render(
      <Navbar />
    );
  });

  it('should render the app logo', () => {
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render the menu links', () => {
    const links = screen.getAllByTestId('navlink');
    expect(links.length).toBe(4);
  });
});