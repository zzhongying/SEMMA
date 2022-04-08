import json
import os

data = ["2019-05-30", "2019-05-31", "2019-06-01", "2019-06-02", "2019-06-03", "2019-06-04", "2019-06-05", "2019-06-06",
            "2019-06-07", "2019-06-08", "2019-06-09", "2019-06-10", "2019-06-11", "2019-06-12", "2019-06-13"]
#print(data[0])

http = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
ftp_control = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
mysql = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
unknown = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
ssl = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
redis = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
smb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
http_proxy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
ssh = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
dns = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
smtp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
#port
fft = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]   #443   HTTPS（securely transferring web pages）服务器，默认端口号为443/tcp 443/udp
fff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]   #445  在局域网中访问各种共享文件
ettt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  #8223
ezez = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  #8080  TOMCAT .HTTP协议代理服务器常用端口号：80/8080/3128/8081/9098
nzzz = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  #9000
tt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]   #22   SSH（安全登录）、SCP（文件传输）、端口号重定向，默认的端口号为22/tcp
ee=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  #80  IIS(http)
to=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  #21
ttzs=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] #my sql 默认端口号为3306
etsz=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  #8360
sset=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]   #6682
nott=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] #9123

#protocol_type = ["http", "ftp_control", "mysql", "unknown", "ssl", "redis", "smb", "http_proxy", "ssh", "dns","smtp"]  # 取前11个协议
#print(protocol_type[1])
path="F:/毕设相关/dataset_2/dataset_2/tcpflow/tcpflow"
files=os.listdir(path)   #获得文件夹下所有文件名称
for file in files:     #遍历所有文件
    print(file)
    if not os.path.isdir(file):  #判断是否是文件夹，不是文件夹才打开
        f = open(path + '/' + file, encoding='utf-8')
        setting = json.load(f)
    # print(len(setting))
        for i in range(0, len(setting)):  # 文件行数循环
            # 计算协议种类及个数
            for j in range(0, 15):  # 日期循环
                # if (setting[i]['protocol'] == "http" and setting[i]['record_time'][0:10] == data[j]):
                #     http[j] = http[j] + 1
                # elif (setting[i]['protocol'] == "ftp_control" and setting[i]['record_time'][0:10] == data[j]):
                #     ftp_control[j] = ftp_control[j] + 1
                # elif (setting[i]['protocol'] == "mysql" and setting[i]['record_time'][0:10] == data[j]):
                #     mysql[j] = mysql[j] + 1
                # elif (setting[i]['protocol'] == "unknown" and setting[i]['record_time'][0:10] == data[j]):
                #     unknown[j] = unknown[j] + 1
                # elif (setting[i]['protocol'] == "ssl" and setting[i]['record_time'][0:10] == data[j]):
                #     ssl[j] = ssl[j] + 1
                # elif (setting[i]['protocol'] == "redis" and setting[i]['record_time'][0:10] == data[j]):
                #     redis[j] = redis[j] + 1
                # elif (setting[i]['protocol'] == "smb" and setting[i]['record_time'][0:10] == data[j]):
                #     smb[j] = smb[j] + 1
                # elif (setting[i]['protocol'] == "http_proxy" and setting[i]['record_time'][0:10] == data[j]):
                #      http_proxy[j] = http_proxy[j] + 1
                # elif (setting[i]['protocol'] == "ssh" and setting[i]['record_time'][0:10] == data[j]):
                #     ssh[j] = ssh[j] + 1
                # elif (setting[i]['protocol'] == "dns" and setting[i]['record_time'][0:10] == data[j]):
                #     dns[j] = dns[j] + 1
                # elif (setting[i]['protocol'] == "smtp" and setting[i]['record_time'][0:10] == data[j]):
                #      smtp[j] = smtp[j] + 1
                #port计算
                if (setting[i]['destination_port'] == "443" and setting[i]['record_time'][0:10] == data[j]):
                    fft[j] = fft[j] + 1
                elif (setting[i]['destination_port'] == "445" and setting[i]['record_time'][0:10] == data[j]):
                    fff[j] = fff[j] + 1
                elif (setting[i]['destination_port'] == "8223" and setting[i]['record_time'][0:10] == data[j]):
                    ettt[j] = ettt[j] + 1
                elif (setting[i]['destination_port'] == "8080" and setting[i]['record_time'][0:10] == data[j]):
                    ezez[j] = ezez[j] + 1
                elif (setting[i]['destination_port'] == "9000" and setting[i]['record_time'][0:10] == data[j]):
                    nzzz[j] = nzzz[j] + 1
                elif (setting[i]['destination_port'] == "22" and setting[i]['record_time'][0:10] == data[j]):
                    tt[j] = tt[j] + 1
                elif (setting[i]['destination_port'] == "80" and setting[i]['record_time'][0:10] == data[j]):
                    ee[j] = ee[j] + 1
                elif (setting[i]['destination_port'] == "21" and setting[i]['record_time'][0:10] == data[j]):
                    to[j] = to[j] + 1
                elif (setting[i]['destination_port'] == "3306" and setting[i]['record_time'][0:10] == data[j]):
                    ttzs[j] = ttzs[j] + 1
                elif (setting[i]['destination_port'] == "8360" and setting[i]['record_time'][0:10] == data[j]):
                    etsz[j] = etsz[j] + 1
                elif (setting[i]['destination_port'] == "6682" and setting[i]['record_time'][0:10] == data[j]):
                    sset[j] = sset[j] + 1
                elif (setting[i]['destination_port'] == "9123" and setting[i]['record_time'][0:10] == data[j]):
                    nott[j] = nott[j] + 1


# with open('F:/毕设相关/dataset_2/dataset_2/tcpflow/protocol.json','w') as file_object:
#   file_object.write("{")
#   file_object.write(http)
#   file_object.write(ftp_control)
#   file_object.write(mysql)
#   file_object.write(unknow)
#   file_object.write(ssl)
#   file_object.write(redis)
#   file_object.write(smb)
#   file_object.write(http_proxy)
#   file_object.write(ssh)
#   file_object.write(dns)
#   file_object.write(smtp)
#   file_object.write("}")
# print("protocol")
# print(http)
# print(ftp_control)  # 0-9
# print(mysql)
# print(unknown)
# print(ssl)
# print(redis)
# print(smb)
# print(http_proxy)
# print(ssh)
# print(dns)
# print(smtp)
print("port")
print(fft)
print(fff)
print(ettt)
print(ezez)
print(nzzz)
print(tt)
print(ee)
print(to)
print(ttzs)
print(etsz)
print(sset)
print(nott)

    # with open('F:/毕设相关/dataset_2/dataset_2/tcpflow/tcpflow/protocol0.json', 'w') as file_object:
    #     for i in range(0, 11):
    #         file_object.write(protocol_type[i])
    #         file_object.write(":")
    #         file_object.write()