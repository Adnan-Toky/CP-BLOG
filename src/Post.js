import Settings from "./reader";
import store from "./store/store";
import { updatePost, updateRelatedPostList } from "./store/actions"
import {
    BrowserRouter as Router,
    Link,
    useLocation,
    useParams
} from "react-router-dom";
import config from "./config";
import React from "react";
import Loader from "./components/loader";
import PostLoadFailed from "./components/postLoadFailed";
import { db } from "./firebase";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Post() {

    // let query = useQuery();
    let { id } = useParams();

    return <PostPage query={id} />
}

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            status: false,
            failed: false
        }
        this.loadDoc = this.loadDoc.bind(this);
    }

    loadDoc() {
        if (this.state.status || this.state.failed) return;
        let query = this.props.query;
        let t = this;
        let relatedPosts = {
            posts: []
        };
        db.doc(`posts/${query}`).get().then((snapshot) => {
            if (!snapshot.data()) {
                this.setState({
                    loading: false,
                    status: false,
                    failed: true
                });
            }
            else {

                db.doc(`posts/${query}/data/${query}`).get().then((snapshot2) => {
                    if (!snapshot2.data()) {
                        this.setState({
                            loading: false,
                            status: false,
                            failed: true
                        });
                    }
                    else {
                        let obj = snapshot.data();
                        obj.content = snapshot2.data().content;
                        store.dispatch(updatePost(obj));
                        t.setState({
                            status: true,
                            loading: false
                        });

                        if (window.hljs) window.hljs.highlightAll();

                        for (let id in snapshot2.data().related) {
                            db.doc(`posts/${snapshot2.data().related[id]}`).get().then((ss) => {
                                relatedPosts.posts.push(ss.data());
                                store.dispatch(updateRelatedPostList(relatedPosts));
                            })
                        }

                        db.doc(`posts/${query}`).update({
                            view: obj.view + 1
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                })
            }
        }).catch((error) => {
            console.log(error, 1);
            this.setState({
                loading: false,
                status: false,
                failed: true
            })
        });
        console.log("data load...");
    }

    componentDidMount() {


        this.loadDoc();

        // var xhttp = new XMLHttpRequest();
        // let parent = this;
        // xhttp.onreadystatechange = function () {
        //     if (this.readyState === 4 && this.status === 200) {
        //         let data = JSON.parse(this.responseText);
        //         parent.setState({ loading: false });
        //         if (data.status) {
        //             store.dispatch(updatePost(data.data));
        //             parent.setState({ status: true });
        //         }
        //         else {
        //             parent.setState({ status: false });
        //         }
        //         // console.log(data);
        //     }
        //     else if (this.readyState === 4) {
        //         parent.setState({
        //             loading: false,
        //             status: false
        //         })
        //     }
        // };
        // xhttp.open(
        //     "GET",
        //     `${ config.url } / php / posts / index.php ? id = ${ query.get('id') }`,
        //     // `${ config.url }blog / php / posts /? id = ${ query.get('id') }`,
        //     true
        // );
        // this.setState({ loading: true });
        // xhttp.send();
        // window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        this.loadDoc();
        // if (this.props.query != prevProps.query) {
        //     let query = this.props.query;
        //     var xhttp = new XMLHttpRequest();
        //     let parent = this;
        //     xhttp.onreadystatechange = function () {
        //         if (this.readyState === 4 && this.status === 200) {
        //             let data = JSON.parse(this.responseText);
        //             parent.setState({ loading: false });
        //             if (data.status) {
        //                 store.dispatch(updatePost(data.data));
        //                 parent.setState({ status: true });
        //                 window.scrollTo(0, 0);
        //             }
        //             else {
        //                 parent.setState({ status: false });
        //             }
        //             // console.log(data);
        //         }
        //         else if (this.readyState === 4) {
        //             parent.setState({
        //                 loading: false,
        //                 status: false
        //             })
        //         }
        //     };
        //     xhttp.open(
        //         "GET",
        //         `${ config.url }php / posts / index.php ? id = ${ query.get('id') }`,
        //         // `${ config.url }blog / php / posts /? id = ${ query.get('id') }`,
        //         true
        //     );
        //     this.setState({ loading: true });
        //     xhttp.send();
        //     window.scrollTo(0, 0);
        // }
    }

    render() {
        return (
            <>
                <PostLoadFailed open={!this.state.loading && !this.state.status} />
                <Loader open={this.state.loading} text="Fetching Post..." />
                <Settings />
            </>
        );
    }
}

export default Post;