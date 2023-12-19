'use client'
import { useState } from "react"

export default function submenu(titulo:any,items:any){
    let [opcion,setopcion]=useState("hidden")
    const cambiar_estado=(opcion:any)=>{
        if (opcion =="hidden"){
            setopcion("")
        }else{
            setopcion("hidden")
        }
    }
    let submenu=(<ul className={"bg-sky-500 flex flex-col text-center select-none "+opcion}>
        {items.map((pares:any)=>(
            <li className="hover:bg-sky-400 py-4 cursor-pointer">{pares[0]}</li>
        ))}
    </ul>)
    return(
        <ul className="bg-sky-950 flex flex-col text-center select-none">
            <li className="hover:bg-sky-900 py-4 cursor-pointer" onClick={
                ()=>{cambiar_estado(opcion)}
            }>{titulo}</li>
            {submenu}
        </ul>
    )
}