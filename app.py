# app.py

from flask import Flask, jsonify
from funciones import imprimir_hola_mundo, suma_para_cuatro

app = Flask(__name__)

@app.route('/hola-mundo', methods=['GET'])
def hola_mundo():
    imprimir_hola_mundo()
    return jsonify({"message": "Hola Mundo impreso en consola"})

@app.route('/suma', methods=['GET'])
def suma():
    a = 2
    b = 2
    resultado = suma_para_cuatro(a, b)
    return jsonify({"resultado": resultado})

if __name__ == '__main__':
    app.run()
