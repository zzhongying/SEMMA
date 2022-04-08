function pack1(i) {
console.log(i);
var width = 600,
    height = 600;

//定义数据转换函数
var pack = d3.layout.pack()
.size([500,380])
.radius(14);  //最大圆的半径

var svg = d3.select("#top-right-graph").append("svg")
    .attr("width",'100%')
    .attr("height",'95%')
    .attr("margin-bottom",'5%')


//取数据，绘图
d3.json("../../data/data2/bubble/pack.json",function(error,root){

    var nodes = pack.nodes(root);
    var links = pack.links(nodes);

    // console.log(nodes);
    // console.log(links);

    //画圈圈
    svg.selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("id",function (d){
             if(d.name!='ALL'){
                if(d.parent.name!='ALL'){
                     return d.parent.name + '__' + d.name    //先返回parten，再返回自身id
                }
                 else {return d.name + '__' +d.name}
                 }
            else{
                return d.name
            }
        })
        .attr("fill",function (d) {
            if(d.name!='ALL'){
                if(d.parent.name!='ALL'){
                    if(d.value>=15000)
                    {
                        return '#da1310'
                    }
                    else if(d.value<15000&&d.value>5000)
                    {
                        return '#f6937f'
                    }
                    else {
                        return "rgb(255,255,255)"
                    }
                }
                 else {return "rgb(112,167,205)"}
                 }
            else{
                return "#8FBAD7"
            }
        })
        .attr("fill-opacity","0.9")
        .attr("cx",function(d){return d.x})
        .attr("cy",function(d){return d.y-65})
        .attr("r", function (d){
            return d.r
            })
       .on('mouseover', function (d) {
          d3.event.target.style.stroke = 'yellow'
          d3.event.target.style.strokeWidth = '2px'
          svg.append('text')
            .style('fill', '#496BA0')
            .style('opacity', '1')
              .attr("font-size","13px")
            .attr('class', 'hello')
            .attr('x', d3.event.offsetX + 20)
            .attr('y', d3.event.offsetY - 10)
            .text('user:'+ d.name + '        value:'+ d.value)
        })
        .on('mouseout', function (d) {
          svg.selectAll('.hello').remove()
          d3.event.target.style.strokeWidth = '0px'
        })
        .on('click',function (d) {
            // console.log(this.id)
            var user=this.id.split('__')[1];
            //d3.json("../../data/data2/cloud/cloud.json",function (error,cloud) {
                    echartsCloud(user,i);
                // for(i=0;i<cloud.dataCloud.length;i++)
                // {
                //
                //     if(user==cloud.dataCloud[i].user)
                //     {
                //          console.log(cloud.dataCloud[i])
                //     }
                //
                // }

            //})
             console.log(this.id.split('__')[1]);

        })



// var svg = d3.select("#top-right").append("svg")
//     .attr("width",'100%')
//     .attr("height",'95%')
//     .attr("margin-bottom",'5%')

    //添加文字
    svg.selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .attr("x",function(d){return d.x})
        .attr("y", function (d) {return d.y-65})
        .attr("font-size","13px")
        .attr("text-anchor","middle")
        .attr("fill","#496BA0")
        .text(function(d){
            if(d.name!='ALL'){
                if(d.parent.name=='ALL'){
                    return d.name
                }
            }
        })


})
    //})




}
