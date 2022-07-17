import '../../matchMediaMock.mock';
import { render, screen } from '@testing-library/react';
import CrewSlider from '../CrewSlider';


const infoMock = [
  {
    name: 'Douglas Hurley',
    position: 'Commander',
    photoUrl: '/assets/img/desktop/crew_commander.png',
    information: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
  },
  {
    name: 'Mark Shuttleworth',
    position: 'Mission Specialist',
    photoUrl: '/assets/img/desktop/crew_mission_specialist.png',
    information: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
  },
  {
    name: 'Victor Glover',
    position: 'Pilot',
    photoUrl: '/assets/img/desktop/crew_pilot.png',
    information: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.'
  },
  {
    name: 'Anousheh Ansari',
    position: 'Flight Engineer',
    photoUrl: '/assets/img/desktop/crew_flight_engineer.png',
    information: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS and the first Iranian in space.'
  },
];

describe('CrewSlider tests', () => {
  it('should render all passed data', () => {
    render(
      <CrewSlider info={infoMock} />
    );
    const slides = screen.getAllByRole('button');
    expect(slides.length).toBe(infoMock.length);
  });
});