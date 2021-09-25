import { InputField } from "./Input.styles";

type InputProps = {
  content: string;
  placeholder: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLDivElement>) => void;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  content,
  onChangeFunction,
}) => {
  return (
    <InputField
      placeholder={placeholder}
      value={content}
      onChange={onChangeFunction}
      required
    />
  );
};

export default Input;
