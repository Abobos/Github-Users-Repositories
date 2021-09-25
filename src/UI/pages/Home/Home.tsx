import useRequest from "hooks/request";
import React, { useEffect, useState } from "react";
import Title from "UI/atoms/Title/Title";
import Search from "UI/molecules/Search/Search";
import Card from "UI/templates/Card/Card";
import CardSkeleton from "UI/templates/CardSkeleton/CardSkeleton";
import { CardDisplayWrapper } from "./Home.styles";

const Home: React.FC<{}> = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const [data, error, loading, makeRequest] = useRequest();

  const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    event.preventDefault();
    const currentTarget = event.target as HTMLInputElement;

    setSearchValue(currentTarget.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ searchValue });

    makeRequest(
      `https://api.github.com/search/repositories?q=${searchValue}&sort=stars&order=desc&per_page=10`
    );
  };

  useEffect(() => {
    makeRequest(
      "https://api.github.com/search/users?q=repos:%3E42+followers:%3E1000&sort=stars&order=desc&per_page=10"
    );
  }, [makeRequest]);

  let cardDisplay;

  if (loading) {
    cardDisplay = Array(9)
      .fill("9")
      .map((item: any, index: number) => (
        <CardSkeleton key={index} datum={item} />
      ));
  } else {
    cardDisplay = data.map((item: any) => <Card key={item.id} datum={item} />);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Search
          onChangeFunc={handleChange}
          value={searchValue}
          loading={loading}
        />
      </form>
      <Title>Popular Repositories</Title>
      <CardDisplayWrapper>{cardDisplay}</CardDisplayWrapper>
    </>
  );
};

export default Home;
