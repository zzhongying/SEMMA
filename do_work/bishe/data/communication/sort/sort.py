import os
import json
from collections import Counter

destination_ip=[]
source_ip=[]

protocol = ['http', 'redis', 'mysql', 'dns', 'smb', 'telnet', 'ssh', 'ssl']


f = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0613.json', encoding='utf-8')
fa = open('F:/bishe/data/communication/sort/0613.json', 'w', encoding='utf-8')
fa.write('{\n')
setting = json.load(f)
for p in protocol:
    fa.write('"' + p + '":[\n')
    for j in range(0, len(setting)):
        if (setting[j]['protocol'] == p):
            destination_ip.append(setting[j]['destination_ip'][0:5])
            source_ip.append(setting[j]['source_ip'][0:5])
    a = Counter(destination_ip)
    b = Counter(source_ip)
    ip=[]
    for j in a.most_common(5):
        ip.append(str(j[0]))
    for j in b.most_common(5):
        ip.append(str(j[0]))
    fa.write(str(ip) + ',\n[')
    for j in a.most_common(5):
        fa.write('{"value":'+ str(j[1]) +',"name":"' + str(j[0]) + '"},\n')
    for j in b.most_common(5):
        fa.write('{"value":'+ str(j[1]) +',"name":"' + str(j[0]) + '"},\n')
    fa.write('],\n')
    k=0  #d
    n=0   #s
    for j in a.most_common(5):
        k=k+j[1]

    for j in b.most_common(5):
        n=n+j[1]
    fa.write('[\n{"value":' + str(k) + ',"name":"source_ip"},\n')
    fa.write('{"value":' + str(n) + ',"name":"destination_ip"}\n]\n],\n')

fa.write('}')