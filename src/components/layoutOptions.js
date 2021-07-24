import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import store from "./../store/store";
import { updateLayout, updateFont } from "./../store/actions";
import config from "./../config";

export default function LayoutOptions(props) {
    console.log(props);

    const handleChangeParagraphSpacing = (event, newValue) => {
        store.dispatch(updateLayout({ paragraphSpacing: newValue }));
    };

    const changeParagraphSpacing = (delta) => {
        let newVal = Math.min(props.config.maxParagraphSpacing, Math.max(props.config.minParagraphSpacing, props.layout.paragraphSpacing + delta));
        store.dispatch(updateLayout({ paragraphSpacing: newVal }));
    };

    const handleChangeLineSpacing = (event, newValue) => {
        store.dispatch(updateLayout({ lineSpacing: newValue }));
    };

    const changeLineSpacing = (delta) => {
        let newVal = Math.min(props.config.maxLineSpacing, Math.max(props.config.minLineSpacing, props.layout.lineSpacing + delta));
        store.dispatch(updateLayout({ lineSpacing: newVal }));
    };

    const handleChangeWordSpacing = (event, newValue) => {
        store.dispatch(updateLayout({ wordSpacing: newValue }));
    };

    const changeWordSpacing = (delta) => {
        let newVal = Math.min(props.config.maxWordSpacing, Math.max(props.config.minWordSpacing, props.layout.wordSpacing + delta));
        store.dispatch(updateLayout({ wordSpacing: newVal }));
    };

    const handleChangeFontSpacing = (event, newValue) => {
        store.dispatch(updateLayout({ fontSpacing: newValue }));
    };

    const changeFontSpacing = (delta) => {
        let newVal = Math.min(props.config.maxFontSpacing, Math.max(props.config.minFontSpacing, props.layout.fontSpacing + delta));
        store.dispatch(updateLayout({ fontSpacing: newVal }));
    };

    const handleChangeMarginTop = (event, newValue) => {
        store.dispatch(updateLayout({ marginTop: newValue }));
    };

    const changeMarginTop = (delta) => {
        let newVal = Math.min(props.config.maxMarginTop, Math.max(props.config.minMarginTop, props.layout.marginTop + delta));
        store.dispatch(updateLayout({ marginTop: newVal }));
    };

    const handleChangeMarginLeft = (event, newValue) => {
        store.dispatch(updateLayout({ marginLeft: newValue }));
    };

    const changeMarginLeft = (delta) => {
        let newVal = Math.min(props.config.maxMarginLeft, Math.max(props.config.minMarginLeft, props.layout.marginLeft + delta));
        store.dispatch(updateLayout({ marginLeft: newVal }));
    };

    const handleChangeMarginRight = (event, newValue) => {
        store.dispatch(updateLayout({ marginRight: newValue }));
    };

    const changeMarginRight = (delta) => {
        let newVal = Math.min(props.config.maxMarginRight, Math.max(props.config.minMarginRight, props.layout.marginRight + delta));
        store.dispatch(updateLayout({ marginRight: newVal }));
    };

    const handleChangeMarginBottom = (event, newValue) => {
        store.dispatch(updateLayout({ marginBottom: newValue }));
    };

    const changeMarginBottom = (delta) => {
        let newVal = Math.min(props.config.maxMarginBottom, Math.max(props.config.minMarginBottom, props.layout.marginBottom + delta));
        store.dispatch(updateLayout({ marginBottom: newVal }));
    };


    // alert(props.ui.isMobile);

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
                    paddingTop: 15,
                    overflow: "hidden"
                }}
            >
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
                                    top: !props.ui.isMobile ? 0 : -10,
                                    fontSize: 13
                                }}
                            >
                                Paragraph Spacing
              </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -10
                                }}
                            >
                                {props.layout.paragraphSpacing} px
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
                                        value={props.layout.paragraphSpacing}
                                        onChange={handleChangeParagraphSpacing}
                                        aria-labelledby="continuous-slider"
                                        min={props.config.minParagraphSpacing}
                                        max={props.config.maxParagraphSpacing}
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
                                        onClick={() => changeParagraphSpacing(-props.config.paragraphSpacingDelta)}
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
                                        onClick={() => changeParagraphSpacing(props.config.paragraphSpacingDelta)}
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
                                    top: !props.ui.isMobile ? 0 : -25
                                }}
                            >
                                Line Spacing
              </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -25
                                }}
                            >
                                {props.layout.lineSpacing} px
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -25
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
                                        value={props.layout.lineSpacing}
                                        onChange={handleChangeLineSpacing}
                                        aria-labelledby="continuous-slider"
                                        min={props.config.minLineSpacing}
                                        max={props.config.maxLineSpacing}
                                    />
                                </div>
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -25
                                }}
                            >
                                <div
                                    style={{
                                        paddingTop: 0
                                    }}
                                >
                                    <Button
                                        onClick={() => changeLineSpacing(-props.config.lineSpacingDelta)}
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
                                        onClick={() => changeLineSpacing(props.config.lineSpacingDelta)}
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
                                    top: !props.ui.isMobile ? 0 : -40
                                }}
                            >
                                Word Spacing
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -40
                                }}
                            >
                                {props.layout.wordSpacing} px
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -40
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
                                        defaultValue={props.layout.wordSpacing}
                                        value={props.layout.wordSpacing}
                                        onChange={handleChangeWordSpacing}
                                        aria-labelledby="continuous-slider"
                                        min={props.config.minWordSpacing}
                                        max={props.config.maxWordSpacing}
                                    />
                                </div>
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -40
                                }}
                            >
                                <div
                                    style={{
                                        paddingTop: 0
                                    }}
                                >
                                    <Button
                                        onClick={() => changeWordSpacing(-props.config.wordSpacingDelta)}
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
                                        onClick={() => changeWordSpacing(props.config.wordSpacingDelta)}
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
                                    top: !props.ui.isMobile ? 0 : -55
                                }}
                            >
                                Font Spacing
              </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -55
                                }}
                            >
                                {props.layout.fontSpacing} px
              </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -55
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
                                        defaultValue={props.layout.fontSpacing}
                                        value={props.layout.fontSpacing}
                                        onChange={handleChangeFontSpacing}
                                        aria-labelledby="continuous-slider"
                                        min={props.config.minFontSpacing}
                                        max={props.config.maxFontSpacing}
                                    />
                                </div>
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -55
                                }}
                            >
                                <div
                                    style={{
                                        paddingTop: 0
                                    }}
                                >
                                    <Button
                                        onClick={() => changeFontSpacing(-props.config.fontSpacingDelta)}
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
                                        onClick={() => changeFontSpacing(props.config.fontSpacingDelta)}
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
                <hr
                    style={{
                        margin: "5px auto",
                        width: "100%",
                        height: 0,
                        border: "none",
                        backgroundColor: "#777"
                    }}
                />
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
                                    top: !props.ui.isMobile ? 0 : -70
                                }}
                            >
                                Top Margin
              </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -70
                                }}
                            >
                                {props.layout.marginTop} px
              </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -70
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
                                        value={props.layout.marginTop}
                                        onChange={handleChangeMarginTop}
                                        aria-labelledby="continuous-slider"
                                        min={props.config.minMarginTop}
                                        max={props.config.maxMarginTop}
                                    />
                                </div>
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -70
                                }}
                            >
                                <div
                                    style={{
                                        paddingTop: 0
                                    }}
                                >
                                    <Button
                                        onClick={() => changeMarginTop(-props.config.marginTopDelta)}
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
                                        onClick={() => changeMarginTop(props.config.marginTopDelta)}
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
                                    top: !props.ui.isMobile ? 0 : -85
                                }}
                            >
                                Left Margin
              </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -85
                                }}
                            >
                                {props.layout.marginLeft} px
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -85
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
                                        value={props.layout.marginLeft}
                                        onChange={handleChangeMarginLeft}
                                        aria-labelledby="continuous-slider"
                                        min={props.config.minMarginLeft}
                                        max={props.config.maxMarginLeft}
                                    />
                                </div>
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -85
                                }}
                            >
                                <div
                                    style={{
                                        paddingTop: 0
                                    }}
                                >
                                    <Button
                                        onClick={() => changeMarginLeft(-props.config.marginLeftDelta)}
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
                                        onClick={() => changeMarginLeft(props.config.marginLeftDelta)}
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
                                    top: !props.ui.isMobile ? 0 : -100
                                }}
                            >
                                Right Margin
              </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -100
                                }}
                            >
                                {props.layout.marginRight} px
              </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -100
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
                                        value={props.layout.marginRight}
                                        onChange={handleChangeMarginRight}
                                        aria-labelledby="continuous-slider"
                                        min={props.config.minMarginRight}
                                        max={props.config.maxMarginRight}
                                    />
                                </div>
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -100
                                }}
                            >
                                <div
                                    style={{
                                        paddingTop: 0
                                    }}
                                >
                                    <Button
                                        onClick={() => changeMarginRight(-props.config.marginRightDelta)}
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
                                        onClick={() => changeMarginRight(props.config.marginRightDelta)}
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
                                    top: !props.ui.isMobile ? 0 : -115
                                }}
                            >
                                Bottom Margin
              </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -115
                                }}
                            >
                                {props.layout.marginBottom} px
              </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -115
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
                                        value={props.layout.marginBottom}
                                        onChange={handleChangeMarginBottom}
                                        aria-labelledby="continuous-slider"
                                        min={props.config.minMarginBottom}
                                        max={props.config.maxMarginBottom}
                                    />
                                </div>
                            </td>
                            <td
                                style={{
                                    textAlign: "center",
                                    position: "relative",
                                    top: !props.ui.isMobile ? 0 : -115
                                }}
                            >
                                <div
                                    style={{
                                        paddingTop: 0
                                    }}
                                >
                                    <Button
                                        onClick={() => changeMarginBottom(-props.config.marginBottomDelta)}
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
                                        onClick={() => changeMarginBottom(props.config.marginBottomDelta)}
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
                        textShadow: `${props.font.shadow}px ${props.font.shadow}px ${props.font.blur}px red`,
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
