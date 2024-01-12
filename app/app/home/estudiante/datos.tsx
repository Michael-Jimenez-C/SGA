import datos_fetch from "./datos_fetch";
export default function Datos(){

  let promise=datos_fetch()
  
  /*
  fetch(process.env.API+'/datos_estudiante',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({user:usuario['value']})
  })
  .then(response => response.json())
  .then()*/

  return(
    <div className='w-full min-w-full border-box p-10'>
    <div className='text-sky-900 flex sm:flex-row flex-col'>
      <div className='flex-col flex w-2/4'>
        <span className="py-1">Nombre:lalala</span>
        <span className="py-1">Cedula:asdas</span>
        <span className="py-1">Codigo:asdas</span>
        <span className="py-1">Correo:asdas</span>
        <span className="py-1">Sexo:M</span>
        <span className="py-1">Facultad:asd</span>
        <span className="py-1">Proyecto:asd</span>
        <span className="py-1">Estado:a</span>
      </div>
      <div className='flex-col flex w-2/4'>
        <label>Correo personal:</label><input type="email"/>
        <label>Celular:</label><input type="tel"/>
        <label>Nacionalidad:</label><input type="text" />
        <label>Tipo de sangre:</label><input type="text" />
        <label>RH:</label><input type="text"/>
      </div>
    </div>
    <button type="button" className="w-full sm:w-36 py-2 mb-2 mt-4 px-2 bg-sky-300 rounded-xl text-sky-950 hover:bg-cyan-400">Guardar</button>
  </div>
 )
}