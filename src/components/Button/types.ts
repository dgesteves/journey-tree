import { MouseEvent } from "react";

export interface IProps {
  children: string;
  clickHandler: (evt: MouseEvent<HTMLButtonElement>) => void;
  id: string;
}
