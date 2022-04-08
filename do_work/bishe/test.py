import matplotlib.pyplot as plt
import kmeans

plt.figure(figsize=(8, 6))
x1 = [1, 2, 3, 1, 5, 6, 5, 5, 6, 7, 8, 9, 7, 9]  # x坐标列表
x2 = [1, 3, 2, 2, 8, 6, 7, 6, 7, 1, 2, 1, 1, 3]  # y坐标列表
colors = ['b', 'g', 'r']  # 颜色列表，因为要分3类，所以该列表有3个元素
shapes = ['o', 's', 'D']  # 点的形状列表，因为要分3类，所以该列表有3个元素
labels = ['A', 'B', 'C']  # 画图的标签内容，A, B, C分别表示三个类的名称
kmeans_model, x1_result, x2_result = kmeans.kmeans_building(x1, x2, 3, labels, colors, shapes)  # 本例要分3类，所以传入一个3
print(kmeans_model)
print(x1_result)
print(x2_result)