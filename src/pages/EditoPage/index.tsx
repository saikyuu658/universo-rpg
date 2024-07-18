import { ReactElement, ReactHTML, useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import EditoField from "../../components/Editor";
import InputText from "../../components/InputText";
export default function EditoPage (){
    const [header, setHeader] = useState<ReactElement>()
	const [content, setContent] = useState('');
    const [files, setFiles] = useState<any[]>([])
    let nameFile = "New document"
    let click = false; 
    
    function changeHeader(){
        click = !click;
        if(click){
            setHeader(
                <div className="flex gap-1 items-center " onClick={()=>changeHeader()} >
                    <p role="presentation" className=" text-white" >{nameFile}</p>
                    <span className="material-symbols-outlined text-base text-white">
                        edit
                    </span>
                </div>
            );
            return
        }else{
            setHeader(
               <form onSubmit={
                    (e: any)=>{
                            e.preventDefault(); 
                            nameFile = e.target[0].value;
                            changeHeader(); 
                        }
                    }
                    className="w-[300px]"
                    >
                 <InputText icon={'edit'} placeholder={nameFile}/>
               </form>
            )
        
        }
        
    }

    useEffect(()=>{
        changeHeader();
    }, [])
    
    useEffect(()=>{
        validateFullSize()
    }, [files])

    function validateFullSize (){
        if(files.length > 0 ){
            const sumed = files.reduce((prev: any, curr:any) => { return prev + curr.size}, 0);
            console.log("sumed")
            console.log(sumed)
            if(sumed > 1000000){
                files.pop()
                setFiles([...files]);
                alert('Total de arquivos muito grande')
            }
        }


    }
 

    function removeElement(index: number){
        console.log('pão!')
        const novosElementos = [...files];
        novosElementos.splice(index, 1);
        setFiles(novosElementos);
    }

    function handleChangeFile(e: any){
        const pao = [...e.target.files]
        if(files.length > 0){
            let temp:any[] = [];
            pao.forEach((a:any, index: number)=>{
                if(a.size < 1000000){
                    temp.push(a)
                }
            });
            setFiles([...files, ...temp])
        }else{
            setFiles([...e.target.files])
        }

    }
    return (
        <>
            <nav className="absolute top-0 left-0 right-0 h-[60px] bg-orange-main"></nav>
            <section className="p-5 mt-[60px]">
                <div className="flex justify-between items-center mb-5">
                    <div>
                        {header}
                    </div>
                    <Button name="Public history" handleClick={()=>{console.log('save')}}></Button>
                </div>
                <EditoField 
                    value={content}
                    onBlur={(newContent:any) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={(newContent:any) => {}}
                ></EditoField>

                {/* button: ->Update File */}
                <div className="mt-5 flex items-end gap-2 mb-3">
                    <label htmlFor="upload_item" className="m-0 flex align-middle bg-orange-main w-fit p-1 rounded-full gap-2 cursor-pointer">
                        To Upload files
                        <span className="material-symbols-outlined text-base">
                            attach_file
                        </span>
                    </label>
                    <span className="text-xs">Only file jpeg, png, pdf and txt with maximum size of the combined files 1mb </span> 
                    <input type="file" 
                        onChange={handleChangeFile}
                        multiple
                        accept="image/png, image/gif, image/jpeg, application/pdf" 
                        id="upload_item" className="hidden"
                    />
                    
                </div>

                <p><span className="text-orange-main">added files:</span>{files.length}</p>
                <div className="flex flex-wrap gap-1">
                    {
                        files.length > 0?
                        files.map((e:any, index: number)=>{
                            return (
                                <div className="flex gap-1 my-1 border-[1] bg-blue-deep-2 w-fit px-3 rounded-full" key={index}>
                                    <span 
                                        role="presentation"
                                        onClick={()=>removeElement(index)}
                                        className="material-symbols-outlined rounded-full text-center w-6 h-6 text-base hover:bg-slate-900 cursor-pointer">
                                        close
                                    </span>
                                    {e.name}
                                </div>
                            )
                        }) : <p className="text-sm">No document selected ... </p>  
                                
                    }
                </div>
            </section>
        </>
    )
}