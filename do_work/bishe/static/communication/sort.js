function sort(i, j) {   //i:日期 j：协议
    console.log("enen");
    file = '../../data/communication/sort/' + i + '.json';

    $.get(file).done(function (data) {

        var dom = document.getElementById("left_one");
        //dom.innerHTML="";
        var myChart = echarts4.init(dom);
        var app = {};
        option = null;
        var colorList = ['rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)']
       
        option = {
            backgroundColor: '#ffffff',
            color: colorList,
            title: {
                text: j +' '+ 'network segment view(' + i + ')',
                textStyle: {
                    color: '#333333',
                    fontSize: 13
                },
                left: 'center',
                align: 'right',
                bottom: '0%'
            },
            tooltip: {     //提示框
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {    //标志颜色条设置
                itemWidth: 14,
                itemHeight: 5,
                itemGap: 13,
                textStyle: {
                    fontsize: 5,
                    color: '#7c7c7d'
                },
                orient: 'vertical',
                x: 'left',
                data: data[j][0]
            },
            series: [
                {
                    name: 'Access source',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner',
                        },

                    },
                    labelLine: {
                        show: true,
                    },
                    data: data[j][2]
                },
                {
                    name: 'Access source',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    data: data[j][1]
                }
            ]
        };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }

    })
}

