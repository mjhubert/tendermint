#!/bin/bash
nohup sudo -u debian-tor tor &

while [ ! -f /var/lib/tor/tendermint/hostname ] ;
do
      sleep 1
done

onionaddress=`cat /var/lib/tor/tendermint/hostname`

~/tendermint/build/tendermint init validator

nodeid=`~/tendermint/build/tendermint show-node-id`

sed -i "s/external-address = \"\"/external-address = \"$onionaddress:26656\"/" /root/.tendermint/config/config.toml

echo "$nodeid@$onionaddress:26656" > nodeaddress
cat nodeaddress





