'use client'
import Hedr from '../header'
import Submenu from '../submenu'

export default function home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-cyan-300 to-blue-500">
    <Hedr/>
    <div className="flex w-full flex-col sm:flex-row">
      <div className="min-h-screen w-full sm:w-96">
        <Submenu titulo="Actualizar datos" items={[
          ['Actualizar datos'],
          ['Inscribir materias']
          ]}/>
        <Submenu titulo='Materias' items={[
          ['Inscribir materias'],
          ['Preinscripciones'],
          ['Horario']
          ]}/>
        <Submenu titulo='Notas' items={[
          ['Notas parciales']
          ]}/>
        <Submenu titulo='Docentes' items={[
          ['Evaluar docentes']
          ]}/>
        <Submenu titulo='Servicios' items={[
          ['Recibos de pago'],
          ['Inscripción a grado'],
          ['Calendario académico'],
          ['Normatividad'],
          ['Informacion adicional'],
          ['Plan de estudio']
          ]}/>
        <Submenu titulo='Utilidades' items={[
          ['Historia académica'],
          ['Herramientas e interfaces']
          ]}/>
      </div>
      <div className="min-h-screen w-full"></div>
    </div>
    </main>
  )
}
