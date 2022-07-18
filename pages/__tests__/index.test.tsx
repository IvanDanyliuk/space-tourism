import '../../matchMediaMock.mock';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Index from '../index';


const pushMock = jest.fn();

jest.mock('next/router', () => ({
  ...jest.requireActual,
  useRouter: () => ({
    push: pushMock,
    pathname: "/",
    route: "/",
    asPath: "/",
    query: "",
  }),
}));


describe('Index page tests', () => {
  beforeEach(() => {
    render(
      <Index />
    );
  });

  it('should render the Index page', () => {
    const pageTitle = screen.getByText('Space');
    expect(pageTitle).toBeInTheDocument();
  });

  it('should navigate to the Destination page after clicking the button', () => {
    const exploreBtn = screen.getByRole('button');
    fireEvent.click(exploreBtn);
    expect(pushMock).toHaveBeenCalledWith('/destination');
  });
});