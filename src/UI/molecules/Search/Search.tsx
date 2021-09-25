import Button from "UI/atoms/Button/Button";
import Input from "UI/atoms/Input/Input";
import Title from "UI/atoms/Title/Title";
import { SearchBox, SearchComponent } from "./Search.styles";

type SearchProps = {
  loading: boolean;
  value: string;
  onChangeFunc: (event: React.ChangeEvent<HTMLDivElement>) => void;
};
const Search: React.FC<SearchProps> = ({ onChangeFunc, value, loading }) => {
  return (
    <SearchComponent>
      <Title>GitHub Repository Search</Title>

      <SearchBox>
        <Input
          placeholder="Search Repositories"
          content={value}
          onChangeFunction={onChangeFunc}
        />
        <Button disable={loading} />
      </SearchBox>
    </SearchComponent>
  );
};

export default Search;
