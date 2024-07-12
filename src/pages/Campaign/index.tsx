import Card from "../../components/Card";
import FiedlFind from "../../components/FieldFind";
import Tag from "../../components/Tag";

export default function Campaign(){
    return (
        <section className="flex-col items-center flex gap-3">
            <FiedlFind></FiedlFind>
            <div className="w-7/12">
                <p className="text-start text-sm inline align-middle pr-2">Filter</p>
                <span className="material-symbols-outlined text-xs inline align-middle">
                    filter_alt
                </span>
                <div className="flex gap-2 mt-2">
                    <Tag handleClick={()=>{console.log('D&D')}} name="Better rating"/>
                    <Tag handleClick={()=>{console.log('Tormenta')}} name="Tormenta"/>
                    <Tag handleClick={()=>{console.log('A Lenda de Ghanor')}} name="A Lenda de Ghanor"/>
                    <Tag handleClick={()=>{console.log('Pathfinder 2e')}} name="Pathfinder 2e"/>
                </div>
            </div>

            
            <div className="mb-12 w-10/12 flex flex-col gap-1">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}