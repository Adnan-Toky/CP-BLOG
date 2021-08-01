import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import useWindowSize from "./useWindowSize";
import { updateUI } from "./store/actions";
import store from "./store/store";
import config from "./config";
import FontOptions from "./components/fontOptions";
import LayoutOptions from "./components/layoutOptions";
import ThemeOptions from "./components/themeOptions";
import Brightness4Icon from '@material-ui/icons/Brightness4';

import Page from "./components/page";
import Header from "./components/header";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: "#222",
        color: "#fff",
        borderRadius: 0,
        // width: "70%"
    },
    tabIndicator: {
        backgroundColor: "#14a6fb"
    },
    tabCntRootDialog: {
        // color: "#14a6fb",
        color: "#fff",
        backgroundColor: "#222",
        boxShadow: "0px 1px 6px #555",
        marginTop: -20,
        width: 600
    },
    tabCntRootDrawer: {
        color: "#fff",
        backgroundColor: "#222",
        boxShadow: "0px 1px 6px #555",
        // marginTop: -20,
        // width: 600
    },
    tabRoot: {
        width: "25%",
        minWidth: "25%"
    },
    dialogRoot: {
        backgroundColor: "#000",
        color: "#fff",
        padding: 0,
        margin: 0
    }
});

function Settings(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        // alert(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                classes={{
                    root: (props.type === "dialog") ? classes.tabCntRootDialog : classes.tabCntRootDrawer,
                    indicator: classes.tabIndicator
                }}
            >
                <Tab label="THEME" classes={{ root: classes.tabRoot }} />
                <Tab label="FONT" classes={{ root: classes.tabRoot }} />
                <Tab label="LAYOUT" classes={{ root: classes.tabRoot }} />
                <Tab label="MORE" classes={{ root: classes.tabRoot }} />
            </Tabs>
            <div
                style={{
                    margin: 0,
                    height: 300
                }}
            >
                {value === 2 ? <LayoutOptions {...props} /> : (value === 0) ? <ThemeOptions {...props} /> : <FontOptions {...props} />}
            </div>
        </Paper>
    );
}

function SettingsDialog(props) {
    const classes = useStyles();

    const handleClose = () => {
        store.dispatch(updateUI({ dialog: false }));
    };

    return (
        <React.Fragment>
            <Dialog
                open={props.ui.dialog}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"

            >
                <DialogContent className={classes.dialogRoot}>
                    <Settings {...props} />
                </DialogContent>
                <DialogActions className={classes.dialogRoot}>
                    <Button onClick={handleClose} style={{ color: "#eee" }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

function SettingsDrawer(props) {
    const [state, setState] = React.useState({
        opened: false
    });

    const handleClose = () => {
        store.dispatch(updateUI({ drawer: false }));
    };

    return (
        <div>
            <Drawer
                anchor="bottom"
                open={props.ui.drawer}
                onClose={handleClose}
            >
                <Settings {...props} />
            </Drawer>
        </div>
    );
}

function CustomizationWindow(props) {
    const [width, height] = useWindowSize();
    let fontColor = (props.theme.custom) ? props.theme.customFontColor : (props.theme.invert) ? props.theme.backgroundColor : props.theme.fontColor;
    let backgroundColor = (props.theme.custom) ? props.theme.customBackgroundColor : (props.theme.invert) ? props.theme.fontColor : props.theme.backgroundColor;

    const handleOpenDialog = () => {
        store.dispatch(updateUI({ dialog: true }));
    };

    const handleOpenDrawer = () => {
        store.dispatch(updateUI({ drawer: true }));
    };

    return (
        <div>
            <Header {...props} />
            {/* {props.ui.width}x{props.ui.height} */}
            <Fab
                onClick={() => {
                    if (props.ui.width > config.boundary.width) handleOpenDialog();
                    else handleOpenDrawer();
                }}
                style={{
                    position: "fixed",
                    right: props.ui.width > 1000 ? props.ui.width * 0.30 + 20 : 20,
                    bottom: 20,
                    color: backgroundColor,
                    backgroundColor: fontColor,
                    zIndex: 100
                }}
            >
                <Brightness4Icon />
            </Fab>
            <Page {...props} />
            <SettingsDialog {...props} type="dialog" />
            <SettingsDrawer {...props} type="drawer" />
        </div>
    )
}

export default connect(state => {
    return {
        ui: state.ui,
        font: state.font,
        layout: state.layout,
        theme: state.theme,
        config: state.config,
        reading: state.reading,
        post: state.post
    }
})(CustomizationWindow);
