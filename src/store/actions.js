const updateUI = (data) => ({
    type: "UPDATE_UI",
    data
});

const updateFont = (data) => ({
    type: "UPDATE_FONT",
    data
});

const updateLayout = (data) => ({
    type: "UPDATE_LAYOUT",
    data
});

const updateTheme = (data) => ({
    type: "UPDATE_THEME",
    data
});

const updateConfig = (data) => ({
    type: "UPDATE_CONFIG",
    data
});

const updateReading = (data) => ({
    type: "UPDATE_READING",
    data
});

const updatePost = (data) => ({
    type: "UPDATE_POST",
    data
});


export { updateUI, updateFont, updateLayout, updateTheme, updateConfig, updateReading, updatePost };