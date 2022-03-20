import { ChangeEvent } from "react";

export interface IProps {
  labelText: string;
  inputValue: string;
  changeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
}
