var dom = document.getElementById("top-right-graph");
dom.onclick=function () {
    var obj=document.getElementById('sel');
    var index=obj.selectedIndex; //序号，取当前选中选项的序号
    var val = obj.options[index].value;
    var file = "../../data/data2/users/"+val+".json";
    console.log(file);
    var main = document.getElementById('graph');
	var div = document.createElement('div');
	var id = document.createAttribute('id')
	id.value = 'box2';
	div.setAttributeNode(id);
	div.style.width = '55%';
	div.style.height = '50%';
	div.style.backgroundColor = 'rgb(255,255,255)';
	div.style.zIndex = 1500;
	div.style.position = 'absolute';
	div.style.borderRadius = '25px';
	div.style.left = '22.5%';
	div.style.top = '20%';


	main.appendChild(div)
	draw(file);


	var remove = document.createElement('button');
	remove.innerHTML = 'X';
	remove.style.left = '98%';
	remove.style.top = '0';
	remove.style.zIndex = 100000;
	remove.style.position = 'absolute';
	div.appendChild(remove);
	 remove.onclick = function() {
	 	div.parentNode.removeChild(div);
	}
}

function draw(i){
	var myChart = echarts4.init(document.getElementById('box2'));
	var app = {};
	option = null;
	myChart.showLoading();

	d3.json(i, function(err, graph) {
		myChart.hideLoading();


		console.log(graph);
		var categories = [{name:"etgunfwk"},{name:"uyhrnf"},{name:"yhoxferj"},{name:"etgun59"},{name:"lss6"}];

		graph.nodes.forEach(function(node) {
			node.itemStyle = null;
			node.value = node.value;
			node.symbolSize /= 1.5;
			node.label = {
				show: node.symbolSize > 30
			};
			node.category = node.attributes.modularity_class;
		});
		option = {
			title: {
				text: '异常用户使用IP',
				 left: 'center'
			},
			tooltip: {
			},
			legend: {
				x:'center',      
				y:'bottom',     
				data:["etgunfwk","uyhrnf","yhoxferj","etgun59","lss6"]
			},
			animationDuration: 1500,
			animationEasingUpdate: 'quinticInOut',
			series: [{
				name: '用户使用IP',
				type: 'graph',
				layout: 'none',
				data: graph.nodes,
				links: graph.links,
				categories: categories,
				roam: true,
				focusNodeAdjacency: true,
				itemStyle: {
					borderColor: '#fff',
					borderWidth: 1,
					shadowBlur: 10,
					shadowColor: 'rgba(0, 0, 0, 0.3)'
				},
				label: {
					position: 'right',
					formatter: '{b}'
				},
				lineStyle: {
					color: 'source',
					curveness: 0.3
				},
				emphasis: {
					lineStyle: {
						width: 10
					}
				}
			}]
		};

		myChart.setOption(option);
	}, 'xml');;
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}