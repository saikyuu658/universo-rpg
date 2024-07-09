export default function (props: { name: string, handleClick: any}){
    return (
        <div className="rounded-full bg-gray-600 px-3 py-1 cursor-pointer hover:bg-orange-hover text-sm"
            onClick={props.handleClick}>
            {props.name}
        </div>
    )
}