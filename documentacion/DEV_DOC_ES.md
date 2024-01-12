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