import Header from "./components/header"
import { connect } from "react-redux";


function NotFound(props) {
    return (
        <>
            <Header theme="default" {...props} />
            <h1 style={{ marginTop: 100 }}>404 Not Found</h1>
        </>
    )
}

export default connect(state => {
    return {
        ui: state.ui,
        font: state.font,
        layout: state.layout,
        theme: state.theme,
        config: state.config,
        reading: state.reading,
        post: state.post
    }
})(NotFound);