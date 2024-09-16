https://www.androidpolice.com/how-to-make-personal-vpn-30-minutes/
https://www.linuxbabe.com/ubuntu/set-up-openvpn-stunnel
https://www.vpngate.net/en/howto_openvpn.aspx
https://medium.com/@sonicjoy2002/building-openvpn-server-on-aws-ec2-84b2c0a1d934
https://proprivacy.com/vpn/guides/create-a-vpn-with-aws
https://serverfault.com/questions/1042988/automatic-reboot-at-specific-time-if-automatic-upgrade-requires-reboot
https://askubuntu.com/questions/13730/how-can-i-schedule-a-nightly-reboot


instance name: OpenVPN-2024-06-19

Region: Osaka
Ubuntu 22
architecture: arm
type: t4g.micro   https://openvpn.net/as-docs/system-requirements.html
Keypair = same name
allow ssh, http, https
16Gb gp3

chmod 400 *.pem
sudo apt update
sudo apt upgrade --yes
sudo reboot

sudo apt-get install --fix-broken
sudo apt-get -y autoclean
sudo apt-get -y clean
sudo apt-get -y autoremove --purge

sudo apt install -y unattended-upgrades
sudo apt install -y  ntp dstat htop net-tools
sudo apt install -y  zip bash jq curl vim nano
sudo apt install -y  linux-headers-$(uname -r)
sudo apt install -y  dkms git build-essential libssl-dev


wget https://git.io/vpn -O openvpn-install.sh
sudo bash openvpn-install.sh
1. public hostname = AWS hostname
1. protocol = TCP
1. port 443
1. DNS = OpenDNS
   - NOT "1) Current system resolvers" Just select any other option for the DNS during setup https://github.com/Nyr/openvpn-install/issues/629#issuecomment-509107936
1. iphone14

--------------------------------------------

Welcome to this OpenVPN road warrior installer!

This server is behind NAT. What is the public IPv4 address or hostname?

Which protocol should OpenVPN use?
1) UDP (recommended)
2) TCP
   Protocol [1]:

What port should OpenVPN listen to?
Port [1194]: 443

Select a DNS server for the clients:
1) Current system resolvers
2) Google
3) *******
4) OpenDNS
5) Quad9
6) AdGuard
   DNS server [1]: 4

Enter a name for the first client:
Name [client]: iphone14

OpenVPN installation is ready to begin.
Press any key to continue...
Hit:1 http://ports.ubuntu.com/ubuntu-ports jammy-security InRelease
Hit:2 http://ap-southeast-2a.clouds.ports.ubuntu.com/ubuntu-ports jammy InRelease
Hit:3 http://ap-southeast-2a.clouds.ports.ubuntu.com/ubuntu-ports jammy-updates InRelease
Hit:4 http://ap-southeast-2a.clouds.ports.ubuntu.com/ubuntu-ports jammy-backports InRelease
Reading package lists... Done
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
ca-certificates is already the newest version (20230311ubuntu0.22.04.1).
ca-certificates set to manually installed.
openssl is already the newest version (3.0.2-0ubuntu1.15).
openssl set to manually installed.
The following additional packages will be installed:
libpkcs11-helper1
Suggested packages:
resolvconf openvpn-systemd-resolved easy-rsa
The following NEW packages will be installed:
libpkcs11-helper1 openvpn
0 upgraded, 2 newly installed, 0 to remove and 2 not upgraded.
Need to get 654 kB of archives.
After this operation, 1754 kB of additional disk space will be used.
Get:1 http://ap-southeast-2a.clouds.ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libpkcs11-helper1 arm64 1.28-1ubuntu0.22.04.1 [48.9 kB]
Get:2 http://ap-southeast-2a.clouds.ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 openvpn arm64 2.5.9-0ubuntu0.22.04.2 [605 kB]
Fetched 654 kB in 3s (245 kB/s)
Preconfiguring packages ...
Selecting previously unselected package libpkcs11-helper1:arm64.
(Reading database ... 104913 files and directories currently installed.)
Preparing to unpack .../libpkcs11-helper1_1.28-1ubuntu0.22.04.1_arm64.deb ...
Unpacking libpkcs11-helper1:arm64 (1.28-1ubuntu0.22.04.1) ...
Selecting previously unselected package openvpn.
Preparing to unpack .../openvpn_2.5.9-0ubuntu0.22.04.2_arm64.deb ...
Unpacking openvpn (2.5.9-0ubuntu0.22.04.2) ...
Setting up libpkcs11-helper1:arm64 (1.28-1ubuntu0.22.04.1) ...
Setting up openvpn (2.5.9-0ubuntu0.22.04.2) ...
Created symlink /etc/systemd/system/multi-user.target.wants/openvpn.service → /lib/systemd/system/openvpn.service.
Processing triggers for man-db (2.10.2-1) ...
Processing triggers for libc-bin (2.35-0ubuntu3.8) ...
Scanning processes...
Scanning linux images...

Running kernel seems to be up-to-date.

No services need to be restarted.

No containers need to be restarted.

No user sessions are running outdated binaries.

No VM guests are running outdated hypervisor (qemu) binaries on this host.

Notice
------
'init-pki' complete; you may now create a CA or requests.

Your newly created PKI dir is:
* /etc/openvpn/server/easy-rsa/pki


Using Easy-RSA configuration:
* undefined
Notice
------
CA creation complete. Your new CA certificate is at:
* /etc/openvpn/server/easy-rsa/pki/ca.crt

Notice
------
Private-Key and Public-Certificate-Request files created.
Your files are:
* req: /etc/openvpn/server/easy-rsa/pki/reqs/server.req
* key: /etc/openvpn/server/easy-rsa/pki/private/server.key


Using configuration from /etc/openvpn/server/easy-rsa/pki/6129ec88/temp.3.1
Check that the request matches the signature
Signature ok
The Subject's Distinguished Name is as follows
commonName            :ASN.1 12:'server'
Certificate is to be certified until Jun 17 10:26:38 2034 GMT (3650 days)

Write out database with 1 new entries
Data Base Updated

Notice
------
Certificate created at:
* /etc/openvpn/server/easy-rsa/pki/issued/server.crt


-----

Notice
------
Private-Key and Public-Certificate-Request files created.
Your files are:
* req: /etc/openvpn/server/easy-rsa/pki/reqs/iphone14.req
* key: /etc/openvpn/server/easy-rsa/pki/private/iphone14.key


Using configuration from /etc/openvpn/server/easy-rsa/pki/a63c0042/temp.3.1
Check that the request matches the signature
Signature ok
The Subject's Distinguished Name is as follows
commonName            :ASN.1 12:'iphone14'
Certificate is to be certified until Jun 17 10:26:39 2034 GMT (3650 days)

Write out database with 1 new entries
Data Base Updated

Notice
------
Certificate created at:
* /etc/openvpn/server/easy-rsa/pki/issued/iphone14.crt


Notice
------
Inline file created:
* /etc/openvpn/server/easy-rsa/pki/inline/iphone14.inline

Using configuration from /etc/openvpn/server/easy-rsa/pki/0e0c942c/temp.0.1

Notice
------
An updated CRL has been created:
* /etc/openvpn/server/easy-rsa/pki/crl.pem

Created symlink /etc/systemd/system/multi-user.target.wants/openvpn-iptables.service → /etc/systemd/system/openvpn-iptables.service.
Created symlink /etc/systemd/system/multi-user.target.wants/openvpn-server@server.service → /lib/systemd/system/openvpn-server@.service.

Finished!

The client configuration is available in: /root/iphone14.ovpn
New clients can be added by running this script again.


--------------------------------------------
sudo apt -y install resolvconf openvpn-systemd-resolved easy-rsa
sudo reboot
systemctl status openvpn-server@server.service
(ref https://github.com/Nyr/openvpn-install/issues/974#issuecomment-1222739011)


sudo cat /root/iphone14.ovpn




// Automatically reboot *WITHOUT CONFIRMATION* if
//  the file /var/run/reboot-required is found after the upgrade
Unattended-Upgrade::Automatic-Reboot "true";

// Automatically reboot even if there are users currently logged in
// when Unattended-Upgrade::Automatic-Reboot is set to true
Unattended-Upgrade::Automatic-Reboot-WithUsers "true";

// If automatic reboot is enabled and needed, reboot at the specific
// time instead of immediately
//  Default: "now"
Unattended-Upgrade::Automatic-Reboot-Time "02:00";


https://stackoverflow.com/a/77649599/587407
firstroot123
python3 -m http.server 80
