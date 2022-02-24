#!/bin/bash

#Generate KEYs for Onion client authentication
openssl genpkey -algorithm x25519 -out /tmp/validator-alpha.prv.pem
openssl genpkey -algorithm x25519 -out /tmp/validator-beta.prv.pem
openssl genpkey -algorithm x25519 -out /tmp/validator-gamma.prv.pem
openssl genpkey -algorithm x25519 -out /tmp/fullnode-psi.prv.pem
openssl genpkey -algorithm x25519 -out /tmp/fullnode-omega.prv.pem

cat /tmp/validator-alpha.prv.pem | grep -v " PRIVATE KEY" | base64pem -d | tail --bytes=32 | base32 | sed 's/=//g' > /tmp/validator-alpha.prv.key
cat /tmp/validator-beta.prv.pem | grep -v " PRIVATE KEY" | base64pem -d | tail --bytes=32 | base32 | sed 's/=//g' > /tmp/validator-beta.prv.key
cat /tmp/validator-gamma.prv.pem | grep -v " PRIVATE KEY" | base64pem -d | tail --bytes=32 | base32 | sed 's/=//g' > /tmp/validator-gamma.prv.key
cat /tmp/fullnode-psi.prv.pem | grep -v " PRIVATE KEY" | base64pem -d | tail --bytes=32 | base32 | sed 's/=//g' > /tmp/fullnode-psi.prv.key
cat /tmp/fullnode-omega.prv.pem | grep -v " PRIVATE KEY" | base64pem -d | tail --bytes=32 | base32 | sed 's/=//g' > /tmp/fullnode-omega.prv.key

openssl pkey -in /tmp/validator-alpha.prv.pem -pubout | grep -v " PUBLIC KEY" | base64pem -d | tail --bytes=32 | base32 | sed 's/=//g' > /tmp/validator-alpha.pub.key
openssl pkey -in /tmp/validator-beta.prv.pem -pubout | grep -v " PUBLIC KEY" | base64pem -d | tail --bytes=32 | base32 | sed 's/=//g' > /tmp/validator-beta.pub.key
openssl pkey -in /tmp/validator-gamma.prv.pem -pubout | grep -v " PUBLIC KEY" | base64pem -d | tail --bytes=32 | base32 | sed 's/=//g' > /tmp/validator-gamma.pub.key
openssl pkey -in /tmp/fullnode-psi.prv.pem -pubout | grep -v " PUBLIC KEY" | base64pem -d | tail --bytes=32 | base32 | sed 's/=//g' > /tmp/fullnode-psi.pub.key
openssl pkey -in /tmp/fullnode-omega.prv.pem -pubout | grep -v " PUBLIC KEY" | base64pem -d | tail --bytes=32 | base32 | sed 's/=//g' > /tmp/fullnode-omega.pub.key

AUTH_ALPHA="descriptor:x25519:`cat /tmp/validator-alpha.pub.key`"
AUTH_BETA="descriptor:x25519:`cat /tmp/validator-beta.pub.key`"
AUTH_GAMMA="descriptor:x25519:`cat /tmp/validator-gamma.pub.key`"
AUTH_PSI="descriptor:x25519:`cat /tmp/fullnode-psi.pub.key`"
AUTH_OMEGA="descriptor:x25519:`cat /tmp/fullnode-omega.pub.key`"

#Generate ONION addresses

rm -rf /onions/alpha/*
rm -rf /onions/beta/*
rm -rf /onions/gamma/*
rm -rf /onions/psi/*
rm -rf /onions/omega/*

/mkp224o/mkp224o a -n 1 -d /onions/alpha > /dev/null 2>&1
/mkp224o/mkp224o b -n 1 -d /onions/beta > /dev/null 2>&1
/mkp224o/mkp224o g -n 1 -d /onions/gamma > /dev/null 2>&1
/mkp224o/mkp224o p -n 1 -d /onions/psi > /dev/null 2>&1
/mkp224o/mkp224o o -n 1 -d /onions/omega > /dev/null 2>&1

cd /onions/alpha
files=(*)
ONION_ALPHA="${files::-6}"

cd /onions/beta
files=(*)
ONION_BETA="${files::-6}"

cd /onions/gamma
files=(*)
ONION_GAMMA="${files::-6}"

cd /onions/psi
files=(*)
ONION_PSI="${files::-6}"

cd /onions/omega
files=(*)
ONION_OMEGA="${files::-6}"

echo "#TOR SERVICES DETAILS"

echo "ONION_HOST_ALPHA=$ONION_ALPHA.onion"
echo "ONION_HOST_BETA=$ONION_BETA.onion"
echo "ONION_HOST_GAMMA=$ONION_GAMMA.onion"
echo "ONION_HOST_PSI=$ONION_PSI.onion"
echo "ONION_HOST_OMEGA=$ONION_OMEGA.onion"

echo "ONION_ZIP_ALPHA=`zip -r - /onions/alpha 2> /dev/null | base32 -w 0`"
echo "ONION_ZIP_BETA=`zip -r - /onions/beta 2> /dev/null | base32 -w 0`"
echo "ONION_ZIP_GAMMA=`zip -r - /onions/gamma 2> /dev/null | base32 -w 0`"
echo "ONION_ZIP_PSI=`zip -r - /onions/psi 2> /dev/null | base32 -w 0`"
echo "ONION_ZIP_OMEGA=`zip -r - /onions/omega 2> /dev/null | base32 -w 0`"

echo "#TOR CLIENT AUTHENTICATION"

echo "AUTH_ALPHA=$AUTH_ALPHA"
echo "AUTH_BETA=$AUTH_BETA"
echo "AUTH_GAMMA=$AUTH_GAMMA"
echo "AUTH_PSI=$AUTH_PSI"
echo "AUTH_OMEGA=$AUTH_OMEGA"

echo "AUTH_PRIVATE_ALPHA_BETA=$ONION_BETA::descriptor:x25519:`cat /tmp/validator-alpha.prv.key`"
echo "AUTH_PRIVATE_ALPHA_GAMMA=$ONION_GAMMA::descriptor:x25519:`cat /tmp/validator-alpha.prv.key`"
echo "AUTH_PRIVATE_ALPHA_PSI=$ONION_PSI::descriptor:x25519:`cat /tmp/validator-alpha.prv.key`"
echo "AUTH_PRIVATE_ALPHA_OMEGA=$ONION_OMEGA::descriptor:x25519:`cat /tmp/validator-alpha.prv.key`"

echo "AUTH_PRIVATE_BETA_ALPHA=$ONION_ALPHA::descriptor:x25519:`cat /tmp/validator-beta.prv.key`"
echo "AUTH_PRIVATE_BETA_GAMMA=$ONION_GAMMA::descriptor:x25519:`cat /tmp/validator-beta.prv.key`"
echo "AUTH_PRIVATE_BETA_PSI=$ONION_PSI::descriptor:x25519:`cat /tmp/validator-beta.prv.key`"
echo "AUTH_PRIVATE_BETA_OMEGA=$ONION_OMEGA::descriptor:x25519:`cat /tmp/validator-beta.prv.key`"

echo "AUTH_PRIVATE_GAMMA_ALPHA=$ONION_ALPHA::descriptor:x25519:`cat /tmp/validator-gamma.prv.key`"
echo "AUTH_PRIVATE_GAMMA_BETA=$ONION_BETA::descriptor:x25519:`cat /tmp/validator-gamma.prv.key`"
echo "AUTH_PRIVATE_GAMMA_PSI=$ONION_PSI::descriptor:x25519:`cat /tmp/validator-gamma.prv.key`"
echo "AUTH_PRIVATE_GAMMA_OMEGA=$ONION_OMEGA::descriptor:x25519:`cat /tmp/validator-gamma.prv.key`"

echo "AUTH_PRIVATE_PSI_ALPHA=$ONION_ALPHA::descriptor:x25519:`cat /tmp/fullnode-psi.prv.key`"
echo "AUTH_PRIVATE_PSI_BETA=$ONION_BETA::descriptor:x25519:`cat /tmp/fullnode-psi.prv.key`"
echo "AUTH_PRIVATE_PSI_OMEGA=$ONION_OMEGA::descriptor:x25519:`cat /tmp/fullnode-psi.prv.key`"
echo "AUTH_PRIVATE_PSI_GAMMA=$ONION_GAMMA::descriptor:x25519:`cat /tmp/fullnode-psi.prv.key`"

echo "AUTH_PRIVATE_OMEGA_ALPHA=$ONION_ALPHA::descriptor:x25519:`cat /tmp/fullnode-omega.prv.key`"
echo "AUTH_PRIVATE_OMEGA_BETA=$ONION_BETA::descriptor:x25519:`cat /tmp/fullnode-omega.prv.key`"
echo "AUTH_PRIVATE_OMEGA_PSI=$ONION_PSI::descriptor:x25519:`cat /tmp/fullnode-omega.prv.key`"
echo "AUTH_PRIVATE_OMEGA_GAMMA=$ONION_GAMMA::descriptor:x25519:`cat /tmp/fullnode-omega.prv.key`"

#Generate TENDERMINT IDs

rm -rf ~/.tendermint
cd ~/tendermint/build
./tendermint init validator > /dev/null 2>&1
echo "TENDER_ZIP_ALPHA=`zip -r - ~/.tendermint 2> /dev/null | base32 -w 0`"
TENDERID_ALPHA="`./tendermint show-node-id`"

rm -rf ~/.tendermint
cd ~/tendermint/build
./tendermint init validator > /dev/null 2>&1
echo "TENDER_ZIP_BETA=`zip -r - ~/.tendermint 2> /dev/null | base32 -w 0`"
TENDERID_BETA="`./tendermint show-node-id`"

rm -rf ~/.tendermint
cd ~/tendermint/build
./tendermint init validator > /dev/null 2>&1
echo "TENDER_ZIP_GAMMA=`zip -r - ~/.tendermint 2> /dev/null | base32 -w 0`"
TENDERID_GAMMA="`./tendermint show-node-id`"

rm -rf ~/.tendermint
cd ~/tendermint/build
./tendermint init full > /dev/null 2>&1
echo "TENDER_ZIP_PSI=`zip -r - ~/.tendermint 2> /dev/null | base32 -w 0`"
TENDERID_PSI="`./tendermint show-node-id`"

rm -rf ~/.tendermint
cd ~/tendermint/build
./tendermint init full > /dev/null 2>&1
echo "TENDER_ZIP_OMEGA=`zip -r - ~/.tendermint 2> /dev/null | base32 -w 0`"
TENDERID_OMEGA="`./tendermint show-node-id`"

rm -rf ~/.tendermint

echo "#TENDERMINT PEERS"
echo "PEER_ALPHA=$TENDERID_ALPHA@$ONION_ALPHA.onion:26656"
echo "PEER_BETA=$TENDERID_BETA@$ONION_BETA.onion:26656"
echo "PEER_GAMMA=$TENDERID_GAMMA@$ONION_GAMMA.onion:26656"
echo "PEER_PSI=$TENDERID_PSI@$ONION_PSI.onion:26656"
echo "PEER_OMEGA=$TENDERID_OMEGA@$ONION_OMEGA.onion:26656"
