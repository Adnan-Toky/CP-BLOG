import Header from "./components/header";
import HeaderPro from "./components/HeaderPro";
import { connect } from "react-redux";
import ExtendedPanel from "./components/ExtendedPanel";
import React from "react";
import store from "./store/store";
import { updatePostList } from "./store/actions";
import config from "./config";
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";
import BgImage from "./img/background.jpg";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { db } from "./firebase";


class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);

        let postList = {
            popular: [],
            trending: []
        };
        db.collection("posts").get().then((snapshot) => {
            snapshot.forEach((doc) => {
                postList.popular.push(doc.data());
                postList.trending.push(doc.data());
            });
            store.dispatch(updatePostList(postList));
        }).catch((error) => {
            console.log(error, 1);
        });
        // console.log("posts load...")

        // if (this.props.post_list.popular.length == 0) {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.onreadystatechange = function () {
        //         if (this.readyState === 4 && this.status === 200) {
        //             let data = JSON.parse(this.responseText);
        //             if (data.status) {
        //                 store.dispatch(updatePostList(data.data));
        //             }
        //             // console.log(data);
        //         }
        //         // else console.log(this);
        //     };
        //     xhttp.open(
        //         "GET",
        //         `${config.url}php/home/index.php`,
        //         true
        //     );
        //     xhttp.send();
        //     window.scrollTo(0, 0);
        // }
    }

    render() {
        return (
            <>
                {this.props.ui.width <= 720 ? <Header default={true} {...this.props} /> : <HeaderPro {...this.props} />}
                <div style={{
                    marginTop: this.props.ui.width <= 720 ? 45 : -20,
                    height: this.props.ui.width > 720 ? 500 : 560,
                    // border: "1px solid red",
                    // backgroundImage: 'url(' + BgImage + ')',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "right",
                    backgroundColor: "#f3f6fd",

                }}>
                    <div style={{
                        padding: this.props.ui.width / 20
                    }}>
                        <div style={{
                            zIndex: 8,
                            position: "absolute",
                            top: 90,
                            right: this.props.ui.width / 20 + 20,
                            textAlign: this.props.ui.width > 720 ? "right" : "center",
                            height: this.props.ui.width > 720 ? 500 - this.props.ui.width / 20 : 200,
                            width: this.props.ui.width > 720 ? this.props.ui.width / 2 - this.props.ui.width / 20 : this.props.ui.width
                        }}>
                            <img src={BgImage} style={{
                                display: "inline-block",
                                width: this.props.ui.width > 720 ? "100%" : "auto",
                                maxWidth: 550,
                                zIndex: 0,
                                height: this.props.ui.width > 720 ? this.props.ui.width / 2 - this.props.ui.width / 20 : 250,
                                maxHeight: 450,
                                marginTop: this.props.ui.width > 720 ? (500 - Math.min(450, this.props.ui.width / 2 - this.props.ui.width / 20)) / 2 : 0
                            }} />
                        </div>
                        <div style={{
                            zIndex: 10,
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            // justifyContent: "center",
                            marginTop: this.props.ui.width > 720 ? 0 : 300,
                            height: this.props.ui.width > 720 ? 500 - this.props.ui.width / 10 : 200,
                            width: this.props.ui.width > 720 ? this.props.ui.width / 2 - this.props.ui.width / 20 : this.props.ui.width - 50,
                            color: "#444"
                        }}>
                            <div style={{
                                fontFamily: 'metropolis',
                                maxWidth: 500
                            }}>
                                <h1 style={{
                                    fontSize: this.props.ui.width > 720 ? 30 : 23
                                }}>Hello Enthustic Problem Solvers!</h1>
                                <p style={{
                                    marginTop: -5,
                                    lineHeight: "25px",
                                    color: "#555",
                                    fontSize: this.props.ui.width > 720 ? 18 : 14
                                }}>
                                    Welcome to AlgoLogs, an innovative platform, bringing a unique idea to learn Data Structure and Algorithm for Competitive Programmers!
                                </p>
                                <div>
                                    <a href="/posts" style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#fff",
                                        backgroundColor: "#0061f2",
                                        borderColor: "#0061f2",
                                        lineHeight: 1,
                                        textAlign: "center",
                                        verticalAlign: "middle",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        border: "1px solid transparent",
                                        padding: "0.875rem 1.125rem",
                                        fontSize: "0.875rem",
                                        borderRadius: "0.35rem",
                                        textDecoration: "none"
                                    }}>
                                        Get Started <ArrowForwardIcon style={{ height: 16 }} />
                                    </a>
                                    <a href="/about" style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#0061f2",
                                        backgroundColor: "#dae7fb",
                                        borderColor: "#dae7fb",
                                        lineHeight: 1,
                                        textAlign: "center",
                                        verticalAlign: "middle",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        border: "1px solid transparent",
                                        padding: "0.875rem 1.125rem",
                                        fontSize: "0.875rem",
                                        borderRadius: "0.35rem",
                                        marginLeft: 10,
                                        fontWeight: 700,
                                        textDecoration: "none"
                                    }}>
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    marginTop: -40,
                    textAlign: "center",
                    paddingTop: 50
                }}>
                    <div style={{
                        width: this.props.ui.width > 1000 ? "50%" : "100%",
                        display: "inline-block",
                        textAlign: "left",
                        float: "left"
                    }}>
                        <ExtendedPanel count={5} {...this.props} default={true} title="Popular" posts={this.props.post_list.popular} />
                    </div>
                    <div style={{
                        width: this.props.ui.width > 1000 ? "50%" : "100%",
                        display: "inline-block",
                        textAlign: "left"
                    }}>
                        <ExtendedPanel count={5} {...this.props} default={true} title="Trending" posts={this.props.post_list.trending} />
                    </div>
                </div>
                <div style={{
                    textAlign: "center",
                    padding: "20px 0"
                }}>
                    <div style={{
                        display: this.props.post_list.popular.length ? "none" : "block",
                        marginTop: 0,
                        marginBottom: 50,
                        fontSize: 20
                    }}>Loading Posts...</div>
                    <Link to="posts" style={{ textDecoration: "none" }}>
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIosIcon />}
                            style={{
                                backgroundColor: "#5e6dbd",
                                color: "#fff"
                            }}
                        >VIEW ALL POSTS</Button>
                    </Link>
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
        related: state.related
    }
})(Home);