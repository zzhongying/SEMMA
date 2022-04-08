function drawleftone(ip) {
    file = '../../data/communication/right_one/' + ip + '.csv';
    d3.csv(file, function (data) {
        var times = [];
        var sum = [];
        for (var i = 0; i < data.length; i++) {
            times.push(data[i].times);
            sum.push(data[i].sum);
        }
        var colorList=[ 'rgb(199,223,235)','rgb(249,237,226)','rgb(180,219,200)', '#1681db', 'rgb(255,228,181)','rgb(147,147,145)']
        var dom = document.getElementById("left_one");
        var myChart = echarts4.init(dom);
        var app = {};
        option = null;
        option = {
            color:colorList,
            title: {
                text: ip + ' '+ 'overview ',
                left: 'center',
                textStyle: {
                    color: '#333333',
                    fontSize: 13
                },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                show: false,
                data: ['Daily communication frequency', 'Number of communication IP in that day']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'value',
                name: 'Daily communication frequency',
            },
                {
                    type: 'value',
                    name: 'Number of communication IP in that day',

                }
            ],
            yAxis: {
                show: false,
                type: 'category',
                data: ['5_31', '6_1', '6_2', '6_3', '6_4', '6_5', '6_6', '6_7', '6_8', '6_9', '6_10', '6_11',
                    '6_12', '6_13'
                ]
            },
            series: [{
                name: 'Daily communication frequency',
                type: 'bar',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: times
            },
                {
                    name: 'Number of communication IP in that day',
                    type: 'line',
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    xAxisIndex: 1,
                    data: sum
                }
            ]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
        myChart.off('click');
        myChart.on('click', function (params) {
            drawIP(params.name, ip);
        })
    })


}