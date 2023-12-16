# Inicio

# Rutas

```
─┬ \Login
.└┬ \home
..├ \Estudiante
..├ \Profesor
..├ \Administrativo
```

## Vistas
Para este SGA los usuarios van a ser estudiantes, profesores y administrativos por lo cual es importante hacer una vista para cada uno de ellos.
### Estudiantes
Es la vista mas grande, teniendo las siguiente secciones disponibles y los datos requeridos por interfaz.

DATOS
* Actualizar datos
    * Nombre
    * Correop
    * Tipo de documento
    * Documento
    * Sexo
    * Celular
    * Nacionalidad
    * Tipo de sangre
    * RH

MATERIAS

* Adiciones y cancelaciones
    * Nombre
    * Codigo
    * Materias inscritas
    * Materias No inscritas
    * Numero de creditos
    * Cursos
    * Bloques
* Preinscripciones
    * Nombre
    * Codigo
    * Materias No inscritas
    * Numero de creditos
    * Cursos
    * Bloques
* Horario
    * Nombre
    * Codigo
    * Proyecto
    * Numero de creditos
    * Cursos inscritos
    * Bloques

NOTAS

* Notas Parciales
    * Notas
    * Cursos
    * Materias
    * Cedula    

DOCENTES

* Evaluar docentes
    * Docentes de las materias que esta cursando

SERVICIOS

* Recibos de pago
* Inscripción a grado
* Calendario académico
* Normatividad
* Informacion adicional
* Plan de estudio

UTILIDADES

* Historia académica
* Herramientas e interfaces

### Profesores

Materias

* Materias
* Horario

Notas

* Editas Notas

Servicios

* Herramientas e interfaces
* Feedback de estudiantes


### Administrativos

UTILIDADES

* Materias
* Profesores
* Estudiantes

## Base de datos
Dado que la comunicacion se hace a traves de una API se puede intercambiar la base de datos facilmente, en este caso el proyecto utiliza una base de datos de mongodb sen alejarse de la filosofia SQL pues los datos en epoca de inscripcciones se leen y modifican bastante, y estos son los formatos:

>Estudiante
```json
{
    "Codigo":"202020202020",
    "Nombre": "Prueba",
    "Correop": "pruebaxyz@gmail.com",
    "TipoDocumento": "CC",
    "Documento": "10101010101",
    "Correo": "p@IU.edu",
    "Sexo": "M",
    "Proyectoid": 10,
    "Celular": "1010101010",
    "Nacionalidad":"Colombia",
    "TipoSangre": "O",
    "RH": "+",
    "Secret":"123456789",
    "Estado": "Activo"
}
```

> Semestre
```json
{   
    "Id": "20231",
    "Fecha":2023,
    "Semestre": 1 
}
```

> Matricula
```json
{
    "Id": 0,
    "Codigo" : "101010101010",
    "Semestre": "20231",
    "Valor": 6000000
}
```

> Facultades
```json
{
    "Id": 10,
    "Nombre": "Ingenieria de sistemas"
}
```

> Proyectos
```json
{
    "Id": 10,
    "Facultad": 10,
    "Nombre": "Ingenieria de sistemas"
}
```

> Materias
```json
{
    "Id": 420,
    "Creditos": 2,
    "Proyecto":[10,20,30,40,50],
    "tipo": "O",
    "Nombre": "Calculo diferencial"
}
```

> Profesores
```json
{
    "Id": 34,
    "Nombre": "pruebaprofe",
    "Correop": "pruebaxyz@gmail.com",
    "TipoDocumento": "CC",
    "Documento": "10101010101",
    "Correo": "p@IU.edu",
    "Sexo": "M",
    "Facultad": 10,
    "Celular": "1010101010",
    "Secret":"123456789",
    "Estado": "Activo"
}
```

>bloque
```json
{
    "Id": 0,
    "Día": "MARTES",
    "HORAINICIO": 8,
    "HORAFIN": 12 
}
```

> Curso
```json
{
    "Id": 0,
    "Curso": 420,
    "Estudiantes":["20202020020","202020202012"],
    "Profesor": 34,
    "Semestre": "20231",
    "Bloque": 0
}
```

> NOTAS
```json
{
    "Id":0,
    "Curso":0,
    "Estudiante": "1010200102",
    "Nota": [
        {
            "Semana": 6,
            "Nota": 5,
            "Valor": 0.35
        },
        {
            "Semana":10,
            "Nota": 45,
            "Valor": 0.35
        },
        {
            "Semana": 12,
            "Nota": 5,
            "Valor": 0.30
        }
    ]
}
```