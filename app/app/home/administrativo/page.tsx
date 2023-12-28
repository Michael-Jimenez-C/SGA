'use client'
import Hedr from '../header'
import Submenu from '../submenu'
import { useEffect } from 'react'
import cookieverification from '../session_access_verification'
import { useRouter } from 'next/navigation'

export default function home() {
  const router = useRouter()
  const v = async ()=>{
    let res= await cookieverification(2);
    if (!res){
      router.push(process.env.app+'login')
    }
  }
    useEffect(()=>{
      v()
    })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-cyan-300 to-blue-500">
    <Hedr/>
    <div className="flex w-full flex-col sm:flex-row">
      <div className="min-h-screen w-full sm:w-96">
          <Submenu titulo="Utilidades" items={[
              ['Materias'],
              ['Profesores'],
              ['Estudiantes']
              ]}/>
      </div>
      <div className="min-h-screen w-full"></div>
    </div>
    </main>
  )
}
