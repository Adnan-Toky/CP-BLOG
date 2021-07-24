import defaultState from "./defaultState";

const uiReducer = (state = defaultState.ui, action) => {
    switch (action.type) {
        case "UPDATE_UI":
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

const fontReducer = (state = defaultState.font, action) => {
    switch (action.type) {
        case "UPDATE_FONT":
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

const layoutReducer = (state = defaultState.layout, action) => {
    switch (action.type) {
        case "UPDATE_LAYOUT":
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

const themeReducer = (state = defaultState.theme, action) => {
    switch (action.type) {
        case "UPDATE_THEME":
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

const configReducer = (state = defaultState.config, action) => {
    switch (action.type) {
        case "UPDATE_CONFIG":
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

const readingReducer = (state = defaultState.reading, action) => {
    switch (action.type) {
        case "UPDATE_READING":
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

const postReducer = (state = defaultState.post, action) => {
    switch (action.type) {
        case "UPDATE_POST":
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};



export { uiReducer, fontReducer, layoutReducer, themeReducer, configReducer, readingReducer, postReducer };