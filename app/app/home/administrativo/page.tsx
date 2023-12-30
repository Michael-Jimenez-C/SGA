'use client'
import Hedr from '../header'
import Submenu from '../submenu'
import Barra from '../barra_lateral'
import Panel from '../Panel'

export default function home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-cyan-300 to-blue-500">
    <Hedr/>
    <div className="flex w-full flex-col sm:flex-row">
      <Barra>
          <Submenu titulo="Utilidades" items={[
              ['Materias'],
              ['Profesores'],
              ['Estudiantes']
              ]}/>
      </Barra>
      <Panel>
        
      </Panel>
    </div>
    </main>
  )
}
