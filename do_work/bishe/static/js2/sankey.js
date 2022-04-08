function sankey(i) {
    var dom1 = document.getElementById("down-left");
    var myChart1 = echarts.init(dom1,'dark');
    var app = {};
    option1 = null;
    var colorList=['#e59c86','#8cc0a8','#e97e53','#eddc78','#7eb37e','#73b8bb','#7289ab','#ffae48','#dd6b66','#a47228','#dd6b66','#759aa0'];

    file = '../../data/data2/sankey/' + i + '.json';
    $.get(file , function san (data) {
        console.log(data)
        option1 = {
            backgroundColor:'#FFFFFF',
            title: {
                text: 'Login模式连接情况',
                 left:'43%',
               textStyle:{
                        color:'#333333',
                        fontSize:10
                 },
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            animation: true,
            series: [
                {
                    type: 'sankey',
                    focusNodeAdjacency: 'allEdges',
                    nodeAlign: 'center',
                    data: data.nodes,
                    links: data.links,

                    lineStyle: {
                        color: 'source',
                        curveness: 0.5
                    }
                }
            ]
        };
        myChart1.setOption(option1, true);
        // myChart1.on('click',function (data) {
        //          alert(data.data.name)
        // });
    });
       if (option1 && typeof option1 === "object") {
            myChart1.setOption(option1, true);
        }

}
