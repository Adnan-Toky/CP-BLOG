import { hexToRgb, makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DescriptionIcon from '@material-ui/icons/Description';

function hex2rgb(hex, opacity) {
    if (hex.length == 4) return "rgba(" + ('0x' + hex[1] + hex[1] | 0) + ", " + ('0x' + hex[2] + hex[2] | 0) + ", " + ('0x' + hex[3] + hex[3] | 0) + ", " + opacity + ")";
    return "rgba(" + ('0x' + hex[1] + hex[2] | 0) + ", " + ('0x' + hex[3] + hex[4] | 0) + ", " + ('0x' + hex[5] + hex[6] | 0) + ", " + opacity + ")";
}

export default function Header(props) {
    const [open, setOpen] = useState(0);

    function toggleMenu() {
        setOpen(!open);
    }

    let fontColor = props.default ? "#333" : ((props.theme.custom) ? props.theme.customFontColor : (props.theme.invert) ? props.theme.backgroundColor : props.theme.fontColor);
    let backgroundColor = props.default ? "#fff" : ((props.theme.custom) ? props.theme.customBackgroundColor : (props.theme.invert) ? props.theme.fontColor : props.theme.backgroundColor);
    let height = props.ui.width > 720 ? 60 : 45;
    // console.log(backgroundColor);
    // console.log(hex2rgb(backgroundColor, 0.7))
    const useStyles = makeStyles({
        root: {
            color: fontColor,
            backgroundColor: hex2rgb(backgroundColor, open && props.ui.width <= 720 ? 1 : 0.9),
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
            fontWeight: 100,
            fontFamily: "heroes assemble",
            letterSpacing: 1,
            color: "#0052ce",
            cursor: "pointer"
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
        },
        menuBtn: {
            position: "absolute",
            right: 15,
            top: 10,
            visibility: props.ui.width > 720 ? "hidden" : "visible"
        },
        mobileMenu: {
            backgroundColor: hex2rgb(backgroundColor, 0.99),
            height: props.ui.height - 45,
            position: "absolute",
            width: "100%",
            top: 45,
            transition: "max-height 1s linear"
        },
        activeLinkMobile: {
            color: "#0080ff"
        },
        mobileNav: {
            listStyleType: "none",
            margin: 0,
            padding: 0,
            marginTop: 30,
            "& li": {
                height: 50,
                color: fontColor,
                marginLeft: 0,
                paddingLeft: 0,
                // textAlign: "center",
                paddingLeft: 20,
                width: "100%",
                fontSize: 20,
                fontWeight: 700
            }
        }
    });
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div className={classes.bg}></div>
            <span className={classes.logo}><a href="/home" style={{
                color: "inherit",
                textDecoration: "none"
            }}>ALGOLOGS</a></span>
            <ul className={classes.nav}>
                <NavLink activeClassName={classes.activeLink} style={{ textDecoration: "none" }} exact to="/"><li>HOME</li></NavLink>
                <NavLink activeClassName={classes.activeLink} to="/posts"><li>POSTS</li></NavLink>
                <NavLink activeClassName={classes.activeLink} to="/about"><li>ABOUT</li></NavLink>
            </ul>
            {open ? <CloseIcon className={classes.menuBtn} onClick={toggleMenu} /> : <MenuIcon className={classes.menuBtn} onClick={toggleMenu} />}
            <div className={classes.mobileMenu} style={{
                display: open && props.ui.width <= 720 ? "block" : "none"
            }}>
                <List>
                    <NavLink activeClassName={classes.activeLinkMobile} style={{ textDecoration: "none" }} exact to="/">
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon style={{ color: fontColor }} />
                            </ListItemIcon>
                            <ListItemText primary="HOME" style={{ marginLeft: -20, marginTop: 8, color: fontColor }} />
                        </ListItem>
                    </NavLink>
                    <NavLink activeClassName={classes.activeLinkMobile} style={{ textDecoration: "none" }} to="/posts">
                        <ListItem button>
                            <ListItemIcon>
                                <DescriptionIcon style={{ color: fontColor }} />
                            </ListItemIcon>
                            <ListItemText primary="POSTS" style={{ marginLeft: -20, marginTop: 8, color: fontColor }} />
                        </ListItem>
                    </NavLink>
                    <NavLink activeClassName={classes.activeLinkMobile} style={{ textDecoration: "none" }} to="/about">
                        <ListItem button>
                            <ListItemIcon>
                                <InfoIcon style={{ color: fontColor }} />
                            </ListItemIcon>
                            <ListItemText primary="ABOUT" style={{ marginLeft: -20, marginTop: 8, color: fontColor }} />
                        </ListItem>
                    </NavLink>
                </List>
            </div>
        </div>
    );
}