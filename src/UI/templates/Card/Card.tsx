import Avatar from "UI/atoms/Avatar/Avatar";
import Description from "UI/atoms/Description/Description";
import { StyledCard, StyledLink } from "./Card.styles";

const Card: React.FC<{ datum: any }> = ({ datum }) => (
  <StyledCard>
    <Avatar imgUrl="https://google.com" fullName="facebbok" />
    <Description label="Repository" content="Facebook/React" />
    <Description label="Owner" content="Facebook" />
    <Description label="Number of Stars" content="12345" />
    <Description label="Number of Forks" content="123485" />

    <StyledLink to="/contributors">View Contributors</StyledLink>
  </StyledCard>
);

export default Card;
