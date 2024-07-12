import { Outlet, NavLink } from "react-router-dom";
import Button from "../Button";
import ModalLogin from "../ModalLogin";
import { useState } from "react";

function Nav() {
    const [isShowModal, setIsShowModal] = useState(false);

    
    return (
        <>
            <nav className="flex justify-between items-center mx-12 h-16">
                <ul className="flex gap-8">
                    <li><NavLink to={`/campaign`}
                        className={({ isActive }) =>
                            isActive
                              ? "text-orange-main"
                              : "hover:border-orange-800 hover:border-b-2" 
                          }
                    >CAMPAIGN</NavLink></li>
                    <li><NavLink to={`/tools`}
                        className={({ isActive }) =>
                            isActive
                              ? "text-orange-main"
                              : "hover:border-orange-800 hover:border-b-2" 
                          }
                    >TOOLS</NavLink></li>
                </ul>
                <Button name={'Create account'} handleClick={()=>{setIsShowModal(true)}}></Button>
            </nav>  

            <ModalLogin isVisible={isShowModal} closeModal={()=>{setIsShowModal(false)}}></ModalLogin>
            <Outlet />
        </>         
    )
}


export default Nav;