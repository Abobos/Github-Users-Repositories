import Button from "UI/atoms/Button/Button";
import Input from "UI/atoms/Input/Input";
import Title from "UI/atoms/Title/Title";

type SearchProps = {
  value: string;
  onChangeFunc: (event: React.ChangeEvent<HTMLDivElement>) => void;
};
const Search: React.FC<SearchProps> = ({ onChangeFunc, value }) => {
  return (
    <>
      <Title />
      <Input
        placeholder="Search Repositories"
        content={value}
        onChangeFunction={onChangeFunc}
      />
      <Button />
    </>
  );
};

export default Search;
