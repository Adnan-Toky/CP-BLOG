import Settings from "./reader";
import store from "./store/store";
import { updatePost } from "./store/actions"
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";
import config from "./config";
import React from "react";
import Loader from "./components/loader";
import PostLoadFailed from "./components/postLoadFailed";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Post() {
    let query = useQuery();

    return <PostPage query={query} />
}

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            status: false
        }
    }

    componentDidMount() {
        let query = this.props.query;
        var xhttp = new XMLHttpRequest();
        let parent = this;
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let data = JSON.parse(this.responseText);
                parent.setState({ loading: false });
                if (data.status) {
                    store.dispatch(updatePost(data.data));
                    parent.setState({ status: true });
                }
                else {
                    parent.setState({ status: false });
                }
                // console.log(data);
            }
            else if (this.readyState === 4) {
                parent.setState({
                    loading: false,
                    status: false
                })
            }
        };
        xhttp.open(
            "GET",
            `${config.url}/php/posts/index.php?id=${query.get('id')}`,
            // `${config.url}blog/php/posts/?id=${query.get('id')}`,
            true
        );
        this.setState({ loading: true });
        xhttp.send();
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (this.props.query != prevProps.query) {
            let query = this.props.query;
            var xhttp = new XMLHttpRequest();
            let parent = this;
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    let data = JSON.parse(this.responseText);
                    parent.setState({ loading: false });
                    if (data.status) {
                        store.dispatch(updatePost(data.data));
                        parent.setState({ status: true });
                        window.scrollTo(0, 0);
                    }
                    else {
                        parent.setState({ status: false });
                    }
                    // console.log(data);
                }
                else if (this.readyState === 4) {
                    parent.setState({
                        loading: false,
                        status: false
                    })
                }
            };
            xhttp.open(
                "GET",
                `${config.url}php/posts/index.php?id=${query.get('id')}`,
                // `${config.url}blog/php/posts/?id=${query.get('id')}`,
                true
            );
            this.setState({ loading: true });
            xhttp.send();
            window.scrollTo(0, 0);
        }
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