	function ServerDetail(element) {

	$("#title button").click(
	function() {
	$("#title button").eq($(this).index()).css('background', '#d7d9d6').siblings().css('background', '#f5f5f5');
	});
	console.log(echarts.version)
    var dom = document.getElementById("left-top-graph");
	var myChart = echarts.init(dom,'dark');
	var app = {};
	//coloelist1--协议
	var colorList1=['#bef886','#89c387','#c0fcfc','#fcfcc0','#f2bebf','#c0bdfc','#ea8352','#e24a51','#0d6f37','#8f9294','#88c1c0','#5AF2E5'];
	var colorList2=['#ffe9cb','#acf3be','#14fe6f','#fff482','#88c1c0','#5AF2E5','#bef886','#98d796','#c0fcfc','#fcfcc0','#f2bebf','#c0bdfc'];
	var colorList3=['#70cb63','#e2fd8b','#cdff8e','#a0fd46','#53c426','#319913','#006633','#fdf92f','#fdcb01','#fd9801','#cb6601','#a4561d'];

	option_protocol = null;
	option_port = null;
	option_protocol= {
		backgroundColor:'#fdfdfe',
				title:{
					text:'协议使用情况',
					align: 'right',
					textStyle:{
             		color:'#333333',
					fontSize:10
             },
					left: 'center',
					bottom:'-2.5%'
				},
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
			            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
				// color:colorList1,
			    legend: {
			    	icon:'rect',
					itemWidth:14,
					itemHeight:5,
					itemGap:13,
					 textStyle:{
						fontsize:3,
						color:'#7c7c7d'
					},
			        data: ["http", "ftp_control", "mysql", "unknown", "ssl", "redis", "smb", "http_proxy", "ssh", "dns"]
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '5%',
			        containLabel: true
			    },
			    xAxis: [
			        {
			            type: 'category',
			            data: ["05-31", "06-01", "06-02", "06-03", "06-04", "06-05", "06-06","06-07", "06-08", "06-09", "06-10", "06-11", "06-12", "06-13"],
						axisTick: {
              				 alignWithLabel: true
			            },
						axisLine:{
							lineStyle:{
								color:'#333333'
							}
						},
						axisLabel:{
			            	interval:1,
							textStyle:{
						 color:'#333333'
						 },

						}
			        }

			    ],

			    yAxis: [
					{
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#333333'
							},
						},
						axisLabel: {
							interval: 1,
							textStyle: {
								color: '#333333'
							},
						}
					}

			    ],
			    series: [
//			        {
//			            name: '搜索引擎',
//			            type: 'bar',
//			            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
//			            markLine: {
//			                lineStyle: {
//			                    type: 'dashed'
//			                },
//			                data: [
//			                    [{type: 'min'}, {type: 'max'}]
//			                ]
//			            }
//			        },
			        {
			            name: 'http',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [ 1093836, 728109, 421472, 1519509, 1280061, 2029207, 1454355, 371962, 302708, 294773, 1168317, 1541633, 1465894, 2128041]

                     },
			         {
			            name: 'ftp_control',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data:[290228, 295261, 375930, 263091, 156447, 143756, 174380, 237501, 437370, 623822, 172418, 124250, 199474, 194766]

                     },
			        {
			            name: 'mysql',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [ 253052, 262281, 258351, 253241, 255061, 258214, 268763, 282420, 277165, 276799, 255723, 262295, 255690, 256920]

                    },
			        {
			            name: 'unknown',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [ 263269, 245278, 179675, 262088, 261201, 265964, 261148, 175182, 180945, 171475, 241527, 278099, 329295, 425829]

                    },
			        {
			            name: 'ssl',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [56874, 23190, 25993, 93374, 84088, 121118, 67373, 13466, 22111, 13232, 60901, 87817, 61537, 62502]

                    },
                     {
			            name: 'redis',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [ 118520, 129663, 118156, 126016, 113740, 169595, 208430, 125460, 127823, 122352, 144682, 208426, 163261, 163339]

                     },
                    {
			            name: 'smb',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [ 29065, 22162, 22167, 31264, 31983, 32481, 33293, 20834, 20024, 20010, 31011, 31189, 30735, 31635]

                    },
                      {
			            name: 'http_proxy',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [17152, 6195, 6101, 14196, 14492, 18603, 18685, 6130, 6064, 6047, 21679, 16778, 19051, 20250]

                      },
                    {
			            name: 'ssh',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [4611, 3422, 3575, 6956, 9874, 5597, 8059, 6417, 6459, 6712, 7820, 16487, 11871, 12741]

                    },
                     {
			            name: 'dns',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [712, 377, 279, 604, 1033, 873, 877, 524, 436, 439, 914, 781, 804, 1214]
			            // itemStyle: {
                        //      normal: {
                        //          color: '#89c387','#88c1c0'
                        //      }
                        //  }
                     }
                    // {
			        //     name: 'smtp',
			        //     type: 'bar',
			        //     barWidth: '50%',
			        //     stack: '搜索引擎',
			        //     data: [265, 63, 53, 208, 274, 279, 299, 182, 113, 126, 416, 208, 263, 191]
			        // }
			    ]
			};

	option_port= {
				 backgroundColor:'#fdfdfe',
				title:{
							text:'端口使用情况',
					textStyle:{
             	color:'#333333',
						fontSize:10,
             },
							// textStyle:{
							// 	// fontWeight:'normal',
							// 	fontSize:13,
							// 	color:'#4f4f4f'
							// },
				// 	  textStyle:{
             // color:'#e5e5e5'
             // },
							left: 'center',
							align: 'right',
							bottom:'-2.5%'
						},
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
			            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
				// color:colorList2,
			    legend: {
			    	itemWidth:14,
					itemHeight:5,
					itemGap:13,
					 textStyle:{
						fontsize:3,
						color:'#7c7c7d'
					},
			        data: ["443", "445", "8223", "8080", "9000", "22","80","21","3306","8360","6682","9123"]
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '5%',
			        containLabel: true
			    },
			    xAxis: [
			        {
			            type: 'category',
			            data: ["05-31", "06-01", "06-02", "06-03", "06-04", "06-05", "06-06","06-07", "06-08", "06-09", "06-10", "06-11", "06-12", "06-13"],
						axisTick: {
              				 alignWithLabel: true
			            },
						axisLine:{
							lineStyle:{
								color:'#333333'
							}
						},

						axisLabel: {
							interval: 1,
							textStyle: {
								color: '#333333'
							},
						}
			        }
				],
			    yAxis: [
			        {
			            type: 'value',
						lineStyle:{
								color:'#333333'
							},
						axisLine:{
							lineStyle:{
								color:'#333333'
							}
						},
						axisLabel: {
							interval: 1,
							textStyle: {
								color: '#333333'
							},
						}
			        }
			    ],
			    series: [
//			        {
//			            name: '搜索引擎',
//			            type: 'bar',
//			            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
//			            markLine: {
//			                lineStyle: {
//			                    type: 'dashed'
//			                },
//			                data: [
//			                    [{type: 'min'}, {type: 'max'}]
//			                ]
//			            }
//			        },
			        {
			            name: '443',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [ 83811, 87173, 34933, 114713, 101902, 143811, 79426, 6126, 15054, 5670, 64922, 119162, 88346, 146739]

                     },
			         {
			            name: '445',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data:[ 29137, 22164, 22170, 31361, 32012, 32526, 33329, 20836, 20025, 20013, 31049, 31213, 30774, 31661]

                     },
			        {
			            name: '8223',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [ 22516, 23790, 23892, 23376, 23666, 23715, 24666, 24913, 24628, 24734, 23245, 23729, 23734, 23491]

                    },
			        {
			            name: '8080',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [24630, 6133, 5726, 42055, 15873, 23308, 16120, 3925, 2695, 2232, 24358, 22554, 25159, 29182]

                    },
			        {
			            name: '9000',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [ 14020, 3559, 2004, 24041, 22947, 49960, 15891, 1263, 1106, 1105, 9077, 29605, 15845, 15169]

                    },
                     {
			            name: '22',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [ 4835, 3535, 3834, 7420, 10584, 6161, 8735, 6551, 6617, 6865, 8434, 17383, 12412, 13340]

                     },
					{
			            name: '80',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [888614, 518933, 236750, 1298966, 1109071, 1788223, 1294690, 178386, 137155, 122395, 972106, 1296342, 1260939, 1863342]

                     },
					{
			            name: '21',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [ 292017, 296183, 376941, 264707, 157077, 144268, 175107, 237530, 437379, 623937, 173028, 124760, 200420, 195874]
                     },
					{
			            name: '3306',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [255069, 263900, 259810, 254820, 256530, 258976, 270181, 282449, 277212, 276831, 255667, 263616, 256969, 258505]
                     },
					{
			            name: '8360',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [ 223801, 191789, 193902, 219934, 214339, 206896, 220132, 215401, 203066, 203028, 219708, 273583, 266848, 285790]

                     },
					{
			            name: '6682',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [120693, 127418, 119782, 112267, 112502, 114422, 127705, 127500, 129462, 123843, 122552, 120714, 117417, 116565]
                     },
					{
			            name: '9123',
			            type: 'bar',
			            barWidth: '50%',
			            stack: '搜索引擎',
			            data: [90318, 93996, 94194, 89713, 89890, 89939, 93986, 100443, 99636, 99056, 88247, 89649, 89803, 89004]
                     },
			    ]
			};
	if(element.id == 'null')
	{
		if (option_protocol && typeof option_protocol === "object") {
		 myChart.setOption(option_protocol, true);
		}
	}

	else if (element.id == 'protocol')
	{
		if (option_protocol && typeof option_protocol === "object") {
		 myChart.setOption(option_protocol, true);
		}
	}
	else if(element.id == 'port')
	{
		if (option_port && typeof option_port === "object") {
		 myChart.setOption(option_port, true);
		}
	}



}

