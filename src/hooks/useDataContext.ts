import dataContext from "context/dataContext";
import { useContext } from "react";

const useDataContext = () => {
  const context = useContext(dataContext);

  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

export default useDataContext;
