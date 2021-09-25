import { GlobalStyle } from "./index.styles";
import "./index.css";
import Home from "UI/pages/Home/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Suspense } from "react";
import Loader from "UI/molecules/Loader/Loader";
import DataProvider from "context/dataProvider";
import Contributors from "UI/pages/Contributors/Contributors";

const App = () => (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Suspense fallback={<Loader />}>
          <DataProvider>
            <Route path="/" exact component={Home} />
            <Route path="/contributors/:id" component={Contributors} />
          </DataProvider>
        </Suspense>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
