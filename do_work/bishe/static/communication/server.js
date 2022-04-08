function brush(date) {
    var dom = document.getElementById("left_two");
    var myChart = echarts4.init(dom);
     var colorList = ['rgb(187,183,232)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)',]
    var app = {};
    option = null;
    var upColor = '#88beec';
    var downColor = 'rgb(180,219,200)';

    file = '../../data/communication/data/' + date + '.csv';

    function splitData(rawData) {
        var categoryData = [];
        var values = [];
        var volumes = [];
        for (var i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i].splice(0, 1)[0]);
            var a = [];
            a.push(rawData[i][0] + rawData[i][1] + rawData[i][2] + rawData[i][3]);
            a.push(Math.max.apply(null, rawData[i]) - Math.max.apply(null, rawData[i]) / 10);
            a.push(Math.max.apply(null, rawData[i]));
            a.push(Math.min.apply(null, rawData[i]));
            values.push(a);
            volumes.push([i, a[0], rawData[i][0] > rawData[i][1] ? 1 : -1]);

        }
        console.log(categoryData)
        console.log(values)
        console.log(volumes)
        return {
            categoryData: categoryData,
            values: values,
            volumes: volumes
        };
    }

    d3.csv(file, function (rawData) {

        console.log(rawData[0]);
        var n = [];
        var ip1 = []
        var ip2 = []
        var ip3 = []
        var ip4 = []
        var ip5 = []
        for (var i = 0; i < rawData.length; i++) {
            var a = [];
            a.push(rawData[i].indexs);
            a.push(Number(rawData[i]["10.24.64.118"]))
            ip1.push(Number(rawData[i]["10.24.64.118"]))
            a.push(Number(rawData[i]["10.49.81.218"]))
            ip2.push(Number(rawData[i]["10.49.81.218"]))
            a.push(Number(rawData[i]["10.49.253.53"]))
            ip3.push(Number(rawData[i]["10.49.253.53"]))
            a.push(Number(rawData[i]["10.39.18.40"]))
            ip4.push(Number(rawData[i]["10.39.18.40"]))
            a.push(Number(rawData[i]["10.49.137.199"]))
            ip5.push(Number(rawData[i]["10.49.137.199"]))
            n.push(a)
        }
        console.log(n);
        var data = splitData(n);
        console.log(data);
        myChart.setOption(
          option = {
            title: {
                text:  'server load overview',
                left: 'center',
                textStyle: {
                    color: '#333333',
                    fontSize: 13
                },
            },
            backgroundColor: '#fff',
            color:colorList,
            animation: false,
            legend: {
                bottom: 10,
                left: 'center',
                data: ['Overview', '10.24.64.118', '10.49.81.218', '10.49.253.53', '10.39.18.40', '10.49.137.199'],
                //data: [ 'MA5', 'MA10', 'MA20', 'MA30']

            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                backgroundColor: 'rgba(245, 245, 245, 0.8)',
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 10,
                textStyle: {
                    color: '#000'
                },
                position: function (pos, params, el, elRect, size) {
                    var obj = {top: 10};
                    obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                    return obj;
                }
                // extraCssText: 'width: 170px'
            },
            axisPointer: {
                link: {xAxisIndex: 'all'},
                label: {
                    backgroundColor: '#777'
                }
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: false
                    },
                    brush: {
                        type: ['lineX', 'clear']
                    }
                }
            },
            brush: {
                xAxisIndex: 'all',
                brushLink: 'all',
                outOfBrush: {
                    colorAlpha: 0.1
                }
            },
            visualMap: {
                show: false,
                seriesIndex: 5,
                dimension: 2,
                pieces: [{
                    value: 1,
                    color: downColor
                }, {
                    value: -1,
                    color: upColor
                }]
            },
            grid: [
                {
                    left: '10%',
                    right: '8%',
                    height: '50%'
                },
                {
                    left: '10%',
                    right: '8%',
                    top: '63%',
                    height: '16%'
                }
            ],
            xAxis: [
                {
                    type: 'category',
                    data: data.categoryData,
                    scale: true,
                    boundaryGap: false,
                    axisLine: {onZero: false},
                    splitLine: {show: false},
                    splitNumber: 20,
                    min: 'dataMin',
                    max: 'dataMax',
                    axisPointer: {
                        z: 100
                    }
                },
                {
                    type: 'category',
                    gridIndex: 1,
                    data: data.categoryData,
                    scale: true,
                    boundaryGap: false,
                    axisLine: {onZero: false},
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLabel: {show: false},
                    splitNumber: 20,
                    min: 'dataMin',
                    max: 'dataMax'
                }
            ],
            yAxis: [
                {
                    scale: true,
                    splitArea: {
                        show: true
                    }
                },
                {
                    scale: true,
                    gridIndex: 1,
                    splitNumber: 2,
                    axisLabel: {show: false},
                    axisLine: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false}
                }
            ],
            dataZoom: [
                {
                    type: 'inside',
                    xAxisIndex: [0, 1],
                    start: 70,
                    end: 90
                },
                {
                    show: true,
                    xAxisIndex: [0, 1],
                    type: 'slider',
                    top: '85%',
                    start: 70,
                    end: 90
                }
            ],
            series: [
                {
                    name: 'Overview',
                    type: 'candlestick',
                    data: data.values,
                    color:'rgb(192,215,226)',
                    itemStyle: {
                        color: upColor,
                        color0: downColor,
                        borderColor: null,
                        borderColor0: null
                    },
                    tooltip: {
                        show: false,
                        formatter: function (param) {
                            param = param[0];
                            console.log(param.name);
                            return [
                                'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                                'Access Max: ' + param.data[0] + '<br/>',
                                'Access Min: ' + param.data[1] + '<br/>'
                            ].join('');
                        }
                    }
                },
                {
                    name: '10.24.64.118',
                    type: 'line',
                    data: ip1,
                    smooth: true,
                    lineStyle: {
                        opacity: 0.5
                    }
                },
                {
                    name: '10.49.81.218',
                    type: 'line',
                    data: ip2,
                    smooth: true,
                    lineStyle: {
                        opacity: 0.5
                    }
                },
                {
                    name: '10.49.253.53',
                    type: 'line',
                    data: ip3,
                    smooth: true,
                    lineStyle: {
                        opacity: 0.5
                    }
                },
                {
                    name: '10.39.18.40',
                    type: 'line',
                    data: ip4,
                    smooth: true,
                    lineStyle: {
                        opacity: 0.5
                    }
                },
                {
                    name: '10.49.137.199',
                    type: 'line',
                    data: ip5,
                    smooth: true,
                    lineStyle: {
                        opacity: 0.5
                    }
                },
                {
                    name: 'Total of Access',
                    type: 'bar',
                     color:'rgb(192,215,226)',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: data.volumes
                }
            ]
        }, true);

        // myChart.dispatchAction({
        //     type: 'brush',
        //     areas: [
        //         {
        //             brushType: 'lineX',
        //             coordRange: ['2016-06-02', '2016-06-20'],
        //             xAxisIndex: 0
        //         }
        //     ]
        // });
    });
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}