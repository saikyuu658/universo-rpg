
function Button(props:{name: string, handleClick:any}) {
    return (
        <button
            className="bg-regal-blue"
            onClick={props.handleClick}
        >
            {props.name}
        </button>
    )

}

export default Button