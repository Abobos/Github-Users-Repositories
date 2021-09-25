import { useState } from "react";
import Search from "UI/molecules/Search/Search";
import Card from "UI/templates/Card/Card";

const Home: React.FC<{}> = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    event.preventDefault();
    const currentTarget = event.target as HTMLInputElement;

    console.log(currentTarget.value);
    setSearchValue(currentTarget.value);
  };

  return (
    <>
      <form>
        <Search onChangeFunc={handleChange} value={searchValue} />
      </form>

      <Card />
    </>
  );
};

export default Home;
