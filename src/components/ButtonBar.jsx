function ButtonBar(props) {
    return (
        <div>
            <button value={-5} onClick={props.handleIterate}>Back 5</button>
            <button value={-1} onClick={props.handleIterate}>Back 1</button>
            <button value={1} onClick={props.handleIterate}>Forward 1</button>
            <button value={5} onClick={props.handleIterate}>Forward 5</button>
        </div>
    )
}

export default ButtonBar;