function circular(i,j)    //i:日期     j：协议(mysql/ftp)
{
    file='../../data/database/circular/' + i +'/'+ j + '.json';
   // file='../../data/database/circular/0613/ftp.json';
    console.log("draw cir");


    $.get(file).done(function (graph) {
    var dom = document.getElementById("left_two");
    var myChart = echarts4.init(dom);

    var app = {};
    option = null;
      myChart.off('click');   //解决点击数据叠加
    option = {
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    title:{
      text:'Day\'s'+' ' +j+' ' +'Connections',
      top:'90%',
        left:'center',
         textStyle:{
           color:'#333333',
           fontSize:15
         },
    },
       // tooltip: {},
    series: [{
        name: "relation",
        type: 'graph',
        layout: 'circular',
        circular: {
            rotateLabel: true
        },
        
        data: graph.nodes,
        links: graph.links,
        roam: true,
       // edgeSymbol: ['none', 'arrow'],   //箭头设置
        label: {
            show: true,
            position: 'right',
            formatter: '{b}',
            interval: 0
        },
        itemStyle: {
            color:'rgba(101,159,150,0.8)',
        },
        emphasis: {
            lineStyle: {
                width: "3"
            }
        },
        focusNodeAdjacency: true,
        lineStyle: {
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(65,168,152)'
                },
                {
                    offset: 0.45,
                    color: 'rgb(65,168,152)'
                },
                {
                    offset: 0.65,
                    color: 'rgb(186,161,85)'
                },
                {
                    offset: 1,
                    color: 'rgb(186,161,85)'
                }
            ]),

            curveness: 0.3
        }
    }],


};
    myChart.setOption(option, true);
    myChart.on('click',function (data) {    //console报错是需关闭google翻译    修改一
                 //cloud(i,data.data.name);
                 drawlines(i, data.data.name);                //params.name  结点IP
                 //information(i,data.data.name);
    });
})

}
