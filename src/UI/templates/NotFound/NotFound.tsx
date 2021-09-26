import { NotFoundImage, NotFoundImageContainer } from "./NotFound.styles";
import notFoundImage from "assets/not found.svg";

const NotFound: React.FC<{ message: string }> = ({ message }) => {
  return (
    <NotFoundImageContainer>
      <h2> {message} </h2>
      <NotFoundImage src={notFoundImage} />
    </NotFoundImageContainer>
  );
};

export default NotFound;
