import os
import json
from collections import Counter

data = ["2019-05-30", "2019-05-31", "2019-06-01", "2019-06-02", "2019-06-03", "2019-06-04", "2019-06-05", "2019-06-06",
            "2019-06-07", "2019-06-08", "2019-06-09", "2019-06-10", "2019-06-11", "2019-06-12", "2019-06-13"]

lt = ['小马', '小敏', '小乔', '小敏', '小杜', '小杜', '小孟', '小敏']

destination_ip=[]
source_ip=[]

path="F:/毕设相关/dataset_2/dataset_2/tcpflow/part/0531.json"
files=os.listdir(path)   #获得文件夹下所有文件名称
for file in files:     #遍历所有文件
    print(file)
    if not os.path.isdir(file):  #判断是否是文件夹，不是文件夹才打开
        f = open(path + '/' + file, encoding='utf-8')
        setting = json.load(f)
    # print(len(setting))
        for i in range(0, len(setting)):  # 文件行数循环
            destination_ip.append(setting[i]['destination_ip'][0:5])
            source_ip.append(setting[i]['source_ip'][0:5])

# print(destination_ip)
# print(source_ip)
# # print(max(lt, key=lt.count))

c = Counter(destination_ip)
d=Counter(source_ip)
#print(dict(c))
print(c.most_common(5))
print(d.most_common(5))
#
# [('10.49', 14699499), ('10.24', 7727101), ('220.1', 579082), ('180.1', 569678), ('10.39', 564760)]
# [('10.49', 16969615), ('10.56', 12615847), ('10.60', 559290), ('10.54', 244829), ('10.64', 30085)]
