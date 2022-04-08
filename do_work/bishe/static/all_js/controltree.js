    function treecontrol(value) {
        var width = 160,
            height = 500,
            boxWidth = 75,
            boxHeight = 20;
        if(value=='all')
        {
            var root = {
            "name": "Network situation",
            "children": [
                {
                    "name": "Communication situation",
                    "children": [
                        {
                            "name": "Port"
                        },
                        {
                            "name": "Protocol"
                        },
                        {
                            "name": "Flows"
                        },
                        {
                            "name": "Database"
                        },
                    ]
                },
                {
                    "name": "Asset identification",
                    "children": [{
                            "name": "Address classification",
                            "childern":[
                                {
                                    "name": "Intranet judgment"
                                }
                            ]
                        }
                    ]
                }

            ]
        };
        }
        else if(value=='database')
        {
            var root = {
            "name": "Database exception",
            "children": [
                {
                    "name": "Database Users",
                    "children": [
                        {
                            "name": "Login exception"
                        },
                        {
                            "name": "SQL Operation"
                        },
                        {
                            "name": "Password Reset"
                        },
                        {
                            "name": "Database"
                        },
                    ]
                },
                {
                    "name": "Database Communications",
                    "children": [{
                            "name": "link-time interval"
                        },
                        {
                            "name": "Host active"
                        }
                    ]
                }

            ]
        };
        }

          else if(value=='communication')
        {
            var root = {
            "name": "Communication exception",
            "children": [
                {
                    "name": "Communication",
                    "children": [
                        {
                            "name": "flow"
                        },
                        {
                            "name": "Communication traffic"
                        },
                        {
                            "name": "待定"
                        },
                        {
                            "name": "待定"
                        },
                    ]
                },
                {
                    "name": "待定",
                    "children": [{
                            "name": "待定"
                        },

                        {
                            "name": "待定"
                        }
                    ]
                }

            ]
        };
        }


        var tree = d3.layout.tree()
            .size([width, height - 200])
            .separation(function (a, b) {
                return (a.parent == b.parent ? 1 : 2);
            });

        var diagonal = d3.svg.diagonal()
            .projection(function (d) {
                return [d.x, d.y]; // edited
            });


        // 用来拖拽图以及扩大缩放
        // var zoom = d3.behavior.zoom()
        //         .scaleExtent([.1, 1])
        //         .on('zoom', function () {
        //                 svg.attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
        //         });
        var svg = d3.select("#treemap").append("svg")
            .attr("width", width + 80) // 防止边缘文字被遮挡
            .attr("height", height)
            .append("g")
            //.call(zoom) //
            .attr("transform", "translate(5,10)"); // 将图整体下移，以防止顶部节点被遮挡


        var nodes = tree.nodes(root);
        var links = tree.links(nodes);

        console.log(nodes);
        console.log(links);

        //新建箭头
            var defs=svg.append("defs");
            var arrowMarker = defs.append("marker")
                         .attr("id","arrow")
                         .attr("markerUnits","strokeWidth")
                         .attr("markerWidth",6)
                         .attr("markerHeight",6)
                       .attr("x",30)
                       .attr("y",30)
                         .attr("viewBox","0 0 12 12")
                         .attr("refX",8)
                         .attr("refY",6)
                         .attr("orient","auto")
            var arrow_path = "M2,2 L10,6 L2,10 L6,6 L2,2";
              arrowMarker.append("path")
                         .attr("d",arrow_path)
                         .attr("fill","#767676")
                         .attr("opacity",0.7);

        // var link = svg.selectAll(".link")
        //  .data(links)
        //  .enter()
        //  .append("path")
        //  .attr("class", "link")
        //          .attr("marker-end","url(#arrow)")
        //  .attr("d", diagonal);

        drawLine();
        // 将曲线换为折线
        function drawLine() {
            var link = svg.selectAll("path.link")

                // The function we are passing provides d3 with an id
                // so that it can track when data is being added and removed.
                // This is not necessary if the tree will only be drawn once
                // as in the basic example.
                .data(links);

            // Add new links
            link.enter().append("path")
                .attr("class", "link")
                .attr("marker-end","url(#arrow)")
                .attr('stroke', '#404040')
                .attr('strokeWidth', '4px');
            // Remove any links we don't need anymore
            // if part of the tree was collapsed
            link.exit().remove();

            // Update the links positions (old and new)
            link.attr("d", elbow);

            function elbow(d) {
                let sourceX = d.source.x,
                    sourceY = d.source.y + boxHeight,
                    targetX = d.target.x,
                    targetY = d.target.y;

                return "M" + sourceX + "," + sourceY +
                    "V" + ((targetY - sourceY) / 2 + sourceY) +
                    "H" + targetX +
                    "V" + targetY;

            }
        }
        var node = svg.selectAll(".node")
            .data(nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")"; // edited
            })

        // 圆形节点与对应文字
        // node.append("circle")
        //  .attr("r", 4.5);

        // node.append("text")
        //  .attr("dx", function (d) {
        //      return d.children ? -8 : 8;
        //  })
        //  .attr("dy", 3)
        //  .style("text-anchor", function (d) {
        //      return d.children ? "end" : "start";
        //  })
        //  .text(function (d) {
        //      return d.name;
        //  });
        // 绘制矩形与文字
        drawRect();

        function drawRect() {
            node.append("rect")
                .attr('y', 0)
                .attr('x', function (d) {
                    return d.depth !== 2&3&4 ? -(boxWidth / 2) : -(boxHeight / 2)
                })
                .attr('width', function (d) {
                    return d.depth !== 2&3&4 ? boxWidth : boxHeight;
                })
                .attr('height', function (d) {
                    return d.depth !== 2&3&4 ? boxHeight : boxWidth;
                })
                .attr("rx","3px")       //圆角设置
                .attr("ry","3px")
                // 矩形背景色以及边框颜色宽度
                .attr('fill', '#ffffff')
                .attr('stroke', '#767676')
                .attr('strokeWidth', '4px')
                .on('mouseover',function () {
                    d3.select(this)
                        .attr("fill","#d5d5d5")
                })
                .on('mouseout',function () {
                    d3.select(this)
                        .attr("fill","#ffffff")
                })
                .on('click', function (evt) {
                    console.log(evt); // 显示所点击节点数据
                });

            // Draw the person's name and position it inside the box
            node.append("text")
                .attr('y', function (d) {
                    return d.depth !== 2&3&4 ? boxHeight / 2 + 5 : 0;
                })
                // .attr('rotate', function (d) { //显示竖直显示中文时rotate为0，英文-90
                //     return 0;
                // })
                .attr('style', function (d) {
                    return d.depth !== 2&3&4 ? '' : "writing-mode: tb;letter-spacing:0px";
                })
                .attr("text-anchor",'start') //function (d) {
                    //return d.depth !== 2&3&4 ? 'middle' : "start";
                //})
                .text(function (d) {
                    return d.name;
                })
                .style('font-size','11px')

                .style('font-family','微软雅黑');
        }


    }
