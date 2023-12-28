'use server'
import { cookies } from 'next/headers'
export default async function cookieverification(origin_page_type: number) {
    const cookieName=''+process.env.AUTHCOOKIENAME
    let exists=cookies().has(cookieName+'NAME') && cookies().has(cookieName+'PASS')
    if (exists){
        const NAME:any=cookies().get(cookieName+'NAME')
        const PASS:any=cookies().get(cookieName+'PASS')
        const validar = async ()=>{
            const data={user:NAME['value'], pass:PASS['value']}
            await fetch(process.env.API+'/validar',{
                method:'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(data)
              })
            .then(response => response.json())
            .then((data)=>{
                exists=(data['result'] && origin_page_type==data['Tipo-acceso'])
              })
        }
        validar()
        .then(()=>{
            return exists
        })
        
    }else{
    return exists
    }
}