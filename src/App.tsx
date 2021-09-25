import { GlobalStyle } from "./index.styles";
import "./index.css";
import Home from "UI/pages/Home/Home";
import Contributors from "UI/pages/Contributors/Contributors";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Suspense } from "react";
import Loader from "UI/molecules/Loader/Loader";

const App = () => (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route path="/" exact component={Home} />
          <Route path="/Products" component={Contributors} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
