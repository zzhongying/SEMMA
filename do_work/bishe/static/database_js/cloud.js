function echartsCloud(d, i) {    //d:用户名，i日期
    // 基于准备好的dom，初始化echarts实例
    console.log(d);
    console.log(i);
    file = '../../data/data2/cloud/' + i + '.json';
    var myChart = echarts.init(document.getElementById('right_one'));
    var colorList = ['#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)',]

    d3.json(file, function (date) {
        console.log(date[d]);
        var option = {
            backgroundColor: '#FFFFFF',
            title: {
                text: '用户数据库高频操作',
                textStyle: {
                    color: '#333333',
                    fontSize: 13
                },
                left: 'center',
                align: 'right',
                top: '5%'
            },
            tooltip: {},
            series: [{
                type: 'wordCloud',  //类型为字符云
                shape: 'smooth',  //平滑
                gridSize: 5, //网格尺寸
                size: ['10%', '80%'],
                // sizeRange : [ 0, 400 ],
                rotationRange: [46, 80], //旋转范围
                drawOutOfBound: true,
                textStyle: {
                    normal: {
                        fontFamily: 'sans-serif',
                        color: colorList
                    },
                    emphasis: {
                        shadowBlur: 5,  //阴影距离
                        shadowColor: '#333'  //阴影颜色
                    }
                },
                //data: [],
                series: [{
                    data: date[d]
                }]
            }]
        }
        myChart.setOption(option);

    })


}

