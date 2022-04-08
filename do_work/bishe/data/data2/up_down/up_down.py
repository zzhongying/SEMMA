import os
import json
from collections import Counter

f = open('F:/毕设相关/dataset_2/dataset_2/login/part/0531.json', encoding='utf-8')
setting = json.load(f)
for i in range(0, len(setting)):  # 文件行数循环
    if(setting[i]['record_time'][11:15]):
        f.w