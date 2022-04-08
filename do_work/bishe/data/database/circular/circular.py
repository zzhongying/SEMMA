import os
import json
from collections import Counter

f=open("F:/毕设相关/dataset_2/dataset_2/login/part/0613.json", encoding='utf-8')
# f_mysql=open('F:/bishe/data/database/circular/0613/mysql.json','w',encoding='utf-8')
# f_ftp=open('F:/bishe/data/database/circular/0613/ftp.json','w',encoding='utf-8')

a=[]
b=[]
mysql=[]
ftp=[]

setting=json.load(f)
for i in range(0,len(setting)):
    if(setting[i]['protocol']=='mysql'):
        a.append(setting[i]['source_ip']+'__'+setting[i]['destination_ip'])
    elif(setting[i]['protocol']=='ftp'):
        b.append(setting[i]['source_ip']+'__'+setting[i]['destination_ip'])

mysql=Counter(a)
ftp=Counter(b)

c=[]
d=[]
mysql_nodes=[]
ftp_nodes=[]


for i,value in mysql.items():       # mysql:'10.56.92.187__10.24.249.104': 154241
    temp=i.split('__')
    c.append(temp[0]+'__'+str(value))
    c.append(temp[1]+'__'+str(value))

j=0
for i in Counter(c):
    mysql_nodes.append(str(j)+'__'+ i)     # mysql_nodes:  0__10.56.92.187__154241
    j=j+1

for i,value in ftp.items():
    temp = i.split('__')
    d.append(temp[0]+'__'+str(value))
    d.append(temp[1]+'__'+str(value))

j=0
for i in Counter(d):
    ftp_nodes.append(str(j)+ '__'+i)   # id__ip__size
    j=j+1

print(mysql_nodes)
print(ftp_nodes)


#
# f_mysql.write('{"nodes":[\n')
# for i in mysql_nodes:    # id__ip__size
#     temp=i.split('__')
#     if(int(temp[2])< 1000):
#         f_mysql.write('{\n"id":' + str(temp[0]) + ',\n"name":"' + temp[1] + '",\n"symbolSize":' + '5' + '\n},')
#     elif(5000 > int(temp[2]) > 1000 ):
#         f_mysql.write('{\n"id":' + str(temp[0]) + ',\n"name":"' + temp[1] + '",\n"symbolSize":' + '10' + '\n},')
#     elif(10000 > int(temp[2]) >5000 ):
#         f_mysql.write('{\n"id":' + str(temp[0]) + ',\n"name":"' + temp[1] + '",\n"symbolSize":' + '20' + '\n},')
#     elif(int(temp[2]) > 10000):
#         f_mysql.write('{\n"id":' + str(temp[0]) + ',\n"name":"' + temp[1] + '",\n"symbolSize":' + '40' + '\n},')
#
# f_mysql.write('],\n"links":[\n')
# k=0
# for i,value in mysql.items():   # '10.56.92.187__10.24.249.104': 154241
#     temp1=i.split('__')
#     for j in mysql_nodes:      #0__10.56.92.187__154241
#         temp2=j.split('__')
#         if(temp1[0]== temp2[1]):
#             for n in mysql_nodes:
#                 temp3=n.split('__')
#                 if(temp1[1] == temp3[1]):
#                     f_mysql.write('{\n"id":' + str(k) + ',\n"source":' + str(temp2[0]) +',\n'+'"target":' + str(temp3[0]) + '\n},')
#                     k=k+1
#
# f_mysql.write(']\n}')
#
# ######################################################################
#
# f_ftp.write('{"nodes":[\n')
# for i in ftp_nodes:    # id__ip__size
#     temp=i.split('__')
#     if (int(temp[2]) < 1000):
#         f_ftp.write('{\n"id":' + str(temp[0]) + ',\n"name":"' + temp[1] + '",\n"symbolSize":' + '5' + '\n},')
#     elif (5000 > int(temp[2]) > 1000):
#         f_ftp.write('{\n"id":' + str(temp[0]) + ',\n"name":"' + temp[1] + '",\n"symbolSize":' + '10' + '\n},')
#     elif (10000 > int(temp[2]) > 5000):
#         f_ftp.write('{\n"id":' + str(temp[0]) + ',\n"name":"' + temp[1] + '",\n"symbolSize":' + '20' + '\n},')
#     elif (int(temp[2]) > 10000):
#         f_ftp.write('{\n"id":' + str(temp[0]) + ',\n"name":"' + temp[1] + '",\n"symbolSize":' + '40' + '\n},')
#
# f_ftp.write('],\n"links":[\n')
# k=0
# for i,value in ftp.items():   # '10.56.92.187__10.24.249.104': 154241
#     temp1=i.split('__')
#     for j in ftp_nodes:      #0__10.56.92.187__154241
#         temp2=j.split('__')
#         if(temp1[0]== temp2[1]):
#             for n in ftp_nodes:
#                 temp3=n.split('__')
#                 if(temp1[1] == temp3[1]):
#                     f_ftp.write('{\n"id":' + str(k) + ',\n"source":' + str(temp2[0]) +',\n'+'"target":' + str(temp3[0]) + '\n},')
#                     k=k+1
#
# f_ftp.write(']\n}')
#
#
#
#
#
# #f_mysql.write(']}')
#
#
#
#
#
#
#
