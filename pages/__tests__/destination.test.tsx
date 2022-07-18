import '../../matchMediaMock.mock';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Destination from '../destination';


describe('Destination page tests', () => {
  beforeEach(() => {
    render(
      <Destination />
    );
  });

  it('should render all the tabs on the page', () => {
    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBe(4);
  });

  it('should change active tab by clicking on the tab button', () => {
    const tabBtns = screen.getAllByRole('tab');
    fireEvent.click(tabBtns[1]);
    const marsTab = screen.queryByText('225 mil. km');
    expect(marsTab).toBeInTheDocument();
  });
});