import { Dispatch, SetStateAction } from "react";

export interface IProps {
  children: string;
  setState: Dispatch<SetStateAction<boolean>>;
  id: string;
}
