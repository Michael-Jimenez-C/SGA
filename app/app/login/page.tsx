import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-cyan-300 to-blue-500">
      <div>
        <div className="max-w-min w-full text-center items-center bg-sky-600 p-5 rounded-xl space-y-3" >
          <h1 className='text-2xl'><strong>INICIAR SESIÓN</strong></h1>
          <form className="text-left">
            <div className="py-2 space-y-2">
              <label className='ml-2'>Usuario</label>
              <input type="text" placeholder="0000000" className='rounded-xl bg-sky-100 text-sky-950 py-1 px-5'/>
            </div>
            <div className="py-2 space-y-2">
              <label className='ml-2'>Contraseña</label>
              <input type="password" placeholder="*******" className='rounded-xl bg-sky-100 text-sky-950 py-1 px-5'/>
            </div>
            <button className="w-full py-2 mb-2 mt-4 px-2 bg-sky-300 rounded-xl text-sky-950 hover:bg-cyan-400">ACEPTAR</button>
          </form>
        </div>
      </div>
    </main>
  )
}
