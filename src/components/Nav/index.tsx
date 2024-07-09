import Button from "../Button";

function Nav() {
    return (
        <nav className="flex justify-between items-center mx-12 h-16">
            <ul className="flex gap-8">
                <li>CAMPAIGN</li>
                <li>TOOLS</li>
            </ul>
            <Button name={'Create account'} handleClick={()=>{console.log()}}></Button>
        </nav>           
    )
}


export default Nav;