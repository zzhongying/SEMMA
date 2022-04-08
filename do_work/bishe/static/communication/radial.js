function radial(i,j) {    //i:日期    j：ip地址
    file='../../data/communication/radial/' + i + '.json';
    console.log("draw rad");
    $.get(file).done(function (data) {
        //console.log(data)
        var colorList=['rgb(199,223,235)','#abcfbc','#2699ba','#1681db','rgb(199,223,235)','#abcfbc','#2699ba','#1681db']
        //console.log(data[j][0])
        var dom = document.getElementById("left_two");
        var myChart1 = echarts4.init(dom);
        var app = {};
        option = null;
        myChart1.off('click');
        option = {
            color:colorList,
            angleAxis: {
                type: 'category',
                data: ['2a', '4a', '6a', '8a', '10a', '12a', '2p','4p','6p','8p','10p','12p']
            },
            tooltip:{
                show:true,
                axisPointer:{
                    type:'shadow'
                }
            },
             title: {
                text: j+' '+'protocol view',
                textStyle:{
                            color:'#333333',
                            fontSize:13
                     },
                left: 'center',
                align: 'right',
                bottom:'-1%'
            },
            radiusAxis: {
            },
            polar: {
                radius:'65%',
                center:['55%','50%']
            },
            series: [{
                type: 'bar',
                data: data[j][0],
                coordinateSystem: 'polar',
                name: 'dns',
                stack: 'a'
            }, {
                type: 'bar',
                data: data[j][1],
                coordinateSystem: 'polar',
                name: 'http',
                stack: 'a'
            }, {
                type: 'bar',
                data: data[j][2],
                coordinateSystem: 'polar',
                name: 'mysql',
                stack: 'a'
            }, {
                type: 'bar',
                data:data[j][3],
                coordinateSystem: 'polar',
                name: 'redis',
                stack: 'a'
            }, {
                type: 'bar',
                data: data[j][4],
                coordinateSystem: 'polar',
                name: 'ssh',
                stack: 'a'
            }, {
                type: 'bar',
                data: data[j][5],
                coordinateSystem: 'polar',
                name: 'ssl',
                stack: 'a'
            }
            ],
            legend: {
                itemWidth:14,
                itemHeight:5,
                itemGap:5,
                textStyle:{
                    fontsize:10,
                    color:'#7c7c7d'
                },
                 orient: 'vertical',
                x:'left',
                show: true,
                data: ['dns', 'http', 'mysql','redis','ssh','ssl']
            }
        };

        if (option && typeof option === "object") {
            myChart1.setOption(option, true);
        }
        });
}
