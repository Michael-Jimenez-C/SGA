'use client'
import Hedr from '../header'
import Submenu from '../submenu'
import Barra from '../barra_lateral'
import Panel from '../Panel'

import { useState } from 'react'
import Datos from './datos'

export default function home() {
  const [panContent, setPanContent]=useState(<div></div>)

  const actualizar_datos=()=>{
    setPanContent(
      <Datos/>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-cyan-300 to-blue-500">
    <Hedr/>
    <div className="flex w-full flex-col sm:flex-row">
      <Barra>
        <Submenu titulo="Actualizar datos" items={[
          ['Actualizar datos',actualizar_datos],
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
      </Barra>
      
      <Panel>
          {panContent}
      </Panel>
    </div>
    </main>
  )
}
