import Header from "./components/header"
import { connect } from "react-redux";


function Home(props) {
    return (
        <>
            <Header theme="default" {...props} />
            <h1 style={{ marginTop: 100 }}>This is the Homepage</h1>
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
})(Home);