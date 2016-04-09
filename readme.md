[PAC](http://www.rpsofts.com/vvv)
=======
本项目主要介绍如何利用国外VPS搭建多协议代理服务。

感谢http://www.72blog.com/squid-PAC.html  及 http://www.rpsofts.com/vvv  本文基于[itzmx]修改。
#做一下广告：
廉价服务器推荐：http://www.rpsofts.com/category/vps

推荐使用美国西海岸服务器，，如digitalocean，，虽然现在不如前几年，不过kvm配合锐速，720youtube还是可以的。。  走我的链接，注册送10刀，注册链接：https://m.do.co/c/f092171fe8cb  当然你也可以找我（guotai@live.com）索取50刀github的优惠卷。。加上优惠卷基本5美元可以用1年时间。。  
此外vultr东京机房的也不错，，http://www.vultr.com/?ref=6887749。。走我的链接送50刀（限两个月内使用） 2016年4月最新送20美元，优惠码：NGINX20【官方没有说有效期，有可能是长效的，你用完为止】  加起来70刀，，可以免费用半年 我自己就是用vultr东京机房和softlayer香港的（当然softlayer现在已坑，绕的太厉害，不建议购买）




# PAC地址
主：http://www.rpsofts.com/1.pac  （演示的几台服务器因为用的人太多了或者被举报，都被墙了。不再持续提供，如有需要请自行搭建。）
备：http://www.rpsofts.com/72.pac
# 使用方法
先介绍一下设置各个系统代理的方法。
## Windows
Internet选项 -> 连接 选项卡 -> 局域网设置(如果是电脑拨号上网, 这里点'设置') -> 
使用自动配置脚本 -> 填入PAC地址 -> 确定

![](http://rplog.qiniudn.com/o_1a1begcb49dn1f151fih19se1jsla.jpg)
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

自行搭建代理服务器
==============
在 25 端口搭建 http/https 代理。


Ubuntu（需要一行一行复制安装）:
-------
	apt-get -y install squid
	curl http://www.rpsofts.com/vvv/squid/ubuntu-squid.conf  > /etc/squid3/squid.conf
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
	wget -O /etc/squid/squid.conf http://www.rpsofts.com/vvv/squid/centos-squid.conf
	mkdir -p /var/cache/squid
	chmod -R 777 /var/cache/squid
	squid -z
	service squid restart
	chkconfig --level 2345 squid on


装完后记得reboot重启下服务器确保生效。

然后使用[ PAC](http://www.rpsofts.com/1.pac " PAC")右键另存为 PAC 文件后修改其中的IP地址（ss.72blog.com）为你的服务器IP即可。
如果你有多组安装squid的vps或者服务器可以是像我一样，者配置负载均衡或者分区域解析。。

注意服务器DNS修改成8.8.8.8（配置文件目前强制指定了DNS，可以无需修改）

tadtung@gmail.com or guoai@live.com
