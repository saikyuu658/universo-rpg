import Tag from "../Tag";


export default function (){
    function teste(){
        console.log("post")
    }
    return (
        <div className="bg-blue-deep-2 p-2 flex gap-2 rounded-2xl items-center justify-start"
            onClick={teste}
        >
            <img src="https://img.freepik.com/fotos-gratis/retrato-de-cachorro-adoravel-bulldog-branco_53876-64842.jpg?ga=GA1.1.910329215.1720101619&semt=ais_hybrid" 
                width={60} 
                className="rounded-full"    
            />
            <div className="w-[100%]">
                <p className="mb-2 cursor-pointer hover:underline text-sm">The crazy king and the secret dungeons he crazy king and the secret dungeons </p>
                <div className="flex gap-1">
                    <Tag name="D&D 5.e" handleClick={()=>{'Oi linda!'}} light={true}/>
                    <Tag name="Terror" handleClick={()=>{'Oi linda!'}} light={true}/>
                </div>
            </div>
            <p className="text-3xl text-green-core font-semibold">
                8,9
            </p>
        </div>
    )
}