import os
import json
from collections import Counter
import re
mysql=['0__10.56.92.187__159716', '1__10.24.249.104__159716', '2__10.49.148.130__85172', '3__10.49.148.131__85172', '4__10.49.178.162__454', '5__10.49.174.157__454', '6__10.49.137.123__8', '7__10.49.223.163__8', '8__10.49.231.21__7030', '9__10.49.253.35__7030', '10__10.49.137.87__2494', '11__10.49.223.117__2494', '12__10.56.148.80__16', '13__10.49.253.77__16', '14__10.49.253.219__216', '15__10.49.137.141__216', '16__10.56.148.238__140', '17__10.49.179.16__140', '18__10.56.148.238__2', '19__10.39.18.40__2']
ftp=['0__10.49.212.206__328472', '1__10.49.22.87__328472', '2__10.56.4.86__6', '3__193.58.238.21__6']


mysql_info=[]

f=open("F:/毕设相关/dataset_2/dataset_2/db/db/part1.json", encoding='utf-8')
ff=open("F:/bishe/data/database/word_cloud/0613.json",'w',encoding='utf-8')

setting=json.load(f)
for i in range(0,len(setting)):
       if(setting[i]['record_time'][5:10]=='06-13'):
              for j in mysql:
                    # print(j)
                     temp1=j.split('__')
                     if(temp1[1]==setting[i]['source_ip']):
                            temp2=re.split(' |=',setting[i]['sql_info'])
                            for k in range(0,len(temp2)):
                                   mysql_info.append(setting[i]['source_ip']+'__'+temp2[k])

print(Counter(mysql_info))
ff.write('{\n')
for i in mysql:      # mysql:0__10.56.92.187__159716
       temp3 = i.split('__')
       ff.write('"' + temp3[1] + '":[\n')
       for j,value in Counter(mysql_info).items():
              temp4=j.split('__')
              if(temp3[1]==temp4[0]):
                  if(value > 80000):
                     ff.write('{"text":"' + temp4[1] + '","size":"40","num":"' + str(value) + '"},\n')
                  elif(80000 > value > 50000):
                      ff.write('{"text":"' + temp4[1] + '","size":"35","num":"' + str(value) + '"},\n')
                  elif(50000 > value > 30000):
                      ff.write('{"text":"' + temp4[1] + '","size":"30","num":"' + str(value) + '"},\n')
                  elif(30000 > value > 10000):
                      ff.write('{"text":"' + temp4[1] + '","size":"27","num":"' + str(value) + '"},\n')
                  elif(10000 > value > 5000):
                      ff.write('{"text":"' + temp4[1] + '","size":"23","num":"' + str(value) + '"},\n')
                  elif (5000 > value > 1000):
                      ff.write('{"text":"' + temp4[1] + '","size":"20","num":"' + str(value) + '"},\n')
                  elif (1000 > value > 500):
                      ff.write('{"text":"' + temp4[1] + '","size":"17","num":"' + str(value) + '"},\n')
                  elif (500 > value > 100):
                      ff.write('{"text":"' + temp4[1] + '","size":"14","num":"' + str(value) + '"},\n')
                  elif ( 100 > value) :
                      ff.write('{"text":"' + temp4[1] + '","size":"10","num":"' + str(value) + '"},\n')

       ff.write('],\n')

ff.write('}')
