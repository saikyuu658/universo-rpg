import { useState } from "react";
import Button from "../Button";
import InputText from "../InputText";



function SigninForm (){
    const [signin, setSignin] = useState(true)

    function changeForm(){
        setSignin(!signin)
    }
    if(!signin){
        return (
            <>
                <form className="flex flex-col">
                    <p className="text-[30px] text-orange-main font-semibold mb-3">Sign Up</p>
                    <div className="pb-2">
                        <InputText icon={'swords'} label={'Email'}></InputText>
                    </div>
                    <div className="pb-2">
                        <InputText icon={'contact_emergency'} label={'Nick name'}></InputText>
                    </div>
                    <div className="pb-2">
                        <InputText icon={'encrypted'} type={'password'} label={'Password'}></InputText>
                    </div>
                    <div className="pb-6">
                        <InputText icon={'restart_alt'} type={'password'} label={'Confirm Password'}></InputText>
                    </div>

                    <Button name="Sign Up" handleClick={()=>{console.log('no seu olho')}}/>
                </form>
                <p className="text-xs mt-5 ml-3">Do you have account? <span 
                    role="presentation"
                    onClick={changeForm}
                    className="text-orange-main cursor-pointer">click here</span>
                </p>
            </>

        )
    }

    return (
        <>
            <form className="flex flex-col">
                <p className="text-[30px] text-orange-main font-semibold mb-3">Sign in</p>
                <div className="pb-2">
                    <InputText icon={'swords'} label={'Email'}></InputText>
                </div>
                <div className="pb-6">
                    <InputText icon={'encrypted'} type={'password'} label={'Password'}></InputText>
                </div>

                <Button name="Sign In" handleClick={()=>{console.log('no seu olho')}}/>
            </form>
            <p className="text-xs mt-5 ml-3">Do you not have account? <span 
                role="presentation"
                onClick={changeForm}
                className="text-orange-main cursor-pointer">click here</span>
            </p>
        </>
    )

}
export default function ModalLogin({closeModal} : any){

  
    return(
        <section className="fixed inset-0 z-10 bg-opacity-35 bg-black flex justify-center items-center">
            <div className="w-[320px]  run bg-blue-deep-2 p-3 relative rounded-md shadow-lg flex flex-col">
                <span className="material-symbols-outlined absolute top-2 cursor-pointer w-5 right-2 text-sm rounded-full bg-slate-400 text-center " 
                    role="presentation"
                    onClick={closeModal}
                >close</span>
                <SigninForm></SigninForm>
               
                <hr className="border-t-[2px] border-white rounded-full m-3" />
                <button className="rounded-full bg-blue-500 py-1">Sign in with Google</button>
            </div>
        </section>
    )
}