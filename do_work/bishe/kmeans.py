import xlrd,os,openpyxl
from xlutils.copy import copy
import pandas as pd
import numpy as np
from sklearn.cluster import KMeans

# 从Excel中读取数据存入数组
rawData = xlrd.open_workbook('test1.xlsx')
sheet1 = rawData.sheet_by_index(0)  # 通过索引获取表格
row=sheet1.nrows
print(row)

# table = rawData.sheets()[0]
#
# data = []
# for i in range(table.nrows):
#     if i == 0:
#         continue
#     else:
#         data.append(table.row_values(i)[1:])
#
# featureList = ['Age', 'Gender', 'Degree','Sort']
# mdl = pd.DataFrame.from_records(data, columns=featureList)
#
# # 聚类
# mdl_new = np.array(mdl[['Age', 'Gender', 'Degree','Sort']])  # 转化为数组
# seed = 9  # 设置随机数
# clf = KMeans(n_clusters=3, random_state=seed)  # 聚为3个类
# clf.fit(mdl_new)  # 拟合模型
#
# #print(clf.cluster_centers_)  # 查看KMeans聚类后的5个质心点的值。
# mdl['label'] = clf.labels_  # 对原数据表进行类别标记
# c = mdl['label'].value_counts()
#
#
# print(mdl.values)
#
# #将聚类写入excel表中
# list1=[]
# for i in mdl.values:
#     list1.append(str(i)[-3:-2])
# #print(list1)
#
# wb=copy(rawData)
# wb_sheet=wb.get_sheet(0)
# for i in range(1,len(mdl.values)+1):               #i:行 4:列
#     wb_sheet.write(i,4,int(list1[i-1]))
#
#
# wb.save(os.path.abspath(os.path.join(os.path.dirname(__file__), 'test1.xls')))
# row=wb_sheet.nrows
# print(row)
#
