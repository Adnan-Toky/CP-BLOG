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
                    <li><a href="https://www.algologs.com/" target="_blank"><PublicIcon style={{ fontSize: 35, color: "#fff" }} /></a></li>
                    <li style={{ position: "relative", top: -2 }}><a href="https://github.com/Adnan-Toky/algologs.com" target="_blank"><GitHubIcon style={{ fontSize: 31, color: "#fff" }} /></a></li>
                    <li><FacebookIcon style={{ fontSize: 35 }} /></li>
                    <li><a href="mailto:adnanzawad@yahoo.com" target="_blank"><MailIcon style={{ fontSize: 35, color: "#fff" }} /></a></li>
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