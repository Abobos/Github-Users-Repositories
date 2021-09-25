import useRequest from "hooks/request";

import DataContext from "./dataContext";

const DataProvider: React.FC<{}> = (props: any) => {
  const [data, error, loading, makeRequest] = useRequest();

  return (
    <DataContext.Provider
      value={{ data, error, loading, makeRequest }}
      {...props}
    />
  );
};

export default DataProvider;
