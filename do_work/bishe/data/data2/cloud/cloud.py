import os
import json
from collections import Counter

pack_cloud=open('F:/毕设相关/dataset_2/dataset_2/login/pack-cloud/0613.json',encoding='utf-8')
db=open('F:/毕设相关/dataset_2/dataset_2/db/db/part1.json',encoding='utf-8')
t=open('F:/毕设相关/dataset_2/dataset_2/db/db/cloud/0613.json','a',encoding='utf-8')

apack_cloud=json.load(pack_cloud)
adb=json.load(db)
temp=[]
t.write('{"dataCloud":[\n')

for i in range(0,len(adb)):
    for j in range(0,len(apack_cloud)):
        if(adb[i]['source_ip']==apack_cloud[j]['source_ip']):
            temp.append(apack_cloud[j]['user']+',' + adb[i]['source_ip'] + ',' +adb[i]['sql_info'])


a=Counter(temp)
print(a.most_common())

for i in a.most_common():
    t.write('{"user":"' + str(i[0].split(',')[0]) + '","source_ip":"' +  str(i[0].split(',')[1]) + '","name":"' + str(i[0].split(',')[2]) +  '","value":"' +str(i[1]) + '"},\n' )

t.write(']}')
