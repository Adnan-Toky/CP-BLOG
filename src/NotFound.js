import Header from "./components/header";
import HeaderPro from "./components/HeaderPro";
import { connect } from "react-redux";
import img from "./img/404.jpg";

function NotFound(props) {
    return (
        <>
            {props.ui.width > 720 ? <HeaderPro {...props} /> : <Header {...props} />}
            <div style={{
                backgroundColor: "#f3f6fd",
                marginTop: -20,
                textAlign: "center",
                paddingTop: 20
            }}>
                <img src={img} height={300} />
                <h1 style={{ padding: 20, marginBottom: 0, paddingBottom: 30, paddingTop: 10, fontFamily: "metropolis" }}>404!<br /> Not Found</h1>
            </div>

        </>
    )
}

export default connect(state => {
    return {
        ui: state.ui
    }
})(NotFound);