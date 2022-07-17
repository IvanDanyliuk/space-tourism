import '../../matchMediaMock.mock';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import NavMenuMobile from '../NavMenuMobile';


describe('NavMenuMobile tests', () => {
  it('should render the menu links', () => {
    render(
      <NavMenuMobile />
    );

    const openMenuBtn = screen.getByRole('button');
    fireEvent.click(openMenuBtn);
    const links = screen.getAllByTestId('navlink');
    expect(links.length).toBe(4);
  });
});