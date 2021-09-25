import { StyledButton } from "./Button.styles";

const Button: React.FC<{ disable: boolean }> = ({ disable }) => {
  return (
    <StyledButton type="submit" disabled={disable}>
      Search
    </StyledButton>
  );
};

export default Button;
