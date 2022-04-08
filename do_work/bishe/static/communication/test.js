
function draw(name, time) {
	
    var gra = [];
    const d1 = '../data' + '/' + name + '/' + time + '.json';
    const d2 = '../data1' + '/' + name + '/' + time + '.json';
    d3.json(d1, function (err, data) {

        gra = data;
        console.log(gra);
    })
    d3.json(d2, function (err, datum) {
        console.log(datum);
        var map2 = echarts.init(document.getElementById("mind_one"));
        map2.off('click');
        datum.data.forEach((d, i) => {
            if (datum.data[1].value) {
                datum.data[i]["x"] = -120;
                datum.data[i]["y"] = 0;
            } else {
                datum.data[i]["x"] = 0;
                datum.data[i]["y"] = 0;
            }
            if (datum.data[i].name == '10.56' || datum.data[i].name == '10.49' || datum.data[i].name == '10.60' || datum.data[i].name == '10.24' || datum.data[i].name == '10.23' || datum.data[i].name == '10.39' || datum.data[i].name == '10.47' || datum.data[i].name == '180.1.') {
                datum.data[i].symbolSize = 160;

            } else {

                datum.data[i].symbolSize = Math.log(datum.data[i].value) * 10;


            }

            if (datum.data[i].name.match('10.56')) {
                datum.data[i]["draggable"] = true;
                datum.data[i]["itemStyle"] = {
                    "normal": {
                        // "shadowBlur": 20,
                       // "shadowColor": "#dd6b66",
                        "color": "#499cb5"
                    }
                }
            }
            else if (datum.data[i].name.match('10.49'))
            {
				if(datum.data[i].name.match('10.49.137.7')){
					datum.data[i]["draggable"] = true;
					datum.data[i]["itemStyle"] = {
					    "normal": {
                            "borderColor": "#11213b",
                            "borderWidth": 4,
					        "color": "#abcfbc"
					    }
				}
				}else if(datum.data[i].name.match('10.49.223.194')){
					datum.data[i]["draggable"] = true;
						datum.data[i]["itemStyle"] = {
						    "normal": {
						        "borderColor": "#11213b",
						        "borderWidth": 4,
						        "color": "#abcfbc"
						    }
					}
				}else if(datum.data[i].name.match('10.49.253.53')){
					datum.data[i]["draggable"] = true;
						datum.data[i]["itemStyle"] = {
						    "normal": {
						        "borderColor": "#11213b",
						        "borderWidth": 4,
						        "color": "#abcfbc"
						    }
					}
				}else if(datum.data[i].name.match('10.49.137.199')){
					datum.data[i]["draggable"] = true;
						datum.data[i]["itemStyle"] = {
						    "normal": {
						        "borderColor": "#11213b",
						        "borderWidth": 4,
						        "color": "#abcfbc"
						    }
					}
				}else if(datum.data[i].name.match('10.49.81.218')){
					datum.data[i]["draggable"] = true;
						datum.data[i]["itemStyle"] = {
						    "normal": {
						        "borderColor": "#11213b",
						        "borderWidth": 4,
						        "color": "#abcfbc"
						    }
					}
				}else if(datum.data[i].name.match('10.49.223.163')){
					datum.data[i]["draggable"] = true;
						datum.data[i]["itemStyle"] = {
						    "normal": {
						        "borderColor": "#11213b",
						        "borderWidth": 4,
						        "color": "#abcfbc"
						    }
					}
				}
				else if(datum.data[i].name.match('10.49.223.163')){
					datum.data[i]["draggable"] = true;
						datum.data[i]["itemStyle"] = {
						    "normal": {
						        "borderColor": "#11213b",
						        "borderWidth": 4,
						        "color": "#abcfbc"
						    }
					}
				}else if(datum.data[i].name.match('10.49.137.87')){
					datum.data[i]["draggable"] = true;
						datum.data[i]["itemStyle"] = {
						    "normal": {
						        "borderColor": "#11213b",
						        "borderWidth": 4,
						        "color": "#abcfbc"
						    }
					}
				}else if(datum.data[i].name.match('10.49.253.35')){
					datum.data[i]["draggable"] = true;
						datum.data[i]["itemStyle"] = {
						    "normal": {
						        "borderColor": "#11213b",
						        "borderWidth": 4,
						        "color": "#abcfbc"
						    }
					}
				}
				
				else{
                    datum.data[i]["draggable"] = true;
                    datum.data[i]["itemStyle"] = {
                        "normal": {
                            // "borderColor": "#fff",
                            // "borderWidth": 4,
                            "color": "#78c099"
                        }
                    }
					}	

            }
            else if (datum.data[i].name.match('10.60'))
            {
                datum.data[i]["draggable"] = true;
                datum.data[i]["itemStyle"] = {
                    "normal": {
                        "borderColor": "#74b9ff",
                        "borderWidth": 4,
                        // "shadowBlur": 20,
                        // "shadowColor": "#74b9ff",
                        "color": "#11213b"
                    }
                }
            } else if (datum.data[i].name.match('10.24')) {					
				if(datum.data[i].name.match('10.24.49.154')){
					datum.data[i]["draggable"] = true;
					datum.data[i]["itemStyle"] = {
					    "normal": {
					         "borderColor": "#11213b",
					         "borderWidth": 4,
					        //
					        "color": "rgb(247,231,207)"
					    }
					}
				}else if(datum.data[i].name.match('10.24.64.118')){
					datum.data[i]["draggable"] = true;
					datum.data[i]["itemStyle"] = {
					    "normal": {
                            "borderColor": "#11213b",
                            "borderWidth": 4,
                            //
                            "color": "rgb(247,231,207)"
					    }
					}
				}
				else {
                    datum.data[i]["draggable"] = true;
                    datum.data[i]["itemStyle"] = {
                        "normal": {
                            // "borderColor": "#A3CB38",
                            // "borderWidth": 4,
                            //
                            "color": "rgb(233,209,169)"
                        }
                    }
					}
            }
            else if (datum.data[i].name.match('10.23'))
            {

                datum.data[i]["draggable"] = true;
                datum.data[i]["itemStyle"] = {
                    "normal": {
                        // "borderColor": "#685fbd",
                        // "borderWidth": 4,
                        // // "shadowBlur": 20,
                        // // "shadowColor": "#78c893",
                        "color": "#685fbd"
                    }
                }
            } else if (datum.data[i].name.match('10.39')) {
				if(datum.data[i].name.match('10.39.11.174')){
					datum.data[i]["draggable"] = true;
					datum.data[i]["itemStyle"] = {
					    "normal": {
					        "borderColor": "#11213b",
					        "borderWidth": 4,
					        
					        "color": "rgb(199,223,235)"
					    }
					}
				}else if(datum.data[i].name.match('10.39.18.40')){
					datum.data[i]["draggable"] = true;
					datum.data[i]["itemStyle"] = {
					    "normal": {
                            "borderColor": "#11213b",
                            "borderWidth": 4,

                            "color": "rgb(199,223,235)"
					    }
					}
				}
				else {
                    datum.data[i]["draggable"] = true;
                    datum.data[i]["itemStyle"] = {
                        "normal": {

                            "color": "#6fa9d3"
                        }
                    }
					}
            } else if (datum.data[i].name.match('10.47')) {
                datum.data[i]["draggable"] = true;
                datum.data[i]["itemStyle"] = {
                    "normal": {
                        // "borderColor": "#f7b731",
                        // "borderWidth": 4,
                        // "shadowBlur": 20,
                        // "shadowColor": "#f7b731",
                        "color": "#bdb386"
                    }
                }
            } else if (datum.data[i].name.match('180.1.')) {
                datum.data[i]["draggable"] = true;
                datum.data[i]["itemStyle"] = {
                    "normal": {
                        // "borderColor": "#aa00ff",
                        // "borderWidth": 4,
                        // // "shadowBlur": 20,
                        // // "shadowColor": "#aa00ff",
                        "color": "#b471d5"
                    }
                }
            }
            // console.log(d);
        })
        option = {
            backgroundColor: '#ffffff',
            animationEasingUpdate: 'bounceIn',
            // color: ['#0a95e6', '#03fc62', '#f06467','#f06467'],

            tooltip: {},
            series: [{
                type: 'graph',
                // color:'#FFFFFF',
                layout: 'force',
                force: {
                    repulsion: 1,
                    edgeLength: 4
                },
                roam: true,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{b}',
                        fontSize: 15,
                        fontStyle: '400',
                        color: '#89a8c8'
                    },
                    emphasis: {
                        show: true,


                        formatter: '{b}',

                        fontSize: 15,
                        fontStyle: '400',

                        
                    }
                },
                data: datum.data,
                links: gra.dat,

            }],
        }
        map2.setOption(option);
        // map2.on('mouseover',function(params){
        // 	console.log(params);
        // })
    })
}