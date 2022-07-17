import '../../matchMediaMock.mock';
import { render, screen } from '@testing-library/react';
import TechnologySlider from '../TechnologySlider';


const infoMock = [
  {
    title: 'Launch Vehicle',
    description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or BedroomBabyOutlined. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
    imageUrl: `/assets/img/desktop/technology_launch_vehicle.png`
  },
  {
    title: 'Spaceport',
    description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth\'s rotation to launch.',
    imageUrl: `/assets/img/desktop/technology_spaceport.png`
  },
  {
    title: 'Space Capsule',
    description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
    imageUrl: `/assets/img/desktop/technology_space_capsule.png`
  }
];

describe('CrewSlider tests', () => {
  it('should render all passed data', () => {
    render(
      <TechnologySlider info={infoMock} />
    );
    const slides = screen.getAllByRole('button');
    expect(slides.length).toBe(infoMock.length);
  });
});