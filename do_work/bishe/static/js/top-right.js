var dom = document.getElementById("top-right");
var myChart = echarts.init(dom);
var app = {};
option = null;
var colorList=['#dd6b66','#759aa0','#e59c86','#8cc0a8','#e97e53','#eddc78','#7eb37e','#73b8bb','#7289ab','#ffae48','#dd6b66','#a4561d'];
var color=['#ffe665','#acf3be','#14fe6f','#fff482','#88c1c0','#5AF2E5','#bef886','#98d796','#c0fcfc','#fcfcc0','#f2bebf','#c0bdfc'];


option = {
     backgroundColor:'#ffffff',
     color:colorList,
    title:{
        text:'IP 地址分类',
        textStyle:{
             color:'#333333',
            fontSize:13
             },
          left: 'center',
        align: 'right',
        bottom:'0%'
				},
    tooltip: {     //提示框
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {    //标志颜色条设置
        itemWidth:14,
        itemHeight:5,
        itemGap:13,
        textStyle:{
            fontsize:5,
            color:'#7c7c7d'
        },
        orient: 'vertical',
        x:'left',
        data: ['10.49', '10.56', '10.60', '10.54', '10.64', '10.49.', '10.24', '220.181', '180.149', '10.39']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal:{
                    position: 'inner',
                },

            },
            labelLine: {
                show: true,
            },
            data: [
                {value: 30419666, name: 'source_ip'},
                {value: 24140120, name: 'destination_ip'}
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            data: [
                {value: 16969615, name: '10.49'},
                {value: 12615847, name: '10.56'},
                {value: 559290, name: '10.60'},
                {value: 244829, name: '10.54'},
                {value: 30085, name: '10.64'},
                {value: 14699499, name: '10.49.'},
                {value: 7727101, name: '10.24'},
                {value: 579082, name: '220.181'},
                {value: 569678, name: '180.149'},
                {value: 564760, name: '10.39'},

            ]
        }
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);

 var dom1 = document.getElementById("mind-graph");
 var myChart1 = echarts.init(dom1);

 optionip = null;
    var ip =[];
    var days = ["05-31", "06-01", "06-02", "06-03", "06-04", "06-05", "06-06",
             "06-07", "06-08", "06-09", "06-10", "06-11", "06-12", "06-13"];


var map_data = [];
map_data = map_data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

myChart.on('click',function (data) {
    // if (data.name.substring(0,5)=='10.49')
    // {
    //     alert(data.name)
    // }
    if(data.name.substring(0,5)=='10.49' && data.value=='16969615' )
    {
        // alert("data.name");
         ip=['10.49.22.87', '10.49.137.87', '10.49.253.35', '10.49.216.62', '10.49.148.131', '10.49.223.163', '10.49.81.218', '10.49.137.188', '10.49.81.158', '10.49.223.194', '10.49.216.234', '10.49.137.199', '10.49.81.232', '10.49.253.53', '10.49.21.251', '10.49.253.175', '10.49.253.219', '10.49.137.165', '10.49.137.166', '10.49.137.131', '10.49.217.3', '10.49.253.233', '10.49.253.159', '10.49.223.152', '10.49.45.64']
        map_data=[[0, 0, 292010], [0, 2, 170857], [0, 3, 97591], [0, 4, 85377], [0, 1, 79952], [0, 5, 62094], [0, 6, 51575], [0, 11, 37009], [0, 8, 22931], [0, 10, 16926], [0, 15, 14580], [0, 13, 9982], [0, 12, 9480], [0, 9, 8321], [0, 20, 6826], [0, 16, 6038], [0, 24, 4327], [0, 23, 2880], [1, 0, 296184], [1, 3, 98236], [1, 1, 88319], [1, 4, 85186], [1, 5, 81377], [1, 2, 69096], [1, 11, 28639], [1, 10, 21049], [1, 8, 20336], [1, 6, 12082], [1, 16, 8601], [1, 22, 8316], [1, 17, 7863], [1, 9, 3849], [1, 24, 3006], [1, 23, 2880], [1, 13, 2257], [1, 7, 2097], [1, 20, 1733], [2, 0, 376942], [2, 3, 99708], [2, 4, 85266], [2, 2, 59823], [2, 5, 27279], [2, 10, 21464], [2, 8, 20575], [2, 1, 15333], [2, 6, 11794], [2, 16, 8588], [2, 22, 8314], [2, 11, 7699], [2, 9, 7643], [2, 24, 3004], [2, 23, 2880], [2, 13, 2003], [2, 17, 1660], [3, 1, 346527], [3, 0, 264702], [3, 2, 176882], [3, 3, 97304], [3, 4, 85192], [3, 5, 83242], [3, 11, 53497], [3, 6, 46798], [3, 8, 25398], [3, 10, 17427], [3, 17, 15393], [3, 12, 13579], [3, 18, 13570], [3, 7, 13016], [3, 16, 12575], [3, 9, 11137], [3, 13, 9061], [3, 22, 8300], [3, 24, 5453], [3, 20, 4761], [4, 2, 183112], [4, 0, 157078], [4, 3, 97902], [4, 4, 85415], [4, 6, 53120], [4, 1, 52188], [4, 5, 40555], [4, 8, 25803], [4, 10, 17145], [4, 12, 14086], [4, 16, 12802], [4, 24, 11399], [4, 18, 11157], [4, 13, 10509], [4, 20, 6901], [4, 17, 4462], [4, 15, 4089], [4, 7, 3493], [4, 9, 3145], [7,21,102570],[4, 21, 102890], [5, 1, 221344], [5, 2, 182406], [5, 0, 144253], [5, 3, 97991], [5, 5, 92358], [5, 4, 85508], [5, 11, 71753], [5, 7, 55883], [5, 6, 51581], [5, 8, 26278], [5, 12, 20308], [5, 10, 17152], [5, 18, 14200], [5, 17, 11042], [5, 13, 10393], [5, 15, 8742], [5, 22, 8374], [5, 20, 6310], [5, 9, 5966], [5, 24, 4760], [6, 1, 330568], [6, 0, 175088], [6, 2, 164090], [6, 3, 100541], [6, 5, 98877], [6, 4, 88948], [6, 7, 84329], [6, 11, 53082], [6, 6, 47070], [6, 8, 27708], [6, 10, 18111], [6, 13, 8841], [6, 15, 8039], [6, 20, 7533], [6, 9, 6192], [6, 12, 5387], [6, 17, 3974], [6, 23, 2996], [6, 16, 2916], [7, 0, 237531], [7, 3, 109219], [7, 4, 90603], [7, 2, 52606], [7, 10, 22642], [7, 8, 19435], [7, 5, 18362], [7, 16, 9042], [7, 11, 8462], [7, 6, 7459], [7, 9, 4082], [7, 22, 3229], [7, 23, 3075], [7, 20, 1741], [7, 24, 1666], [7, 1, 1533], [8, 0, 437379], [8, 3, 103384], [8, 4, 89676], [8, 2, 45444], [8, 10, 22435], [8, 8, 18832], [8, 5, 17631], [8, 6, 6903], [8, 20, 3223], [8, 23, 3056], [8, 9, 2796], [9, 0, 623938], [9, 3, 101584], [9, 4, 89569], [9, 2, 46394], [9, 10, 22219], [9, 8, 18929], [9, 5, 16904], [9, 6, 6638], [9, 9, 3303], [9, 23, 3043], [9, 20, 2016], [10, 1, 196845], [10, 0, 173024], [10, 2, 159184], [10, 3, 96418], [10, 4, 83927], [10, 5, 82443], [10, 6, 47948], [10, 8, 25643], [10, 7, 24512], [10, 10, 16561], [10, 15, 14824], [10, 18, 14073], [10, 13, 9077], [10, 12, 5861], [10, 9, 5621], [10, 20, 5610], [10, 16, 3584], [10, 23, 2818], [10, 17, 2325], [10, 21, 1423], [11, 1, 357289], [11, 2, 179445], [11, 0, 124756], [11, 3, 99381], [11, 7, 90082], [11, 4, 85615], [11, 5, 73989], [11, 6, 55283], [11, 9, 31550], [11, 8, 24897], [11, 17, 21982], [11, 10, 17085], [11, 12, 16907], [11, 13, 10707], [11, 21, 100550], [11, 20, 6370], [11, 18, 5282], [11, 15, 4480], [11, 16, 3045], [11, 23, 2923], [12, 0, 200412], [12, 2, 185258], [12, 1, 127201], [12, 3, 98984], [12, 4, 85435], [12, 5, 63608], [12, 6, 54925], [12, 7, 47633], [12, 14, 32988], [12, 8, 24513], [12, 10, 16896], [12, 12, 12156], [12, 15, 11822], [12, 13, 10529], [12, 9, 6957], [12, 20, 6136], [12, 16, 2883], [12, 23, 2882], [12, 17, 2376], [12, 21, 2085], [13, 1, 289768], [13, 9, 216412], [13, 0, 195868], [13, 2, 182841], [13, 5, 98043], [13, 3, 95829], [13, 4, 85058], [13, 19, 69762], [13, 14, 58824], [13, 6, 53692], [13, 7, 48842], [13, 8, 105329], [13, 10, 16666], [13, 15, 152220], [13, 21, 181880], [13, 13, 10386], [13, 12, 10369], [13, 18, 102589], [13, 20, 5313], [13, 24, 3253]]

    }
    else if(data.name.substring(0,5)=='10.24')
    {
         ip=['10.24.249.104', '10.24.64.118', '10.24.64.39', '10.24.64.232', '10.24.172.153', '10.24.49.154', '10.24.172.183', '10.24.146.14', '10.24.139.131', '10.24.243.239', '10.24.243.141', '10.24.240.218', '10.24.172.109', '10.24.172.210', '10.24.65.2', '10.24.73.248', '10.24.64.9', '10.24.146.212', '10.24.64.176', '10.24.215.174', '10.24.215.218', '10.24.249.253', '10.24.70.117', '10.24.49.210', '10.24.49.144']
        map_data=[[0, 0, 163779], [0, 1, 145146], [0, 2, 120718], [0, 3, 34088], [0, 5, 21690], [0, 6, 5665], [0, 7, 1484], [0, 14, 1297], [0, 12, 363], [0, 4, 223], [0, 20, 186], [0, 19, 184], [0, 17, 158], [0, 15, 98], [0, 21, 58], [0, 22, 32], [0, 18, 32], [0, 8, 24], [0, 10, 23], [0, 23, 19], [0, 24, 18], [1, 0, 169278], [1, 1, 153142], [1, 2, 127718], [1, 5, 40639], [1, 3, 34407], [1, 8, 8550], [1, 11, 1808], [1, 7, 1464], [1, 6, 1455], [1, 22, 148], [1, 15, 99], [1, 10, 24], [1, 17, 22], [1, 13, 4], [2, 0, 166528], [2, 1, 152679], [2, 2, 120126], [2, 3, 34442], [2, 7, 1456], [2, 5, 916], [2, 6, 769], [2, 10, 255], [2, 15, 122], [2, 8, 25], [2, 17, 25], [2, 20, 8], [2, 19, 7], [3, 0, 159742], [3, 1, 138380], [3, 2, 112567], [3, 3, 33876], [3, 5, 25644], [3, 6, 8893], [3, 11, 2736], [3, 13, 1513], [3, 7, 1449], [3, 10, 233], [3, 12, 192], [3, 21, 125], [3, 15, 100], [3, 17, 35], [3, 8, 25], [3, 18, 18], [3, 23, 17], [4, 0, 162614], [4, 1, 146026], [4, 2, 112804], [4, 4, 60929], [4, 3, 34116], [4, 5, 8408], [4, 6, 7389], [4, 10, 3042], [4, 7, 1181], [4, 18, 112], [4, 13, 67], [4, 15, 33], [4, 8, 26], [4, 21, 21], [4, 17, 20], [4, 24, 4], [4, 23, 4], [5, 4, 357001], [5, 0, 174782], [5, 1, 147344], [5, 2, 116029], [5, 5, 34954], [5, 3, 34085], [5, 6, 7353], [5, 7, 1611], [5, 12, 124], [5, 15, 112], [5, 13, 68], [5, 17, 56], [5, 16, 42], [5, 10, 28], [5, 18, 26], [5, 8, 25], [5, 21, 5], [5, 20, 4], [5, 19, 4], [6, 0, 170951], [6, 1, 154297], [6, 2, 128268], [6, 3, 35648], [6, 5, 31003], [6, 6, 7403], [6, 7, 292], [6, 10, 231], [6, 12, 116], [6, 15, 100], [6, 4, 45], [6, 13, 38], [6, 17, 35], [6, 19, 32], [6, 20, 29], [6, 22, 27], [6, 8, 26], [6, 16, 11], [6, 18, 9], [7, 0, 186520], [7, 1, 166383], [7, 2, 127525], [7, 3, 36706], [7, 6, 1793], [7, 5, 1161], [7, 7, 318], [7, 15, 33], [7, 8, 27], [7, 17, 26], [7, 10, 24], [7, 22, 12], [8, 0, 180890], [8, 1, 165344], [8, 2, 129773], [8, 3, 36368], [8, 5, 1148], [8, 6, 989], [8, 10, 246], [8, 15, 102], [8, 17, 33], [8, 7, 29], [8, 8, 26], [9, 0, 180447], [9, 1, 165562], [9, 2, 124150], [9, 3, 36310], [9, 5, 1139], [9, 6, 800], [9, 10, 238], [9, 15, 101], [9, 17, 37], [9, 7, 29], [9, 8, 29], [10, 0, 171168], [10, 1, 154788], [10, 2, 122858], [10, 3, 33839], [10, 5, 18354], [10, 6, 7714], [10, 7, 585], [10, 4, 301], [10, 10, 229], [10, 12, 181], [10, 8, 130], [10, 13, 112], [10, 22, 65], [10, 21, 50], [10, 17, 41], [10, 18, 39], [10, 19, 31], [10, 15, 29], [10, 20, 29], [10, 24, 19], [10, 16, 14], [11, 1, 211653], [11, 0, 164094], [11, 2, 120735], [11, 3, 34262], [11, 5, 30967], [11, 6, 9823], [11, 9, 7904], [11, 4, 1526], [11, 12, 926], [11, 16, 243], [11, 13, 110], [11, 18, 78], [11, 23, 64], [11, 24, 56], [12, 1, 212592], [12, 0, 166190], [12, 2, 117485], [12, 3, 34263], [12, 5, 14374], [12, 6, 6869], [12, 12, 700], [12, 4, 441], [12, 16, 352], [12, 15, 134], [12, 19, 110], [12, 20, 95], [12, 18, 80], [12, 10, 58], [12, 13, 49], [12, 23, 37], [12, 24, 37], [13, 1, 210656], [13, 0, 177340], [13, 2, 118186], [13, 3, 34006], [13, 5, 32593], [13, 6, 10741], [13, 7, 1613], [13, 10, 1539], [13, 4, 714], [13, 12, 489], [13, 16, 418], [13, 14, 362], [13, 13, 117], [13, 17, 51], [13, 18, 34], [13, 15, 31], [13, 24, 30], [13, 23, 29], [13, 19, 29]]

    }
    else if(data.name.substring(0,5)=='220.1')
    {
         ip=['220.181.156.172', '220.181.150.159', '220.181.164.44', '220.181.78.245', '220.181.78.255', '220.181.90.28', '220.181.156.165', '220.181.69.72', '220.181.159.224', '220.181.159.97', '220.181.150.252', '220.181.141.255', '220.181.112.249', '220.181.111.193', '220.181.141.245', '220.181.159.222', '220.181.113.255', '220.181.113.245', '220.181.105.245', '220.181.105.255', '220.181.150.221', '220.181.90.19', '220.181.72.157', '220.181.90.26', '220.181.52.184']
        map_data=[[0, 2, 2775], [0, 3, 1629], [0, 10, 1628], [0, 11, 1612], [0, 4, 1551], [0, 7, 1467], [0, 9, 1314], [0, 12, 980], [0, 13, 911], [0, 17, 879], [0, 14, 854], [0, 16, 679], [0, 18, 675], [0, 22, 530], [0, 19, 501], [1, 7, 1440], [1, 2, 659], [1, 4, 599], [1, 9, 539], [1, 3, 519], [1, 14, 450], [1, 11, 420], [1, 22, 383], [1, 18, 351], [1, 17, 288], [1, 16, 276], [1, 19, 252], [1, 12, 183], [1, 13, 136], [2, 7, 1442], [2, 2, 556], [2, 22, 407], [2, 9, 377], [2, 11, 306], [2, 14, 247], [2, 18, 191], [2, 12, 105], [2, 13, 94], [2, 3, 89], [2, 4, 74], [2, 17, 67], [2, 19, 57], [3, 2, 2435], [3, 3, 1968], [3, 7, 1917], [3, 20, 1871], [3, 4, 1694], [3, 11, 1397], [3, 9, 1376], [3, 10, 1317], [3, 14, 1003], [3, 12, 804], [3, 18, 753], [3, 13, 752], [3, 16, 734], [3, 17, 654], [3, 19, 567], [3, 22, 508], [4, 2, 2167], [4, 3, 2037], [4, 10, 2002], [4, 4, 1994], [4, 9, 1965], [4, 7, 1921], [4, 11, 1430], [4, 19, 1334], [4, 13, 1275], [4, 20, 1162], [4, 18, 1068], [4, 12, 1068], [4, 14, 1030], [4, 16, 907], [4, 17, 764], [4, 22, 506], [5, 1, 19231], [5, 8, 15546], [5, 2, 2520], [5, 3, 1793], [5, 7, 1780], [5, 16, 1651], [5, 4, 1625], [5, 9, 1553], [5, 10, 1543], [5, 12, 1374], [5, 13, 1328], [5, 11, 1313], [5, 14, 1129], [5, 18, 744], [5, 20, 672], [5, 19, 623], [5, 17, 592], [5, 22, 507], [6, 1, 5038], [6, 3, 2078], [6, 7, 1921], [6, 4, 1916], [6, 2, 1754], [6, 14, 1591], [6, 9, 1380], [6, 13, 1207], [6, 12, 1127], [6, 20, 1116], [6, 10, 1088], [6, 11, 1022], [6, 16, 783], [6, 17, 774], [6, 18, 706], [6, 19, 614], [6, 22, 453], [7, 22, 303], [7, 16, 138], [7, 14, 130], [7, 13, 96], [7, 11, 87], [7, 12, 77], [7, 18, 40], [7, 19, 38], [7, 17, 36], [7, 2, 35], [7, 4, 35], [7, 9, 25], [8, 22, 308], [8, 3, 261], [8, 4, 234], [8, 18, 163], [8, 14, 152], [8, 9, 106], [8, 11, 100], [9, 22, 297], [9, 18, 148], [9, 11, 117], [9, 14, 107], [9, 12, 42], [9, 13, 40], [9, 19, 36], [9, 16, 32], [9, 17, 23], [10, 21, 4807], [10, 3, 2616], [10, 4, 2502], [10, 17, 2018], [10, 2, 1952], [10, 10, 1338], [10, 9, 1326], [10, 7, 1229], [10, 13, 941], [10, 19, 933], [10, 16, 904], [10, 14, 873], [10, 12, 870], [10, 11, 847], [10, 18, 837], [10, 22, 530], [11, 0, 24919], [11, 4, 2906], [11, 3, 2654], [11, 2, 2276], [11, 7, 1766], [11, 9, 1645], [11, 10, 1237], [11, 12, 1196], [11, 14, 1146], [11, 17, 1123], [11, 11, 1106], [11, 13, 1098], [11, 16, 981], [11, 18, 951], [11, 19, 814], [11, 22, 545], [12, 5, 6379], [12, 24, 6085], [12, 0, 5283], [12, 4, 2958], [12, 12, 2937], [12, 2, 2813], [12, 3, 2802], [12, 13, 2687], [12, 7, 1970], [12, 10, 1948], [12, 9, 1519], [12, 20, 1489], [12, 11, 1321], [12, 18, 1139], [12, 17, 1031], [12, 19, 1022], [12, 16, 967], [12, 14, 899], [12, 21, 519], [13, 6, 16189], [13, 5, 12562], [13, 15, 10130], [13, 23, 5105], [13, 2, 2462], [13, 4, 2125], [13, 3, 2099], [13, 7, 1939], [13, 16, 1552], [13, 9, 1511], [13, 10, 1481], [13, 14, 1406], [13, 11, 1134], [13, 13, 1051], [13, 12, 1025], [13, 18, 912], [13, 17, 877]]

    }
    else if(data.name.substring(0,5)=='180.1')
    {
        ip=['180.149.132.104', '180.149.153.16', '180.149.135.241', '180.149.153.73', '180.149.131.200', '180.149.131.40', '180.149.131.67', '180.149.155.125', '180.149.155.115', '180.149.136.54', '180.149.155.45', '180.149.155.55', '180.149.134.147', '180.149.131.95', '180.149.156.147', '180.149.134.146', '180.149.156.148', '180.149.135.181', '180.149.135.235', '180.149.134.226', '180.149.137.1', '180.149.136.59', '180.149.155.111', '180.149.155.110', '180.149.135.244']
        map_data=[[0, 0, 20401], [0, 6, 4773], [0, 5, 2859], [0, 4, 2769], [0, 2, 2058], [0, 1, 2002], [0, 3, 1635], [0, 7, 1297], [0, 9, 1271], [0, 8, 1045], [0, 13, 1043], [0, 22, 807], [0, 10, 752], [0, 11, 745], [0, 14, 703], [0, 12, 682], [0, 23, 673], [0, 15, 630], [0, 16, 614], [1, 3, 1327], [1, 2, 1306], [1, 1, 1280], [1, 10, 545], [1, 11, 507], [1, 8, 498], [1, 7, 497], [1, 4, 390], [1, 22, 355], [1, 12, 354], [1, 23, 326], [1, 21, 318], [1, 9, 303], [1, 14, 266], [1, 15, 231], [1, 16, 207], [1, 5, 188], [2, 17, 892], [2, 18, 834], [2, 2, 737], [2, 3, 722], [2, 1, 709], [2, 23, 299], [2, 16, 226], [2, 22, 212], [2, 14, 178], [2, 4, 148], [2, 7, 142], [2, 5, 129], [2, 8, 113], [2, 9, 58], [2, 13, 42], [3, 0, 6496], [3, 3, 3375], [3, 2, 3179], [3, 1, 3081], [3, 18, 2076], [3, 17, 2029], [3, 7, 1723], [3, 4, 1632], [3, 8, 1602], [3, 5, 1260], [3, 21, 870], [3, 9, 858], [3, 12, 804], [3, 11, 774], [3, 15, 673], [3, 10, 663], [3, 14, 615], [3, 13, 610], [3, 22, 601], [3, 23, 579], [3, 19, 548], [3, 16, 519], [4, 0, 19689], [4, 1, 4348], [4, 2, 4256], [4, 3, 3106], [4, 4, 2250], [4, 6, 2009], [4, 9, 1929], [4, 5, 1920], [4, 7, 1533], [4, 8, 1405], [4, 10, 1310], [4, 11, 1174], [4, 21, 1002], [4, 16, 889], [4, 13, 889], [4, 15, 665], [4, 19, 624], [4, 18, 600], [4, 12, 585], [4, 17, 580], [4, 14, 556], [4, 23, 497], [5, 0, 21872], [5, 6, 10570], [5, 1, 4794], [5, 2, 4691], [5, 3, 3216], [5, 5, 1834], [5, 4, 1771], [5, 8, 1581], [5, 9, 1514], [5, 7, 1396], [5, 17, 1248], [5, 18, 1204], [5, 11, 887], [5, 13, 744], [5, 10, 732], [5, 16, 704], [5, 14, 656], [5, 12, 632], [5, 15, 621], [5, 19, 514], [5, 21, 413], [5, 23, 405], [6, 0, 6381], [6, 3, 5234], [6, 1, 5093], [6, 2, 4702], [6, 7, 1627], [6, 4, 1591], [6, 8, 1514], [6, 5, 1324], [6, 9, 942], [6, 14, 656], [6, 16, 652], [6, 13, 626], [6, 15, 572], [6, 19, 565], [6, 12, 498], [6, 11, 368], [6, 23, 350], [6, 22, 341], [6, 10, 324], [7, 3, 1182], [7, 2, 665], [7, 1, 654], [7, 16, 217], [7, 14, 208], [7, 4, 74], [7, 7, 54], [7, 8, 41], [7, 5, 40], [7, 22, 26], [7, 23, 25], [7, 13, 20], [8, 14, 156], [8, 16, 129], [8, 4, 119], [8, 5, 101], [8, 8, 90], [8, 13, 77], [8, 7, 68], [8, 10, 29], [8, 1, 25], [8, 2, 24], [8, 3, 20], [153, 180, 235, 255, 8, 19], [8, 0, 18], [8, 11, 14], [9, 16, 224], [9, 14, 212], [9, 8, 37], [9, 3, 31], [9, 7, 28], [9, 9, 25], [9, 5, 16], [9, 0, 15], [9, 4, 15], [9, 2, 13], [9, 1, 12], [10, 0, 7321], [10, 2, 3612], [10, 1, 3527], [10, 7, 2402], [10, 8, 2152], [10, 3, 1882], [10, 4, 1712], [10, 10, 1651], [10, 11, 1398], [10, 5, 1315], [10, 9, 1150], [10, 21, 786], [10, 19, 695], [10, 14, 673], [10, 12, 656], [10, 16, 649], [10, 13, 632], [10, 15, 621], [10, 22, 385], [10, 23, 366], [11, 1, 8982], [11, 2, 8568], [11, 0, 7153], [11, 3, 3368], [11, 4, 2608], [11, 7, 2436], [11, 8, 2250], [11, 5, 2139], [11, 9, 1953], [11, 12, 1452], [11, 15, 1350], [11, 11, 1194], [11, 10, 1134], [11, 13, 963], [11, 19, 924], [11, 20, 795], [11, 14, 758], [11, 16, 724], [11, 21, 453], [11, 22, 417], [11, 23, 406], [12, 2, 9409], [12, 1, 9240], [12, 0, 6751], [12, 3, 3085], [12, 4, 2794], [12, 5, 2664], [12, 8, 2610], [12, 7, 2466], [12, 20, 1859], [12, 12, 1643], [12, 9, 1606], [12, 24, 1434], [12, 11, 1304], [12, 10, 1256], [12, 13, 1198], [12, 15, 1079], [12, 19, 875], [12, 14, 804], [12, 16, 635], [12, 22, 558], [12, 23, 557], [13, 0, 12266], [13, 2, 8644], [13, 1, 8525], [13, 3, 4461], [13, 4, 2588], [13, 20, 2169], [13, 5, 2144], [13, 8, 2027], [13, 7, 2014], [13, 24, 1842], [13, 9, 1626], [13, 21, 1233], [13, 13, 1013], [13, 14, 830], [13, 10, 823], [13, 11, 778], [13, 16, 705], [13, 19, 697], [13, 12, 668], [13, 15, 662], [13, 17, 612], [13, 18, 573], [153, 180, 199, 214, 13, 573]]

    }
     else if(data.name.substring(0,5)=='10.39')
    {
        ip=['10.39.11.174', '10.39.18.40', '10.39.27.235', '10.39.80.144', '10.39.27.119', '10.39.124.119', '10.39.12.107', '10.39.80.181', '10.39.202.64', '10.39.68.122', '10.39.66.203', '10.39.27.175', '10.39.56.249', '10.39.146.207', '10.39.53.216', '10.39.237.80', '10.39.237.225', '10.39.237.129', '10.39.174.115', '10.39.176.77', '10.39.6.102', '10.39.237.127', '10.39.70.72', '10.39.66.125', '10.39.66.42']
        map_data=[[0, 1, 23361], [0, 0, 13741], [0, 5, 4227], [0, 7, 313], [0, 13, 41], [0, 9, 6], [0, 14, 3], [0, 10, 2], [0, 22, 2], [0, 4, 1], [1, 0, 11012], [1, 7, 521], [1, 13, 42], [1, 18, 9], [1, 22, 3], [1, 10, 3], [1, 24, 1], [1, 8, 1], [1, 11, 1], [1, 12, 1], [1, 6, 1], [1, 23, 1], [1, 0, 297647], [1, 1, 272886], [1, 2, 152826], [1, 3, 127418], [1, 4, 96737], [1, 5, 85591], [1, 8, 56967], [2, 6, 4322], [2, 7, 520], [2, 18, 9], [2, 10, 3], [2, 22, 3], [2, 0, 2], [2, 8, 1], [2, 13, 1], [2, 23, 1], [2, 11, 1], [2, 12, 1], [2, 24, 1], [3, 1, 23822], [3, 4, 19652], [3, 0, 5671], [3, 5, 4084], [3, 7, 518], [3, 15, 187], [3, 16, 145], [3, 17, 119], [3, 21, 95], [3, 9, 59], [3, 10, 34], [3, 18, 9], [3, 22, 3], [3, 14, 2], [3, 6, 2], [3, 11, 2], [4, 3, 55669], [4, 4, 10499], [4, 1, 7928], [4, 6, 4319], [4, 5, 4215], [4, 9, 3563], [4, 0, 3275], [4, 7, 317], [4, 10, 23], [4, 18, 18], [4, 20, 9], [4, 16, 4], [4, 17, 4], [4, 15, 4], [4, 14, 3], [4, 23, 2], [4, 22, 2], [4, 12, 1], [4, 13, 1], [4, 24, 1], [5, 0, 29016], [5, 2, 22676], [5, 4, 16623], [5, 5, 4394], [5, 1, 2640], [5, 6, 2195], [5, 7, 310], [5, 19, 89], [5, 14, 54], [5, 20, 13], [5, 9, 11], [5, 18, 9], [5, 22, 3], [5, 10, 2], [5, 23, 1], [6, 2, 51355], [6, 1, 8234], [6, 0, 7044], [6, 5, 4401], [6, 6, 2193], [6, 7, 1842], [6, 9, 865], [6, 14, 90], [6, 20, 47], [6, 18, 8], [6, 22, 4], [6, 10, 2], [7, 6, 2278], [7, 0, 566], [7, 7, 553], [7, 18, 9], [7, 10, 3], [7, 22, 3], [7, 23, 1], [7, 24, 1], [7, 8, 1], [7, 11, 1], [7, 13, 1], [7, 12, 1], [8, 6, 2297], [8, 7, 346], [8, 13, 171], [8, 8, 111], [8, 12, 53], [8, 11, 53], [8, 23, 30], [8, 24, 26], [8, 0, 24], [8, 22, 22], [8, 18, 9], [8, 10, 2], [8, 1, 1], [9, 6, 2317], [9, 8, 2212], [9, 7, 545], [9, 11, 326], [9, 0, 10], [9, 23, 9], [9, 18, 9], [9, 22, 7], [9, 24, 7], [9, 10, 3], [9, 12, 2], [9, 13, 1], [10, 0, 28813], [10, 1, 15690], [10, 5, 4205], [10, 7, 4052], [10, 6, 2283], [10, 4, 1178], [10, 10, 1074], [10, 9, 33], [10, 22, 11], [10, 18, 9], [10, 23, 8], [10, 19, 7], [10, 24, 6], [10, 20, 2], [10, 14, 1], [10, 15, 1], [11, 0, 10666], [11, 1, 7701], [11, 8, 4405], [11, 2, 4236], [11, 5, 4158], [11, 10, 3032], [11, 4, 2590], [11, 6, 2174], [11, 11, 326], [11, 12, 326], [11, 7, 311], [11, 9, 14], [11, 18, 8], [11, 23, 8], [11, 24, 6], [11, 22, 6], [11, 19, 5], [11, 14, 2], [12, 0, 15804], [12, 5, 4363], [12, 1, 3380], [12, 6, 2146], [12, 7, 522], [12, 2, 452], [12, 11, 326], [12, 12, 324], [12, 14, 79], [12, 9, 18], [12, 23, 8], [12, 20, 8], [12, 18, 8], [12, 24, 6], [12, 22, 6], [12, 10, 2], [12, 19, 1], [13, 0, 31627], [13, 1, 24446], [13, 8, 4415], [13, 5, 4114], [13, 7, 3347], [13, 6, 2193], [13, 11, 326], [13, 12, 326], [13, 20, 24], [13, 19, 18], [13, 18, 8], [13, 24, 6], [13, 22, 6], [13, 14, 4], [13, 10, 2]]

    }
     else if(data.name.substring(0,5)=='10.49' && data.value=='14699499'){
         ip=['10.49.212.206', '10.49.21.15', '10.49.137.7', '10.49.137.136', '10.49.216.88', '10.49.148.130', '10.49.137.87', '10.49.45.64', '10.49.212.7', '10.49.216.62', '10.49.223.121', '10.49.212.147', '10.49.212.162', '10.49.231.206', '10.49.137.166', '10.49.36.147', '10.49.81.136', '10.49.231.21', '10.49.45.55', '10.49.223.90', '10.49.180.12', '10.49.223.163', '10.49.212.186', '10.49.45.144', '10.49.36.233']
        map_data=[[0, 0, 292754], [0, 1, 160510], [0, 2, 144624], [0, 3, 120684], [0, 4, 95881], [0, 5, 85868], [0, 8, 27795], [0, 13, 20170], [0, 6, 17951], [0, 9, 16927], [0, 11, 15608], [0, 14, 10244], [0, 17, 7128], [0, 15, 6282], [0, 12, 2606], [0, 19, 1694], [0, 18, 1581], [0, 10, 1329], [0, 23, 1128], [0, 16, 990], [0, 21, 938], [0, 24, 855], [1, 6, 37610], [1, 14, 31393], [1, 9, 21050], [1, 13, 15867], [1, 11, 15304], [1, 17, 7432], [1, 15, 6586], [1, 10, 2738], [1, 19, 1748], [1, 12, 1617], [1, 18, 1464], [1, 24, 879], [1, 20, 830], [1, 6, 719], [1, 23, 573], [2, 0, 378434], [2, 2, 152147], [2, 3, 119778], [2, 4, 96622], [2, 5, 85702], [2, 8, 59862], [2, 1, 50138], [2, 9, 21465], [2, 13, 18625], [2, 11, 14070], [2, 6, 9115], [2, 15, 6814], [2, 17, 6150], [2, 10, 2984], [2, 12, 1967], [2, 19, 1710], [2, 18, 1480], [2, 20, 892], [2, 24, 878], [2, 6, 720], [2, 23, 571], [3, 1, 544555], [3, 0, 265933], [3, 2, 137862], [3, 3, 112267], [3, 4, 95662], [3, 5, 85711], [3, 6, 79235], [3, 8, 62990], [3, 9, 17428], [3, 11, 16395], [3, 14, 11843], [3, 13, 11227], [3, 15, 7094], [3, 17, 6856], [3, 10, 4101], [3, 12, 2333], [3, 19, 1706], [3, 18, 1644], [3, 21, 1509], [3, 20, 1227], [3, 24, 843], [3, 16, 834], [4, 0, 158304], [4, 2, 145507], [4, 3, 112502], [4, 7, 106493], [4, 4, 96411], [4, 5, 85957], [4, 1, 76476], [4, 8, 30696], [4, 6, 24660], [4, 11, 23532], [4, 9, 17146], [4, 13, 16571], [4, 15, 7142], [4, 18, 6297], [4, 17, 5758], [4, 10, 4609], [4, 21, 3371], [4, 12, 2788], [4, 19, 1754], [4, 20, 1745], [4, 14, 1359], [4, 23, 1280], [4, 24, 895], [5, 1, 457375], [5, 2, 146823], [5, 0, 145534], [5, 3, 114422], [5, 4, 96502], [5, 6, 92405], [5, 5, 86056], [5, 8, 51922], [5, 14, 31668], [5, 9, 17153], [5, 11, 13373], [5, 13, 8443], [5, 15, 6900], [5, 17, 6636], [5, 10, 4099], [5, 20, 2533], [5, 19, 1740], [5, 12, 1513], [5, 23, 1459], [5, 18, 1449], [5, 21, 1252], [5, 16, 900], [6, 1, 493568], [6, 0, 176488], [6, 2, 153765], [6, 3, 127705], [6, 4, 100541], [6, 6, 99716], [6, 5, 89474], [6, 11, 26708], [6, 9, 18113], [6, 13, 12012], [6, 15, 7676], [6, 8, 7186], [6, 17, 6816], [6, 10, 4263], [6, 14, 3761], [6, 21, 3324], [6, 20, 2319], [6, 19, 1799], [6, 18, 1556], [6, 12, 1077], [6, 24, 905], [6, 6, 756], [6, 22, 610], [7, 0, 239207], [7, 2, 165818], [7, 3, 127500], [7, 4, 102714], [7, 5, 91053], [7, 8, 45730], [7, 1, 26186], [7, 9, 22643], [7, 11, 22122], [7, 13, 8882], [7, 17, 8081], [7, 15, 8049], [7, 6, 6137], [7, 10, 5801], [7, 20, 2768], [7, 19, 1860], [7, 18, 1547], [7, 12, 1418], [7, 22, 990], [7, 24, 950], [7, 6, 760], [7, 22, 645], [7, 21, 643], [8, 0, 437777], [8, 2, 164786], [8, 3, 129462], [8, 4, 101829], [8, 5, 90109], [8, 1, 31811], [8, 9, 22436], [8, 11, 10676], [8, 13, 9310], [8, 15, 7897], [8, 17, 6440], [8, 6, 6070], [8, 10, 5882], [8, 18, 3131], [8, 20, 1932], [8, 19, 1860], [8, 12, 1606], [8, 8, 1555], [8, 24, 934], [8, 6, 763], [8, 22, 709], [8, 22, 646], [9, 0, 624339], [9, 2, 165009], [9, 3, 123843], [9, 4, 101571], [9, 5, 90016], [9, 1, 25401], [9, 9, 22220], [9, 11, 16823], [9, 13, 12045], [9, 15, 7785], [9, 17, 6619], [9, 10, 6148], [9, 6, 6054], [9, 20, 1906], [9, 19, 1848], [9, 12, 1657], [9, 18, 1532], [9, 24, 947], [9, 6, 763], [9, 22, 616], [9, 23, 595], [10, 1, 305779], [10, 0, 173423], [10, 2, 154256], [10, 3, 122552], [10, 4, 94931], [10, 5, 84422], [10, 6, 40084], [10, 9, 16562], [10, 22, 12050], [10, 11, 11378], [10, 15, 7074], [10, 10, 5676], [10, 14, 4918], [10, 13, 4467], [10, 17, 2112], [10, 20, 2073], [10, 19, 1762], [10, 8, 1487], [10, 18, 1441], [10, 12, 1429], [10, 21, 1250], [10, 24, 871], [11, 1, 468951], [11, 2, 149955], [11, 6, 137929], [11, 0, 125093], [11, 3, 120714], [11, 4, 96293], [11, 5, 86081], [11, 10, 66464], [11, 9, 17086], [11, 11, 15833], [11, 13, 12363], [11, 12, 11589], [11, 15, 6503], [11, 17, 5673], [11, 8, 3088], [11, 14, 2864], [11, 23, 2251], [11, 20, 1968], [11, 19, 1719], [11, 18, 1478], [11, 21, 1110], [11, 24, 870], [12, 0, 200754], [12, 1, 187612], [12, 2, 150117], [12, 3, 117413], [12, 4, 96641], [12, 5, 85936], [12, 10, 68558], [12, 6, 64679], [12, 16, 32984], [12, 7, 28638], [12, 9, 16898], [12, 11, 16797], [12, 14, 9758], [12, 13, 7806], [12, 15, 6477], [12, 17, 6444], [12, 23, 2768], [12, 12, 2399], [12, 8, 2344], [12, 19, 1710], [12, 20, 1646], [12, 18, 1515], [12, 21, 1283], [12, 22, 1160], [13, 1, 479000], [13, 7, 240449], [13, 12, 198140], [13, 0, 196217], [13, 2, 147779], [13, 3, 116564], [13, 4, 95829], [13, 5, 85514], [13, 6, 80402], [13, 10, 68286], [13, 16, 58784], [13, 14, 33939], [13, 9, 16667], [13, 11, 14975], [13, 13, 12004], [13, 17, 7121], [13, 15, 6750], [13, 18, 2018], [13, 19, 1661], [13, 21, 1469], [13, 22, 1418], [13, 23, 1129], [13, 20, 1123]]

    }
     else if(data.name.substring(0,5)=='10.56'){
         ip=['10.56.92.187', '10.56.34.157', '10.56.131.163', '10.56.162.222', '10.56.4.86', '10.56.193.37', '10.56.115.254', '10.56.148.238', '10.56.183.136', '10.56.68.165', '10.56.115.125', '10.56.4.146', '10.56.148.217', '10.56.115.84', '10.56.187.25', '10.56.112.162', '10.56.144.126', '10.56.92.26', '10.56.68.148', '10.56.98.166', '10.56.47.250', '10.56.115.8', '10.56.63.184', '10.56.115.74', '10.56.141.34']
        map_data=[[13, 0, 162991], [13, 1, 123796], [13, 8, 263510], [13, 7, 43196], [13, 4, 42747], [13, 6, 36773], [13, 3, 34777], [13, 16, 326345], [13, 10, 25175], [13, 11, 24420], [13, 15, 22143], [13, 19, 21740], [13, 12, 21194], [13, 17, 19564], [13, 9, 19048], [13, 20, 17096], [13, 13, 16927], [13, 18, 14963], [12, 1, 184347], [12, 0, 163847], [12, 10, 45706], [12, 3, 35218], [12, 8, 32567], [12, 5, 32441], [12, 6, 28518], [12, 21, 26318], [12, 9, 24845], [12, 13, 22554], [12, 19, 22088], [12, 4, 21065], [12, 12, 20468], [12, 20, 19404], [12, 11, 17608], [12, 14, 17446], [12, 7, 17356], [12, 2, 16400], [12, 15, 16352], [11, 0, 164063], [11, 1, 73544], [11, 4, 36438], [11, 3, 35121], [11, 6, 28720], [11, 16, 328336], [11, 9, 26489], [11, 15, 21670], [11, 8, 21551], [11, 5, 18650], [11, 12, 17810], [11, 14, 17460], [11, 2, 17066], [11, 21, 16114], [11, 18, 15640], [11, 11, 15332], [11, 7, 15279], [11, 19, 14832], [11, 23, 14462], [10, 0, 168167], [10, 3, 34713], [10, 1, 34387], [10, 6, 30456], [10, 9, 26939], [10, 17, 21249], [10, 10, 19008], [10, 15, 18052], [10, 14, 17748], [10, 24, 16880], [10, 7, 15252], [10, 12, 15058], [10, 21, 14699], [10, 18, 14502], [10, 5, 14171], [10, 20, 14056], [10, 23, 13293], [10, 2, 12994], [10, 11, 12065],[12,16,98457] ,[10, 16, 111816], [9, 0, 179737], [9, 3, 37128], [9, 22, 11066], [9, 13, 6056], [8, 0, 180177], [8, 3, 37196], [8, 8, 13961], [8, 22, 11086], [8, 13, 6151], [7, 0, 181636], [7, 3, 37554], [7, 22, 11683], [7, 13, 6503], [6, 0, 170913], [6, 1, 64999], [6, 3, 36559], [6, 6, 30526], [6, 5, 28074], [6, 11, 25775], [6, 4, 24267], [6, 9, 19000], [6, 13, 18772], [6, 7, 18717], [6, 23, 18184], [6, 16, 170250], [6, 12, 16111], [6, 10, 15832], [6, 14, 15410], [6, 18, 14784], [6, 20, 14070], [6, 19, 13839], [6, 15, 13597], [6, 2, 10900], [5, 1, 457375], [5, 2, 146823], [5, 0, 145534], [5, 3, 114422], [5, 4, 96502], [5, 6, 92405], [5, 5, 86056], [5, 8, 51922], [5, 14, 31668], [5, 9, 17153], [5, 11, 13373], [5, 13, 8443], [5, 15, 6900], [5, 17, 6636], [5, 10, 4099], [5, 20, 2533], [5, 19, 1740], [5, 12, 1513], [5, 23, 1459], [5, 18, 1449], [5, 21, 1252], [5, 16, 109010], [4, 0, 162405], [4, 2, 94704], [4, 1, 55848], [4, 3, 34950], [4, 4, 30645], [4, 6, 28613], [4, 5, 26692], [4, 14, 24966], [4, 13, 23692], [4, 11, 22482], [4, 23, 21779], [4, 17, 19665], [4, 10, 19378], [4, 12, 18464], [4, 9, 17055], [4, 20, 15797], [4, 24, 15445], [4, 21, 15076], [4, 18, 13663], [3, 0, 156772], [3, 1, 49931], [3, 7, 40247], [3, 3, 34681], [3, 5, 34363], [3, 6, 25610], [3, 17, 19973], [3, 4, 19845], [3, 10, 18815], [3, 14, 18007], [3, 13, 17712], [3, 9, 16514], [3, 15, 16456], [3, 11, 16179], [3, 23, 15448], [3, 12, 15213], [3, 21, 14335], [3, 24, 14044], [3, 8, 14026], [3, 18, 13979], [3, 19, 13416], [3, 20, 12280], [2, 0, 166440], [2, 3, 35316], [2, 8, 23034], [2, 11, 10030], [2, 21, 9955], [2, 16, 6287], [2, 12, 6210], [2, 13, 6079], [2, 24, 2776], [1, 0, 166367], [1, 3, 35238], [1, 8, 21212], [1, 9, 20232], [1, 12, 10578], [1, 11, 9517], [1, 21, 7015], [1, 13, 6416], [1, 1, 2909], [0, 0, 158617], [0, 4, 50534], [0, 7, 47030], [0, 3, 34914], [0, 1, 25566], [0, 6, 24835], [0, 12, 20093], [0, 9, 20039], [0, 14, 18840], [0, 10, 18065], [0, 16, 17322], [0, 15, 16223], [0, 19, 16151], [0, 13, 15269], [0, 8, 15253], [0, 18, 13939], [0, 20, 10807]]

    }
      else if(data.name.substring(0,5)=='10.60'){
          ip=['10.60.26.66', '10.60.175.116', '10.60.181.115', '10.60.26.232', '10.60.26.15', '10.60.28.36', '10.60.244.122', '10.60.244.11', '10.60.181.86', '10.60.181.208', '10.60.244.5', '10.60.24.64', '10.60.26.251', '10.60.24.99', '10.60.55.123', '10.60.28.34', '10.60.244.72', '10.60.181.231', '10.60.28.232', '10.60.28.7', '10.60.20.126', '10.60.181.19', '10.60.181.44', '10.60.244.82', '10.60.244.66']
         map_data=[[13, 0, 81652], [13, 1, 156], [13, 10, 95], [13, 4, 77], [13, 2, 48], [13, 7, 48], [13, 3, 32], [13, 8, 30], [13, 15, 28], [13, 13, 22], [13, 5, 10], [13, 16, 7], [13, 12, 5], [12, 0, 26511], [12, 1, 754], [12, 12, 105], [12, 4, 61], [12, 9, 59], [12, 3, 49], [12, 2, 48], [12, 7, 48], [12, 8, 36], [12, 13, 33], [12, 10, 28], [12, 19, 27], [12, 16, 21], [11, 0, 32765], [11, 4, 74], [11, 22, 55], [11, 2, 48], [11, 7, 48], [11, 3, 36], [11, 5, 35], [11, 19, 35], [11, 8, 33], [11, 16, 30], [11, 1, 28], [11, 13, 21], [11, 47, 9], [10, 0, 22988], [10, 5, 104], [10, 17, 80], [10, 14, 66], [10, 2, 51], [10, 7, 48], [10, 4, 48], [10, 1, 48], [10, 3, 42], [10, 16, 33], [10, 8, 33], [10, 13, 32], [10, 18, 21], [10, 9, 8], [10, 12, 8], [9, 0, 22048], [9, 7, 51], [9, 2, 50], [9, 9, 6], [8, 0, 33334], [8, 9, 88], [8, 2, 51], [8, 21, 51], [8, 7, 49], [7, 0, 25365], [7, 2, 50], [7, 7, 49], [7, 6, 19], [7, 10, 2], [7, 46, 1], [6, 0, 33248], [6, 1, 4712], [6, 6, 65], [6, 2, 50], [6, 11, 34], [6, 3, 32], [6, 8, 28], [6, 7, 20], [6, 5, 9], [6, 47, 2], [6, 14, 2], [5, 2, 371733], [5, 0, 163135], [5, 1, 107845], [5, 5, 93701], [5, 4, 71636], [5, 7, 38005], [5, 3, 34930], [5, 6, 30144], [5, 10, 23509], [5, 17, 23456], [5, 24, 20149], [5, 11, 20122], [5, 18, 18840], [5, 20, 18250], [5, 22, 18041], [5, 12, 17450], [5, 14, 16852], [5, 9, 16325], [5, 13, 15806], [5, 16, 14537], [4, 0, 37563], [4, 1, 1977], [4, 3, 89], [4, 6, 67], [4, 23, 54], [4, 2, 48], [4, 15, 48], [4, 11, 47], [4, 4, 42], [4, 5, 35], [4, 8, 31], [4, 14, 26], [4, 24, 21], [4, 12, 6], [3, 0, 37652], [3, 1, 2514], [3, 5, 155], [3, 6, 71], [3, 3, 68], [3, 20, 59], [3, 2, 48], [3, 4, 36], [3, 11, 36], [3, 8, 31], [3, 10, 23], [3, 15, 21], [3, 24, 18], [2, 0, 37678], [2, 6, 72], [2, 3, 70], [2, 2, 48], [1, 0, 84241], [1, 6, 72], [1, 3, 68], [1, 2, 48], [1, 4, 47], [1, 19, 2], [0, 0, 26945], [0, 1, 1311], [0, 5, 136], [0, 4, 93], [0, 3, 70], [0, 6, 65], [0, 2, 48], [0, 14, 10], [0, 18, 8], [0, 21, 2]]

      }
     else if(data.name.substring(0,5)=='10.54'){
         ip=['10.54.67.73', '10.54.223.139', '10.54.216.124', '10.54.254.202', '10.54.251.114', '10.54.244.157', '10.54.251.212', '10.54.223.206', '10.54.36.84', '10.54.69.1', '10.54.170.141', '10.54.250.139', '10.54.43.235', '10.54.244.183', '10.54.160.126', '10.54.1.211', '10.54.197.246', '10.54.46.124', '10.54.115.250', '10.54.113.190', '10.54.52.246', '10.54.89.2', '10.54.141.96', '10.54.237.139', '10.54.149.134']
        map_data=[[13, 1, 13299], [13, 7, 9631], [13, 0, 3345], [13, 14, 984], [13, 8, 432], [13, 2, 209], [13, 19, 128], [13, 6, 127], [12, 3, 4054], [12, 0, 2042], [12, 4, 1256], [12, 8, 1087], [12, 5, 671], [12, 2, 365], [12, 1, 305], [12, 13, 116], [12, 11, 47], [12, 20, 32], [12, 6, 20], [11, 3, 3830], [11, 8, 3038], [11, 5, 2671], [11, 0, 2001], [11, 2, 496], [11, 13, 450], [11, 20, 412], [11, 23, 376], [11, 4, 359], [11, 1, 192], [11, 6, 133], [10, 5, 4485], [10, 3, 2295], [10, 8, 1647], [10, 0, 1153], [10, 7, 972], [10, 17, 666], [10, 2, 545], [10, 13, 133], [10, 23, 24], [9, 13, 82], [8, 13, 51], [7, 13, 69], [6, 3, 8100], [6, 0, 6349], [6, 9, 4988], [6, 10, 4345], [6, 6, 3967], [6, 5, 2301], [6, 1, 1903], [6, 2, 1283], [6, 12, 414], [6, 13, 216], [6, 7, 68], [6, 21, 45], [6, 15, 41], [5, 0, 36751], [5, 1, 2556], [5, 4, 69], [5, 3, 67], [5, 6, 54], [5, 2, 47], [5, 18, 43], [5, 8, 33], [5, 11, 33], [5, 9, 27], [5, 24, 14], [5, 10, 8], [5, 19, 4], [4, 0, 7967], [4, 6, 5021], [4, 3, 2505], [4, 4, 2165], [4, 5, 1772], [4, 1, 1656], [4, 12, 1310], [4, 8, 1126], [4, 2, 489], [4, 13, 110], [4, 22, 96], [4, 21, 55], [4, 7, 31], [3, 0, 9897], [3, 6, 5308], [3, 5, 3035], [3, 4, 2863], [3, 1, 2343], [3, 2, 876], [3, 13, 870], [3, 12, 464], [3, 18, 449], [3, 24, 389], [3, 22, 326], [3, 7, 131], [3, 21, 95], [3, 3, 34], [2, 5, 3097], [2, 2, 1462], [2, 13, 68], [2, 18, 53], [1, 2, 9928], [1, 7, 348], [1, 18, 44], [1, 13, 10], [0, 4, 15114], [0, 2, 11910], [0, 1, 9381], [0, 11, 3032], [0, 19, 336], [0, 7, 336], [0, 5, 324], [0, 3, 206], [0, 14, 155], [0, 18, 52], [0, 8, 33]]

    }
     else if(data.name.substring(0,5)=='10.64'){
         ip=['10.64.175.214', '10.64.175.187', '10.64.55.241', '10.64.175.178', '10.64.55.132', '10.64.55.212', '10.64.46.200', '10.64.55.243', '10.64.55.224', '10.64.46.31', '10.64.24.96', '10.64.24.191', '10.64.175.145', '10.64.175.238', '10.64.175.150', '10.64.175.255', '10.64.175.169', '10.64.46.235', '10.64.175.34', '10.64.175.112', '10.64.244.44', '10.64.175.202', '10.64.175.171', '10.64.46.40', '10.64.176.4']
        map_data=[[0, 8, 606], [0, 0, 286], [0, 13, 70], [0, 6, 50], [0, 19, 26], [0, 18, 23], [1, 11, 546], [1, 6, 288], [1, 0, 287], [1, 3, 208], [1, 13, 128], [1, 24, 74], [1, 14, 26], [1, 15, 15], [1, 17, 5], [1, 22, 1], [2, 0, 286], [2, 6, 245], [2, 15, 170], [2, 24, 95], [2, 17, 91], [3, 0, 287], [3, 17, 200], [3, 1, 115], [3, 18, 99], [3, 21, 36], [3, 22, 23], [3, 16, 22], [4, 0, 286], [4, 3, 168], [4, 7, 160], [4, 2, 94], [4, 15, 56], [4, 22, 48], [4, 24, 43], [4, 23, 38], [4, 14, 14], [5, 0, 6619], [5, 6, 4846], [5, 3, 3088], [5, 1, 2856], [5, 5, 2287], [5, 2, 1778], [5, 4, 1183], [5, 12, 922], [5, 15, 872], [5, 16, 700], [5, 8, 331], [5, 21, 233], [5, 9, 178], [5, 13, 57], [6, 8, 586], [6, 0, 302], [6, 4, 215], [6, 13, 201], [6, 14, 168], [6, 21, 111], [6, 15, 89], [6, 2, 61], [6, 6, 50], [6, 22, 41], [6, 3, 30], [7, 1, 2055], [7, 12, 545], [7, 2, 305], [7, 0, 299], [7, 7, 294], [7, 14, 17], [8, 10, 554], [8, 2, 301], [8, 0, 297], [8, 4, 247], [8, 23, 94], [9, 0, 306], [9, 2, 246], [9, 7, 153], [9, 4, 6], [10, 0, 276], [10, 18, 71], [10, 19, 51], [10, 16, 18], [10, 5, 14], [11, 0, 287], [11, 19, 156], [11, 18, 150], [11, 5, 99], [11, 4, 96], [11, 16, 79], [11, 2, 54], [12, 3, 657], [12, 5, 271], [12, 16, 203], [12, 0, 180], [12, 14, 155], [12, 4, 98], [12, 13, 73], [12, 2, 59], [12, 22, 55], [12, 18, 17], [12, 19, 13], [13, 5, 270], [13, 22, 114], [13, 14, 90], [13, 21, 46], [13, 13, 37], [13, 24, 36], [13, 15, 19]]

     }


     optionip = {
         backgroundColor:'#ffffff',
         title:{
             text:'主机使用热力图',
             textStyle:{
             		color:'#333333',
					fontSize:13
             },
             left: '48%',
             align: 'right',
             bottom:'0%'
				},
    tooltip: {                 //提示框
        position: 'top'
    },
    animation: false,
    grid: {
        height: '70%',    //日历图标的高
        width:'70%',
        top: '6%',
        left:'19%'
    },
    xAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        },
        axisLine:{
            lineStyle:{
                color:'#333333'
            }
        },
        axisLabel:{
            interval:0,
             rotate:90
        }
    },
    yAxis: {
        type: 'category',
        data: ip,
        splitArea: {
            show: true
        },
        axisLine:{
            lineStyle:{
                color:'#333333'
            }
        }
    },
    visualMap: {     //颜色标识条设置
        min: 0,
        max: 250000,
        calculable: true,
        orient: 'horizontal',
        left: '40%',
        bottom: '8%',
        inRange:{
             //color:['#e5eaee','#497abc']
            color:['#f5eea5','#be444c']
        }
    },
    series: [{
        name: 'number',
        type: 'heatmap',
        data: map_data,

        label: {
            show: true
        },
        emphasis: {
            itemStyle: {
                color:'#3f310e',
                shadowBlur: 10,
                shadowColor: 'rgba(255,255,0, 1)',
                },
        },

    }]
};
     if (optionip && typeof optionip === "object") {
    myChart1.setOption(optionip, true);
}

});




}