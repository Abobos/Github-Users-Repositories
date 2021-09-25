import Skeleton from "react-skeleton-loading";

import { StyledCard } from "../Card/Card.styles";
import { DescriptionSkeleton } from "./CardSkeleton.styles";

const Card: React.FC<{ datum: any }> = ({ datum }) => (
  <StyledCard>
    <Skeleton circle={true} height={50} width={50} />
    <DescriptionSkeleton />
    <DescriptionSkeleton />
    <DescriptionSkeleton />
    <DescriptionSkeleton />
    <DescriptionSkeleton />
    <DescriptionSkeleton />
  </StyledCard>
);

export default Card;
