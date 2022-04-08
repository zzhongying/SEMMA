var dom = document.getElementById("down-left");
var myChart = echarts.init(dom);
var app = {};
option = null;

option={
     backgroundColor:'#FFFFFF',
    title:{
        text:'流量分部情况',
        textStyle:{
             		color:'#333333',
					fontSize:13
             },
        // textStyle:{
        //     fontWeight:'normal',
        //     fontSize:13,
        //     color:'#626262'
        // },
        left: 'center',
        align: 'right',
        bottom:'-1%'
    },
    tooltip:{
        trigger:'axis',
        axisPointer:{
            lineStyle:{
                color:'#b7b9b6'
            },
             type: 'line'    // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    //标识方块设置
    legend:{
        icon:'rect',
        itemWidth:14,
        itemHeight:5,
        itemGap:13,
         textStyle:{
            fontsize:12,
            color:'#7c7c7d'
        },
        data:['up','down'],
        right:'4%',
        margin:5
    },
    grid:{
        left:'3%',
        right:'4%',
        bottom:'9%',
        containLabel:true
    },
    xAxis:[{
        type:'category',
        boundaryGap:false,
        axisTick: {
            alignWithLabel: true
        },
        axisLabel:{
            interval:1

        },
        axisLine:{
            linsStyle:{
                color:'#b4b4b5'
            }
        },
        data:['05-31','6-01','06-02','06-03','06-04','06-05','06-06','06-07','06-08','06-09','06-10','06-11','06-12','06-13']
    }],

    yAxis:[{
        type:'value',
        name:'data traffic/G',
        axisTick:{
            show:false
        },
        axisLine:{
            linsStyle:{
                color:'#cbcbcb'
            }
        },
        axisLabel:{

            textStyle:{
                fontSize:14
            }
        },
        splitLine:{
            lineStyle:{
                color:'#e3e3e3'
            }
        }
    }],
    series:[{
        name:'up',
        type:'line',
        smooth:true,
        symbol:'circle',
        symbolSize:3,
        showSymbol: false,
        lineStyle:{
            normal:{
                width:1
            }
        },
        areaStyle:{
            normal:{
                color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                    offset:0,
                    color:'rgba(211,114,111,0.3)'
                },{
                    offset:1,
                    color:'rgba(211,114,111,0)'
                }],false),
                shadowColor:'rgba(0,0,0,0.1)',
                shadowBlur:10
            }
        },
        itemStyle:{
            normal:{
                color:'rgba(211,114,111)',
                borderColor:'rgba(211,114,111,0.27)',
                borderWidth:12
            }
        },
        data:[7.47, 5.63, 5.70, 3.92, 3.64, 5.76, 4.77, 1.34, 3.68, 3.98, 2.73, 6.35, 4.56, 8.49]

    },{
        name:'down',
        type:'line',
        smooth:true,
        symbol:'circle',
        symbolSize:5,
        showSymbol: false,
        lineStyle:{
            normal:{
                width:1
            }
        },
        areaStyle:{
            normal:{
                color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                    offset:0,
                    color:'rgba(110,125,135,0.3)'
                },{
                    offset:0.8,
                    color:'rgba(110,125,135,0)'
                }],false),
                shadowColor:'rgba(0,0,0,0.1)',
                shadowBlur:10
            }
        },
        itemStyle:{
            normal:{
                color:'rgba(110,125,135)',
                borderColor:'rgba(110,125,135,0.27)',
                borderWidth:12
            }
        },
        data:[16.57, 6.29, 3.94, 12.06, 13.38, 28.77, 18.73, 1.53, 2.20, 1.86, 15.38, 19.87, 21.65, 37.28]

    }
    ]

};

if (option && typeof option === "object") {
		 myChart.setOption(option, true);
		}

