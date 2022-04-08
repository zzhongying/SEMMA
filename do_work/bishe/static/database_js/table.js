function information(date,node){
    file = '../../data/database/information/'+date+'/'+node+'.csv';

    var parent = document.getElementById('right_one');
    parent.innerHTML="";
    var div = document.createElement("div");
    div.setAttribute("class", "list-group");
    parent.appendChild(div);

    var a1 = document.createElement("a");
    a1.setAttribute("class", "list-group-item disabled");
    a1.setAttribute("id", "ip");
    a1.setAttribute("href", "#");

    var a2 = document.createElement("a");
    a2.setAttribute("class", "list-group-item disabled");
    a2.setAttribute("id", "times");
    a2.setAttribute("href", "#");

    var a3 = document.createElement("a");
    a3.setAttribute("class", "list-group-item disabled");
    a3.setAttribute("id", "db");
    a3.setAttribute("href", "#");

    var a4 = document.createElement("a");
    a4.setAttribute("class", "list-group-item disabled");
    a4.setAttribute("id", "tcp");
    a4.setAttribute("href", "#");

    var a5 = document.createElement("a");
    a5.setAttribute("class", "list-group-item disabled");
    a5.setAttribute("id", "words");
    a5.setAttribute("href", "#");

    var a6 = document.createElement("a");
    a6.setAttribute("class", "list-group-item disabled");
    a6.setAttribute("id", "pro");
    a6.setAttribute("href", "#");

    var p = document.createElement("p");
    p.setAttribute("align", "center");
    p.setAttribute("id", "IP");
    p.setAttribute("style", "font-size: 13px;color:#3d3d3d;font-weight: bold;margin-top: 8%;");

    div.appendChild(a1);
    div.appendChild(a2);
    div.appendChild(a3);
    div.appendChild(a4);
    div.appendChild(a5);
    div.appendChild(a6);
    div.appendChild(p);


    d3.csv(file,function (err,data) {
        if(err){
             var ip=document.getElementById('ip')
            ip.innerHTML=node+'的用户为: 暂无信息';
            var login = document.getElementById('times');
            login.innerHTML = '该IP在当日login日志中通讯次数：暂无信息';
            var db = document.getElementById('db');
            db.innerHTML = '该IP在当日db日志中通讯次数：暂无信息';
            var tcp = document.getElementById('tcp');
            tcp.innerHTML = '该IP在当日tcp日志中通讯次数：暂无信息';
            var words = document.getElementById('words');
            words.innerHTML = '该IP在当日登录数据库使用不同密码个数：暂无信息';
            var pro = document.getElementById('pro');
            pro.innerHTML = '该IP在当日使用协议包括：暂无信息';
            var IP=document.getElementById('IP')
            IP.innerHTML=node+'详细信息';
        }
        var ip=document.getElementById('ip')
        ip.innerHTML=node+'的用户为: '+data[0].user;
        var login = document.getElementById('times');
        login.innerHTML = '该IP在当日login日志中通讯次数：'+data[0].source_ip;
        var db = document.getElementById('db');
        db.innerHTML = '该IP在当日db日志中通讯次数：'+data[0].db;
        var tcp = document.getElementById('tcp');
        tcp.innerHTML = '该IP在当日tcp日志中通讯次数：'+data[0].login;
        var words = document.getElementById('words');
        words.innerHTML = '该IP在当日登录数据库使用不同密码个数：'+data[0].password;
        var pro = document.getElementById('pro');
        pro.innerHTML = '该IP在当日使用协议包括：'+data[0].protocol
        var IP=document.getElementById('IP')
        IP.innerHTML=node+'详细信息';
})
}



