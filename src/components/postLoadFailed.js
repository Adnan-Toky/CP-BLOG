import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

export default function PostLoadFailed(props) {
    return (
        <Dialog open={props.open}>
            <div style={{ padding: 20, textAlign: "center" }}>
                <b>Something went wrong! Please reload the page...</b><br />
                <a href={window.location.href} style={{ textDecoration: "none" }}><Button color="primary" variant="contained" style={{ margin: "20px 0 0" }}>RELOAD</Button></a>
            </div>
        </Dialog>
    )
}