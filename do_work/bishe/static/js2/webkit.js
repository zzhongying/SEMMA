function webkit(i) {
     var dom3 = document.getElementById("mind-graph");
     var myChart3 = echarts.init(dom3, 'dark');
     option3 = null;
     var colorList=['#dd6b66','#759aa0','#e59c86','#8cc0a8','#e97e53','#eddc78','#7eb37e','#73b8bb','#7289ab','#ffae48','#dd6b66','#a4561d'];


     file = '../../data/data2/mind-ip-sort/' + i + '.json';

     $.get(file, function web(webkitDep) {
         console.log(file);
         option3 = {
             color:colorList,
             backgroundColor: '#FFFFFF',
             legend: {
                 itemWidth: 12,
                 itemHeight: 5,
                 itemGap: 10,
                 textStyle: {
                     fontsize: 10,
                     color: '#333333'
                 },
                 data: ['http', 'ftp_control', 'mysql', 'unknown', 'ssl', 'redis', 'smb', 'http_proxy', 'ssh', 'dns', 'others']
             },
             tooltip: {},
             title: {
                 text: '当日网络拓扑结构',
                 textStyle: {
                     color: '#333333',
                     fontSize: 13
                 },
                 left: 'center',
                 align: 'right',
                 bottom: '5%'
             },

             series: [{
                 type: 'graph',
                 roam: true,   //放大缩小
                 layout: 'force',
                 animation: false,
                 label: {
                     position: 'right',
                     formatter: '{b}'
                 },
                 draggable: true,
                 data: webkitDep.nodes.map(function (node, idx) {
                     node.id = idx;
                     // console.log(node);
                     if (node.id == '10.56.112.16') {
                         node.value = 50;
                         node.symbolSize = 50;
                     }
                     return node;
                 }),
                 categories: webkitDep.categories,
                 force: {
                     edgeLength: 5,
                     repulsion: 20,
                     gravity: 0.5
                 },
                 itemStyle: {
                     borderColor: '#fff',
                     borderWidth: 1,
                     shadowBlur: 30,
                     shadowColor: 'rgba(0,0,0,0.3)'
                 },
                 focusNodeAdjacency: true,  //节点高亮设置
                 lineStyle: {
                     color: 'source',
                     curveness: 0.5
                 },
                 emphasia: {
                     label: {
                         position: 'right',
                         show: true
                     },
                     lineStyle: {
                         width: 30
                     }
                 },

                 edges: webkitDep.links
             }]

         };
         if (option3 && typeof option3 === "object") {
             myChart3.on('click', function (data) {
                 console.log(data)
             })
             myChart3.setOption(option3, true);
         }

     });
 }


// 端口	服务	说明
// 21	FTP	FTP 服务器所开放的端口，用于上传、下载。
// 22	SSH	22端口就是 SSH 端口，用于通过命令行模式远程连接 Linux 系统服务器。
// 25	SMTP	SMTP 服务器所开放的端口，用于发送邮件。
// 80	HTTP	用于网站服务例如 IIS、Apache、Nginx 等提供对外访问。


