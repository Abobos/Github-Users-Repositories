import Skeleton from "react-skeleton-loading";

const CardSkeleton = () => (
  <p>
    <b>
      <Skeleton width={100} />
    </b>
    :
    <span>
      <Skeleton width={100} />
    </span>
  </p>
);

export default CardSkeleton;
