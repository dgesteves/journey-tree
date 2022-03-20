import { MouseEvent } from "react";

export interface IProps {
  clickHandler: (evt: MouseEvent<HTMLParagraphElement>) => void;
  heading: string;
  subHeading: string;
  stepType: string;
}
