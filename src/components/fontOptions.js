import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import store from "./../store/store";
import { updateFont } from "./../store/actions";
import config from "./../config";

const styles = {
    btn: {
        margin: "5px 13px",
        cursor: "pointer"
    },
    btn_narrow: {
        margin: "5px 5px",
        cursor: "pointer"
    }
};

export default function FontOptions(props) {
    // console.log(props);

    const handleChangeFontSize = (event, newValue) => {
        store.dispatch(updateFont({ size: newValue }));
    };

    const changeFontSize = (delta) => {
        let newVal = Math.min(props.config.maxFontSize, Math.max(props.config.minFontSize, props.font.size + delta));
        store.dispatch(updateFont({ size: newVal }));
    };

    const handleChangeFontWeight = (event, newValue) => {
        store.dispatch(updateFont({ weight: newValue * 10 }));
    };

    const changeFontWeight = (delta) => {
        let newVal = Math.min(900, Math.max(100, props.font.weight + delta));
        store.dispatch(updateFont({ weight: newVal }));
    };

    const handleChangeShadow = (event, newValue) => {
        store.dispatch(updateFont({ shadow: newValue }));
    };

    const changeFontShadow = (delta) => {
        let newVal = Math.min(props.config.maxTextShadowSize, Math.max(props.config.minTextShadowSize, props.font.shadow + delta));
        store.dispatch(updateFont({ shadow: newVal }));
    };

    const handleChangeBlur = (event, newValue) => {
        store.dispatch(updateFont({ blur: newValue }));
    };

    const changeFontBlur = (delta) => {
        let newVal = Math.min(props.config.maxBlurLevel, Math.max(props.config.minBlurLevel, props.font.blur + delta));
        store.dispatch(updateFont({ blur: newVal }));
    };

    const changeAllignment = (value) => {
        store.dispatch(updateFont({ allignment: value }));
    };

    const toggleBold = () => {
        store.dispatch(
            updateFont({ weight: props.font.weight >= 600 ? 200 : 700 })
        );
    };

    const toggleItalic = () => {
        store.dispatch(
            updateFont({
                italic: props.font.italic === "italic" ? "normal" : "italic"
            })
        );
    };

    const toggleUnderline = () => {
        store.dispatch(
            updateFont({
                underline: props.font.underline === "underline" ? "none" : "underline"
            })
        );
    };

    const handleChangeFont = (event) => {
        store.dispatch(updateFont({ family: event.target.value }));
    };

    return (
        <div>
            <div
                style={{
                    width: props.ui.width > config.boundary.font_options ? "70%" : "100%",
                    borderRight:
                        props.ui.width > config.boundary.font_options
                            ? "1px solid #777"
                            : "none",
                    boxSizing: "border-box",
                    height: 300,
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        textAlign: "center"
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#444",
                            color: "#eee",
                            display: "inline-block",
                            border: "1px solid #eee",
                            borderRadius: 3,
                            padding: 0,
                            margin: "20px auto 10px",
                            position: "relative",
                            left: 3
                        }}
                    >
                        <FormatAlignLeftIcon
                            style={
                                props.ui.width > config.boundary.font_options
                                    ? {
                                        ...styles.btn,
                                        color:
                                            props.font.allignment === "left" ? "#14a6fb" : "#eee"
                                    }
                                    : {
                                        ...styles.btn_narrow,
                                        color:
                                            props.font.allignment === "left" ? "#14a6fb" : "#eee"
                                    }
                            }
                            onClick={() => {
                                changeAllignment("left");
                            }}
                        />
                        <FormatAlignCenterIcon
                            style={
                                props.ui.width > config.boundary.font_options
                                    ? {
                                        ...styles.btn,
                                        color:
                                            props.font.allignment === "center" ? "#14a6fb" : "#eee"
                                    }
                                    : {
                                        ...styles.btn_narrow,
                                        color:
                                            props.font.allignment === "center" ? "#14a6fb" : "#eee"
                                    }
                            }
                            onClick={() => {
                                changeAllignment("center");
                            }}
                        />
                        <FormatAlignRightIcon
                            style={
                                props.ui.width > config.boundary.font_options
                                    ? {
                                        ...styles.btn,
                                        color:
                                            props.font.allignment === "right" ? "#14a6fb" : "#eee"
                                    }
                                    : {
                                        ...styles.btn_narrow,
                                        color:
                                            props.font.allignment === "right" ? "#14a6fb" : "#eee"
                                    }
                            }
                            onClick={() => {
                                changeAllignment("right");
                            }}
                        />
                        <FormatAlignJustifyIcon
                            style={
                                props.ui.width > config.boundary.font_options
                                    ? {
                                        ...styles.btn,
                                        color:
                                            props.font.allignment === "justify" ? "#14a6fb" : "#eee"
                                    }
                                    : {
                                        ...styles.btn_narrow,
                                        color:
                                            props.font.allignment === "justify" ? "#14a6fb" : "#eee"
                                    }
                            }
                            onClick={() => {
                                changeAllignment("justify");
                            }}
                        />
                        <div
                            style={{
                                display: "inline-block",
                                height: 36,
                                width: 1,
                                marginTop: 2,
                                backgroundColor: "#eee",
                                marginLeft: 6,
                                marginRight: 3
                            }}
                        ></div>
                        <FormatBoldIcon
                            style={
                                props.ui.width > config.boundary.font_options
                                    ? {
                                        ...styles.btn,
                                        color: props.font.weight >= 600 ? "#14a6fb" : "#eee"
                                    }
                                    : {
                                        ...styles.btn_narrow,
                                        color: props.font.weight >= 600 ? "#14a6fb" : "#eee"
                                    }
                            }
                            onClick={toggleBold}
                        />
                        <FormatItalicIcon
                            style={
                                props.ui.width > config.boundary.font_options
                                    ? {
                                        ...styles.btn,
                                        color: props.font.italic === "italic" ? "#14a6fb" : "#eee"
                                    }
                                    : {
                                        ...styles.btn_narrow,
                                        color: props.font.italic === "italic" ? "#14a6fb" : "#eee"
                                    }
                            }
                            onClick={toggleItalic}
                        />
                        <FormatUnderlinedIcon
                            style={
                                props.ui.width > config.boundary.font_options
                                    ? {
                                        ...styles.btn,
                                        color:
                                            props.font.underline === "underline"
                                                ? "#14a6fb"
                                                : "#eee"
                                    }
                                    : {
                                        ...styles.btn,
                                        color:
                                            props.font.underline === "underline"
                                                ? "#14a6fb"
                                                : "#eee"
                                    }
                            }
                            onClick={toggleUnderline}
                        />
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            width: "88%",
                            marginLeft: "7.3%"
                        }}
                    >
                        <FormControl fullWidth>
                            <InputLabel
                                id="select-font-family-label"
                                style={{ color: "#eee" }}
                            >
                                Choose Font
                            </InputLabel>
                            <Select
                                labelId="select-font-family-label"
                                // id="demo-simple-select"
                                value={props.font.family}
                                onChange={handleChangeFont}
                                style={{
                                    color: "#aaa"
                                }}
                            >
                                <MenuItem value={"Ubuntu"}>Ubuntu</MenuItem>
                                <MenuItem value={"metropolis"}>Metropolis</MenuItem>
                                <MenuItem value={"arial"}>Arial</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <table
                    cellPadding={0}
                    style={{
                        width: "100%"
                    }}
                >
                    <tbody>
                        <tr>
                            <td
                                style={{
                                    textAlign: "left",
                                    paddingLeft: 30,
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -0
                                }}
                            >
                                Font Size
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -0
                                }}
                            >
                                {props.font.size} px
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -0
                                }}
                            >
                                <div
                                    style={{
                                        width:
                                            props.ui.width > config.boundary.font_options ? 120 : 80,
                                        display: "inline-block",
                                        paddingTop: 0
                                    }}
                                >
                                    <Slider
                                        value={props.font.size}
                                        onChange={handleChangeFontSize}
                                        aria-labelledby="continuous-slider"
                                        min={props.config.minFontSize}
                                        max={props.config.maxFontSize}
                                    />
                                </div>
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -0
                                }}
                            >
                                <div
                                    style={{
                                        paddingTop: 0
                                    }}
                                >
                                    <Button
                                        onClick={() => changeFontSize(-props.config.fontSizeDelta)}
                                        style={{
                                            maxWidth: "30px",
                                            maxHeight: "30px",
                                            minWidth: "30px",
                                            minHeight: "30px"
                                        }}
                                        color="primary"
                                    >
                                        <span style={{ fontSize: 22 }}>−</span>
                                    </Button>
                                    <Button
                                        onClick={() => changeFontSize(props.config.fontSizeDelta)}
                                        style={{
                                            maxWidth: "30px",
                                            maxHeight: "30px",
                                            minWidth: "30px",
                                            minHeight: "30px"
                                        }}
                                        color="primary"
                                    >
                                        <span style={{ fontSize: 22 }}>+</span>
                                    </Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    textAlign: "left",
                                    paddingLeft: 30,
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -10
                                }}
                            >
                                Font Weight
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -10
                                }}
                            >
                                {props.font.weight}
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -10
                                }}
                            >
                                <div
                                    style={{
                                        width:
                                            props.ui.width > config.boundary.font_options ? 120 : 80,
                                        display: "inline-block",
                                        paddingTop: 0
                                    }}
                                >
                                    <Slider
                                        defaultValue={props.font.weight / 10}
                                        value={props.font.weight / 10}
                                        onChange={handleChangeFontWeight}
                                        aria-labelledby="discrete-slider"
                                        step={10}
                                        // marks
                                        min={10}
                                        max={90}
                                    />
                                </div>
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -10
                                }}
                            >
                                <div
                                    style={{
                                        paddingTop: 0
                                    }}
                                >
                                    <Button
                                        onClick={() => changeFontWeight(-100)}
                                        style={{
                                            maxWidth: "30px",
                                            maxHeight: "30px",
                                            minWidth: "30px",
                                            minHeight: "30px"
                                        }}
                                        color="primary"
                                    >
                                        <span style={{ fontSize: 22 }}>−</span>
                                    </Button>
                                    <Button
                                        onClick={() => changeFontWeight(100)}
                                        style={{
                                            maxWidth: "30px",
                                            maxHeight: "30px",
                                            minWidth: "30px",
                                            minHeight: "30px"
                                        }}
                                        color="primary"
                                    >
                                        <span style={{ fontSize: 22 }}>+</span>
                                    </Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    textAlign: "left",
                                    paddingLeft: 30,
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -20
                                }}
                            >
                                Text Shadow
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -20
                                }}
                            >
                                {props.font.shadow} px
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -20
                                }}
                            >
                                <div
                                    style={{
                                        width:
                                            props.ui.width > config.boundary.font_options ? 120 : 80,
                                        display: "inline-block",
                                        paddingTop: 0
                                    }}
                                >
                                    <Slider
                                        defaultValue={props.font.shadow}
                                        value={props.font.shadow}
                                        onChange={handleChangeShadow}
                                        aria-labelledby="continuous-slider"
                                        min={props.config.minTextShadowSize}
                                        max={props.config.maxTextShadowSize}
                                    />
                                </div>
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -20
                                }}
                            >
                                <div
                                    style={{
                                        paddingTop: 0
                                    }}
                                >
                                    <Button
                                        onClick={() => changeFontShadow(-props.config.textShadowSizeDelta)}
                                        style={{
                                            maxWidth: "30px",
                                            maxHeight: "30px",
                                            minWidth: "30px",
                                            minHeight: "30px"
                                        }}
                                        color="primary"
                                    >
                                        <span style={{ fontSize: 22 }}>−</span>
                                    </Button>
                                    <Button
                                        onClick={() => changeFontShadow(props.config.textShadowSizeDelta)}
                                        style={{
                                            maxWidth: "30px",
                                            maxHeight: "30px",
                                            minWidth: "30px",
                                            minHeight: "30px"
                                        }}
                                        color="primary"
                                    >
                                        <span style={{ fontSize: 22 }}>+</span>
                                    </Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                    textAlign: "left",
                                    paddingLeft: 30,
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -30
                                }}
                            >
                                Blur Level
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -30
                                }}
                            >
                                {props.font.blur} px
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -30
                                }}
                            >
                                <div
                                    style={{
                                        width:
                                            props.ui.width > config.boundary.font_options ? 120 : 80,
                                        display: "inline-block",
                                        paddingTop: 0
                                    }}
                                >
                                    <Slider
                                        defaultValue={props.font.blur}
                                        value={props.font.blur}
                                        onChange={handleChangeBlur}
                                        aria-labelledby="continuous-slider"
                                        min={props.config.minBlurLevel}
                                        max={props.config.maxBlurLevel}
                                    />
                                </div>
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -30
                                }}
                            >
                                <div
                                    style={{
                                        paddingTop: 0
                                    }}
                                >
                                    <Button
                                        onClick={() => changeFontBlur(-props.config.blurLevelDelta)}
                                        style={{
                                            maxWidth: "30px",
                                            maxHeight: "30px",
                                            minWidth: "30px",
                                            minHeight: "30px"
                                        }}
                                        color="primary"
                                    >
                                        <span style={{ fontSize: 22 }}>−</span>
                                    </Button>
                                    <Button
                                        onClick={() => changeFontBlur(props.config.blurLevelDelta)}
                                        style={{
                                            maxWidth: "30px",
                                            maxHeight: "30px",
                                            minWidth: "30px",
                                            minHeight: "30px"
                                        }}
                                        color="primary"
                                    >
                                        <span style={{ fontSize: 22 }}>+</span>
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div
                style={{
                    width: "30%",
                    // backgroundColor: "red",
                    position: "absolute",
                    top: 50,
                    right: 0,
                    visibility:
                        props.ui.width > config.boundary.font_options ? "visible" : "hidden"
                }}
            >
                <h4
                    style={{
                        textAlign: "center",
                        fontWeight: 600,
                        fontSize: 20,
                        margin: "20px 0 0",
                        color: "#14a6fb"
                    }}
                >
                    PREVIEW
                </h4>
                <p
                    style={{
                        padding: 10,
                        margin: 0,
                        height: 170,
                        overflow: "hidden",
                        fontSize: props.font.size,
                        fontWeight: props.font.weight,
                        textShadow: (props.font.shadow || props.font.blur) ? `${props.font.shadow}px ${props.font.shadow}px ${props.font.blur}px red` : "none",
                        textAlign: props.font.allignment,
                        fontStyle: props.font.italic,
                        textDecoration: props.font.underline
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                    odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                </p>
            </div>
        </div>
    );
}
