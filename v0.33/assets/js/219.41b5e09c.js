(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{814:function(e,t,n){"use strict";n.r(t);var a=n(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"secure-p2p"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#secure-p2p"}},[e._v("#")]),e._v(" Secure P2P")]),e._v(" "),n("p",[e._v("The Tendermint p2p protocol uses an authenticated encryption scheme\nbased on the "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Station-to-Station_protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("Station-to-Station\nProtocol"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Each peer generates an ED25519 key-pair to use as a persistent\n(long-term) id.")]),e._v(" "),n("p",[e._v("When two peers establish a TCP connection, they first each generate an\nephemeral X25519 key-pair to use for this session, and send each other\ntheir respective ephemeral public keys. This happens in the clear.")]),e._v(" "),n("p",[e._v("They then each compute the shared secret, as done in a "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange",target:"_blank",rel:"noopener noreferrer"}},[e._v("diffie hellman\nkey exhange"),n("OutboundLink")],1),e._v(".\nThe shared secret is used as the symmetric key for the encryption algorithm.")]),e._v(" "),n("p",[e._v("We then run "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/HKDF",target:"_blank",rel:"noopener noreferrer"}},[e._v("hkdf-sha256"),n("OutboundLink")],1),e._v(" to expand the\nshared secret to generate a symmetric key for sending data,\na symmetric key for receiving data,\na challenge to authenticate the other party.\nOne peer will send data with their sending key, and the other peer\nwould decode it using their own receiving key.\nWe must ensure that both parties don't try to use the same key as the sending\nkey, and the same key as the receiving key, as in that case nothing can be\ndecoded.\nTo ensure this, the peer with the canonically smaller ephemeral pubkey\nuses the first key as their receiving key, and the second key as their sending key.\nIf the peer has the canonically larger ephemeral pubkey, they do the reverse.")]),e._v(" "),n("p",[e._v("Each peer also keeps a received message counter and sent message counter, both\nare initialized to zero.\nAll future communication is encrypted using chacha20poly1305.\nThe key used to send the message is the sending key, and the key used to decode\nthe message is the receiving key.\nThe nonce for chacha20poly1305 is the relevant message counter.\nIt is critical that the message counter is incremented every time you send a\nmessage and every time you receive a message that decodes correctly.")]),e._v(" "),n("p",[e._v("Each peer now signs the challenge with their persistent private key, and\nsends the other peer an AuthSigMsg, containing their persistent public\nkey and the signature. On receiving an AuthSigMsg, the peer verifies the\nsignature.")]),e._v(" "),n("p",[e._v("The peers are now authenticated.")]),e._v(" "),n("p",[e._v("The communication maintains Perfect Forward Secrecy, as\nthe persistent key pair was not used for generating secrets - only for\nauthenticating.")]),e._v(" "),n("h2",{attrs:{id:"caveat"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#caveat"}},[e._v("#")]),e._v(" Caveat")]),e._v(" "),n("p",[e._v("This system is still vulnerable to a Man-In-The-Middle attack if the\npersistent public key of the remote node is not known in advance. The\nonly way to mitigate this is with a public key authentication system,\nsuch as the Web-of-Trust or Certificate Authorities. In our case, we can\nuse the blockchain itself as a certificate authority to ensure that we\nare connected to at least one validator.")]),e._v(" "),n("h2",{attrs:{id:"config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[e._v("#")]),e._v(" Config")]),e._v(" "),n("p",[e._v("Authenticated encryption is enabled by default.")]),e._v(" "),n("h2",{attrs:{id:"specification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),n("p",[e._v("The full p2p specification can be found "),n("a",{attrs:{href:"https://docs.tendermint.com/master/spec/p2p/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"additional-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#additional-reading"}},[e._v("#")]),e._v(" Additional Reading")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/64bae01d007b5bee0d0827ab53259ffd5910b4e6/p2p/conn/secret_connection.go#L47",target:"_blank",rel:"noopener noreferrer"}},[e._v("Implementation"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.216.6107&rep=rep1&type=pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Original STS paper by Whitfield Diffie, Paul C. van Oorschot and\nMichael J.\nWiener"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://dominictarr.github.io/secret-handshake-paper/shs.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Further work on secret\nhandshakes"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);