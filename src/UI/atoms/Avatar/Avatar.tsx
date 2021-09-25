type AvatarProps = {
  imgUrl: string;
  fullName: string;
};

const Avatar: React.FC<AvatarProps> = ({ imgUrl, fullName }) => (
  <img src={imgUrl} alt={`${fullName}-avatar`} />
);

export default Avatar;
