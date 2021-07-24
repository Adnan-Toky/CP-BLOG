import Settings from "./reader";
import store from "./store/store";
import { updatePost } from "./store/actions"
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Post() {
    let query = useQuery();

    // console.log(query.get("id"));

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
        `http://192.168.0.125/blog/php/posts/?id=${query.get('id')}`,
        true
    );
    xhttp.send();

    return (
        <Settings />
    );
}