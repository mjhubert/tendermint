#!/bin/bash
apt update && apt -y upgrade && DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt install -y git make curl tor sudo openssl basez gcc libsodium-dev autoconf

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
