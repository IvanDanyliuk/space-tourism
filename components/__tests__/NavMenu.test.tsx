import '../../matchMediaMock.mock';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavMenu from '../NavMenu';


describe('NavMenu tests', () => {
  it('should render the menu links', () => {
    render(
      <NavMenu />
    );
    const links = screen.getAllByTestId('navlink');
    expect(links.length).toBe(4);
  });
});