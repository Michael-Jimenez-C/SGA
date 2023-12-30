'use client'
import Barra from '../barra_lateral'
import Hedr from '../header'
import Submenu from '../submenu'
import Panel from '../Panel'

export default function home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-cyan-300 to-blue-500">
    <Hedr/>
    <div className="flex w-full flex-col sm:flex-row">
      <Barra>
        <Submenu titulo='Materias' items={[
          ['Materias'],
          ['Horario']
          ]}/>
        <Submenu titulo='Notas' items={[
          ['Editar notas']
          ]}/>
        <Submenu titulo='Utilidades' items={[
          ['Calificación de estudiantes'],
          ['Herramientas e interfaces']
          ]}/>
      </Barra>
      <Panel>

        
      </Panel>
    </div>
    </main>
  )
}
