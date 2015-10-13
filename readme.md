[PAC](https://www.rpsofts.com/vvv)
=======
本项目主要介绍如何利用国外VPS搭建多协议代理服务。

感谢https://pac.itzmx.com/  基于itzmx修改。

搭建代理服务器
==============
在 25 端口搭建 http/https 代理。


Ubuntu（需要一行一行复制安装）:
-------
> apt-get -y install squid
curl http://www.rpsofts.com/vvv/squid/ubuntu-squid.conf
/etc/squid3/squid.conf
mkdir -p /var/cache/squid
chmod -R 777 /var/cache/squid
service squid3 stop
squid3 -z
service squid3 restart



CentOS 6.7 x64（推荐用此系统）:
-------
> setenforce 0
ulimit -n 1048576
echo "* soft nofile 1048576" >> /etc/security/limits.conf
echo "* hard nofile 1048576" >> /etc/security/limits.conf
echo "alias net-pf-10 off" >> /etc/modprobe.d/dist.conf
echo "alias ipv6 off" >> /etc/modprobe.d/dist.conf
killall sendmail
/etc/init.d/postfix stop
chkconfig --level 2345 postfix off
yum -y install squid
wget -O /etc/squid/squid.conf http://wwww.rpsofts.com/vvv/squid/centos-squid.conf
mkdir -p /var/cache/squid
chmod -R 777 /var/cache/squid
squid -z
service squid restart
chkconfig --level 2345 squid on


装完后记得reboot重启下服务器确保生效。

然后使用 PAC右键另存为 PAC 文件后修改其中的IP地址为你的服务器IP即可。

注意服务器DNS修改成8.8.8.8（配置文件目前强制指定了DNS，可以无需修改）

搭配锐速，网页打开速度翻十倍，效果更佳