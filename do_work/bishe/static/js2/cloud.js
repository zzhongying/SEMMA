
function echartsCloud(d,i){    //d:用户名，i日期
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('down-right'));

    myChart.setOption({
        backgroundColor:'#FFFFFF',
        title: {            text: '用户数据库高频操作',
            textStyle:{
             		color:'#333333',
					fontSize:13
             },
            left: 'center',
            align: 'right',
            top:'5%'
        },
        tooltip: {},
        series: [{
            type : 'wordCloud',  //类型为字符云
                shape:'smooth',  //平滑
                gridSize : 5, //网格尺寸
                size : ['10%','80%'],
               // sizeRange : [ 0, 400 ],
                rotationRange : [ 46, 80 ], //旋转范围
            drawOutOfBound:true,
                textStyle : {
                    normal : {
                        fontFamily:'sans-serif',
                        color : function() {
                            return 'rgb('
                                    + [ Math.round(Math.random() * 160),
                                            Math.round(Math.random() * 160),
                                            Math.round(Math.random() * 160) ]
                                            .join(',') + ')';
                        }
                    },
                    emphasis : {
                        shadowBlur : 5,  //阴影距离
                        shadowColor : '#333'  //阴影颜色
                    }
                },
                data:[],
        }]
    });
    // 异步加载数据
    file = '../../data/data2/cloud/' + i + '.json';
    $.get(file).done(function (data) {
      //  console.log(data[d])
        // 填入数据
        myChart.setOption({
            series: [{
                data:data[d]
                    // function () {
                    //  if(d != data[])
                    //     {
                    //         $get('../../data/data2/login_part/part/temp.json',function (da) {
                    //             console.log(da)
                    //         })
                    //         return undefined
                    //     }
                    //  else{
                    //      return data[d]
                    // }
                    //}

            }]
        });
    });
}

