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

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Post() {
    let query = useQuery();

    return <PostPage query={query} />
}

class PostPage extends React.Component {
    componentDidMount() {
        let query = this.props.query;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let data = JSON.parse(this.responseText);
                if (data.status) {
                    store.dispatch(updatePost(data.data));
                }
                // console.log(data);
            }
            // else console.log(this);
        };
        xhttp.open(
            "GET",
            `${config.url}/php/posts/index.php?id=${query.get('id')}`,
            // `${config.url}blog/php/posts/?id=${query.get('id')}`,
            true
        );
        xhttp.send();
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (this.props.query != prevProps.query) {
            let query = this.props.query;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    let data = JSON.parse(this.responseText);
                    if (data.status) {
                        store.dispatch(updatePost(data.data));
                    }
                    // console.log(data);
                }
                // else console.log(this);
            };
            xhttp.open(
                "GET",
                `${config.url}php/posts/index.php?id=${query.get('id')}`,
                // `${config.url}blog/php/posts/?id=${query.get('id')}`,
                true
            );
            xhttp.send();
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <Settings />
        );
    }
}

export default Post;