import os
import json
from collections import Counter

f = open('F:/毕设相关/dataset_2/dataset_2/login/pack/0613.json', encoding='utf-8')
f2=open('F:/毕设相关/dataset_2/dataset_2/login/part/0613.json', encoding='utf-8')
t=open('F:/毕设相关/dataset_2/dataset_2/login/pack-cloud/0613.json','w',encoding='utf-8')
#f1.write('{ \n "dataCloud":[')
temp=[]
name=[]
all=[]
t.write('[')
pack = json.load(f)
db=json.load(f1)
part=json.load(f2)
#提取pack中所有用户名
for i in range(0,len(pack['children'])):
    for j in range(0,len(pack['children'][i]['children'])):
        temp.append(pack['children'][i]['children'][j]['name'])

atemp=Counter(temp)

for i in atemp.most_common():
   name.append(i[0])
#提取pack中user的info操作

temp1=[]

#判断pack中的用户是否访问数据库
for i in range(0,len(part)):
    for j in name:
        if(j==part[i]['user']):
            temp1.append(j+'_'+part[i]['source_ip'])

atemp1=Counter(temp1)
print(atemp1.most_common())
#去重
for i in atemp1.most_common():
    #print(i[0].split('_')[1])
    t.write('{"user":"' + str(i[0].split('_')[0]) + '","source_ip":"' + str(i[0].split('_')[1]) + '"},\n')

t.write(']')

