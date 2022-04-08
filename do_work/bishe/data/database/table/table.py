import  os
import json
from collections import Counter

f=open("F:/毕设相关/dataset_2/dataset_2/login/part/0531.json", encoding='utf-8')
fuser=open("F:/bishe/data/database/table/0531.json",'w',encoding='utf-8')

mysql=['0__10.56.148.238__687', '1__10.49.21.125__687', '2__10.49.148.130__85358', '3__10.49.148.131__85358', '4__10.56.92.187__154241', '5__10.24.249.104__154241', '6__10.49.178.162__565', '7__10.49.174.157__565', '8__10.49.231.21__7034', '9__10.49.253.35__7034', '10__10.49.137.123__10', '11__10.49.223.163__10', '12__10.49.137.87__562', '13__10.49.223.117__562', '14__10.56.92.210__4', '15__10.49.253.219__4', '16__10.49.253.219__547', '17__10.49.137.141__547', '18__10.56.92.125__4', '19__10.24.249.104__4', '20__10.56.193.37__57', '21__10.24.249.253__57', '22__10.56.148.238__21', '23__10.39.18.40__21', '24__10.56.148.238__5', '25__10.32.240.119__5', '26__10.56.148.238__1259', '27__10.49.36.165__1259', '28__10.56.92.20__4', '29__10.49.174.189__4']
ftp=['0__10.49.212.206__449430', '1__10.49.22.87__449430', '2__10.56.34.157__2', '3__117.27.146.48__2', '4__10.56.115.254__1', '5__121.127.250.82__1']
user=[]

setting=json.load(f)
for i in range(0,len(setting)):
    for j in mysql:
        temp1=j.split('__')
        if(setting[i]['source_ip'] == temp1[1]):
            user.append( temp1[1] + '__' + setting[i]['user'])
    for k in ftp:
        temp2 = k.split('__')
        if(setting[i]['source_ip'] == temp2[1]):
            user.append( temp2[1] + '__' + setting[i]['user'])

print(Counter(user))

ip=[]
for i in range(0,len(setting)):
    for j in mysql:
        temp1=j.split('__')
        if (setting[i]['source_ip'] == temp1[1]):
            ip.append(temp1[1] + '__' + setting[i]['destination_ip'])
    for k in ftp:
        temp2=k.split('__')
        if (setting[i]['source_ip'] == temp2[1]):
            ip.append(temp2[1] + '__' + setting[i]['destination_ip'])

print(Counter(ip))


