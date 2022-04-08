import json
import os
from collections import Counter

lo_fail=[]
lo_suc=[]
lo_out=[]
STATUS_LOGON_FAILURE=[]
STATUS_LOGON_SUCCESS=[]
Password_required=[]
all1=[]
all2=[]
all3=[]
all4=[]
all5=[]
all6=[]

f = open('F:/毕设相关/dataset_2/dataset_2/login/part/0613.json', encoding='utf-8')

#f1=open('F:/毕设相关/dataset_2/dataset_2/login/pack/temp.json','w',encoding='utf-8')

f2=open('F:/毕设相关/dataset_2/dataset_2/login/cloud/0613.json','w',encoding='utf-8')


#f1.write('[')

setting = json.load(f)
for i in range(0, len(setting)):  # 文件行数循环
    if setting[i]['info']=='530 Login authentication failed':
        all1.append(setting[i])
        #f1.write('{' + '"user":' + '"' +str(setting[i]['user'] + '",'+'"record_time":' + '"'+ setting[i]['record_time'] + '",' +'"source_ip":' + '"'+ setting[i]['source_ip'] + '",' +'"destination_ip":' + '"'+ setting[i]['destination_ip'] + '",' +'"protocol":' + '"'+setting[i]['protocol']  + '",' +'"info":' + '"'+setting[i]['info'] ) + '"},\n' )
        lo_fail.append(setting[i]['user'] + '_' + setting[i]['source_ip'])
    elif setting[i]['info']=='mysql login success':
        #f1.write('{' + '"user":' + '"' +str(setting[i]['user'] + '",'+'"record_time":' + '"'+ setting[i]['record_time'] + '",' +'"source_ip":' + '"'+ setting[i]['source_ip'] + '",' +'"destination_ip":' + '"'+ setting[i]['destination_ip'] + '",' +'"protocol":' + '"'+setting[i]['protocol']  + '",' +'"info":' + '"'+setting[i]['info'] ) + '"},\n' )
        all2.append(setting[i])
        lo_suc.append(setting[i]['user'] + '_' + setting[i]['source_ip'])
    elif setting[i]['info']=='530 Logout.':
        #f1.write('{' + '"user":' + '"' +str(setting[i]['user'] + '",'+'"record_time":' + '"'+ setting[i]['record_time'] + '",' +'"source_ip":' + '"'+ setting[i]['source_ip'] + '",' +'"destination_ip":' + '"'+ setting[i]['destination_ip'] + '",' +'"protocol":' + '"'+setting[i]['protocol']  + '",' +'"info":' + '"'+setting[i]['info'] ) + '"},\n' )

        all3.append(setting[i])
        lo_out.append(setting[i]['user'] + '_' + setting[i]['source_ip'])
    elif setting[i]['info'] == 'STATUS_LOGON_FAILURE':
        #f1.write('{' + '"user":' + '"' +str(setting[i]['user'] + '",'+'"record_time":' + '"'+ setting[i]['record_time'] + '",' +'"source_ip":' + '"'+ setting[i]['source_ip'] + '",' +'"destination_ip":' + '"'+ setting[i]['destination_ip'] + '",' +'"protocol":' + '"'+setting[i]['protocol']  + '",' +'"info":' + '"'+setting[i]['info'] ) + '"},\n' )

        all4.append(setting[i])
        STATUS_LOGON_FAILURE.append(setting[i]['user'] + '_' + setting[i]['source_ip'])
    elif setting[i]['info'] == 'STATUS_LOGON_SUCCESS':
        #f1.write('{' + '"user":' + '"' +str(setting[i]['user'] + '",'+'"record_time":' + '"'+ setting[i]['record_time'] + '",' +'"source_ip":' + '"'+ setting[i]['source_ip'] + '",' +'"destination_ip":' + '"'+ setting[i]['destination_ip'] + '",' +'"protocol":' + '"'+setting[i]['protocol']  + '",' +'"info":' + '"'+setting[i]['info'] ) + '"},\n' )

        all5.append(setting[i])
        STATUS_LOGON_SUCCESS.append(setting[i]['user'] + '_' + setting[i]['source_ip'])
    elif setting[i]['info'] == '331 User root OK. Password required':
        #f1.write('{' + '"user":' + '"' +str(setting[i]['user'] + '",'+'"record_time":' + '"'+ setting[i]['record_time'] + '",' +'"source_ip":' + '"'+ setting[i]['source_ip'] + '",' +'"destination_ip":' + '"'+ setting[i]['destination_ip'] + '",' +'"protocol":' + '"'+setting[i]['protocol']  + '",' +'"info":' + '"'+setting[i]['info'] ) + '"},\n' )

        all6.append(setting[i])
        Password_required.append(setting[i]['user'] + '_' + setting[i]['source_ip'])

#f1.write(']')


alo_fail=Counter(lo_fail)
alo_suc=Counter(lo_suc)
alo_out=Counter(lo_out)
aSTATUS_LOGON_FAILURE=Counter(STATUS_LOGON_FAILURE)
aSTATUS_LOGON_SUCCESS=Counter(STATUS_LOGON_SUCCESS)
aPassword_required=Counter(Password_required)

print(alo_fail.most_common(20)[0])

f2.write('[')
for i in alo_fail.most_common(10):

    f2.write('{"user":"'+str(i[0].split('_')[0]) +'","source_ip":"' + str(i[0].split('_')[1])+ '","info":"530 Login authentication failed"},\n' )

for i in alo_suc.most_common(10):

    f2.write('{"user":"'+str(i[0].split('_')[0]) +'","source_ip":"' + str(i[0].split('_')[1])+ '","info":"mysql login success"},\n')

for i in alo_out.most_common(10):

    f2.write('{"user":"'+str(i[0].split('_')[0]) +'","source_ip":"' + str(i[0].split('_')[1])+ '","info":"530 Logout."},\n')

for i in aSTATUS_LOGON_FAILURE.most_common(10):

    f2.write('{"user":"'+str(i[0].split('_')[0]) +'","source_ip":"' + str(i[0].split('_')[1])+ '","info":"STATUS_LOGON_FAILURE"},\n')

for i in aSTATUS_LOGON_SUCCESS.most_common(10):

    f2.write('{"user":"'+str(i[0].split('_')[0]) +'","source_ip":"' + str(i[0].split('_')[1])+ '","info":"STATUS_LOGON_SUCCESS"},\n')

for i in aPassword_required.most_common(10):

    f2.write('{"user":"'+str(i[0].split('_')[0]) +'","source_ip":"' + str(i[0].split('_')[1])+ '","info":"331 User root OK. Password required"},\n')


f2.write(']')



#
# f1.write('alo_fail\n')
# for i in alo_fail.most_common(10):
#     f1.write('{' + '"name":'+ '"' + str(i[0]) + '",' + '"value":' + '"' + str(i[1]) + '"' + '},\n')
#
# f1.write('alo_suc\n')
# for i in alo_suc.most_common(10):
#     f1.write('{' + '"name":'+ '"' + str(i[0]) + '",' + '"value":' + '"' + str(i[1]) + '"' + '},\n')
#
# f1.write('alo_out\n')
# for i in alo_out.most_common(10):
#     f1.write('{' + '"name":'+ '"' + str(i[0]) + '",' + '"value":' + '"' + str(i[1]) + '"' + '},\n')
#
#
# f1.write('aSTATUS_LOGON_FAILURE\n')
# for i in aSTATUS_LOGON_FAILURE.most_common(10):
#     f1.write('{' + '"name":'+ '"' + str(i[0]) + '",' + '"value":' + '"' + str(i[1]) + '"' + '},\n')
#
#
# f1.write('aSTATUS_LOGON_SUCCESS\n')
# for i in aSTATUS_LOGON_SUCCESS.most_common(10):
#     f1.write('{' + '"name":'+ '"' + str(i[0]) + '",' + '"value":' + '"' + str(i[1]) + '"' + '},\n')
#
#
# f1.write('aPassword_required\n')
# for i in aPassword_required.most_common(10):
#     f1.write('{' + '"name":'+ '"' + str(i[0]) + '",' + '"value":' + '"' + str(i[1]) + '"' + '},\n')
#



#0531   [('lss6', 272570)]
#0601   [('lss6', 287120)]
#0602   [('lss6', 368690)]
#0603   [('lss6', 247730)]
