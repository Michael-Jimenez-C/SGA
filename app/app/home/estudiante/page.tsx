'use client'
import hedr from '../header'
import submenu from '../submenu'

export default function home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-cyan-300 to-blue-500">
    {hedr()}
    <div className="flex w-full flex-col sm:flex-row">
      <div className="min-h-screen w-full sm:w-96">
        {submenu('Actualizar datos',[
          ['Actualizar datos'],
          ['Inscribir materias']
          ])}
          {submenu('Materias',[
          ['Inscribir materias'],
          ['Preinscripciones'],
          ['Horario']
          ])}
          {submenu('Notas',[
          ['Notas parciales']
          ])}
          {submenu('Docentes',[
          ['Evaluar docentes']
          ])}
          {submenu('Servicios',[
          ['Recibos de pago'],
          ['Inscripción a grado'],
          ['Calendario académico'],
          ['Normatividad'],
          ['Informacion adicional'],
          ['Plan de estudio']
          ])}
          {submenu('Utilidades',[
          ['Historia académica'],
          ['Herramientas e interfaces']
          ])}
      </div>
      <div className="min-h-screen w-full"></div>
    </div>
    </main>
  )
}
