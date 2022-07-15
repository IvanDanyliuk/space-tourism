export interface ILayout {
  children: React.ReactNode;
};

export interface ICrewSlider {
  info: {
    name: string;
    position: string;
    information: string;
    photoUrl: string;
  }[],
};

export interface ITechnologySlider {
  info: {
    title: string;
    description: string;
    imageUrl: string;
  }[],
};

export interface ISlideImage {
  url: string;
  altText: string;
};

export interface ITabPanel {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export type WindowDimentions = {
  width: number | undefined;
  height: number | undefined;
};