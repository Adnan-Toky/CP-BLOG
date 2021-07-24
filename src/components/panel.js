import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PublicIcon from '@material-ui/icons/Public';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import TagButton from './TagButton';

function Panel(props) {
    let fontColor = (props.theme.custom) ? props.theme.customFontColor : (props.theme.invert) ? props.theme.backgroundColor : props.theme.fontColor;
    let backgroundColor = (props.theme.custom) ? props.theme.customBackgroundColor : (props.theme.invert) ? props.theme.fontColor : props.theme.backgroundColor;
    let shadowColor = (props.theme.custom) ? props.theme.customShadowColor : props.theme.shadowColor;
    const useStyles = makeStyles({
        root: {
            // backgroundColor: "#2d2d2d",
            margin: "30px auto",
            width: "90%",
            borderRadius: 2,
            // overflow: "hidden",
            color: fontColor,
            // border: "0.5px solid #757575"
        },
        header: {
            // backgroundColor: "#494949",
            padding: 20,
            paddingLeft: 0,
            boxSizing: "border-box",
            fontSize: 20,
            borderBottom: "1px solid " + fontColor
        },
        list: {
            listStyleType: "none",
            paddingBottom: 10,
            paddingLeft: 10,
            "& li": {
                padding: 10,
                marginLeft: 0
            }
        },

    });
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                Related
            </div>
            <div>
                <List style={{ marginLeft: -17 }}>
                    {props.post.related.map((post, key) => (
                        <Link to={`post?id=${post.id}`} key={key} style={{ textDecoration: "none", color: fontColor }}>
                            <ListItem alignItems="flex-start" button>
                                <ListItemIcon style={{ padding: 0, marginRight: -30 }}><PublicIcon style={{ width: 20, color: fontColor }} /></ListItemIcon>
                                <ListItemText style={{ marginTop: 8 }}>
                                    {post.title}<br />
                                    {post.tags.map((tag, tag_key) => (
                                        <TagButton value={tag} bgColor={backgroundColor} color={fontColor} key={tag_key}></TagButton>
                                    ))}
                                </ListItemText>
                            </ListItem>
                        </Link>
                    ))}
                    {/* <ListItem alignItems="flex-start">
                        <ListItemIcon style={{ padding: 0, marginRight: -30 }}><PublicIcon style={{ width: 20, color: fontColor }} /></ListItemIcon>
                        <ListItemText style={{ marginTop: 8 }}>
                            Desktop-only websites just aren’t good enough anymore.
                        </ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemIcon style={{ padding: 0, marginRight: -30 }}><PublicIcon style={{ width: 20 }} /></ListItemIcon>
                        <ListItemText style={{ marginTop: 8 }}>
                            Learn how to build websites with a “responsive and mobile first” methodology, allowing a website to display effortlessly on every device that accesses it.
                        </ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemIcon style={{ padding: 0, marginRight: -30 }}><PublicIcon style={{ width: 20 }} /></ListItemIcon>
                        <ListItemText style={{ marginTop: 8 }}>
                            The changing way in which we access the web
                        </ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemIcon style={{ padding: 0, marginRight: -30 }}><PublicIcon style={{ width: 20 }} /></ListItemIcon>
                        <ListItemText style={{ marginTop: 8 }}>
                            This updated new edition covers all the most up-to-date techniques and tools needed to build great responsive designs, ensuring that your projects won’t just be built ‘right’ for today, but in the future too.
                        </ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemIcon style={{ padding: 0, marginRight: -30 }}><PublicIcon style={{ width: 20 }} /></ListItemIcon>
                        <ListItemText style={{ marginTop: 8 }}>
                            Chapter example code is all hosted on rwd.
                        </ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemIcon style={{ padding: 0, marginRight: -30 }}><PublicIcon style={{ width: 20 }} /></ListItemIcon>
                        <ListItemText style={{ marginTop: 8 }}>
                            Responsive Web Design with HTML5 and CSS3
                        </ListItemText>
                    </ListItem> */}
                    {/* <li><PublicIcon /><div style={{ display: "inline-block" }}>Desktop-only websites just aren’t good enough anymore.</div></li>
                    <li>The changing way in which we access the web</li>
                    <li>Learn how to build websites with a “responsive and mobile first” methodology, allowing a website to display effortlessly on every device that accesses it.</li>
                    <li>This updated new edition covers all the most up-to-date techniques and tools needed to build great responsive designs, ensuring that your projects won’t just be built ‘right’ for today, but in the future too.</li>
                    <li>Chapter example code is all hosted on rwd.</li>
                    <li>Responsive Web Design with HTML5 and CSS3</li> */}
                </List>
            </div>
        </div>
    );
}

export default Panel;