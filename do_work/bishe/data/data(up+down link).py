import json
import os

data = ["2019-05-30", "2019-05-31", "2019-06-01", "2019-06-02", "2019-06-03", "2019-06-04", "2019-06-05", "2019-06-06",
            "2019-06-07", "2019-06-08", "2019-06-09", "2019-06-10", "2019-06-11", "2019-06-12", "2019-06-13"]

up=[8815132, 8026947474, 6050661143, 6127034571, 4209151873, 3907232940, 6186611460, 5119572117, -363565937, -3948844006, 4271813294, 2929451373, 6819685592, 4894127421, 9115502263]
down=[31656629, 17789395716, 6757432428, 4233531045, 12948474500, 14368927256, 30887162158, 20114114187, 1640955754, 2362460281, 2000981832, 16510255506, 21340080136, 23248805627, 40028978080]

for i in range(0,15):
    up[i]=up[i]/1073741824   #转化为G
    down[i]=down[i]/1073741824
# path="F:/毕设相关/dataset_2/dataset_2/tcpflow/tcpflow"
# files=os.listdir(path)   #获得文件夹下所有文件名称
# for file in files:     #遍历所有文件
#     print(file)
#     if not os.path.isdir(file):  #判断是否是文件夹，不是文件夹才打开
#         f = open(path + '/' + file, encoding='utf-8')
#         setting = json.load(f)
#     # print(len(setting))
#         for i in range(0, len(setting)):  # 文件行数循环
#             # 计算协议种类及个数
#                 if (setting[i]['record_time'][0:10] == '2019-05-30'):
#                     up[0] += setting[i]['uplink_length']
#                     down[0] += setting[i]['downlink_length']

print(up)
print(down)




