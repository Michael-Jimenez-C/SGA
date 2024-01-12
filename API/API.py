from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from hashlib import sha256


with MongoClient('localhost',27017) as conexion:
    try:
        app=Flask(__name__)
        CORS(app)

        @app.route('/login',methods=['POST'])
        def login():
            """Función que verifica la existencia de un usuario dado

            Returns:
                json: Contiene nombre y contraseña con hash256
            """
            global conexion    
            db=conexion.SGADB


            data=request.get_json()
            
            encoder=sha256()
            encoder.hexdigest()
            encoder.update(bytes(data['pass'],encoding='latin-1'))

            temp=encoder.hexdigest()

            salida={'access':3, 'accesskey':(data['user'],temp)}
            usuario=None
            if (usuario:=db.USUARIOS.find_one({'Codigo':data['user'],'Secret':temp})) is not None:
                salida['access']=usuario['Tipo-acceso']
            return jsonify(salida)
            
            
        @app.route('/validar',methods=['POST'])
        def validar():
            global conexion    
            db=conexion.SGADB
            data=request.get_json()
            if (usuario:=db.USUARIOS.find_one({'Codigo':data['user'],'Secret':data['pass']})) is not None:
                return jsonify({'result':True, 'Tipo-acceso':usuario['Tipo-acceso']})
            return jsonify({'result':False})

        @app.route('/datos_estudiante',methods=['POST'])
        def data():
            global conexion
            db=conexion.SGADB
            data=request.get_json()
            usuario=db.ESTUDIANTES.find_one({'Codigo':data['user']})
            proyecto=db.PROYECTOS.find_one({'_id':usuario['Proyectoid']})
            facultad=db.FACULTADES.find_one({'_id':proyecto['Facultad']})
            USUARIO=dict(usuario)
            USUARIO['Proyecto']=proyecto['Nombre']
            USUARIO['Facultad']=facultad['Nombre']
            print(USUARIO)
            return jsonify(USUARIO)

        app.run(debug=True)
    except:
        print('Ocurrión un error')
    finally:
        print('Cerrando')
        conexion.close()