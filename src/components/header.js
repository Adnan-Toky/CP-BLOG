import { hexToRgb, makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

function hex2rgb(hex, opacity) {
    if (hex.length == 4) return "rgba(" + ('0x' + hex[1] + hex[1] | 0) + ", " + ('0x' + hex[2] + hex[2] | 0) + ", " + ('0x' + hex[3] + hex[3] | 0) + ", " + opacity + ")";
    return "rgba(" + ('0x' + hex[1] + hex[2] | 0) + ", " + ('0x' + hex[3] + hex[4] | 0) + ", " + ('0x' + hex[5] + hex[6] | 0) + ", " + opacity + ")";
}

export default function Header(props) {
    let fontColor = (props.theme === "default") ? "red" : ((props.theme.custom) ? props.theme.customFontColor : (props.theme.invert) ? props.theme.backgroundColor : props.theme.fontColor);
    let backgroundColor = (props.theme === "default") ? "#444" : ((props.theme.custom) ? props.theme.customBackgroundColor : (props.theme.invert) ? props.theme.fontColor : props.theme.backgroundColor);
    let height = props.ui.width > 720 ? 60 : 45;
    // console.log(backgroundColor);
    // console.log(hex2rgb(backgroundColor, 0.7))
    const useStyles = makeStyles({
        root: {
            color: fontColor,
            backgroundColor: hex2rgb(backgroundColor, 0.9),
            // color: backgroundColor,
            color: fontColor,
            // backgroundColor: backgroundColor,
            // backgroundColor: hex2rgb(fontColor, 0.1),
            height: height,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1000,
            // boxShadow: "0px 0px 4px " + hex2rgb(backgroundColor, 0.4)
            boxShadow: "0px 0px 4px " + hex2rgb(fontColor, 0.4)
        },
        bg: {
            // height: "100%",
            // width: "100%",
            // backgroundColor: hex2rgb(fontColor, 0.1),
            // position: "absolute",
            // top: 0,
            // left: 0,
            // zIndex: -1
        },
        logo: {
            fontSize: props.ui.width > 720 ? 28 : 22,
            display: "inline-block",
            padding: props.ui.width > 720 ? 15 : 11,
            fontWeight: 700
        },
        nav: {
            listStyleType: "none",
            margin: 0,
            padding: 0,
            display: props.ui.width > 720 ? "inline-block" : "none",
            position: "absolute",
            top: 0,
            "& li": {
                display: "inline-block",
                height: height,
                padding: (height - 20) / 2 + "px 30px",
                boxSizing: "border-box",
                fontWeight: 200,
                color: fontColor
            }
        },
        activeLink: {
            "& li": {
                borderBottom: "3px solid #0080ff"
            }
        }
    });
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.bg}></div>
            <span className={classes.logo}>ADNAN'S BLOG</span>
            <ul className={classes.nav}>
                <NavLink activeClassName={classes.activeLink} style={{ textDecoration: "none" }} exact to="/"><li>HOME</li></NavLink>
                <NavLink activeClassName={classes.activeLink} to="/posts"><li>POSTS</li></NavLink>
                <NavLink activeClassName={classes.activeLink} to="/about"><li>ABOUT</li></NavLink>
            </ul>
        </div>
    );
}