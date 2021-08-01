import Header from "./components/header";
import HeaderPro from "./components/HeaderPro";
import { connect } from "react-redux";

function About(props) {
    return (
        <>
            {props.ui.width > 720 ? <HeaderPro {...props} /> : <Header {...props} />}
            <div>
                This is Algologs, an innovative platform, bringing a unique idea to learn Data Structure and Algorithm for Competitive Programmers. Deviating from the traditional way of learning DSA, we’ll try to focus on clarity of concept in fastest and efficient way by using the technique "Learn by Solving". All the amazing tactics discussed here are the reflection of my personal journey towards Competitive Programming.
            </div>
        </>
    );
}

export default connect(state => {
    return {
        ui: state.ui
    }
})(About);