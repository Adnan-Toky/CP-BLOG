import HeaderPro from "./components/HeaderPro";
import Header from "./components/header";
import { connect } from "react-redux";
import ExtendedPanel from "./components/ExtendedPanel";
import React from "react";
import store from "./store/store";
import { updatePostList } from "./store/actions";
import config from "./config";

class Posts extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
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
                {this.props.ui.width > 720 ? <HeaderPro default={true} {...this.props} /> : <Header default={true} {...this.props} />}
                <div style={{
                    marginTop: -20,
                    textAlign: "center",
                    paddingTop: 50,
                    background: "#f6f6f6"
                }}>
                    {/* <div style={{
                        width: this.props.ui.width > 1000 ? "50%" : "100%",
                        display: "inline-block",
                        textAlign: "left",
                        float: "left"
                    }}>
                        <ExtendedPanel {...this.props} default={true} title="Popular" posts={this.props.post_list.popular} />
                    </div> */}
                    <div style={{
                        width: this.props.ui.width > 1000 ? "80%" : "100%",
                        margin: "0 auto",
                        // width: this.props.ui.width > 1000 ? "50%" : "100%",
                        display: "inline-block",
                        textAlign: "left"
                    }}>
                        <ExtendedPanel {...this.props} default={true} title="Recent Posts" posts={this.props.post_list.trending} />
                    </div>
                    <div style={{
                        display: this.props.post_list.popular.length ? "none" : "block",
                        marginTop: 0,
                        marginBottom: 50,
                        fontSize: 20
                    }}>Loading Posts...</div>
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
})(Posts);