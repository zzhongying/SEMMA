function timecircle(i, k) {
    $("#treemap").empty()
    dataset.push(i)
    console.log(dataset)
    if (change == null) {
        var a = {
            id: "",
            label: "",
            status: "",
            target: "",
            back_target: "",
            vis:" "
        }
        if (k == 0) {
            a.id = dataset.length - 1;
            a.label = dataset[dataset.length - 1];
            a.status = 'success';
            a.target = null;
            a.back_target = null;
            dataFlow.push(a);
        } else {
            a.id = dataset.length - 1;
            a.label = dataset[dataset.length - 1];
            a.status = 'current';
            a.target = null;
            a.back_target = null;
            dataFlow.push(a);
        }
        if (dataset.length >= 2) dataFlow[dataset.length - 2].target = dataset.length - 1;
    } else {
        var a = {
            id: "",
            label: "",
            status: "",
            target: "",
            back_target: "",
            vis:" "
        }
        if (k == 0) {
            a.id = dataset.length - 1;
            a.label = dataset[dataset.length - 1];
            a.status = 'success';
            a.target = null;
            a.back_target = null;
            dataFlow.push(a);
        } else {
            a.id = dataset.length - 1;
            a.label = dataset[dataset.length - 1];
            a.status = 'current';
            a.target = null;
            a.back_target = null;
            dataFlow.push(a);
        }
        //if (dataset.length >= 2) dataFlow[dataset.length - 2].target = dataset.length - 1;
        for(var i=0;i<dataFlow.length;i++){
            if(change==dataFlow[i].label){
                dataFlow[i].back_target=dataset.length - 1;
                break;
            }
        }
        change=null;
    }

    console.log(dataFlow);

    // var tooltip = d3.select("body").append("div")
    // 					.attr("class","tooltip") //用于css设置类样式
    // 					.attr("opacity",0.0);


    var g = new dagreD3.graphlib.Graph()
        .setGraph({})
        .setDefaultEdgeLabel(function () {
            return {};
        });

    dataFlow && dataFlow.map((item, i) => {
        console.log(item);
        console.log(item.label);
        g.setNode(item.id, {
            label: item.label,
            class: "type-" + item.status,
            //id:item.label
        });
        // Set up edges, no special attributes.
        if (item.target && !item.back_target) {
            g.setEdge(item.id, item.target, {})
        } else if (item.back_target) {

            g.setEdge(item.id, item.target, {})
            g.setEdge(item.id, item.back_target, {})
        }
    })

    g.nodes().forEach(function (v) {
        var node = g.node(v);
        // Round the corners of the nodes
        node.rx = node.ry = 2;
    });

    // Create the renderer
    var render = new dagreD3.render();

    //Set up an SVG group so that we can translate the final graph.
    var svg = d3.select('#treemap')
        .append('svg')
        .attr('width', 240)
        .attr('height', 600)
        .attr()


    svgGroup = svg.append("g")

    var arcs=svg.select("g")
    // .on("mouseover",function(d)
    // 		{
    // 			//设置tooltip文字
    //             console.log(d3.select(this).id);
    // 			tooltip.html(d3.select(this).text())
    // 			//设置tooltip的位置(left,top 相对于页面的距离)
    // 					.style("left",(d3.event.pageX)+"px")
    // 					.style("top",(d3.event.pageY+20)+"px")
    // 					.style("opacity",1.0);
    // 		})
    // .on("mouseout",function(d)
    // 		{
    // 			tooltip.style("opacity",0.0);
    // 		});



    // Run the renderer. This is what draws the final graph.
    render(d3.select("svg g"), g);

    var xCenterOffset = (svg.attr("width") - g.graph().width) / 4.2;
    svgGroup.attr("transform", "translate(" + xCenterOffset + ", 10)");
    svg.attr("width", g.graph().width + 60);
    svg.attr("height", g.graph().height + 40);

}

