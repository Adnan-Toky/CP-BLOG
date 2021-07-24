export default function TagButton(props) {
    return (
        <button style={{
            marginRight: 5,
            borderRadius: 5,
            outline: "none",
            border: "none",
            padding: "5px 7px",
            marginBottom: 3,
            fontSize: 11,
            color: props.bgColor,
            backgroundColor: props.color
        }}>{props.value}</button>
    )
}