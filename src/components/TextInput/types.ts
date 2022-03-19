import { Dispatch, SetStateAction } from "react";

export interface IProps {
  labelText: string;
  inputValue: string;
  setState: Dispatch<SetStateAction<string>>;
  name: string;
  id: string;
}
