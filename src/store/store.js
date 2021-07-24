import { createStore, combineReducers } from "redux";
import { uiReducer, fontReducer, layoutReducer, themeReducer, configReducer, readingReducer, postReducer } from "./reducers";

const store = createStore(
    combineReducers({
        config: configReducer,
        ui: uiReducer,
        font: fontReducer,
        layout: layoutReducer,
        theme: themeReducer,
        reading: readingReducer,
        post: postReducer
    })
);

export default store;