from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from hashlib import sha256

conexion = MongoClient('localhost',27017)

app=Flask(__name__)
CORS(app)

@app.route('/login',methods=['POST'])
def login():
    global conexion  
    data=request.get_json()
    print(data)
    encoder=sha256()
    encoder.hexdigest()
    encoder.update(bytes(data['pass'],encoding='latin-1'))
    temp=encoder.hexdigest()
    conexion.SGADB
    


    return jsonify({'access':0, 'accesskey':('202020202020',temp)})

@app.route('/Pruebas')
def pruebas():
    global conexion    
    db=conexion.SGADB
    encoder=sha256()
    encoder.hexdigest()
    encoder.update(bytes('12345',encoding='latin-1'))
    temp=encoder.hexdigest()

    print({'Codigo':'202020202020','Secret':temp})
    return db.ESTUDIANTES.find({'Codigo':'202020202020','Secret':temp})[0]


app.run(debug=True)