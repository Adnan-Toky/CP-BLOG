import Header from "./components/header";
import HeaderPro from "./components/HeaderPro";
import { connect } from "react-redux";

function About(props) {
    return (
        <>
            {props.ui.width > 720 ? <HeaderPro {...props} /> : <Header {...props} />}
            <div style={{
                backgroundColor: "#f5f5f5",
                marginTop: -25
            }}>
                <div style={{
                    padding: 50,
                    backgroundColor: "#f5f5f5",
                    fontSize: props.ui.width > 720 ? 20 : 14,
                    fontFamily: "metropolis",
                    maxWidth: 700,
                    margin: "10px auto",
                    lineHeight: 1.3,
                    textAlign: "justify",
                    paddingTop: 150,
                    paddingBottom: 150,
                    letterSpacing: 2
                }}>
                    This is AlgoLogs, an innovative platform, bringing a unique idea to learn Data Structure and Algorithm for Competitive Programmers. Deviating from the traditional way of learning DSA, we’ll try to focus on clarity of concept in fastest and efficient way by using the technique "Learn by Solving". All the amazing tactics discussed here are the reflection of my personal journey towards Competitive Programming.
                </div>
            </div>
        </>
    );
}

export default connect(state => {
    return {
        ui: state.ui,
        font: state.font,
        layout: state.layout,
        theme: state.theme,
        config: state.config,
        reading: state.reading,
        post_list: state.post_list,
    }
})(About);