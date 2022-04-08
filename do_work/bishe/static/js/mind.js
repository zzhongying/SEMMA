function ipchose(element) {
    var dom = document.getElementById("mind-graph");
    var myChart = echarts.init(dom);

    option = null;
    var ip = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a','10a','11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p','12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a','10a','11a', '12p'];
    var days = ["05-31", "06-01", "06-02", "06-03", "06-04", "06-05", "06-06",
                "06-07", "06-08", "06-09", "06-10", "06-11", "06-12", "06-13"];


var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10]];

data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    backgroundColor:'#ffffff',
    tooltip: {                 //提示框
        position: 'top'
    },
    animation: false,
    grid: {
        height: '70%',    //日历图标的高
        width:'70%',
        top: '6%',
        left:'23%'
    },
    xAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        },
        axisLabel:{
            interval:0,
             rotate:90
        }
    },
    yAxis: {
        type: 'category',
        data: ip,
        splitArea: {
            show: true
        }
    },
    visualMap: {     //颜色标识条设置
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: '35%',
        bottom: '5%',
        inRange:{
            color:['#f5eea5','#bf464e']
        }
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,

        label: {
            show: true
        },
        emphasis: {
            itemStyle: {
                color:'#3f310e',
                shadowBlur: 10,
                shadowColor: 'rgba(255,255,0, 1)',
                },
        },

    }]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

}


