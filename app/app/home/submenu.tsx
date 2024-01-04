'use client'
import { useState } from "react"

type submenuprops = {
    titulo: string
    items : any
}

export default function Submenu({titulo,items}: submenuprops){
    let [opcion,setopcion]=useState("hidden")
    const cambiar_estado=(opcion:any)=>{
        if (opcion =="hidden"){
            setopcion("")
        }else{
            setopcion("hidden")
        }
    }
    
    let submenu=(<ul className={"bg-sky-700 flex flex-col text-center select-none "+opcion}>
        {items.map((pares:any)=>(
            <li className="hover:bg-sky-800 py-4 cursor-pointer text-sky-50" key={pares[0]} onClick={(pares.length>1)? pares[1]:()=>{}}>{pares[0]}</li>
        ))}
    </ul>)

    return(
        <ul className="bg-blue-500 flex flex-col text-center select-none">
            <li key={titulo} className="hover:bg-blue-600 py-4 cursor-pointer text-sky-50 font-semibold" onClick={
                ()=>{cambiar_estado(opcion)}
            }>{titulo}</li>
            {submenu}
        </ul>
    )
}