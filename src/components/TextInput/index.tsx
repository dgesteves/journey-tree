import { IProps } from "./types";
import { InputContainer } from "./styles";

export default function TextInput({
  labelText,
  inputValue,
  changeHandler,
  name,
  id,
}: IProps) {
  return (
    <InputContainer>
      <label htmlFor={`text-input-${id}`}>{labelText}</label>
      <input
        id={`text-input-${id}`}
        type="text"
        aria-label={labelText}
        tabIndex={0}
        aria-required="true"
        onChange={changeHandler}
        value={inputValue}
        name={name}
      />
    </InputContainer>
  );
}
