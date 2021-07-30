import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Post from "./Post";
import Home from "./Home";
import Posts from "./Posts";
import NotFound from "./NotFound";
import PageFooter from "./components/footer";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import useWindowSize from "./useWindowSize";


import AOS from "aos";
import "aos/dist/aos.css";

import "./css/style.css";

// function Post() {
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();
//   }, []);

//   return (
//     <div>
//       <Settings />
//     </div>
//   );
// }

function Footer() {
    const [width, height] = useWindowSize();
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return <PageFooter />
}

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={NotFound} />
            <Route path="/posts" component={Posts} />
            <Route path="/post" component={Post} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(
    <Provider store={store}>
        <div>{routes}</div>
        <Footer />
    </Provider>,
    document.querySelector('#root')
);