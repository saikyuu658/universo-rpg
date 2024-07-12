export default function (props: { name: string, handleClick: any, light?: boolean}){
    console.log(props.light)
    return (
        <button className={
            `
            w-fit 
            rounded-full 
            whitespace-nowrap 
            shadow-md
            
            px-2 py-1 cursor-pointer hover:bg-orange-hover text-xs
            
            ` +( props.light? 'bg-[#DEE2E6] text-black'  : 'bg-gray-600 text-white')
        }
            onClick={props.handleClick}>
            {props.name}
        </button>
    )
}