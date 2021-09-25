import React, { useEffect, useRef, useState } from "react";

import useDataContext from "hooks/useDataContext";
import { Item } from "interfaces/dataItem";

import Title from "UI/atoms/Title/Title";
import Search from "UI/molecules/Search/Search";
import Card from "UI/templates/Card/Card";
import { CardDisplayWrapper } from "./Home.styles";

const Home: React.FC<{}> = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const { data, error, loading, makeRequest } = useDataContext();

  const justMounted = useRef(true);

  const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    event.preventDefault();
    const currentTarget = event.target as HTMLInputElement;

    setSearchValue(currentTarget.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    makeRequest(
      `https://api.github.com/search/repositories?q=${searchValue}&sort=stars&order=desc&per_page=30`
    );

    justMounted.current = false;
  };

  useEffect(() => {
    makeRequest(
      "https://api.github.com/search/repositories?q=sort=stars&order=desc&per_page=30"
    );
  }, [makeRequest]);

  const attributedData = loading ? Array(30).fill(null) : data;

  const cardDisplay = attributedData.map((item: Item, index: number) => (
    <Card key={index} datum={item} state={loading} />
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Search
          onChangeFunc={handleChange}
          value={searchValue}
          loading={loading}
        />
      </form>
      <Title>
        {justMounted.current ? "Popular Repositories" : "Searched Repositories"}
      </Title>
      <CardDisplayWrapper>{cardDisplay}</CardDisplayWrapper>
    </>
  );
};

export default Home;
