import { AvatarImg } from "./Avatar.styles";

type AvatarProps = {
  imgUrl: string;
  fullName: string;
};

const Avatar: React.FC<AvatarProps> = ({ imgUrl, fullName }) => (
  <AvatarImg>
    <img src={imgUrl} alt={`${fullName}-avatar`} />
  </AvatarImg>
);

export default Avatar;
