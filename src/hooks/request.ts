import { objectLiteral } from "interfaces/dataItem";
import { useCallback, useReducer } from "react";

const initialState = {
  error: "",
  loading: false,
  data: [],
};

type reducerState = {
  error: string;
  loading: boolean;
  data: Array<objectLiteral>;
};

type actionType = {
  type: string;
  payload?: any;
  error?: any;
};

function reducerFunction(state: reducerState, action: actionType) {
  switch (action.type) {
    case "error":
      return { ...state, loading: !state.loading, error: action.error };
    case "data":
      return { ...state, loading: !state.loading, data: action.payload };
    case "loading":
      return { ...state, loading: !state.loading };
    default:
      throw new Error("No case found");
  }
}

function useRequest() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const { error, data, loading } = state;

  const makeRequest = useCallback(
    async (url: string) => {
      dispatch({ type: "loading" });

      try {
        const response = await (await fetch(url)).json();

        console.log({ response });

        dispatch({ type: "data", payload: response.items });
      } catch (err: any) {
        dispatch({ type: "error", error: err.message });

        console.log({ err });
      }
    },
    [dispatch]
  );

  return [data, error, loading, makeRequest];
}

export default useRequest;
