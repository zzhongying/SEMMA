function sankey(i, j, flag) {    //i:日期  j：协议
    var dom3 = document.getElementById("right_one");
    var myChart3 = echarts.init(dom3, 'dark');
    var colorList = ['#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)',]
    var app = {};
    option3 = null;
    file = '../../data/communication/sankey/' + i + '/' + j + '.json';
    $.get(file, function san(data) {
        // console.log(data)
        option3 = {
            backgroundColor: '#FFFFFF',
            color:colorList,
            title: {
                top:"0%",
                text: j +' '+ 'communication ip view ',
                left: 'center',
                textStyle: {
                    color: '#333333',
                    fontSize: 13
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
                    top:'10%',
                    focusNodeAdjacency: 'allEdges',
                    nodeAlign: 'center',
                    data: data.nodes,
                    links: data.links,
                    itemStyle: {
                        borderColor: '#fff'
                    },
                    lineStyle: {
                        color: 'source',
                        curveness: 0.5
                    }
                }
            ]
        };
        myChart3.setOption(option3, true);
        //myChart3.off('click');
        myChart3.on('click', function (data) {
            radial(i, data.data.name);
            //drawleftone(data.data.name);
            if (flag == 0) {
                 timecircle(data.data.name, 0)
                   $("#treemap text").click(function backp() {
                    //alert($(this).text())
                    var obj = document.getElementById('selectdata');
                    var index = obj.selectedIndex;
                    var val = obj.options[index].value;
                    drawmind(val);

                })
            }
            //console.log(flag);
            // alert(data.data.name)
        });
        myChart3.on('dblclick',function (params) {
            var dd = params.data.name;
            var x = r_name();
            var y = r_time();
            console.log(x,y);
            draw2(x,y,dd);

        })
        //myChart3.off('click');
    });


}
