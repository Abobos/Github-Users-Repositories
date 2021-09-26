import { StyledTitle } from "./Title.styles";

const Title: React.FC<{ children: any }> = ({ children }) => (
  <StyledTitle>{children}</StyledTitle>
);

export default Title;
