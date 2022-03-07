#!/bin/bash

echo "******************"
echo "** TORMINT NODE **"
echo "******************"


cd ~

if [ ! -f ~/sentry/onion_hostname ]
then

  echo "FIRST RUN, START CONFIGURATION"
  
  if [ -n "$SENTRY_ROLE" ] 
  then
      
      echo "SENTRY_ROLE=$SENTRY_ROLE"

      vn="ONION_HOST_$SENTRY_ROLE"
      declare "ONION_HOST=${!vn}"
      vn="ONION_ZIP_$SENTRY_ROLE"
      declare "ONION_ZIP=${!vn}"

      vn="TENDER_ZIP_$SENTRY_ROLE"
      declare "TENDER_ZIP=${!vn}"


      role1="ALPHA"
      role2="BETA"
      role3="GAMMA"
      role4="PSI"
      role5="OMEGA"

      p=0
      for i in {1..5}; do
      rvarn="role$i"
      declare "currol=${!rvarn}"
      if [ $currol != "$SENTRY_ROLE" ]
      then
            ((p=p+1))
            vn="AUTH_PRIVATE_${SENTRY_ROLE}_${currol}"
            declare "AUTH_PRIVATE_$p=${!vn}"
            vn="AUTH_${currol}"
            declare "AUTH_$p=${!vn}"            
      fi
      done


      if [ $SENTRY_ROLE == "PSI" ] || [ $SENTRY_ROLE == "OMEGA" ]; then
       TENDERMINT_MODE="FULL"
      else
       TENDERMINT_MODE="VALIDATOR"
      fi

      role1="ALPHA"
      role2="BETA"
      role3="GAMMA"

      p=0
      for i in {1..3}; do
      rvarn="role$i"
      declare "currol=${!rvarn}"
      if [ $currol != "$SENTRY_ROLE" ]
      then
            ((p=p+1))
            vn="PEER_$currol"
            declare "PEER_VALIDATOR_$p=${!vn}"
            vn="TENDERMINT_ID_$currol"
            declare "PEER_VALIDATOR_ID_$p=${!vn}"

      else
            vn="PEER_$currol"
            declare "TENDERMINT_ADDRESS=${!vn}"
            vn="TENDERMINT_ID_$currol"
            declare "TENDERMINT_ID=${!vn}"
      fi
      done

      role1="PSI"
      role2="OMEGA"

      p=0
      for i in {1..2}; do
      rvarn="role$i"
      declare "currol=${!rvarn}"
      if [ $currol != "$SENTRY_ROLE" ]
      then
            ((p=p+1))
            vn="PEER_$currol"
            declare "PEER_FULL_$p=${!vn}"
      else
            vn="PEER_$currol"
            declare "TENDERMINT_ADDRESS=${!vn}"
            vn="TENDERMINT_ID_$currol"
            declare "TENDERMINT_ID=${!vn}"
      fi
      done

      mkdir ~/sentry
      cd ~/sentry

      echo "Write config files to ~/sentry"

      echo "$TENDERMINT_MODE" > tendermint_mode
      echo "$SENTRY_ROLE" > sentry_role
      echo "$TENDERMINT_ADDRESS" > tendermint_address
      echo "$TENDERMINT_ID" > tendermint_id
      echo "$ONION_HOST" > onion_hostname
      echo "$ONION_ZIP" | base32 -d - > onion_zip
      echo "$TENDERMINT_MODE" > tendermint_mode
      echo "$TENDER_ZIP" | base32 -d - > tender_zip
      echo "$AUTH_PRIVATE_1" > auth_private_1
      echo "$AUTH_PRIVATE_2" > auth_private_2
      echo "$AUTH_PRIVATE_3" > auth_private_3      
      echo "$AUTH_1" > auth_1
      echo "$AUTH_2" > auth_2
      echo "$AUTH_3" > auth_3
      echo "$AUTH_4" > auth_4

      echo "$PEER_VALIDATOR_1" > peer_validator_1
      echo "$PEER_VALIDATOR_2" > peer_validator_2
      echo "$PEER_VALIDATOR_ID_1" > peer_validator_id_1
      echo "$PEER_VALIDATOR_ID_2" > peer_validator_id_2
      echo "$PEER_FULL_1" > peer_full_1

      if [ $TENDERMINT_MODE == "FULL" ] 
      then
       echo $PEER_VALIDATOR_3 > peer_validator_3   
       echo $PEER_VALIDATOR_ID_3 > peer_validator_id_3   
      else
       echo $PEER_FULL_2 > peer_full_2 
      fi

      #CONFIGURE TOR
      echo "** CONFIGURE TOR"

      mkdir /var/lib/tor/tendermint
      unzip -j onion_zip -d /var/lib/tor/tendermint      
      sudo chown -R debian-tor: /var/lib/tor/tendermint
      sudo chmod -R u+rwX,og-rwx /var/lib/tor/tendermint
      
      mkdir /var/lib/tor/onion_auth
      sudo chown -R debian-tor: /var/lib/tor/onion_auth
      sudo chmod -R u+rwX,og-rwx /var/lib/tor/onion_auth
      cp ~/sentry/auth_private_1 /var/lib/tor/onion_auth/peer_1.auth_private
      cp ~/sentry/auth_private_2 /var/lib/tor/onion_auth/peer_2.auth_private

      if [ $TENDERMINT_MODE == "FULL" ]
      then
            cp ~/sentry/auth_private_3 /var/lib/tor/onion_auth/peer_3.auth_private
      fi

      if [ $TENDERMINT_MODE == "VALIDATOR" ] 
      then      
            mkdir /var/lib/tor/tendermint/authorized_clients/
            sudo chown -R debian-tor: /var/lib/tor/tendermint/authorized_clients/
            sudo chmod -R u+rwX,og-rwx /var/lib/tor/tendermint/authorized_clients/
            cp ~/sentry/auth_1 /var/lib/tor/tendermint/authorized_clients/private_1.auth
            cp ~/sentry/auth_2 /var/lib/tor/tendermint/authorized_clients/private_2.auth
            cp ~/sentry/auth_3 /var/lib/tor/tendermint/authorized_clients/private_3.auth
            cp ~/sentry/auth_4 /var/lib/tor/tendermint/authorized_clients/private_4.auth
      fi

      echo 'HiddenServiceDir /var/lib/tor/tendermint/' >> /etc/tor/torrc
      echo 'HiddenServicePort 26656 127.0.0.1:26656' >> /etc/tor/torrc
      echo 'HiddenServicePort 26657 127.0.0.1:26657' >> /etc/tor/torrc
      echo 'ClientOnionAuthDir /var/lib/tor/onion_auth' >> /etc/tor/torrc


      #CONFIGURE TENDERMINT

      echo "** CONFIGURE TENDERMINT"

      cd /
      unzip ~/sentry/tender_zip


      if [ $TENDERMINT_MODE == "FULL" ] 
      then
            sed -i "s/private-peer-ids = \"\"/private-peer-ids = \"${PEER_VALIDATOR_ID_1},${PEER_VALIDATOR_ID_2},${PEER_VALIDATOR_ID_3}\"/" /root/.tendermint/config/config.toml
            sed -i "s/persistent-peers = \"\"/persistent-peers = \"${PEER_VALIDATOR_1},${PEER_VALIDATOR_2},${PEER_VALIDATOR_3},${PEER_FULL_1}\"/" /root/.tendermint/config/config.toml
      else
            #sed -i "s/pex = true/pex = false/" /root/.tendermint/config/config.toml #error
            sed -i "s/private-peer-ids = \"\"/private-peer-ids = \"${PEER_VALIDATOR_ID_1},${PEER_VALIDATOR_ID_2}\"/" /root/.tendermint/config/config.toml
            sed -i "s/persistent-peers = \"\"/persistent-peers = \"${PEER_VALIDATOR_1},${PEER_VALIDATOR_2},${PEER_FULL_1},${PEER_FULL_2}\"/" /root/.tendermint/config/config.toml
      fi

      sed -i "s/external-address = \"\"/external-address = \"$ONION_HOST:26656\"/" /root/.tendermint/config/config.toml

      echo "Create Tendermint start script: ~/tendermint/build/start.sh"

      echo "~/tendermint/build/tendermint start --proxy-app=kvstore" > ~/tendermint/build/start.sh
      chmod ugo+rx ~/tendermint/build/start.sh

  else
    echo "ERROR MISSING ENVIRONMENT VARIABLE: SENTRY_ROLE"
    exit
  fi

fi

echo "###############################################"
echo "ROLE    : `cat ~/sentry/sentry_role`"
echo "MODE    : `cat ~/sentry/tendermint_mode`"
echo "ID      : `cat ~/sentry/tendermint_id`"
echo "ADDRESS : `cat ~/sentry/tendermint_address`"
echo "###############################################"

sudo -u debian-tor tor &

~/tendermint/build/start.sh

sleep infinity
