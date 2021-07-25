import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Settings from "./Post";
import Home from "./Home";
import NotFound from "./NotFound";
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

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/post" component={Post} />
      <Route path="/about" component={NotFound} />
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