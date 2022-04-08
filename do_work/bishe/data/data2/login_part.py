import os
import json

path="F:/毕设相关/dataset_2/dataset_2/tcpflow/tcpflow"
files=os.listdir(path)   #获得文件夹下所有文件名称
f0531 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0531.json', 'a', encoding='utf-8')
f0601 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0601.json', 'a', encoding='utf-8')
f0602 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0602.json', 'a', encoding='utf-8')
f0603 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0603.json', 'a', encoding='utf-8')
f0604 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0604.json', 'a', encoding='utf-8')
f0605 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0605.json', 'a', encoding='utf-8')
f0606 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0606.json', 'a', encoding='utf-8')
f0607 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0607.json', 'a', encoding='utf-8')
f0608 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0608.json', 'w', encoding='utf-8')
f0609 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0609.json', 'a', encoding='utf-8')
f0610 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0610.json', 'a', encoding='utf-8')
f0611 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0611.json', 'a', encoding='utf-8')
f0612 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0612.json', 'a', encoding='utf-8')
f0613 = open('F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0613.json', 'a', encoding='utf-8')

f0531.write('[')
f0601.write('[')
f0602.write('[')
f0603.write('[')
f0604.write('[')
f0605.write('[')
f0606.write('[')
f0607.write('[')
f0608.write('[')
f0609.write('[')
f0610.write('[')
f0611.write('[')
f0612.write('[')
f0613.write('[')

for file in files:     #遍历所有文件
     print(file)
     if not os.path.isdir(file):  #判断是否是文件夹，不是文件夹才打开
         f = open(path + '/' + file, encoding='utf-8')
         setting = json.load(f)
         for i in range(0, len(setting)):  # 文件行数循环
                 if (setting[i]['record_time'][5:10] == '05-31'):
                         f0531.write(str(setting[i]) + ',' +'\n' )
                 elif (setting[i]['record_time'][5:10] == '06-01'):
                         f0601.write(str(setting[i]) + ',' + '\n')
                 elif (setting[i]['record_time'][5:10] == '06-02'):
                         f0602.write(str(setting[i]) + ',' + '\n')
                 elif (setting[i]['record_time'][5:10] == '06-03'):
                         f0603.write(str(setting[i]) + ',' + '\n')
                 elif (setting[i]['record_time'][5:10] == '06-04'):
                         f0604.write(str(setting[i]) + ',' + '\n')
                 elif (setting[i]['record_time'][5:10] == '06-05'):
                         f0605.write(str(setting[i]) + ',' + '\n')
                 elif (setting[i]['record_time'][5:10] == '06-06'):
                         f0606.write(str(setting[i]) + ',' + '\n')
                 elif (setting[i]['record_time'][5:10] == '06-07'):
                         f0607.write(str(setting[i]) + ',' + '\n')
                 elif (setting[i]['record_time'][5:10] == '06-08'):
                         f0608.write(str(setting[i]) + ',' + '\n')
                 elif (setting[i]['record_time'][5:10] == '06-09'):
                         f0609.write(str(setting[i]) + ',' + '\n')
                 elif (setting[i]['record_time'][5:10] == '06-10'):
                         f0610.write(str(setting[i]) + ',' + '\n')
                 elif (setting[i]['record_time'][5:10] == '06-11'):
                         f0611.write(str(setting[i]) + ',' + '\n')
                 elif (setting[i]['record_time'][5:10] == '06-12'):
                         f0612.write(str(setting[i]) + ',' + '\n')
                 elif (setting[i]['record_time'][5:10] == '06-13'):
                         f0613.write(str(setting[i]) + ',' + '\n')

f0531.write(']')
f0601.write(']')
f0602.write(']')
f0603.write(']')
f0604.write(']')
f0605.write(']')
f0606.write(']')
f0607.write(']')
f0608.write(']')
f0609.write(']')
f0610.write(']')
f0611.write(']')
f0612.write(']')
f0613.write(']')
