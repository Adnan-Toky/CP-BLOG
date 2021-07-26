import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
import MailIcon from '@material-ui/icons/Mail';

function Footer() {
    const useStyles = makeStyles({
        root: {
            width: "100%",
            backgroundColor: "#333",
            color: "#fff",
            padding: "30px 0",
            textAlign: "center"
        },
        socialIcon: {
            listStyleType: "none",
            margin: 0,
            padding: 0,
            "& li": {
                display: "inline-block",
                margin: 5,
                cursor: "pointer"
            }
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <ul className={classes.socialIcon}>
                    <li><PublicIcon style={{ fontSize: 35 }} /></li>
                    <li style={{ position: "relative", top: -2 }}><GitHubIcon style={{ fontSize: 31 }} /></li>
                    <li><FacebookIcon style={{ fontSize: 35 }} /></li>
                    <li><MailIcon style={{ fontSize: 35 }} /></li>
                </ul>
            </div>
            <div style={{ lineHeight: "20px", marginTop: 20 }}>
                algologs.com <br />
                copyright &copy; {new Date().getFullYear()}
            </div>
        </div>
    )
}

export default Footer;