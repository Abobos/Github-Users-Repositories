import useDataContext from "hooks/useDataContext";
import { Item, ItemII } from "interfaces/dataItem";
import React, { useEffect } from "react";
import Title from "UI/atoms/Title/Title";
import { CardII } from "UI/templates/Card/Card";
import { CardDisplayWrapper } from "../Home/Home.styles";

const Contributors: React.FC<{}> = (props: any) => {
  const { data, error, loading, makeRequest } = useDataContext();

  let datum = data.find(
    (data: any) => data.owner?.id === +props.match.params.id
  );

  useEffect(() => {
    if (datum) {
      makeRequest(
        `https://api.github.com/repos/${datum.full_name}/contributors`,
        "contributors"
      );
    }
  }, [makeRequest, datum]);

  console.log({ data });

  const attributedData = loading ? Array(20).fill(null) : data;

  const cardDisplay = attributedData.map((item: ItemII, index: number) => (
    <CardII key={index} datum={item} state={loading} />
  ));

  return (
    <>
      <Title>
        {datum ? `${datum.full_name} Contributors` : "Retrieving Contributors"}
      </Title>
      <CardDisplayWrapper>{cardDisplay}</CardDisplayWrapper>
    </>
  );
};

export default Contributors;
