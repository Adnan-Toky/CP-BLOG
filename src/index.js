import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Settings from "./Post";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import AOS from "aos";
import "aos/dist/aos.css";

import "./css/style.css";

function Post() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Settings />
    </div>
  );
}

function Home() {
  return (
    <h1>Homepage</h1>
  );
}

function NotFound() {
  return (
    <h1>404</h1>
  );
}

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/post" component={Post} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <div>{routes}</div>
  </Provider>,
  document.querySelector('#root')
);