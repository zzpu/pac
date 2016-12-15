[PAC](http://www.rpsofts.com/vvv)
=======
本项目主要介绍如何利用国外VPS搭建多协议代理服务。http://v.rpsofts.com/app/doc/pac.html

# 我提供的免费翻墙   http://cdn.rpsofts.com/1.pac   

增加海外用户翻回国内看视频、听音乐方案。。https://raw.githubusercontent.com/rptec/squid-PAC/master/9.pac

免费节点 我会持续续费，并将一直免费提供下去。不过如果你想拥有更快的速度还是建议你自行购买vps配置，过程中有问题，可联系我。

主节点 为加拿大KW 数据中心（副节点一个vultr东京的，一个法国的，，根据你的位置自动选择节点），已经安装配置了 google的bbr加速，可流畅观看 youtube 720p视频。。。1080p就算了，毕竟免费公开用的人多。

# 做一下广告：。
廉价服务器推荐：

板瓦工又来了传说中的低价神器。。。
18.99 刀年付， 1G 内存， 2T 流量购买链接：
https://bwh1.net/aff.php?aff=4477&pid=28

11.99 刀年付， 512 内存， 1T 流量购买链接：
https://bwh1.net/aff.php?aff=4477&pid=27



此外vultr东京机房的也不错，，http://www.vultr.com/?ref=6918500-3B  。。走我的链接送20刀（之前50刀的已经不能继续使用）
    同时需要注意  部分主机商为防止垃圾邮件泛滥，，，Vultr的VPS初始情况下SMTP端口25是关闭的。如果要使用25端口翻墙，要在vultr后台填写一个ticket申请打开，管理员才会为你打开该端口。
申请邮件可以简单这么写：
Please unblock port 25. WordPress need it open. Thanks!（一般24小时会给你开通的，工作时间的话 基本几分钟就会开通。）

推荐使用美国西海岸服务器，，如digitalocean，，虽然现在不如前几年，不过kvm配合锐速，720youtube还是可以的。。  走我的链接，注册送10刀，注册链接：https://m.do.co/c/f092171fe8cb  ~~当然你也可以找我（guotai@live.com）索取50刀github的优惠卷。。加上优惠卷基本5美元可以用1年时间。
。~~  已经不再继续赠送。。。



## PAC地址
主：https://raw.githubusercontent.com/rptec/squid-PAC/master/1.pac  （将其中  第一行 你的ip换为   你安装squid vps的ip地址，上传到随便空间就行，，）

你也可以将1.pac 下载下来，，然后放到 你电脑的任何位置，， 例如 d盘。。。配置时如下：
![](http://ww2.sinaimg.cn/mw690/6ff5e63ajw1far2gor5ukj20b6051aai.jpg)


备：https://raw.githubusercontent.com/rptec/squid-PAC/master/2.pac (全局代理，，，因为比较简单所以之前没特别说，，最近有人问，，就特别写出来。)
pac地址具体写法，，请自行百度。。。
多个代理可以使用负载均衡，，也可以使用dns轮询，也可以在pac里面，依照顺序写出来。

# 使用方法
先介绍一下设置各个系统代理的方法。
## Windows
Internet选项 -> 连接 选项卡 -> 局域网设置(如果是电脑拨号上网, 这里点'设置') -> 
使用自动配置脚本 -> 填入PAC地址 -> 确定

![](http://cdn.rpsofts.com/o_1aj11sbamej88gt7hjh219aba.jpg)
## Mac OS X
系统设置 -> 网络 -> 高级 -> 代理 -> 自动代理配置 -> URL中填入PAC地址 -> 好

## IOS (IPhone/IPad)
打开设置, 选择Wi-Fi
选择当前使用的热点
![](http://tutu72.qiniudn.com/o_1ad7hfpgi1c7ciqoen517m06s6a.png)
拖到最下面的代理设置，选择"自动"，填写PAC地址 
![](http://tutu72.qiniudn.com/o_1ad7hfu4h6sfjvv1cm1qu7168jf.png)
## Android
安卓5.0以上版本 使用方法同苹果，早期版本需要使用第三方软件

## 3G/4G
在apn接入点内 自行设置  代理ip及端口

# 自行搭建代理服务器
==============
在 25 端口搭建 http/https 代理。


Ubuntu（需要一行一行复制安装）:
-------
	apt-get -y install squid
	curl https://raw.githubusercontent.com/rptec/squid-PAC/master/squid/ubuntu-squid.conf  > /etc/squid3/squid.conf
	mkdir -p /var/cache/squid
	chmod -R 777 /var/cache/squid
	service squid3 stop
	squid3 -z
	service squid3 restart


CentOS 6.7 x64（推荐用此系统）:
-------
	setenforce 0
	ulimit -n 1048576
	echo "* soft nofile 1048576" >> /etc/security/limits.conf
	echo "* hard nofile 1048576" >> /etc/security/limits.conf
	echo "alias net-pf-10 off" >> /etc/modprobe.d/dist.conf
	echo "alias ipv6 off" >> /etc/modprobe.d/dist.conf
	killall sendmail
	/etc/init.d/postfix stop
	chkconfig --level 2345 postfix off
	yum -y install squid
	wget -O /etc/squid/squid.conf https://raw.githubusercontent.com/rptec/squid-PAC/master/squid/centos-squid.conf
	mkdir -p /var/cache/squid
	chmod -R 777 /var/cache/squid
	squid -z
	service squid restart
	chkconfig --level 2345 squid on


装完后记得reboot重启下服务器确保生效。

然后使用[ PAC](http://v.rpsofts.com/app/pac/1.pac  " PAC")右键另存为 PAC 文件后修改其中的代理地址（s.rpsofts.com）为你的服务器IP或者域名即可。

如果你有多组安装squid的vps或者服务器可以是像我一样，者配置负载均衡或者分区域解析。。

注意服务器DNS修改成8.8.8.8（配置文件目前强制指定了DNS，可以无需修改）
此外最近常常有人说安装后 不能使用，，我大概看了一下基本都是25端口未开放，，请自行修改防火墙规则（/sbin/iptables -I INPUT -p tcp --dport 25 -j ACCEPT）。。

部分主机 需要禁用ipv6 才能访问 google，，
方法：编辑 /etc/sysctl.conf,添加如下内容
net.ipv6.conf.all.disable_ipv6=1  
net.ipv6.conf.default.disable_ipv6=1  
net.ipv6.conf.lo.disable_ipv6=1  
重启网卡


此外就是再次注意安装完后需要重启vps。


tadtung@gmail.com or guoai@live.com
