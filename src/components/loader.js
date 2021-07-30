import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loader(props) {
    return (
        <Dialog open={props.open}>
            <div style={{
                height: 46,
                padding: 20,
                position: "relative"
            }}>
                <CircularProgress color="primary" /><span style={{ display: "inline-block", marginLeft: 15, position: "relative", top: -10, fontSize: 20, fontWeight: 800 }}>{props.text}</span>
            </div>
        </Dialog>
    )
}