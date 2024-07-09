import { Outlet, NavLink } from "react-router-dom";
import Button from "../Button";

function Nav() {
    return (
        <>
            <nav className="flex justify-between items-center mx-12 h-16">
                <ul className="flex gap-8">
                    <li><NavLink to={`/campaign`}
                        className={({ isActive, isPending }) =>
                            isActive
                              ? "text-orange-main"
                              : "hover:border-orange-800 hover:border-b-2" 
                          }
                    >CAMPAIGN</NavLink></li>
                    <li>TOOLS</li>
                </ul>
                <Button name={'Create account'} handleClick={()=>{console.log()}}></Button>
            </nav>  
            <Outlet />
        </>         
    )
}


export default Nav;