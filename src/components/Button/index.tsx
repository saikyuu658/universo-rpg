
function Button(props:{name: string, handleClick:any}) {
    return (
        <button
            className="bg-orange-main hover:bg-orange-hover hover:drop-shadow-lg px-3 py-1 rounded-full"
            onClick={props.handleClick}
        >
            {props.name}
        </button>
    )

}

export default Button