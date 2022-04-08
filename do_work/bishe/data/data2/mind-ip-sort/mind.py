import os,json
from collections import Counter

a=[]
sd=[]
t=[]
f=open('F:/毕设相关/bishe/data/data2/mind-ip-sort/0613.json','w',encoding='utf-8')
f.write('{\n"type": "force",\n"categories": [\n{\n"name": "http",\n"keyword": {},\n"base": "http"},\n{"name": "ftp_control","keyword": {}, "base": "ftp_control"},{ "name": "mysql","keyword": {},"base": "mysql"},{"name": "unknown","keyword": {},"base": "unknown"},{"name": "ssl","keyword": {},"base": "ssl"},{"name": "redis","keyword": {},"base": "redis"},{"name": "smb","keyword": {},"base": "smb"},{"name": "http_proxy","keyword": {},"base": "http_proxy"},{"name": "ssh","keyword": {},"base": "ssh"},{"name": "dns","keyword": {},"base": "dns"},{"name": "others","keyword": {},"base": "others"}],')
path="F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0613.json"

w = open(path, encoding='utf-8')
setting = json.load(w)
for i in range(0, len(setting)):  # 文件行数循环
    a.append(setting[i]['source_ip'] + '__'+setting[i]['protocol'])
    a.append(setting[i]['destination_ip'] + '__'+setting[i]['protocol'])
    sd.append(setting[i]['source_ip']+ '__'+setting[i]['destination_ip'])

# print(a)
b=Counter(a)
c=Counter(sd)
print(b)
print(b.values())
j=0
f.write('"nodes": [\n')
for key,value in b.items():
    if(value>1000):    #只有nodes出现次数超过1000，才将其加入至json中
        temp = key.split('__')
         #print(temp[0]+'//'+temp[1])
        t.append(temp[0] + '__' + str(j))
        f.write('{"name":"'+temp[0] +'",\n"value":1,\n"category":')
        j=j+1
        if (temp[1] == 'http'):
            f.write('1\n},')
        elif (temp[1] == 'ftp_control'):
            f.write('2\n},')
        elif (temp[1] == 'mysql'):
            f.write('3\n},')
        elif (temp[1] == 'unknown'):
            f.write('4\n},')
        elif (temp[1] == 'ssl'):
            f.write('5\n},')
        elif (temp[1] == 'redis'):
            f.write('6\n},')
        elif (temp[1] == 'smb'):
            f.write('7\n},')
        elif (temp[1] == 'http_proxy'):
            f.write('8\n},')
        elif (temp[1] == 'ssh'):
            f.write('9\n},')
        elif (temp[1] == 'dns'):
            f.write('10\n},')
        else:
            f.write('11\n},')


f.write('],\n')
f.write('"links": [\n')

print(t)

for j in c:   #c:links     source_ip__target_ip
    temp1 = j.split('__')  #temp1[0]:source_ip  temp1[1]:target_ip
    for k in t:    #t:'10.49.148.130__1'  -----nodes
        temp2 = k.split('__')
        if(temp1[0]==temp2[0]):
            for d in t:
                temp3=d.split('__')
                if(temp1[1]==temp3[0]):
                    f.write('{\n"source":'+temp2[1] +',\n"target":'+temp3[1]+'},\n')

f.write(']\n}')
