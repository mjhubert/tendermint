#!/bin/bash
apt update && apt -y upgrade && DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt install -y git make curl tor sudo openssl basez gcc libsodium-dev autoconf zip

git clone https://github.com/cathugger/mkp224o.git
cd mkp224o
./autogen.sh
./configure
make

cd ..
mkdir /onions
mkdir /onions/alpha
mkdir /onions/beta
mkdir /onions/gamma
mkdir /onions/psi
mkdir /onions/omega


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
