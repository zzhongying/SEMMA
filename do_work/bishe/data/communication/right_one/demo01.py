import os
import pandas as pd
path = "D:/Data/tcpflow/tcpflow"           # 遍历文件夹下所有文件
files = os.listdir(path)

sum1 = list()
ip = list()
n = '10.49.21.15'
for file in files:
    i = path+"/"+file
    data = pd.read_csv(i)
    # data1 = data[data['destination_ip'].str.contains('42.62.71.74')]
    data1 = data[data['source_ip'].str.contains(n)]
    sum1.append(data1.shape[0])
    datasum = data1["destination_ip"]
    data2 = set(datasum)
    ip.append(len(data2))
    # print(data2)
    print(file)
    print(data1.shape[0])
    # print(data1[['downlink_length', 'uplink_length']].sum())
    print(len(data2))
print(sum1)
print(ip)
data3 = pd.DataFrame({
    'date': ['0531', '0601', '0602', '0603', '0604', '0605', '0606', '0607', '0608', '0609', '0610', '0611', '0612', '0613'],
    'times': sum1,
    'sum': ip
})
print(data3)
# data3.to_csv(n+'.csv')



