import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DescriptionIcon from '@material-ui/icons/Description';

function HeaderPro(props) {
    const useStyles = makeStyles({
        root: {
            height: 90,
            backgroundColor: "#fff",
            fontFamily: "metropolis"
        },
        logo: {
            color: "#0052ce",
            fontWeight: 100,
            fontSize: 30,
            letterSpacing: 2,
            padding: 18,
            paddingLeft: props.ui.width / 20,
            fontFamily: "heroes assemble",
            cursor: "pointer"
        },
        navlist: {
            position: "absolute",
            right: props.ui.width / 20,
            top: 0,
            "& ul": {
                listStyleType: "none",
                marginTop: 0,
                padding: 0,
                "& li": {
                    display: "inline-block",
                    padding: 20,
                    color: "#555",
                    fontWeight: 500,
                    marginLeft: 20
                }
            }
        },
        navIcons: {
            height: 22,
            width: 22,
            position: "relative",
            top: 5,
            marginRight: 4
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <a href="/home" style={{
                    color: "inherit",
                    textDecoration: "none"
                }}>ALGOLOGS</a>
            </div>
            <div className={classes.navlist}>
                <ul>
                    <NavLink to="/" exact={true}><li><HomeIcon className={classes.navIcons} /> <span>Home</span></li></NavLink>
                    <NavLink to="/posts"><li><DescriptionIcon className={classes.navIcons} /> <span>Posts</span></li></NavLink>
                    <NavLink to="/about"><li><InfoIcon className={classes.navIcons} /> <span>About</span></li></NavLink>
                </ul>
            </div>
        </div>
    );
}

export default HeaderPro;