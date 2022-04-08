var file1 = 0;
var ip1 = "";

function drawright(date, protocol, flag) {
    file = '../../data/communication/right/' + date + '/' + protocol + '.json';
    file1 = file;
    d3.json(file, function (data) {
        var dom = document.getElementById("right_two");
        var myChart = echarts4.init(dom);
        var app = {};
        option = null;
        var colorList = ['rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)']
       
        option = {
            title: {
                text: protocol + ' '+'communications view',
                left: "center",
                textStyle: {
                    left: 'center',
                    color: 'black',
                    fontSize: 14,
                },
            },
            color:colorList,
            tooltip: {
                show: true,
                trigger: 'item',
                position: 'top',
                formatter: function (params) {
                    return params.marker + "IP：" + data.ip[params.data[1]] + "<br>" + params.marker + " Time：" + params.name + "<br>" + params.marker + " Frequency： " + params.data[2];
                }
            },
            animation: false,
            grid: {
                height: 'auto',
                top: '10%',
                left: '2%',
                bottom: '2%',
                right: '2%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: data.time,
                splitArea: {
                    show: true
                }
            },
            yAxis: {
                //show:false,
                type: 'category',
                data: data.ip,
                splitArea: {
                    show: true
                },
                axisLabel: {
                    formatter: function () {
                        return "";
                    }
                }
            },
            dataZoom: [{
                type: 'inside'
            }, {
                type: 'slider'
            }],
            visualMap: {
                show: false,
                min: 0,
                max: 100,
                calculable: true,
                orient: 'horizontal',
                inRange:{
                    color:['rgb(252,230,166)','rgba(174,216,211,0.8)']
                }
                //left: 'center',
                //bottom: '15%'
            },
            series: [{
                name: 'Frequency',
                type: 'heatmap',
                data: data.value,
                label: {
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }


                }
            }]
        };

        myChart.setOption(option, true);
        myChart.off('click');
        myChart.on('click', function (params) {
            console.log(data.ip[params.data[1]]);
            for (var i = 0; i <= flag; i++) {
                if (i == flag) {
                     timecircle(data.ip[params.data[1]], 0);
                     break;
                    // $("#treemap text").click(function backp() {
                    //      alert($(this).text())
                    //     //console.log($(this).text());
                    //     return $(this).text()
                    //
                    // })
                }
            }


            //radial(i,data.data.name);
            //$("#treemap").append('<p>' + data.data.name + '</p>')
            // alert(data.data.name)
        });
        //myChart.off('click');
    })
}

function backip(i) {
    d3.json(file1, function (data) {
        ip1 = data.ip[i];
    })
}
