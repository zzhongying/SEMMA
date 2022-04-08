function cloud(i,j)    //i:日期   j：ip地址
{
    $("#left_two").html(" ");
    //file='../../data/database/circular/' + i +'/'+ j + '.json';
   file = '../../data/database/word_cloud/'+i+'.json';
    $.get(file).done(function (words_list) {
      //  console.log(words_list[j]);
        var fill = ['#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)','#88beec','rgb(192,215,226)','rgb(180,219,200)','rgb(241,226,201)','rgb(199,223,235)','#abcfbc','rgb(238,229,222)','rgb(147,179,214)',  'rgb(187,183,232)','rgb(248,224,185)','rgb(211,189,150)'];  //输出20种类别的颜色 ---颜色比例尺
        var layout = d3.layout.cloud()
            .size([390, 520])  //size([x,y]) 词云显示的大小
            .words(words_list[j])
            .padding(5)
            .rotate(function () {
                return ~~(Math.random() * 2) * 0;
            })
            .font("Impact")
            .fontSize(function (d) {
                return d.size;
            })
            .on("end", draw);
        layout.start();

        function draw(words) {
            d3.select("#left_two").append("svg")
                .attr("width", layout.size()[0])
                .attr("height", layout.size()[1])
                .append("g")
                .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
                .selectAll("text")
                .data(words)
                .enter().append("text")
                .style("font-size", function(d) {
                //console.log(d)
                return d.size + "px";
            })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill[i]; })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x-2, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; })
            .on('mouseover',function (d) {
                d3.select(this).attr("style",'font-size:'+d.size*1.3 +';fill:#86898B;font-family:Impact;text-shadow:0px 0 8px yellow');

            })
            .on('mouseout',function (d,i) {
                d3.select(this).attr("style",'font-family:Impact;font-size:'+d.size +';fill:'+ fill[i] + ';')
                d3.select("#d3_cloud").selectAll('.hello').remove()
            })
        }
    })
}
