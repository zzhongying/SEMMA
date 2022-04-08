import os
import json

f=open("F:/毕设相关/dataset_2/dataset_2/db/db/part0.json", encoding='utf-8')
ff=open("F:/毕设相关/dataset_2/dataset_2/db/db/part1.json", encoding='utf-8')

f_write=open("F:/毕设相关/dataset_2/dataset_2/db/db/0611.json",'w',encoding='utf-8')

f_write.write('[')

setting=json.load(f)
for i in range(0,len(setting)):
    if(setting[i]['record_time'][5:10]=='06-11'):
        f_write.write(json.dumps(setting[i]))
        f_write.write(',\n')

settings=json.load(ff)
for i in range(0,len(settings)):
    if (settings[i]['record_time'][5:10] == '06-11'):
        f_write.write(json.dumps(settings[i]))
        f_write.write(',\n')

f_write.write(']')

