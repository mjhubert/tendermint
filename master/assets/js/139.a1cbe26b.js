(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{709:function(e,t,a){"use strict";a.r(t);var r=a(1),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-079-ed25519-verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-079-ed25519-verification"}},[e._v("#")]),e._v(" ADR 079: Ed25519 Verification")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2020-08-21: Initial RFC")]),e._v(" "),a("li",[e._v("2021-02-11: Migrate RFC to tendermint repo (Originally "),a("a",{attrs:{href:"https://github.com/tendermint/spec/pull/144",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 003"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("h2",{attrs:{id:"author-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#author-s"}},[e._v("#")]),e._v(" Author(s)")]),e._v(" "),a("ul",[a("li",[e._v("Marko (@marbar3778)")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Ed25519 keys are the only supported key types for Tendermint validators currently. Tendermint-Go wraps the ed25519 key implementation from the go standard library. As more clients are implemented to communicate with the canonical Tendermint implementation (Tendermint-Go) different implementations of ed25519 will be used. Due to "),a("a",{attrs:{href:"https://www.rfc-editor.org/rfc/rfc8032.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 8032"),a("OutboundLink")],1),e._v(" not guaranteeing implementation compatibility, Tendermint clients must to come to an agreement of how to guarantee implementation compatibility. "),a("a",{attrs:{href:"https://z.cash/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zcash"),a("OutboundLink")],1),e._v(" has multiple implementations of their client and have identified this as a problem as well. The team at Zcash has made a proposal to address this issue, "),a("a",{attrs:{href:"https://zips.z.cash/zip-0215",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zcash improvement proposal 215"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[e._v("#")]),e._v(" Proposal")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Tendermint-Go would adopt "),a("a",{attrs:{href:"https://github.com/hdevalence/ed25519consensus",target:"_blank",rel:"noopener noreferrer"}},[e._v("hdevalence/ed25519consensus"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("This library is implements "),a("code",[e._v("ed25519.Verify()")]),e._v(" in accordance to zip-215. Tendermint-go will continue to use "),a("code",[e._v("crypto/ed25519")]),e._v(" for signing and key generation.")])])]),e._v(" "),a("li",[a("p",[e._v("Tendermint-rs would adopt "),a("a",{attrs:{href:"https://github.com/ZcashFoundation/ed25519-zebra",target:"_blank",rel:"noopener noreferrer"}},[e._v("ed25519-zebra"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("related "),a("a",{attrs:{href:"https://github.com/informalsystems/tendermint-rs/issues/355",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),a("OutboundLink")],1)])])])]),e._v(" "),a("p",[e._v("Signature verification is one of the major bottlenecks of Tendermint-go, batch verification can not be used unless it has the same consensus rules, ZIP 215 makes verification safe in consensus critical areas.")]),e._v(" "),a("p",[e._v("This change constitutes a breaking changes, therefore must be done in a major release. No changes to validator keys or operations will be needed for this change to be enabled.")]),e._v(" "),a("p",[e._v("This change has no impact on signature aggregation. To enable this signature aggregation Tendermint will have to use different signature schema (Schnorr, BLS, ...). Secondly, this change will enable safe batch verification for the Tendermint-Go client. Batch verification for the rust client is already supported in the library being used.")]),e._v(" "),a("p",[e._v("As part of the acceptance of this proposal it would be best to contract or discuss with a third party the process of conducting a security review of the go library.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Proposed")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Consistent signature verification across implementations")]),e._v(" "),a("li",[e._v("Enable safe batch verification")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("h4",{attrs:{id:"tendermint-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-go"}},[e._v("#")]),e._v(" Tendermint-Go")]),e._v(" "),a("ul",[a("li",[e._v("Third_party dependency\n"),a("ul",[a("li",[e._v("library has not gone through a security review.")]),e._v(" "),a("li",[e._v("unclear maintenance schedule")])])]),e._v(" "),a("li",[e._v("Fragmentation of the ed25519 key for the go implementation, verification is done using a third party library while the rest\nuses the go standard library")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://hdevalence.ca/blog/2020-10-04-its-25519am",target:"_blank",rel:"noopener noreferrer"}},[e._v("It’s 255:19AM. Do you know what your validation criteria are?"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);