import os
import json
from collections import Counter

allip=['10.49.21.15', '10.49.137.87', '10.49.137.7']

http=[]
redis=[]
mysql=[]
dns=[]
ssl=[]
ssh=[]

f=open("F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0613.json", encoding='utf-8')
fa = open('F:/bishe/data/communication/radial/0613.json', 'w', encoding='utf-8')

setting= json.load(f)
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

#print(fin)  fin中存储XX日内所有类型sankey图节点中的IP地址

fa.write('{\n')

for j in fin:
    dns = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    http = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    mysql = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    redis = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ssh = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ssl = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    fa.write('"'+ j + '":[\n')
    for i in range(0,len(setting)):
        if ((setting[i]['source_ip']==j) and (setting[i]['record_time'][11:13] == '00' or setting[i]['record_time'][11:13] == '01')):
            if(setting[i]['protocol'] == 'dns'):
                dns[0]=dns[0]+1
            elif(setting[i]['protocol']=='http'):
                http[0]=http[0]+1
            elif(setting[i]['protocol'] == 'mysql'):
                mysql[0]=mysql[0]+1
            elif(setting[i]['protocol'] == 'redis'):
                redis[0]=redis[0]+1
            elif(setting[i]['protocol'] == 'ssh'):
                ssh[0]=ssh[0]+1
            elif(setting[i]['protocol'] == 'ssl'):
                ssl[0]=ssl[0]+1
        elif ((setting[i]['source_ip']==j) and (setting[i]['record_time'][11:13] == '02' or setting[i]['record_time'][11:13] == '03')):
            if (setting[i]['protocol'] == 'dns'):
                dns[1] = dns[1] + 1
            elif (setting[i]['protocol'] == 'http'):
                http[1] = http[1] + 1
            elif (setting[i]['protocol'] == 'mysql'):
                mysql[1] = mysql[1] + 1
            elif (setting[i]['protocol'] == 'redis'):
                redis[1] = redis[1] + 1
            elif (setting[i]['protocol'] == 'ssh'):
                ssh[1] = ssh[1] + 1
            elif (setting[i]['protocol'] == 'ssl'):
                ssl[1] = ssl[1] + 1
        elif ((setting[i]['source_ip']==j) and (setting[i]['record_time'][11:13] == '04' or setting[i]['record_time'][11:13] == '05')):
            if (setting[i]['protocol'] == 'dns'):
                dns[2] = dns[2] + 1
            elif (setting[i]['protocol'] == 'http'):
                http[2] = http[2] + 1
            elif (setting[i]['protocol'] == 'mysql'):
                mysql[2] = mysql[2] + 1
            elif (setting[i]['protocol'] == 'redis'):
                redis[2] = redis[2] + 1
            elif (setting[i]['protocol'] == 'ssh'):
                ssh[2] = ssh[2] + 1
            elif (setting[i]['protocol'] == 'ssl'):
                ssl[2] = ssl[2] + 1
        elif ((setting[i]['source_ip']==j) and (setting[i]['record_time'][11:13] == '06' or setting[i]['record_time'][11:13] == '07')):
            if (setting[i]['protocol'] == 'dns'):
                dns[3] = dns[3] + 1
            elif (setting[i]['protocol'] == 'http'):
                http[3] = http[3] + 1
            elif (setting[i]['protocol'] == 'mysql'):
                mysql[3] = mysql[3] + 1
            elif (setting[i]['protocol'] == 'redis'):
                redis[3] = redis[3] + 1
            elif (setting[i]['protocol'] == 'ssh'):
                ssh[3] = ssh[3] + 1
            elif (setting[i]['protocol'] == 'ssl'):
                ssl[3] = ssl[3] + 1
        elif ((setting[i]['source_ip']==j) and (setting[i]['record_time'][11:13] == '08' or setting[i]['record_time'][11:13] == '09')):
            if (setting[i]['protocol'] == 'dns'):
                dns[4] = dns[4] + 1
            elif (setting[i]['protocol'] == 'http'):
                http[4] = http[4] + 1
            elif (setting[i]['protocol'] == 'mysql'):
                mysql[4] = mysql[4] + 1
            elif (setting[i]['protocol'] == 'redis'):
                redis[4] = redis[4] + 1
            elif (setting[i]['protocol'] == 'ssh'):
                ssh[4] = ssh[4] + 1
            elif (setting[i]['protocol'] == 'ssl'):
                ssl[4] = ssl[4] + 1
        elif ((setting[i]['source_ip']==j) and (setting[i]['record_time'][11:13] == '10' or setting[i]['record_time'][11:13] == '11')):
            if (setting[i]['protocol'] == 'dns'):
                dns[5] = dns[5] + 1
            elif (setting[i]['protocol'] == 'http'):
                http[5] = http[5] + 1
            elif (setting[i]['protocol'] == 'mysql'):
                mysql[5] = mysql[5] + 1
            elif (setting[i]['protocol'] == 'redis'):
                redis[5] = redis[5] + 1
            elif (setting[i]['protocol'] == 'ssh'):
                ssh[5] = ssh[5] + 1
            elif (setting[i]['protocol'] == 'ssl'):
                ssl[5] = ssl[5] + 1
        elif ((setting[i]['source_ip']==j) and (setting[i]['record_time'][11:13] == '12' or setting[i]['record_time'][11:13] == '13')):
            if (setting[i]['protocol'] == 'dns'):
                dns[6] = dns[6] + 1
            elif (setting[i]['protocol'] == 'http'):
                http[6] = http[6] + 1
            elif (setting[i]['protocol'] == 'mysql'):
                mysql[6] = mysql[6] + 1
            elif (setting[i]['protocol'] == 'redis'):
                redis[6] = redis[6] + 1
            elif (setting[i]['protocol'] == 'ssh'):
                ssh[6] = ssh[6] + 1
            elif (setting[i]['protocol'] == 'ssl'):
                ssl[6] = ssl[6] + 1
        elif ((setting[i]['source_ip']==j) and (setting[i]['record_time'][11:13] == '14' or setting[i]['record_time'][11:13] == '15')):
            if (setting[i]['protocol'] == 'dns'):
                dns[7] = dns[7] + 1
            elif (setting[i]['protocol'] == 'http'):
                http[7] = http[7] + 1
            elif (setting[i]['protocol'] == 'mysql'):
                mysql[7] = mysql[7] + 1
            elif (setting[i]['protocol'] == 'redis'):
                redis[7] = redis[7] + 1
            elif (setting[i]['protocol'] == 'ssh'):
                ssh[7] = ssh[7] + 1
            elif (setting[i]['protocol'] == 'ssl'):
                ssl[7] = ssl[7] + 1
        elif ((setting[i]['source_ip']==j) and (setting[i]['record_time'][11:13] == '16' or setting[i]['record_time'][11:13] == '17')):
            if (setting[i]['protocol'] == 'dns'):
                dns[8] = dns[8] + 1
            elif (setting[i]['protocol'] == 'http'):
                http[8] = http[8] + 1
            elif (setting[i]['protocol'] == 'mysql'):
                mysql[8] = mysql[8] + 1
            elif (setting[i]['protocol'] == 'redis'):
                redis[8] = redis[8] + 1
            elif (setting[i]['protocol'] == 'ssh'):
                ssh[8] = ssh[8] + 1
            elif (setting[i]['protocol'] == 'ssl'):
                ssl[8] = ssl[8] + 1
        elif ((setting[i]['source_ip']==j) and (setting[i]['record_time'][11:13] == '18' or setting[i]['record_time'][11:13] == '19')):
            if (setting[i]['protocol'] == 'dns'):
                dns[9] = dns[9] + 1
            elif (setting[i]['protocol'] == 'http'):
                http[9] = http[9] + 1
            elif (setting[i]['protocol'] == 'mysql'):
                mysql[9] = mysql[9] + 1
            elif (setting[i]['protocol'] == 'redis'):
                redis[9] = redis[9] + 1
            elif (setting[i]['protocol'] == 'ssh'):
                ssh[9] = ssh[9] + 1
            elif (setting[i]['protocol'] == 'ssl'):
                ssl[9] = ssl[9] + 1
        elif ((setting[i]['source_ip'] == j) and (setting[i]['record_time'][11:13] == '20' or setting[i]['record_time'][11:13] == '21')):
            if (setting[i]['protocol'] == 'dns'):
                dns[10] = dns[10] + 1
            elif (setting[i]['protocol'] == 'http'):
                http[10] = http[10] + 1
            elif (setting[i]['protocol'] == 'mysql'):
                mysql[10] = mysql[10] + 1
            elif (setting[i]['protocol'] == 'redis'):
                redis[10] = redis[10] + 1
            elif (setting[i]['protocol'] == 'ssh'):
                ssh[10] = ssh[10] + 1
            elif (setting[i]['protocol'] == 'ssl'):
                ssl[10] = ssl[10] + 1
        elif ((setting[i]['source_ip'] == j) and (setting[i]['record_time'][11:13] == '22' or setting[i]['record_time'][11:13] == '23')):
            if (setting[i]['protocol'] == 'dns'):
                dns[11] = dns[11] + 1
            elif (setting[i]['protocol'] == 'http'):
                http[11] = http[11] + 1
            elif (setting[i]['protocol'] == 'mysql'):
                mysql[11] = mysql[11] + 1
            elif (setting[i]['protocol'] == 'redis'):
                redis[11] = redis[11] + 1
            elif (setting[i]['protocol'] == 'ssh'):
                ssh[11] = ssh[11] + 1
            elif (setting[i]['protocol'] == 'ssl'):
                ssl[11] = ssl[11] + 1

    fa.write(str(dns) +',\n')
    fa.write(str(http) + ',\n')
    fa.write(str(mysql) + ',\n')
    fa.write(str(redis) + ',\n')
    fa.write(str(ssh) + ',\n')
    fa.write(str(ssl) + '],\n')

    print(dns)
    print(http)
    print(mysql)
    print(redis)
    print(ssh)
    print(ssl)

fa.write('}\n')







