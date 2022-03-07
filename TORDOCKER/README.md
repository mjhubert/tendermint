# TOR Sentry Architecture


https://community.torproject.org/onion-services/advanced/client-auth/

https://github.com/mikeperry-tor/vanguards

https://riseup.net/en/security/network-security/tor/onionservices-best-practices

https://matt.traudt.xyz/posts/2019-01-19-creating-private-v3-onion-services/



`/tendermint/TORDOCKER/SENTRYGENERATOR$ docker build . -t sentrygen`

`docker run --rm sentrygen > sentry.env`

`/tendermint/TORDOCKER/TENDERMINT$ docker build . -t tormint`

`docker run -d --name alpha -e SENTRY_ROLE=ALPHA --env-file ./sentry.env tormint`

`docker run -d --name beta -e SENTRY_ROLE=BETA --env-file ./sentry.env tormint`

`docker run -d --name gamma -e SENTRY_ROLE=GAMMA --env-file ./sentry.env tormint`

`docker run -d --name psi -e SENTRY_ROLE=PSI --env-file ./sentry.env tormint`

`docker run -d --name omega -e SENTRY_ROLE=OMEGA --env-file ./sentry.env tormint`

## Validators

Three validators node as onion service with client authentication.

## Full Nodes

A full node as onion service and a full node in clear web, both connected with validators in tor.


