import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { updateReading } from "./../store/actions";
import store from "./../store/store";
import Panel from "./panel";
import TagButton from "./TagButton";
import { Helmet } from 'react-helmet';

class ScrollEvent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.props.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.handleScroll);
    }

    render() {
        return (
            <span></span>
        )
    }
}

function formatDate(date) {
    var strArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = date.getDate();
    var month = strArray[date.getMonth()];
    var y = date.getFullYear();
    var h = date.getHours();
    if (h > 12) h -= 12;
    if (h == 0) h = 12;
    var m = date.getMinutes();
    var s = date.getSeconds();
    return '' + (d <= 9 ? '0' + d : d) + ' ' + month + ', ' + y + ' ' + (h <= 9 ? '0' + h : h) + ':' + (m <= 9 ? '0' + m : m) + " " + (date.getHours() >= 12 ? "PM" : "AM");
}

function Page(props) {
    let fontColor = (props.theme.custom) ? props.theme.customFontColor : (props.theme.invert) ? props.theme.backgroundColor : props.theme.fontColor;
    let backgroundColor = (props.theme.custom) ? props.theme.customBackgroundColor : (props.theme.invert) ? props.theme.fontColor : props.theme.backgroundColor;
    let shadowColor = (props.theme.custom) ? props.theme.customShadowColor : props.theme.shadowColor;
    var pageWidth = (props.ui.width > 1000) ? props.ui.width * 0.7 : parseInt(props.ui.width);
    let publishTime = new Date(props.post.time);
    const useStyles = makeStyles({
        root: {
            fontSize: props.font.size,
            fontWeight: props.font.weight,
            textShadow: (props.font.shadow || props.font.blur) ? `${props.font.shadow}px ${props.font.shadow}px ${props.font.blur}px ${shadowColor}` : "none",
            textAlign: props.font.allignment,
            fontStyle: props.font.italic,
            textDecoration: props.font.underline,
            paddingTop: props.layout.marginTop,
            paddingLeft: props.layout.marginLeft,
            paddingRight: props.layout.marginRight,
            paddingBottom: props.layout.marginBottom,
            color: fontColor,
            backgroundColor: backgroundColor,
            boxSizing: "border-box",
            "& p": {
                marginBottom: props.layout.paragraphSpacing,
                lineHeight: (props.font.size + props.layout.lineSpacing) + "px",
                wordSpacing: props.layout.wordSpacing,
                letterSpacing: props.layout.fontSpacing
            },
            "& li": {
                lineHeight: (props.font.size + props.layout.lineSpacing) + "px",
                wordSpacing: props.layout.wordSpacing,
                letterSpacing: props.layout.fontSpacing
            },
            "& h1": {
                textAlign: "center"
            },
            "& a": {
                textDecoration: "none"
            }
        },
        progess_bar: {
            height: 3,
            width: "100%",
            backgroundColor: backgroundColor,
            position: "fixed",
            top: props.ui.width > 720 ? 60 : 45,
            left: 0,
            zIndex: 100
        },
        progress: {
            width: props.reading.progress + "%",
            backgroundColor: fontColor,
            height: "100%",
            position: "absolute"
        }
    })
    const classes = useStyles();

    const updateProgress = (event) => {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        store.dispatch(updateReading({ progress: scrolled }));
    }

    return (
        <div style={{ backgroundColor: backgroundColor }}>
            <div style={{ maxWidth: pageWidth, boxSizing: "border-box" }}>
                <div className={classes.progess_bar}>
                    <ScrollEvent handleScroll={updateProgress} />
                    <div className={classes.progress}></div>
                </div>
                <div style={{ color: fontColor, padding: 50, boxSizing: "border-box", paddingBottom: 0, paddingTop: 100, paddingLeft: props.layout.marginLeft, backgroundColor: backgroundColor }}>
                    <Helmet>
                        <title>{props.post.title}</title>
                    </Helmet>
                    {props.ui.width > 1000 ?
                        <h1 style={{ margin: 0, textAlign: "justify" }}>{props.post.title}</h1> :
                        <h2 style={{ margin: 0, textAlign: "justify" }}>{props.post.title}</h2>
                    }
                    <div style={{ marginTop: 30 }}>
                        <div style={{ display: "inline-block", marginRight: 50, width: 240, marginTop: 6 }}>Published: {formatDate(publishTime)}</div>
                        <div style={{ display: "inline-block", marginTop: 6 }}>Viewed: {props.post.view_count} times</div>
                    </div>
                    <div style={{
                        height: 0.5,
                        width: pageWidth - (props.layout.marginLeft + props.layout.marginRight),
                        backgroundColor: fontColor,
                        marginTop: 10
                    }}></div>
                </div>
                <div id="page" style={{ boxSizing: "border-box", width: "100%" }} className={classes.root} dangerouslySetInnerHTML={{ __html: props.post.content }}></div>
                <div style={{
                    paddingLeft: props.layout.marginLeft,
                    paddingRight: props.layout.marginRight,
                    marginTop: -props.layout.marginBottom,
                    paddingBottom: 20
                }}>
                    {props.post.tags.map((tag, key) => (
                        <TagButton color={fontColor} bgColor={backgroundColor} value={tag} key={key} />
                    ))}
                </div>
            </div>
            <div style={{
                position: props.ui.width > 1000 ? "absolute" : "relative",
                width: props.ui.width > 1000 ? props.ui.width * 0.28 : props.ui.width,
                right: 0,
                top: props.ui.width > 1000 ? 60 : 0,
                color: fontColor,
                zIndex: 1
            }}>
                <Panel {...props} title="Related" posts={props.post.related} />
            </div>
        </div >
    );
}

export default Page;