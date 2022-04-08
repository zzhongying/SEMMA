import xlrd,os,json
from xlutils.copy import copy
import pandas as pd
import numpy as np
from collections import Counter

path="F:/毕设相关/dataset_2/dataset_2/tcpflow/test"
files=os.listdir(path)   #获得文件夹下所有文件名称

ip=[]
h=0
ftp=0
m=0
ssl=0
r=0
smb=0
ssh=0
dns=0
http_proxy=0
o=0

rawData= xlrd.open_workbook('one.xlsx')

wb_sheet=copy(rawData)
sheet1 = wb_sheet.sheet_by_index(0)  # 通过索引获取表格


for file in files:     #遍历所有文件
     print(file)
     if not os.path.isdir(file):  #判断是否是文件夹，不是文件夹才打开
         f = open(path + '/' + file, encoding='utf-8')
         setting = json.load(f)
         for i in range(0, len(setting)):  # 文件行数循环
             wb_sheet.write(i+1,0,setting[i]['source_ip'][0:8])
             for j in range(0,sheet1.nrows):
                     if(setting[i]['protocol']=='http'):
                         wb_sheet.write(i+1 , 1 , ++h)
                     elif(setting[i]['protocol']=='ftp_control'):
                         wb_sheet.write(i + 1, 2, ++ftp)
                     elif (setting[i]['protocol'] == 'mysql'):
                         wb_sheet.write(i + 1, 3, ++m)
                     elif (setting[i]['protocol'] == 'ssl'):
                         wb_sheet.write(i + 1, 4, ++ssl)
                     elif (setting[i]['protocol'] == 'redis'):
                         wb_sheet.write(i + 1, 5, ++r)
                     elif (setting[i]['protocol'] == 'smb'):
                         wb_sheet.write(i + 1, 6, ++smb)
                     elif (setting[i]['protocol'] == 'ssh'):
                         wb_sheet.write(i + 1, 7, ++ssh)
                     elif (setting[i]['protocol'] == 'dns'):
                         wb_sheet.write(i + 1, 8, ++dns)
                     elif (setting[i]['protocol'] == 'http_proxy'):
                         wb_sheet.write(i + 1, 9, ++http_proxy)
                     else :
                         wb_sheet.write(i + 1, 10, ++o)

wb.save(os.path.abspath(os.path.join(os.path.dirname(__file__), '0531.xls')))



# a = Counter(ip)
# print(a.most_common(10))
# print(len(a))







