import os
import json
from collections import Counter

http=[]
redis=[]
mysql=[]
dns=[]
ssl=[]
ssh=[]

#f = open('F:/毕设相关/dataset_2/dataset_2/login/part/0613.json', encoding='utf-8')

# files=os.listdir(path)   #获得文件夹下所有文件名称
#
# for file in files:     #遍历所有文件
#      if not os.path.isdir(file):  #判断是否是文件夹，不是文件夹才打开
f = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0611.json', encoding='utf-8')
setting = json.load(f)
for i in range(0, len(setting)):  # 文件行数循环
    if(setting[i]['protocol']=='http'):
        http.append(setting[i]['source_ip']+',' +setting[i]['destination_ip'])
    if(setting[i]['protocol']=='redis'):
        redis.append(setting[i]['source_ip']+',' +setting[i]['destination_ip'])
    if (setting[i]['protocol'] == 'mysql'):
        mysql.append(setting[i]['source_ip'] + ',' + setting[i]['destination_ip'])
    if (setting[i]['protocol'] == 'dns'):
        dns.append(setting[i]['source_ip'] + ',' + setting[i]['destination_ip'])
    if (setting[i]['protocol'] == 'ssl'):
        ssl.append(setting[i]['source_ip'] + ',' + setting[i]['destination_ip'])
    if (setting[i]['protocol'] == 'ssh'):
        ssh.append(setting[i]['source_ip'] + ',' + setting[i]['destination_ip'])


a = Counter(http)
b = Counter(redis)
c = Counter(mysql)
d = Counter(dns)
e = Counter(ssl)
f = Counter(ssh)

allnodes=[]
for i in a.most_common(20):
    temp = i[0].split(',')
    allnodes.append(temp[0])
    allnodes.append(temp[1])

for i in b.most_common(20):
    temp = i[0].split(',')
    allnodes.append(temp[0])
    allnodes.append(temp[1])

for i in c.most_common(20):
    temp = i[0].split(',')
    allnodes.append(temp[0])
    allnodes.append(temp[1])

for i in d.most_common(20):
    temp = i[0].split(',')
    allnodes.append(temp[0])
    allnodes.append(temp[1])

for i in e.most_common(20):
    temp = i[0].split(',')
    allnodes.append(temp[0])
    allnodes.append(temp[1])

for i in f.most_common(20):
    temp = i[0].split(',')
    allnodes.append(temp[0])
    allnodes.append(temp[1])

fin=[]
for i in Counter(allnodes):
    fin.append(i)

print(fin)

# fa = open('F:/bishe/data/communication/sankey/0613/http.json', 'w', encoding='utf-8')
# fb = open('F:/bishe/data/communication/sankey/0613/redis.json', 'w',encoding='utf-8')
# fc = open('F:/bishe/data/communication/sankey/0613/mysql.json','w', encoding='utf-8')
# fd = open('F:/bishe/data/communication/sankey/0613/dns.json', 'w',encoding='utf-8')
# fe = open('F:/bishe/data/communication/sankey/0613/ssl.json','w', encoding='utf-8')
# ff = open('F:/bishe/data/communication/sankey/0613/ssh.json', 'w',encoding='utf-8')
#
#
# nodea=[]
# nodeb=[]
# nodec=[]
# noded=[]
# nodee=[]
# nodef=[]
#
# #############################################################
# fa.write('{"nodes":[\n')
# for i in a.most_common(20):
#     temp = i[0].split(',')
#     nodea.append(temp[0])
#     nodea.append(temp[1])
#
# na=Counter(nodea)
# for j in na:
#     print(j)
#     fa.write('{"name": "' +j + '"},' + '\n')
#
# fa.write('],'+ '\n' + '"links": [' + '\n')
# for i in a.most_common(20):
#     temp=i[0].split(',')
#     fa.write('{"source": ' +'"'+ str(temp[0]) + '"' +', "target":'+ '"'+ str(temp[1]) + '"'+ ', "value":' + str(i[1]) + '},'+ '\n')
#    # print(temp[0])
#
# fa.write(']}')
#
# ##################################################################
#
# fb.write('{"nodes":[\n')
# for i in b.most_common(20):
#     temp = i[0].split(',')
#     nodeb.append(temp[0])
#     nodeb.append(temp[1])
#
# nb=Counter(nodeb)
# for j in nb:
#     print(j)
#     fb.write('{"name": "' +j + '"},' + '\n')
#
# fb.write('],'+ '\n' + '"links": [' + '\n')
# for i in b.most_common(20):
#     temp=i[0].split(',')
#     fb.write('{"source": ' +'"'+ str(temp[0]) + '"' +', "target":'+ '"'+ str(temp[1]) + '"'+ ', "value":' + str(i[1]) + '},'+ '\n')
#    # print(temp[0])
#
# fb.write(']}')
#
# #####################################################
# fc.write('{"nodes":[\n')
# for i in c.most_common(20):
#     temp = i[0].split(',')
#     nodec.append(temp[0])
#     nodec.append(temp[1])
#
# nc=Counter(nodec)
# for j in nc:
#     print(j)
#     fc.write('{"name": "' +j + '"},' + '\n')
#
# fc.write('],'+ '\n' + '"links": [' + '\n')
# for i in c.most_common(20):
#     temp=i[0].split(',')
#     fc.write('{"source": ' +'"'+ str(temp[0]) + '"' +', "target":'+ '"'+ str(temp[1]) + '"'+ ', "value":' + str(i[1]) + '},'+ '\n')
#    # print(temp[0])
#
# fc.write(']}')
#
# #############################################################
#
# fd.write('{"nodes":[\n')
# for i in d.most_common(20):
#     temp = i[0].split(',')
#     noded.append(temp[0])
#     noded.append(temp[1])
#
# nd=Counter(noded)
# for j in nd:
#     print(j)
#     fd.write('{"name": "' +j + '"},' + '\n')
#
# fd.write('],'+ '\n' + '"links": [' + '\n')
# for i in d.most_common(20):
#     temp=i[0].split(',')
#     fd.write('{"source": ' +'"'+ str(temp[0]) + '"' +', "target":'+ '"'+ str(temp[1]) + '"'+ ', "value":' + str(i[1]) + '},'+ '\n')
#    # print(temp[0])
#
# fd.write(']}')
#
# ########################################################3
#
# fe.write('{"nodes":[\n')
# for i in e.most_common(20):
#     temp = i[0].split(',')
#     nodee.append(temp[0])
#     nodee.append(temp[1])
#
# ne=Counter(nodee)
# for j in ne:
#     print(j)
#     fe.write('{"name": "' +j + '"},' + '\n')
#
# fe.write('],'+ '\n' + '"links": [' + '\n')
# for i in e.most_common(20):
#     temp=i[0].split(',')
#     fe.write('{"source": ' +'"'+ str(temp[0]) + '"' +', "target":'+ '"'+ str(temp[1]) + '"'+ ', "value":' + str(i[1]) + '},'+ '\n')
#    # print(temp[0])
#
# fe.write(']}')
#
# ###################################################################
#
# ff.write('{"nodes":[\n')
# for i in f.most_common(20):
#     temp = i[0].split(',')
#     nodef.append(temp[0])
#     nodef.append(temp[1])
#
# nf=Counter(nodef)
# for j in nf:
#     print(j)
#     ff.write('{"name": "' +j + '"},' + '\n')
#
# ff.write('],'+ '\n' + '"links": [' + '\n')
# for i in f.most_common(20):
#     temp=i[0].split(',')
#     ff.write('{"source": ' +'"'+ str(temp[0]) + '"' +', "target":'+ '"'+ str(temp[1]) + '"'+ ', "value":' + str(i[1]) + '},'+ '\n')
#    # print(temp[0])
#
# ff.write(']}')
#



