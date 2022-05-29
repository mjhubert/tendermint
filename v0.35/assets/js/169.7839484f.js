(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{785:function(e,t,n){"use strict";n.r(t);var r=n(1),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"client-and-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#client-and-server"}},[e._v("#")]),e._v(" Client and Server")]),e._v(" "),n("p",[e._v("This section is for those looking to implement their own ABCI Server, perhaps in\na new programming language.")]),e._v(" "),n("p",[e._v("You are expected to have read "),n("RouterLink",{attrs:{to:"/spec/abci/abci.html"}},[e._v("ABCI Methods and Types")]),e._v(" and "),n("RouterLink",{attrs:{to:"/spec/abci/apps.html"}},[e._v("ABCI\nApplications")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"message-protocol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#message-protocol"}},[e._v("#")]),e._v(" Message Protocol")]),e._v(" "),n("p",[e._v("The message protocol consists of pairs of requests and responses defined in the\n"),n("a",{attrs:{href:"../../proto/tendermint/abci/types.proto"}},[e._v("protobuf file")]),e._v(".")]),e._v(" "),n("p",[e._v("Some messages have no fields, while others may include byte-arrays, strings, integers,\nor custom protobuf types.")]),e._v(" "),n("p",[e._v("For more details on protobuf, see the "),n("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("For each request, a server should respond with the corresponding\nresponse, where the order of requests is preserved in the order of\nresponses.")]),e._v(" "),n("h2",{attrs:{id:"server-implementations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#server-implementations"}},[e._v("#")]),e._v(" Server Implementations")]),e._v(" "),n("p",[e._v("To use ABCI in your programming language of choice, there must be a ABCI\nserver in that language. Tendermint supports three implementations of the ABCI, written in Go:")]),e._v(" "),n("ul",[n("li",[e._v("In-process ("),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/tendermint/rust-abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rust"),n("OutboundLink")],1),e._v(")")]),e._v(" "),n("li",[e._v("ABCI-socket")]),e._v(" "),n("li",[e._v("GRPC")])]),e._v(" "),n("p",[e._v("The latter two can be tested using the "),n("code",[e._v("abci-cli")]),e._v(" by setting the "),n("code",[e._v("--abci")]),e._v(" flag\nappropriately (ie. to "),n("code",[e._v("socket")]),e._v(" or "),n("code",[e._v("grpc")]),e._v(").")]),e._v(" "),n("p",[e._v("See examples, in various stages of maintenance, in\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/abci/server",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go"),n("OutboundLink")],1),e._v(",\n"),n("a",{attrs:{href:"https://github.com/tendermint/js-abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript"),n("OutboundLink")],1),e._v(",\n"),n("a",{attrs:{href:"https://github.com/mdyring/cpp-tmsp",target:"_blank",rel:"noopener noreferrer"}},[e._v("C++"),n("OutboundLink")],1),e._v(", and\n"),n("a",{attrs:{href:"https://github.com/jTendermint/jabci",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"in-process"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#in-process"}},[e._v("#")]),e._v(" In Process")]),e._v(" "),n("p",[e._v("The simplest implementation uses function calls within Golang.\nThis means ABCI applications written in Golang can be compiled with Tendermint Core and run as a single binary.")]),e._v(" "),n("h3",{attrs:{id:"grpc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" GRPC")]),e._v(" "),n("p",[e._v("If GRPC is available in your language, this is the easiest approach,\nthough it will have significant performance overhead.")]),e._v(" "),n("p",[e._v("To get started with GRPC, copy in the "),n("a",{attrs:{href:"../../proto/tendermint/abci/types.proto"}},[e._v("protobuf\nfile")]),e._v(" and compile it using the GRPC\nplugin for your language. For instance, for golang, the command is "),n("code",[e._v("protoc --go_out=plugins=grpc:. types.proto")]),e._v(".  See the "),n("a",{attrs:{href:"http://www.grpc.io/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("grpc documentation for more\ndetails"),n("OutboundLink")],1),e._v(".  "),n("code",[e._v("protoc")]),e._v(" will autogenerate all the\nnecessary code for ABCI client and server in your language, including whatever\ninterface your application must satisfy to be used by the ABCI server for\nhandling requests.")]),e._v(" "),n("p",[e._v("Note the length-prefixing used in the socket implementation (TSP) does not apply for GRPC.")]),e._v(" "),n("h3",{attrs:{id:"tsp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tsp"}},[e._v("#")]),e._v(" TSP")]),e._v(" "),n("p",[e._v("Tendermint Socket Protocol is an asynchronous, raw socket server which provides ordered message passing over unix or tcp.\nMessages are serialized using Protobuf3 and length-prefixed with a "),n("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/encoding?csw=1#signed-integers",target:"_blank",rel:"noopener noreferrer"}},[e._v("signed Varint"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("If GRPC is not available in your language, or you require higher\nperformance, or otherwise enjoy programming, you may implement your own\nABCI server using the Tendermint Socket Protocol. The first step is still to auto-generate the relevant data\ntypes and codec in your language using "),n("code",[e._v("protoc")]),e._v(". In addition to being proto3 encoded, messages coming over\nthe socket are length-prefixed to facilitate use as a streaming protocol. proto3 doesn't have an\nofficial length-prefix standard, so we use our own. The first byte in\nthe prefix represents the length of the Big Endian encoded length. The\nremaining bytes in the prefix are the Big Endian encoded length.")]),e._v(" "),n("p",[e._v("For example, if the proto3 encoded ABCI message is 0xDEADBEEF (4\nbytes), the length-prefixed message is 0x0104DEADBEEF. If the proto3\nencoded ABCI message is 65535 bytes long, the length-prefixed message\nwould be like 0x02FFFF....")]),e._v(" "),n("p",[e._v("The benefit of using this "),n("code",[e._v("varint")]),e._v(" encoding over the old version (where integers were encoded as "),n("code",[e._v("<len of len><big endian len>")]),e._v(" is that\nit is the standard way to encode integers in Protobuf. It is also generally shorter.")]),e._v(" "),n("p",[e._v("As noted above, this prefixing does not apply for GRPC.")]),e._v(" "),n("p",[e._v("An ABCI server must also be able to support multiple connections, as\nTendermint uses four connections.")]),e._v(" "),n("h3",{attrs:{id:"async-vs-sync"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#async-vs-sync"}},[e._v("#")]),e._v(" Async vs Sync")]),e._v(" "),n("p",[e._v("The main ABCI server (ie. non-GRPC) provides ordered asynchronous messages.\nThis is useful for DeliverTx and CheckTx, since it allows Tendermint to forward\ntransactions to the app before it's finished processing previous ones.")]),e._v(" "),n("p",[e._v("Thus, DeliverTx and CheckTx messages are sent asynchronously, while all other\nmessages are sent synchronously.")]),e._v(" "),n("h2",{attrs:{id:"client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[e._v("#")]),e._v(" Client")]),e._v(" "),n("p",[e._v("There are currently two use-cases for an ABCI client. One is a testing\ntool, as in the "),n("code",[e._v("abci-cli")]),e._v(", which allows ABCI requests to be sent via\ncommand line. The other is a consensus engine, such as Tendermint Core,\nwhich makes requests to the application every time a new transaction is\nreceived or a block is committed.")]),e._v(" "),n("p",[e._v("It is unlikely that you will need to implement a client. For details of\nour client, see\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/abci/client",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);