function drawpass(date) {           //date  日期

    var file = '../../data/database/passwords/' + date + '.json';
    d3.json(file, function(words) {
	var dom = document.getElementById("left_one");
	var myChart = echarts4.init(dom);
	var app = {};
	option = null;

	var hours = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00',
		'14:00', '16:00', '18:00', '20:00', '22:00'
	];
	var users = ['lss6', 'uyhrnf', 'etgun59',
		'etgunfwk', 'yhoxferj', 'jxd_gdxj', 'nrmhxj-r6'
	];
	var user_ip=['10.56.92.187','10.49.148.130','10.49.178.162','10.49.137.87','10.56.148.238',
		'10.49.231.21','10.56.92.187'
	]
	myChart.off('click')
	var data = words.value;
	option = {
		title: {
			text: 'Changes of login password for abnormal users',
            //textAlign:'auto'
			left:'center',
            textStyle: {
				fontSize: 10
			}
		},
		legend: {
			data: ['frequency'],
			left: 'right',
            show:false
		},
		tooltip: {
			position: 'top',
			formatter: function(params) {
				return users[params.value[1]] + ' at ' + hours[params.value[0]] + ' count of different password： ' + params.value[2];
			}
		},
		grid: {
		    left: '1%',
			bottom: '1%',
			top: '10%',
            right: '4%',
			x:10,
			y:20,
			x2:20,
			y2:20,
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: hours,
			boundaryGap: false,
			splitLine: {
				show: true,
				lineStyle: {
					color: '#999',
					type: 'dashed'
				}
			},
			axisLine: {
				show: false
			}
		},
		yAxis: {
			type: 'category',
			data: users,
			axisLine: {
				show: false
			}
		},
		series: [{

			name: 'frequency',
			type: 'scatter',
			color:'rgb(137,183,208)',
			symbolSize: function(val) {
				return Math.log2(val[2])*2 ;
			},
			data: data,
			animationDelay: function(idx) {
				return idx * 5;
			}
		}]
	};
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}

	myChart.on('click',function (params) {
		console.log(user_ip[params.value[1]]);
		console.log(date);
		cloud(date,user_ip[params.value[1]]);
	})
})

}