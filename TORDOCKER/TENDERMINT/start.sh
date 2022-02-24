#!/bin/bash
cd ~

if [ ! -f ~/sentry/onion_hostname ]
then
    
  if [ -n "$SENTRY_ROLE" ] 
  then
      
      vn="ONION_HOST_$SENTRY_ROLE"
      declare "ONION_HOST=${!vn}"
      vn="ONION_ZIP_$SENTRY_ROLE"
      declare "ONION_ZIP=${!vn}"
      vn="AUTH_$SENTRY_ROLE"
      declare "ONION_AUTH=${!vn}"
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
      fi
      done


      if [ $SENTRY_ROLE == "PSI" ] | [ $SENTRY_ROLE == "OMEGA" ]; then
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
      fi
      done

      mkdir ~/sentry
      cd ~/sentry
      
      echo "$ONION_HOST" > onion_hostname
      echo "$ONION_ZIP" | base32 -d - > onion_zip
      echo "$ONION_AUTH" > onion_auth
      echo "$TENDERMINT_MODE" > tendermint_mode
      echo "$TENDER_ZIP" | base32 -d - > tender_zip
      echo "$AUTH_PRIVATE_1" > auth_private_1
      echo "$AUTH_PRIVATE_2" > auth_private_2
      echo "$AUTH_PRIVATE_3" > auth_private_3
      echo "$AUTH_PRIVATE_4" > auth_private_4
      
      echo "$PEER_VALIDATOR_1" > peer_validator1
      echo "$PEER_VALIDATOR_2" > peer_validator2
      echo "$PEER_FULL_1" > peer_full_1

      if [ $TENDERMINT_MODE == "FULL" ] 
      then
       echo $PEER_VALIDATOR_3 > peer_validator_3   
      else
       echo $PEER_FULL2 > peer_full_1    
      fi

      #CONFIGURE TOR
      cp ~/sentry/auth_private_1 /var/lib/tor/tendermint/authorized_clients/private_1.auth
      cp ~/sentry/auth_private_2 /var/lib/tor/tendermint/authorized_clients/private_2.auth
      cp ~/sentry/auth_private_3 /var/lib/tor/tendermint/authorized_clients/private_3.auth
      cp ~/sentry/auth_private_4 /var/lib/tor/tendermint/authorized_clients/private_4.auth
      cp ~/sentry/onion_auth /var/lib/tor/onion_auth/tendermint.auth_private      

      #CONFIGURE TENDERMINT  
      sed -i "s/external-address = \"\"/external-address = \"$onionaddress:26656\"/" /root/.tendermint/config/config.toml
      echo "~/tendermint/build/tendermint start --proxy-app=kvstore --p2p.persistent-peers=" > ~/tendermint/build/start.sh
      chmod ugo+x ~/tendermint/build/start.sh

  fi

fi

sudo -u debian-tor tor &
sudo -u debian-tor ~/tendermint/build/start.sh

