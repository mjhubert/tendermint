#!/bin/bash
apt update && DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt install -y git make curl tor sudo
mkdir /var/lib/tor/tendermint
sudo chown -R debian-tor: /var/lib/tor/tendermint
sudo chmod -R u+rwX,og-rwx /var/lib/tor/tendermint
echo 'HiddenServiceDir /var/lib/tor/tendermint/' >> /etc/tor/torrc
echo 'HiddenServicePort 26656 127.0.0.1:26656' >> /etc/tor/torrc

curl -O https://storage.googleapis.com/golang/go1.17.7.linux-amd64.tar.gz
mv go1.17.7.linux-amd64.tar.gz ~
cd ~
tar -xvf go1.17.7.linux-amd64.tar.gz
mv go /usr/local

mkdir ~/work
echo 'export GOPATH=$HOME/work' >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile

git clone https://github.com/mjhubert/tendermint.git
cd tendermint/
git checkout tor
git pull
make install
make build
cd build


