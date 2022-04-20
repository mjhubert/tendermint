# TOR Sentry Architecture


https://community.torproject.org/onion-services/advanced/client-auth/

https://github.com/mikeperry-tor/vanguards

https://riseup.net/en/security/network-security/tor/onionservices-best-practices

https://matt.traudt.xyz/posts/2019-01-19-creating-private-v3-onion-services/



`/tendermint/TORDOCKER/SENTRYGENERATOR$ docker build . -t sentrygen`

`docker run --rm sentrygen > sentry.env`

`/tendermint/TORDOCKER/TENDERMINT$ docker build . -t tormint`

`docker run --cap-add=NET_ADMIN -d --name alpha -e SENTRY_ROLE=ALPHA --env-file ./sentry.env tormint`

`docker run --cap-add=NET_ADMIN -d --name beta -e SENTRY_ROLE=BETA --env-file ./sentry.env tormint`

`docker run --cap-add=NET_ADMIN -d --name gamma -e SENTRY_ROLE=GAMMA --env-file ./sentry.env tormint`

`docker run --cap-add=NET_ADMIN -d --name delta -e SENTRY_ROLE=DELTA --env-file ./sentry.env tormint`

`docker run --cap-add=NET_ADMIN -d --name psi -e SENTRY_ROLE=PSI --env-file ./sentry.env tormint`

`docker run --cap-add=NET_ADMIN -d --name omega -e SENTRY_ROLE=OMEGA --env-file ./sentry.env tormint`

## Validators

Four validators node as onion service with client authentication: ALPHA, BETA, GAMMA and DELTA.

## Full Nodes

Two full nodes as onion services, both connected with validators via tor: PSI and OMEGA.


