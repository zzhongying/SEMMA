from flask import Flask,render_template,request, jsonify,redirect,url_for
from flask_sqlalchemy import SQLAlchemy
import config
import json
import re
from pandas import read_json
from model import testdb_000
from collections import Counter

app = Flask(__name__)
db = SQLAlchemy(app)
app.config.from_object(config)        #链接到config

# @app.route('/')
# def hello_world():
#     return 'Hello World!'

@app.route('/data_db/',methods=['GET','POST'])
def testdata_db():
    ALL= testdb_000.query.all()

    return type(ALL)

@app.route('/')
def test():
    # s = json.loads('{"name":"test", "type":{"name":"seq", "parameter":["1", "2"]}}')
    # print (s)      #{'name': 'test', 'type': {'name': 'seq', 'parameter': ['1', '2']}}
    # print ( s.keys())   #dict_keys(['name', 'type'])
    # print( s["name"])    #test
    # print(  s["type"]["name"])    #seq
    # print( s["type"]["parameter"][1])   #2


    return 'Hello World!'


if __name__ == '__main__':
    app.run(
        debug=True
    )
