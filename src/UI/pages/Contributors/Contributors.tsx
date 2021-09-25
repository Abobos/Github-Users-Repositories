import useDataContext from "hooks/useDataContext";
import { Item } from "interfaces/dataItem";
import React, { useEffect } from "react";
import Title from "UI/atoms/Title/Title";

const Contributors: React.FC<{}> = (props: any) => {
  const { data, error, loading, makeRequest } = useDataContext();

  let datum = data?.find(
    (data: any) => data.owner.id === +props.match.params.id
  );

  useEffect(() => {
    if (datum) {
      makeRequest(
        `https://api.github.com/repos/${datum.full_name}/contributors`
      );
    }
  }, [makeRequest, datum]);

  console.log({ data });

  const attributedData = loading ? Array(20).fill(null) : data;

  //   const cardDisplay = attributedData.map((item: Item, index: number) => (
  //     <Card key={index} datum={item} state={loading} />
  //   ));

  return (
    <>
      <Title>Contributors</Title>
      {/* <CardDisplayWrapper>{cardDisplay}</CardDisplayWrapper> */}
    </>
  );
};

export default Contributors;
