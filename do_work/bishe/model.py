from flask import Flask,render_template,request, jsonify,send_from_directory
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import sessionmaker
from flask_cors import *
from sqlalchemy.ext.declarative import declarative_base
import config,pymysql,json
import contextlib

app = Flask(__name__)
db = SQLAlchemy(app)
app.config.from_object(config)        #链接到config

#for i in range(0,2):
class testdb_000(db.Model):
        __tablename__ = 'testdb_00'
        record_time= db.Column(db.String(255),primary_key=True)
        source_ip = db.Column(db.String(255))
        destination_ip = db.Column(db.String(255))
        protocol = db.Column(db.String(255))
        destination_port = db.Column(db.String(255))
        sql_info = db.Column(db.String(255))



