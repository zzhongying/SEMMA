var names = '';
var times = '';
function drawmind(data) {

    // $("#mind_one").html(" ");
    file = '../../data/communication/mind/' + data + '.json'
    d3.json(file, function (err, data) {
        var myChart = echarts.init(document.getElementById("mind_one"));
        var nodes = data.nodes;
        var links = data.links;
        var proto = data.proto;


        var categories = [{//设置图例
            name: 'Source IP',
        }, {
            name: 'Destination IP',
        }, {
            name: 'Protocol',
        }, {
            name: 'IP of Multiple Protocol',
        },
        ];
        var option = {
            backgroundColor: '#FFFFFF',
            color: ['rgb(199,223,235)','#a0dabd','#2699ba','#1681db'],//颜色
            title: {
                text: 'Internal communications view',
                left: "center",
                top: '3%',
                textStyle: {
                    color: 'black',
                    fontWeight:'bolder',
                    fontSize: 14,
                },
            },
            legend: {
                data: categories.map(function (a) {
                    return a.name;
                }),
                // left: 'left',
                // orient: 'vertical',
                // bottom: '30%',
                bottom: '5%',
                textStyle: {
                    color: 'black',
                },
            },
            grid: {
                right: '10%',
            },
            tooltip: {
                trigger: "item",
                position: ['50%', '50%'],
                formatter: function (params) {//单位,显示内容
                    if (params.dataType == 'node') {
                        if (params.data.category == 2) {
                            return 'protocol: ' + params.name + '<br>destination IP: ' + params.value;
                        } else {
                            return 'IP address: ' + params.name + '<br>protocol：' + proto[params.name] + '<br>communication IP: ' + params.data.value;
                        }

                    } else {
                        var t1 = params.name;
                        t1 = t1.split('>');
                        var sip_tmp = nodes[parseInt(t1[0].trim())]['name'];
                        var dip_tmp = nodes[parseInt(t1[1].trim())]['name'];
                        var t2 = proto[sip_tmp];
                        var t3 = proto[dip_tmp];
                        t1 = '';
                        for (var i = 0; i < t2.length; i++) {
                            if (t3.indexOf(t2[i]) != -1) {
                                if (i < t2.length - 1) {
                                    t1 += t2[i] + ',';
                                } else {
                                    t1 += t2[i];
                                }
                            }
                        }
                        return '通信方向：' + sip_tmp + ' > ' + dip_tmp + '<br>所用协议：' + t1;
                    }
                },
            },
            series: [{
                type: "graph",
                categories: categories,
                focusNodeAdjacency: true,
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [2, 8],
                edgeLabel: {
                    normal: {
                        textStyle: {
                            fontSize: 20,
                            color: 'black'
                        }
                    }
                },
                data: nodes,
                links: links,
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                },
                label: {
                    position: 'right',
                    formatter: '{b}',
                    color: 'black',
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3,
                },
                emphasis: {
                    lineStyle: {
                        width: 10,
                    },
                },
            }],
        };

        myChart.setOption(option,true);
        var dom1 = document.getElementById("right_one");
        var myChart1 = echarts.init(dom1, 'dark');
        var dom2 = document.getElementById("right_two");
        var myChart2 = echarts4.init(dom2);

        myChart.off('click');
        myChart1.off('click');
        myChart2.off('click');
        var flag = 0;
        myChart.on('click', function (params) {
            console.log(params.name);
            var obj = document.getElementById('selectdata');
            var index = obj.selectedIndex;
            var val = obj.options[index].value;          //获取当前日期
            //console.log(val);
            if (params.dataType == 'node') {
                if (params.data.category == 2) {

                    names = '';
		            times = '';
                    names = params.name;
                    times = val;


                    console.log(params.name);
                    draw(params.name, val)
                    timecircle(params.name, 1)
                    console.log(params.name);
                    drawline(val, params.name);
                    sankey(val, params.name, flag);
                    if(params.name == 'mysql'){

                        drawpass(val);
                        circular(val, params.name);
                    }
                    else{
                        sort(val, params.name);
                        brush(val);
                    }
                    drawright(val, params.name, flag);
                    flag = flag + 1;

                } else {
                    timecircle(params.name, 0)
                    //console.log(flag);
                    drawline(val, proto[params.name][0]);
                    sankey(val, proto[params.name][0], flag);
                    sort(val, proto[params.name][0]);
                    drawright(val, proto[params.name][0], flag);
                    flag = flag + 1;

                }
            }
            $("#treemap text").dblclick(function op() {       //切换分支
                console.log($(this).text());
                change=$(this).text()
            })

            $("#treemap text").click(function backp() {
                change=null;
                //alert($(this).text())
                console.log($(this));
                var node = $(this).text();
                console.log(node);
                drawmind(val);
                var number = 0;
                for (var i = 0; i < data.nodes.length; i++) {
                    if (node == data.nodes[i].name) {
                        number = data.nodes[i].id;
                        break;
                    }
                }
                myChart.dispatchAction({
                    type: 'focusNodeAdjacency',
                    dataIndex: number
                });
            })
        });

        myChart1.on('click', function (params) {
            drawleftone(params.name);
            console.log(params);
            var node = params.name;
            //console.log(node);
            var number = 0;
            for (var i = 0; i < data.nodes.length; i++) {   //sankey回溯
                if (node == data.nodes[i].name) {
                    number = data.nodes[i].id;
                    //console.log(data.nodes[i].id);
                    break;
                }
                //console.log(i);
            }
            //console.log(number);                 //查找结点ID
            myChart.dispatchAction({
                type: 'focusNodeAdjacency',
                dataIndex: number
            });
            $("#treemap text").click(function backp() {
                //alert($(this).text())

                var node = $(this).text();
                console.log(node);
                var number = 0;
                for (var i = 0; i < data.nodes.length; i++) {
                    if (node == data.nodes[i].name) {
                        number = data.nodes[i].id;
                        break;
                    }
                }
                myChart.dispatchAction({
                    type: 'focusNodeAdjacency',
                    dataIndex: number
                });
            })
        })


        myChart2.on('click', function (params) {

            backip(params.data[1]);
            var number = 0;
            for (var i = 0; i < data.nodes.length; i++) {
                if (ip1 == data.nodes[i].name) {
                    number = data.nodes[i].id;
                    //console.log(data.nodes[i].id);
                    break;
                }
                //console.log(i);
            }
            //console.log(number);                 //查找结点ID
            myChart.dispatchAction({
                type: 'focusNodeAdjacency',
                dataIndex: number
            });

            $("#treemap text").click(function backp() {
                //alert($(this).text())
                var node = $(this).text();
                console.log(node);
                var number = 0;
                for (var i = 0; i < data.nodes.length; i++) {
                    if (node == data.nodes[i].name) {
                        number = data.nodes[i].id;
                        break;
                    }
                }
                myChart.dispatchAction({
                    type: 'focusNodeAdjacency',
                    dataIndex: number

                });
            })
        })


    })
}
function r_name() {
    return names;

}
function r_time() {
    return times;
}


