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
  console.log(onChangeFunction);
  return (
    <input
      placeholder={placeholder}
      value={content}
      onChange={onChangeFunction}
      required
    />
  );
};

export default Input;
