import Button from "../Button";

function Nav() {
    return (
        <nav>
            <ul>
                <li>CAMPAIGN</li>
                <li>TOOLS</li>
            </ul>
            <Button name={'Create account'} handleClick={()=>{console.log()}}></Button>
        </nav>           
    )
}


export default Nav;