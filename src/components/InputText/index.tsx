export default function InputText({icon, label, ...otherProps}: any){
    return (
        <div>
            <label htmlFor="email-input" className="text-sm" >{label}</label>
            <div id="email-input" className="flex items-center rounded-full mt-1 overflow-hidden bg-white text-orange-main py-1 px-2">
                <span className="material-symbols-outlined text-md	">
                    {icon}
                </span>
                <input type="text" {...otherProps} className="outline-none w-full text-blue-deep-2  pl-1" />
            </div>
        </div>
    )
}