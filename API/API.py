from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
import signal
import sys

conexion = MongoClient('localhost',27017)

def signal_handler(sig, frame):
    conexion.close()
    sys.exit(0)

signal.signal(signal.SIGINT, signal_handler)

app=Flask(__name__)
CORS(app)

@app.route('/login',methods=['POST'])
def login():
    data=request.get_json()
    print(data)
    return jsonify({'access':0, 'accesskey':'-4754979324454554765'})

@app.route('/Pruebas')
def pruebas():
    global conexion
    db=conexion.SGADB

    return db.Estudiantes.find({'Codigo':'202020202020','Secret':str(hash(12345))})[0]


app.run(debug=True)