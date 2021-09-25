import { StyledTitle } from "./Title.styles";

const Title: React.FC<{ children: string }> = ({ children }) => (
  <StyledTitle>{children}</StyledTitle>
);

export default Title;
