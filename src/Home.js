import Header from "./components/header"
import { connect } from "react-redux";
import Panel from "./components/panel";
import React from "react";
import store from "./store/store";
import { updatePostList } from "./store/actions";
import config from "./config";


class Home extends React.Component {
    componentDidMount() {
        if (this.props.post_list.popular.length == 0) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    let data = JSON.parse(this.responseText);
                    if (data.status) {
                        store.dispatch(updatePostList(data.data));
                    }
                    // console.log(data);
                }
                // else console.log(this);
            };
            xhttp.open(
                "GET",
                `${config.url}php/home/index.php`,
                true
            );
            xhttp.send();
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <>
                <Header default={true} {...this.props} />
                <div style={{
                    marginTop: 50,
                    textAlign: "center"
                }}>
                    <div style={{
                        width: this.props.ui.width > 1000 ? "45%" : "100%",
                        display: "inline-block",
                        textAlign: "left"
                    }}>
                        <Panel {...this.props} default={true} title="Popular" posts={this.props.post_list.popular} />
                    </div>
                    <div style={{
                        width: this.props.ui.width > 1000 ? "45%" : "100%",
                        display: "inline-block",
                        textAlign: "left"
                    }}>
                        <Panel {...this.props} default={true} title="Trending" posts={this.props.post_list.trending} />
                    </div>
                </div>
            </>
        )
    }
}

export default connect(state => {
    return {
        ui: state.ui,
        font: state.font,
        layout: state.layout,
        theme: state.theme,
        config: state.config,
        reading: state.reading,
        post_list: state.post_list,

    }
})(Home);