import { objectLiteral } from "interfaces/dataItem";

import { createContext } from "react";

const state = {
  error: "",
  loading: false,
  data: [],
  makeRequest: () => {},
};

type contextProps = {
  error: string;
  loading: boolean;
  data: Array<objectLiteral>;
  makeRequest: (url: string, type?: string) => void;
};

const dataContext = createContext<contextProps>(state);

export default dataContext;
