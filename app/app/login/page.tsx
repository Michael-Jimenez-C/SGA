'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'


export default function login() {
  const router = useRouter()
  const [name,setname] = useState('')
  const [passwd,setpasswd] = useState('')
  
  const change_name= (e)=>{
    setname(e.target.value)
  }

  const change_passwd = (e) => {
    setpasswd(e.target.value)
  }

  const login_val = async () =>{
    let data={
      user:name,
      pass:passwd
    }

    await fetch(process.env.API+'/login',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data)=>{
      if (data['access']!=3){
        router.push(process.env.app+['estudiantes','profesores','administrativos'][data['access']])
      }else{
        alert('Por favor revise la información digitada')
      }
    })
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-cyan-300 to-blue-500">
      <div>
        <div className="max-w-min w-full text-center items-center bg-sky-600 p-5 rounded-xl space-y-3" >
          <h1 className='text-2xl'><strong>INICIAR SESIÓN</strong></h1>
          <form className="text-left">
            <div className="py-2 space-y-2">
              <label className='ml-2'>Usuario</label>
              <input value={name} type="text" placeholder="0000000" className='rounded-xl bg-sky-100 text-sky-950 py-1 px-5 focus:outline-none focus:border-sky-1000' onChange={change_name}/>
            </div>
            <div className="py-2 space-y-2">
              <label className='ml-2'>Contraseña</label>
              <input value={passwd} type="password" placeholder="*******" className='rounded-xl bg-sky-100 text-sky-950 py-1 px-5 focus:outline-none focus:border-sky-1000' onChange={change_passwd}/>
            </div>
            <button type="button" className="w-full py-2 mb-2 mt-4 px-2 bg-sky-300 rounded-xl text-sky-950 hover:bg-cyan-400" onClick={login_val}>ACEPTAR</button>
          </form>
        </div>
      </div>
    </main>
  )
}
