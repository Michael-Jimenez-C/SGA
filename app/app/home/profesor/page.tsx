'use client'
import hedr from '../header'
import submenu from '../submenu'

export default function home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-cyan-300 to-blue-500">
    {hedr()}
    <div className="flex w-full flex-col sm:flex-row">
      <div className="min-h-screen w-full sm:w-96">
          {submenu('Materias',[
          ['Materias'],
          ['Horario']
          ])}
          {submenu('Notas',[
          ['Editar notas']
          ])}
          {submenu('Utilidades',[
          ['Calificación de estudiantes'],
          ['Herramientas e interfaces']
          ])}
      </div>
      <div className="min-h-screen w-full"></div>
    </div>
    </main>
  )
}
