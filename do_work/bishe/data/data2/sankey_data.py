import os
import json
from collections import Counter

links=[]
destination_node=[]

# path="F:/毕设相关/dataset_2/dataset_2/login/test"
#
# files=os.listdir(path)   #获得文件夹下所有文件名称
#
#
# for file in files:     #遍历所有文件
#     if not os.path.isdir(file):  #判断是否是文件夹，不是文件夹才打开
f = open('F:/毕设相关/dataset_2/dataset_2/login/part/0531.json', encoding='utf-8')

setting = json.load(f)
for i in range(0, len(setting)):  # 文件行数循环
     links.append(setting[i]['source_ip']+',' +setting[i]['destination_ip'])
     #destination_node.append(setting[i]['destination_ip'])


a = Counter(links)
#b=Counter(destination_node)



print(a.most_common(20))
f0531=open('F:/毕设相关/dataset_2/dataset_2/login/sankey/test.json','w', encoding='utf-8')
f0531.write('{ "nodes": [ ' + '\n')
for i in a.most_common(20):
    temp=i[0].split(',')
    f0531.write('{"name": "' + str(temp[0]) + '"},' + '\n')
    f0531.write('{"name": "' + str(temp[1]) + '"},' + '\n')

f0531.write('],'+ '\n' + '"links": [' + '\n')

for i in a.most_common(20):
    temp=i[0].split(',')
    f0531.write('{"source": ' +'"'+ str(temp[0]) + '"' +', "target":'+ '"'+ str(temp[1]) + '"'+ ', "value":' + str(i[1]) + '},'+ '\n')
   # print(temp[0])

f0531.write('  ]}')
#print(b.most_common(20))

