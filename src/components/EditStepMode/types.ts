import { ChangeEvent, MouseEvent } from "react";

export interface IProps {
  heading: string;
  subHeading: string;
  changeHeadingHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  changeSubHeadingHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  stepId: string;
  clickHandler: (evt: MouseEvent<HTMLButtonElement>) => void;
}
