import { useLayoutEffect, useState } from "react";
import store from "./store/store";
import { updateUI } from "./store/actions";

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
            store.dispatch(updateUI({
                height: window.innerHeight,
                width: window.innerWidth
            }));
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
}

export default useWindowSize;