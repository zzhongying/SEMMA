function drawline(date, protocol) {
    file = '../../data/communication/protocol/' + date + '/' + protocol + date + '.json';
    d3.json(file, function (err, data) {
        console.log(data.uplinks);
        textname = protocol +" "+ 'flow trend view(' + date + ')';
        var dom = document.getElementById("mind_two");
        var myChart = echarts4.init(dom);
        var app = {};
        var colorList = ['rgb(199,223,235)','#abcfbc','#2699ba','#1681db']
        option = {
            color: colorList,
            title: {
                text: textname,
                left: 'center',
                align: 'right',
                textStyle: {
                    color: 'black',
                    fontSize: 14
                }
            },
            grid: {
                bottom: 80
            },
            toolbox: {
                show: false,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    animation: false,
                    label: {
                        backgroundColor: '#505765'
                    }
                }
            },
            legend: {
                data: ['up_link', 'down_link'],
                left: 10
            },
            dataZoom: [{
                show: true,
                realtime: true,
                start: 65,
                end: 85
            },
                {
                    type: 'inside',
                    realtime: true,
                    start: 65,
                    end: 85
                }
            ],
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    onZero: false
                },
                data: data.time
                    .map(function (str) {
                        return str.replace(' ', '\n');
                    })
            }],
            yAxis: [{
                name: 'up_link',
                type: 'value',
            },
                {
                    name: 'down_link',
                    nameLocation: 'start',
                    type: 'value',
                    inverse: true
                }
            ],
            series: [{
                name: 'up_link',
                type: 'line',
                animation: false,
                areaStyle: {},
                lineStyle: {
                    width: 1
                },
                data: data.uplinks
            },
                {
                    name: 'down_link',
                    type: 'line',
                    yAxisIndex: 1,
                    animation: false,
                    areaStyle: {},
                    lineStyle: {
                        width: 1
                    },
                    data: data.downlinks

                }
            ]
        };
        myChart.setOption(option, true);

    })


}