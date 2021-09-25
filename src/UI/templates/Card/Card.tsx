import { Item, objectLiteral } from "interfaces/dataItem";
import Avatar from "UI/atoms/Avatar/Avatar";
import Description from "UI/atoms/Description/Description";
import { StyledCard, StyledLink } from "./Card.styles";

import Skeleton from "react-skeleton-loading";
import { AvatarImg } from "UI/atoms/Avatar/Avatar.styles";
import CardSkeleton from "./CardSkeleton";

const Card: React.FC<{ datum: Item; state: boolean }> = ({ datum, state }) => (
  <StyledCard>
    {!state ? (
      <Avatar
        imgUrl={datum.owner.avatar_url}
        fullName={`${datum.full_name}-avatar`}
      />
    ) : (
      <AvatarImg>
        <Skeleton circle={true} height={80} width={80} />
      </AvatarImg>
    )}
    {!state ? (
      <Description label="Owner" content={datum.name} />
    ) : (
      <CardSkeleton />
    )}
    {!state ? (
      <Description label="Repository" content={datum.full_name} />
    ) : (
      <CardSkeleton />
    )}
    {!state ? (
      <Description label="Number of Stars" content={datum.stargazers_count} />
    ) : (
      <CardSkeleton />
    )}
    {!state ? (
      <Description label="Number of Forks" content={datum.forks_count} />
    ) : (
      <CardSkeleton />
    )}

    {!state ? (
      <Description
        label="Number of Open Issues"
        content={datum.open_issues_count}
      />
    ) : (
      <CardSkeleton />
    )}

    {!state ? (
      <StyledLink to={`contributors/${datum.owner.id}`}>
        View Contributors
      </StyledLink>
    ) : (
      <Skeleton width={150} height={40} />
    )}
  </StyledCard>
);

export default Card;
