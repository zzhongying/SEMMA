function timecircle(i) {
    $("#treemap").empty()
    var color=d3.scale.category10()
    dataset.push(i)
    console.log(dataset)
  // svg 的大小
    var svgWidth = $("#treemap").width();
    var svgHight = $("#treemap").height();
    var padding =  $("#treemap").width()*0.1;

     var data=[]
    var k=0
    for(j=0;j<dataset.length;j++)
    {
          data.push('{"x":'+ 0 + ',"y":' + k +',"name": "' + dataset[j] +'"}');
          k=k + $("#treemap").height()*0.1
    }
    for(j=0;j<data.length;j++)
    {
       // console.log(data[j])
        data[j]=eval( "(" + data[j] + ")");
    }

    console.log(data)

    var temp=[]
    for(i=0;i<data.length;i++)
    {
        temp.push('[' + data[i]["x"] + ',' + data[i]["y"] + ']')
    }
    for(i=0;i<temp.length;i++)
    {
        temp[i]=eval('(' + temp[i] + ')');  //string 转number
    }

    // 创建SVG
    var svg = d3.select('#treemap')
      .append('svg')
        .attr('width', svgWidth*0.8 )
        .attr('height', svgHight*0.95 + k - $("#treemap").height()*0.9)
        .attr()

    // 设置标题
    // svg.append('text')
    //   .attr('x', svgWidth / 2 - 120)
    //   .attr('y', 30)
    //   .attr('class', 'title')
    //   .text('History');
    console.log(data);
    // 创建比例尺
    var xScale = d3.scale.linear()
      .domain([0, d3.max(temp, function(d) {
        return d[0];
      })]).range([padding, k]);

    var yScale = d3.scale.linear()
      .domain([d3.max(temp, function(d) {
         return d[1];
      }), 0]).range([k, padding]);


    // 定义Y轴
    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .ticks(7)

    // 创建Y轴
    svg.append('g')
      .attr('class', 'axis')
      // Y轴离左边界的距离
      .attr('transform', 'translate(' + $("#treemap").width()*0.4 + ', 0)')
      .call(yAxis)
      .attr("marker-end","url(#arrow)");

    $(".axis text").remove()  //移除刻度
    $(".axis line").remove()  //移除刻度

         // 设置散点的坐标, 半径



        var tooltip=d3.select("#treemap").append("div")
        .attr("class","tooltip")
        .attr("width",50)
        .attr("height",25)

        svg.selectAll('circle') //外圆
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', $("#treemap").width()*0.4)
            .attr('cy', function(d) {
                  return yScale(d["y"]);
            })
            .attr('r', function(d) {
                return 6;
            })
            .attr("stroke",function (d,i) {
                 if(d["name"].indexOf(".") >= 0)
                {
                     return 'rgb(99,180,222)' ;
                }
                else{
                     return '#90d8b0';
                }
            })
            .attr("fill","white")
            .attr("stroke-width","5px")
            .on("mouseover",function (d,i) {
                d3.select(this)
                    .attr("r",function (d,i) {
                        return 10;
                    })
            })
            .on("mouseout",function (d,i) {
                 d3.select(this)
                     .attr("r",function (d,i) {
                         return 6;
                     })
            })


        svg.selectAll('rect')
            .data(data)
            .enter()
            .append("rect")
            .attr("id",function (d) {
                return d["name"];
            })
            .attr('x', function(d) {
                if(d["name"].indexOf(".") >= 0)
                {
                    return xScale(d["x"]) + $("#treemap").width()*0.36 ;
                }
                else{
                    return xScale(d["x"] + $("#treemap").width() );
                }
            })
            .attr('y', function(d) {
                return yScale(d["y"]) - 8  ;
            })
            .attr("rx",10)
            .attr("ry",10)
            .attr("fill",function (d,i) {
                if(d["name"].indexOf(".") >= 0)
                {
                   
                    return 'rgb(168,212,233)' ;
                }
                else{
                       return '#abcfbc';
                }
            })
            .attr("opacity",0.7)
            .attr("width",function (d) {
                 if(d["name"].indexOf(".") >= 0)
                {
                    return 70 ;
                }
                else{
                    return 45;
                }
            })
            .attr("height",23)



        // 设置文本
        svg.selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .text(function(d) {
                return  d["name"] ;
            })
            .attr('x', function(d) {
                if(d["name"].indexOf(".") >= 0)
                {
                    return xScale(d["x"]) + $("#treemap").width()*0.36 ;
                }
                else{
                    return xScale(d["x"]) + $("#treemap").width() * 0.05;
                }
            })
            .attr('y', function(d) {
                return yScale(d["y"]) +5 ;
            })
            .attr('font-family', 'Microsoft YaHei')
            .attr('font-size', '12px')
            .attr('fill', 'white');
        //
        // svg.selectAll('rect')
        //     .data(data)
        //     .enter()
        //     .append('div')
        //     .attr("id",function (d) {
        //         return d["name"];
        //     })
        //     .attr("width","50px")
        //     .attr("height","25px")
        //     .attr("fill",'#9400d3')
        //     .style("left",function (d) {
        //         if(d["name"].indexOf(".") >= 0)
        //         {
        //             return xScale(d["x"]) + $("#treemap").width()*0.35 ;
        //         }
        //         else{
        //             return xScale(d["x"] + $("#treemap").width() * 0.18);
        //         }
        //     })
        //     .style("top",function (d) {
        //         return yScale(d["y"]) +5 ;
        //     })





    // 设置精度和样式
    //var formatPrecision = d3.format('$');

}

