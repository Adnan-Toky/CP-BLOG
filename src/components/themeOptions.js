import React from 'react';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
import store from './../store/store';
import { updateTheme } from './../store/actions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from "@material-ui/core/Button";
import ColorPopup from './colorPicker';


let themeList = [
    {
        color: "#000",
        backgroundColor: "#fff",
        shadowColor: "#00f",
        themeColor: "#f1f1f1"
    },
    {
        color: "#f1f2f3",
        backgroundColor: "#292929",
        shadowColor: "#00f",
        themeColor: "#292929"
    },
    {
        color: "#000",
        backgroundColor: "#f6ddb5",
        shadowColor: "#00f",
        themeColor: "#f6ddb5"
    },
    {
        color: "#f1f1f1",
        backgroundColor: "#58677c",
        shadowColor: "#00f",
        themeColor: "#58677c"
    },
    {
        color: "#738493",
        backgroundColor: "#b9ced3",
        shadowColor: "#00f",
        themeColor: "#b9ced3"
    },
    {
        color: "#ffffff",
        backgroundColor: "#1ba2ef",
        shadowColor: "#00f",
        themeColor: "#1ba2ef"
    },
    {
        color: "#292929",
        backgroundColor: "#53c5ff",
        shadowColor: "#00f",
        themeColor: "#53c5ff"
    },
    {
        color: "#292929",
        backgroundColor: "#ffae1d",
        shadowColor: "#00f",
        themeColor: "#ffae1d"
    },
    {
        color: "#292929",
        backgroundColor: "#FFEB3B",
        shadowColor: "#00f",
        themeColor: "#FFEB3B"
    },
    {
        color: "#292929",
        backgroundColor: "#FFCC80",
        shadowColor: "#00f",
        themeColor: "#FFCC80"
    },
    {
        color: "#e1e2e3",
        backgroundColor: "#e57373",
        shadowColor: "#00f",
        themeColor: "#e57373"
    },
    {
        color: "#292929",
        backgroundColor: "#ef9a9a",
        shadowColor: "#00f",
        themeColor: "#ef9a9a"
    },
    {
        color: "#292929",
        backgroundColor: "#F8BBD0",
        shadowColor: "#00f",
        themeColor: "#F8BBD0"
    },
    {
        color: "#121d2b",
        backgroundColor: "#c9e0e2",
        shadowColor: "#00f",
        themeColor: "#b9d0d2"
    },
    {
        color: "#121d2b",
        backgroundColor: "#A5D6A7",
        shadowColor: "#00f",
        themeColor: "#A5D6A7"
    },
    {
        color: "#121d2b",
        backgroundColor: "#B3E5FC",
        shadowColor: "#00f",
        themeColor: "#B3E5FC"
    },
];

function PickColor(props) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div style={{ display: "inline-block" }}>
            <Button style={{
                backgroundColor: props.value,
                height: 20,
                ...props.style
            }} onClick={() => { setOpen(true) }}></Button>
            <ColorPopup open={open} handleClose={handleClose} handlePick={props.handlePick} {...props} />
        </div>
    );
}

function ThemeOptions(props) {
    const active = (value) => {
        store.dispatch(updateTheme({
            activeTheme: value,
            fontColor: (props.theme.invert) ? themeList[value].backgroundColor : themeList[value].color,
            backgroundColor: (props.theme.invert) ? themeList[value].color : themeList[value].backgroundColor,
            shadowColor: themeList[value].themeColor
        }));
    }

    const invert = (event) => {
        store.dispatch(updateTheme({
            invert: event.target.checked
        }));
    }

    const useCustom = (event) => {
        store.dispatch(updateTheme({
            custom: event.target.checked
        }));
    }

    const handlePickFontColor = (color) => {
        console.log(color);
        store.dispatch(updateTheme({
            customFontColor: color
        }));
    }

    const handlePickBackgroundColor = (color) => {
        console.log(color);
        store.dispatch(updateTheme({
            customBackgroundColor: color
        }));
    }

    const handlePickShadowColor = (color) => {
        console.log(color);
        store.dispatch(updateTheme({
            customShadowColor: color
        }));
    }

    return (
        <div>
            <div style={{
                textAlign: "center",
                overflow: "hidden"
                // padding: 30
            }}>
                <div style={{
                    width: 410,
                    transform: (props.ui.width < 410) ? `scale(${props.ui.width / 410})` : "scale(1)",
                    msTransform: (props.ui.width < 410) ? `scale(${props.ui.width / 410})` : "scale(1)",
                    MozTransform: (props.ui.width < 410) ? `scale(${props.ui.width / 410})` : "scale(1)",
                    WebkitTransform: (props.ui.width < 410) ? `scale(${props.ui.width / 410})` : "scale(1)",
                    OTransform: (props.ui.width < 410) ? `scale(${props.ui.width / 410})` : "scale(1)",
                    transformOrigin: "0 0",
                    msTransformOrigin: "0 0",
                    MozTransformOrigin: "0 0",
                    WebkitTransformOrigin: "0 0",
                    OTransformOrigin: "0 0",
                    display: "inline-block",
                    marginTop: Math.max(5, Math.min(30, props.ui.width - 410)),
                    // backgroundColor: "red"
                }}>
                    {themeList.map((data, indx) => (
                        <Fab
                            key={indx}
                            size="small"
                            onClick={() => { active(indx) }}
                            style={{
                                backgroundColor: data.themeColor,
                                margin: 5,
                                color: "#fff"
                            }}
                        >
                            {(indx === props.theme.activeTheme) ? <DoneIcon /> : ""}
                        </Fab>
                    ))}
                </div>
            </div>
            <div style={{
                textAlign: "center",
                margin: 10,
                marginTop: (props.ui.width >= 425) ? 10 : -(100 - 100 * props.ui.width / 410),
                marginBottom: (props.ui.width >= 425) ? 10 : 0,
            }}>
                Invert Theme <FormControlLabel control={<Switch checked={props.theme.invert} />} onChange={invert} label="" style={{
                    margin: "0px 0px"
                }} />
            </div>
            <div style={{
                borderTop: "1px solid #000",
                borderBottom: "1px solid #000",
                padding: "8px 10px",
                height: 36,
                boxSizing: "border-box",
                position: "relative",
                marginBottom: 10
            }}>
                Use Custom Colors <span style={{
                    position: 'absolute',
                    right: 10,
                    top: 0
                }}><FormControlLabel control={<Switch checked={props.theme.custom} />} onChange={useCustom} label="" style={{
                    margin: "0px 0px"
                }} /></span>
            </div>
            {
                (props.ui.width >= 425) ?
                    <div style={{
                        paddingTop: 7
                    }}>
                        <div style={{
                            height: 50,
                            width: "30%",
                            display: "inline-block",
                            margin: "0.25%",
                            padding: 10,
                            boxSizing: "border-box",
                            position: "relative",
                            textAlign: "center",
                            top: props.ui.width >= 540 ? 0 : -15
                        }}>Font {props.ui.width >= 540 ? "" : <br />} <PickColor {...props} value={props.theme.customFontColor} handlePick={handlePickFontColor} style={{
                            marginLeft: props.ui.width >= 540 ? 10 : 0,
                            marginTop: props.ui.width >= 540 ? 0 : 10
                        }} /></div>
                        <div style={{
                            height: 50,
                            width: "35%",
                            display: "inline-block",
                            marginRight: "0.25%",
                            padding: 10,
                            boxSizing: "border-box",
                            position: "relative",
                            textAlign: "center",
                            top: props.ui.width >= 540 ? 0 : -15
                        }}>Background {props.ui.width >= 540 ? "" : <br />} <PickColor {...props} value={props.theme.customBackgroundColor} handlePick={handlePickBackgroundColor} style={{
                            marginLeft: props.ui.width >= 540 ? 10 : 0,
                            marginTop: props.ui.width >= 540 ? 0 : 10
                        }} /></div>
                        <div style={{
                            height: 50,
                            width: "34%",
                            display: "inline-block",
                            padding: 10,
                            boxSizing: "border-box",
                            position: "relative",
                            textAlign: "center",
                            top: props.ui.width >= 540 ? 0 : -15
                        }}>Shadow {props.ui.width >= 540 ? "" : <br />} <PickColor {...props} value={props.theme.customShadowColor} handlePick={handlePickShadowColor} style={{
                            marginLeft: props.ui.width >= 540 ? 10 : 0,
                            marginTop: props.ui.width >= 540 ? 0 : 10

                        }} /></div>
                    </div> :
                    <div>
                        <div style={{
                            padding: "5px 10px",
                            height: 36,
                            boxSizing: "border-box",
                            position: "relative",
                            marginBottom: 3
                        }}>
                            Font <span style={{
                                position: 'absolute',
                                right: 10,
                                top: 0
                            }}><PickColor {...props} value={props.theme.customFontColor} handlePick={handlePickFontColor} /></span>
                        </div>
                        <div style={{
                            padding: "5px 10px",
                            height: 36,
                            boxSizing: "border-box",
                            position: "relative",
                            marginBottom: 3
                        }}>
                            Background <span style={{
                                position: 'absolute',
                                right: 10,
                                top: 0
                            }}><PickColor {...props} value={props.theme.customBackgroundColor} handlePick={handlePickBackgroundColor} /></span>
                        </div>
                        <div style={{
                            padding: "5px 10px",
                            height: 36,
                            boxSizing: "border-box",
                            position: "relative",
                            marginBottom: 0
                        }}>
                            Shadow <span style={{
                                position: 'absolute',
                                right: 10,
                                top: 0
                            }}><PickColor {...props} value={props.theme.customShadowColor} handlePick={handlePickShadowColor} /></span>
                        </div>
                    </div>
            }



            {/* Background Color <PickColor {...props} value={props.theme.customBackgroundColor} handlePick={handlePickBackgroundColor} /> */}
        </div>
    )
}

export default ThemeOptions;