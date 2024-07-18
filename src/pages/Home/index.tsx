import Button from "../../components/Button";
import Card from "../../components/Card";
import FiedlFind from "../../components/FieldFind";
import Tag from "../../components/Tag";
import { useNavigate } from "react-router-dom";

function Home () {
    const navigate = useNavigate();
    return (
        <>
            <section className="flex-col items-center flex gap-5 h-[100vh] justify-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-orange-main text-5xl text-center mb-5">The better web site to your RPG campaign</h1>
                    <p className="w-3/4 text-center text-sm">Public your campaign, find history and themes, build person and more. Let´s start and join the universo RPG</p>
                </div>
                <FiedlFind />
                <div className="w-8/12 mb-14">
                    <div className="">
                        <p className="text-start text-sm inline align-middle pr-2">Most popular</p>
                        <span className="material-symbols-outlined text-xs inline align-middle">
                            trending_up
                        </span>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <Tag handleClick={()=>{console.log('D&D')}} name="D&D"/>
                        <Tag handleClick={()=>{console.log('Tormenta')}} name="Tormenta"/>
                        <Tag handleClick={()=>{console.log('A Lenda de Ghanor')}} name="A Lenda de Ghanor"/>
                        <Tag handleClick={()=>{console.log('Pathfinder 2e')}} name="Pathfinder 2e"/>
                    </div>
                </div>
                <Button name="Public your history" handleClick={()=>{navigate("/editor");}}></Button>
            </section> 
            <div className="mb-12  flex items-center flex-col gap-2">
                <div className="w-10/12">
                    <Card />
                </div>
                <div className="w-10/12">
                    <Card />
                </div>
                <div className="w-10/12">
                    <Card />
                </div>
                
            </div>
        </>
    )
}

export default Home;