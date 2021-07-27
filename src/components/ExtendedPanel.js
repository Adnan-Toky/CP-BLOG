import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PublicIcon from '@material-ui/icons/Public';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import TagButton from './TagButton';

function ExtendedPanel(props) {
    let fontColor = props.default ? "#333" : ((props.theme.custom) ? props.theme.customFontColor : (props.theme.invert) ? props.theme.backgroundColor : props.theme.fontColor);
    let backgroundColor = props.default ? "#fff" : ((props.theme.custom) ? props.theme.customBackgroundColor : (props.theme.invert) ? props.theme.fontColor : props.theme.backgroundColor);
    const useStyles = makeStyles({
        root: {
            // backgroundColor: "#2d2d2d",
            margin: "0px auto",
            paddingTop: 30,
            paddingBottom: 30,
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
            borderBottom: "1px solid " + fontColor,
            fontWeight: 700
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

    function RenderItems() {
        let count = props.count ? Math.min(props.count, props.posts.length) : props.posts.length;
        if (count >= props.posts.length) return props.posts;

        var mappedArray = [];
        for (let i = 0; i < count; i++) {
            mappedArray.push(props.posts[i]);
        }

        return mappedArray;
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                {props.title}
            </div>
            <div>
                <List style={{ marginLeft: -17 }}>
                    {RenderItems().map((post, key) => (
                        <Link to={`post?id=${post.id}`} key={key} style={{ textDecoration: "none", color: fontColor }}>
                            <ListItem alignItems="flex-start" button>
                                <ListItemIcon style={{ padding: 0, marginRight: -30 }}><PublicIcon style={{ width: 20, color: fontColor }} /></ListItemIcon>
                                <ListItemText style={{ marginTop: -16 }}>
                                    <h2>{post.title}</h2>
                                    <p style={{ marginTop: -10 }}>
                                        {post.tags.map((tag, tag_key) => (
                                            <TagButton value={tag} bgColor={backgroundColor} color={fontColor} key={tag_key}></TagButton>
                                        ))}
                                    </p>
                                    <br />
                                    <p style={{ marginTop: -20, color: "#555" }}>{post.intro}</p>
                                </ListItemText>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>
        </div >
    );
}

export default ExtendedPanel;