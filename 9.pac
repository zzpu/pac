var proxy = "PROXY www.30d.bid:25;";

var domains = {
  "acfun.com": 1, 
  "bilibili.com": 1, 
  "iqiyi.com": 1, 
  "pps.tv": 1, 
  "lixian.xunlei.com": 1, 
  "www.xiami.com": 1, 
  "video.qq.com": 1, 
  "tudou.com": 1, 
  "music.baidu.com": 1, 
  "douban.fm": 1
  "letv.com": 1, 
  "hunantv.com": 1, 
  "soku.com": 1, 
  "tv.sohu.com": 1, 
  "v.youku.com": 1, 
  "vtime.cntv.cloudcdn.net": 1, 
  "kugou.com": 1, 
  "tudou.com": 1, 
  "ttpod.com": 1, 
  "kuwo.cn": 1  
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    pos = host.lastIndexOf('.', pos - 1);
    while(1) {
        if (pos <= 0) {
            if (hasOwnProperty.call(domains, host)) {
                return proxy;
            } else {
                return direct;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}
