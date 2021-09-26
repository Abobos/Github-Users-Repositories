import useDataContext from "hooks/useDataContext";
import { ItemII } from "interfaces/dataItem";
import React, { useEffect } from "react";
import Title from "UI/atoms/Title/Title";
import { CardII } from "UI/templates/Card/Card";
import { CardDisplayWrapper } from "../Home/Home.styles";

import Skeleton from "react-skeleton-loading";
import NotFound from "UI/templates/NotFound/NotFound";

const Contributors: React.FC<{}> = (props: any) => {
  let { data, error, loading, makeRequest } = useDataContext();

  const repositoryFullName = props.location.pathname.slice(14);

  useEffect(() => {
    if (repositoryFullName) {
      makeRequest(
        `https://api.github.com/repos/${repositoryFullName}/contributors`,
        "contributors"
      );
    }
  }, [makeRequest, repositoryFullName]);

  const attributedData = loading ? Array(6).fill(null) : data;

  const cardDisplay =
    Array.isArray(attributedData) &&
    attributedData.length > 0 &&
    attributedData.map((item: ItemII, index: number) => (
      <CardII key={index} datum={item} state={loading} />
    ));

  const renderCondition = attributedData.length > 0;

  return (
    <>
      {repositoryFullName ? (
        <Title>{`${repositoryFullName} Contributors`} </Title>
      ) : (
        <Skeleton width={200} height={100} />
      )}

      {renderCondition ? (
        <CardDisplayWrapper>{cardDisplay}</CardDisplayWrapper>
      ) : (
        <NotFound
          message={`${error ? "An error occured" : "No Result Found"}`}
        />
      )}
    </>
  );
};

export default Contributors;
