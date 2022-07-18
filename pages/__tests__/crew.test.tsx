import '../../matchMediaMock.mock';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Crew from '../crew';


describe('Crew page tests', () => {
  it('should render the Crew page', () => {
    render(
      <Crew />
    );
    const pageTitle = screen.getByText('Meet your crew');
    expect(pageTitle).toBeInTheDocument();
  });
});