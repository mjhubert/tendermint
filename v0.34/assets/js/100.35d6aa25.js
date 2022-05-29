(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{695:function(g,C,I){"use strict";I.r(C);var A=I(1),d=Object(A.a)({},(function(){var g=this,C=g.$createElement,I=g._self._c||C;return I("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[I("h1",{attrs:{id:"adr-030-consensus-refactor"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#adr-030-consensus-refactor"}},[g._v("#")]),g._v(" ADR 030: Consensus Refactor")]),g._v(" "),I("h2",{attrs:{id:"context"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[g._v("#")]),g._v(" Context")]),g._v(" "),I("p",[g._v("One of the biggest challenges this project faces is to proof that the\nimplementations of the specifications are correct, much like we strive to\nformaly verify our alogrithms and protocols we should work towards high\nconfidence about the correctness of our program code. One of those is the core\nof Tendermint - Consensus - which currently resides in the "),I("code",[g._v("consensus")]),g._v(" package.\nOver time there has been high friction making changes to the package due to the\nalgorithm being scattered in a side-effectful container (the current\n"),I("code",[g._v("ConsensusState")]),g._v("). In order to test the algorithm a large object-graph needs to\nbe set up and even than the non-deterministic parts of the container makes will\nprevent high certainty. Where ideally we have a 1-to-1 representation of the\n"),I("a",{attrs:{href:"https://github.com/tendermint/spec",target:"_blank",rel:"noopener noreferrer"}},[g._v("spec"),I("OutboundLink")],1),g._v(", ready and easy to test for domain\nexperts.")]),g._v(" "),I("p",[g._v("Addresses:")]),g._v(" "),I("ul",[I("li",[I("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1495",target:"_blank",rel:"noopener noreferrer"}},[g._v("#1495"),I("OutboundLink")],1)]),g._v(" "),I("li",[I("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1692",target:"_blank",rel:"noopener noreferrer"}},[g._v("#1692"),I("OutboundLink")],1)])]),g._v(" "),I("h2",{attrs:{id:"decision"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[g._v("#")]),g._v(" Decision")]),g._v(" "),I("p",[g._v("To remedy these issues we plan a gradual, non-invasive refactoring of the\n"),I("code",[g._v("consensus")]),g._v(" package. Starting of by isolating the consensus alogrithm into\na pure function and a finite state machine to address the most pressuring issue\nof lack of confidence. Doing so while leaving the rest of the package in tact\nand have follow-up optional changes to improve the sepration of concerns.")]),g._v(" "),I("h3",{attrs:{id:"implementation-changes"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#implementation-changes"}},[g._v("#")]),g._v(" Implementation changes")]),g._v(" "),I("p",[g._v("The core of Consensus can be modelled as a function with clear defined inputs:")]),g._v(" "),I("ul",[I("li",[I("code",[g._v("State")]),g._v(" - data container for current round, height, etc.")]),g._v(" "),I("li",[I("code",[g._v("Event")]),g._v("- significant events in the network")])]),g._v(" "),I("p",[g._v("producing clear outputs;")]),g._v(" "),I("ul",[I("li",[I("code",[g._v("State")]),g._v(" - updated input")]),g._v(" "),I("li",[I("code",[g._v("Message")]),g._v(" - signal what actions to perform")])]),g._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBFdmVudCBpbnQKCmNvbnN0ICgKCUV2ZW50VW5rbm93biBFdmVudCA9IGlvdGEKCUV2ZW50UHJvcG9zYWwKCU1ham9yaXR5MjNQcmV2b3Rlc0Jsb2NrCglNYWpvcml0eTIzUHJlY29tbWl0QmxvY2sKCU1ham9yaXR5MjNQcmV2b3Rlc0FueQoJTWFqb3JpdHkyM1ByZWNvbW1pdEFueQoJVGltZW91dE5ld1JvdW5kCglUaW1lb3V0UHJvcG9zZQoJVGltZW91dFByZXZvdGVzCglUaW1lb3V0UHJlY29tbWl0CikKCnR5cGUgTWVzc2FnZSBpbnQKCmNvbnN0ICgKCU1lZXNhZ2VVbmtub3duIE1lc3NhZ2UgPSBpb3RhCglNZXNzYWdlUHJvcG9zYWwKCU1lc3NhZ2VWb3RlcwoJTWVzc2FnZURlY2lzaW9uCikKCnR5cGUgU3RhdGUgc3RydWN0IHsKCWhlaWdodCAgICAgIHVpbnQ2NAoJcm91bmQgICAgICAgdWludDY0CglzdGVwICAgICAgICB1aW50NjQKCWxvY2tlZFZhbHVlIGludGVyZmFjZXt9IC8vIFRPRE86IERlZmluZSBwcm9wZXIgdHlwZS4KCWxvY2tlZFJvdW5kIGludGVyZmFjZXt9IC8vIFRPRE86IERlZmluZSBwcm9wZXIgdHlwZS4KCXZhbGlkVmFsdWUgIGludGVyZmFjZXt9IC8vIFRPRE86IERlZmluZSBwcm9wZXIgdHlwZS4KCXZhbGlkUm91bmQgIGludGVyZmFjZXt9IC8vIFRPRE86IERlZmluZSBwcm9wZXIgdHlwZS4KCS8vIEZyb20gdGhlIG9yaWdpbmFsIG5vdGVzOiB2YWxpZCh2KQoJdmFsaWQgICAgICAgaW50ZXJmYWNle30gLy8gVE9ETzogRGVmaW5lIHByb3BlciB0eXBlLgoJLy8gRnJvbSB0aGUgb3JpZ2luYWwgbm90ZXM6IHByb3Bvc2VyKGgsIHIpCglwcm9wb3NlciAgICBpbnRlcmZhY2V7fSAvLyBUT0RPOiBEZWZpbmUgcHJvcGVyIHR5cGUuCn0KCmZ1bmMgQ29uc2Vuc3VzKEV2ZW50LCBTdGF0ZSkgKFN0YXRlLCBNZXNzYWdlKSB7CgkvLyBDb25zb2xpZGF0ZSBpbXBsZW1lbnRhdGlvbi4KfQo="}}),g._v(" "),I("p",[g._v("Tracking of relevant information to feed "),I("code",[g._v("Event")]),g._v(" into the function and act on\nthe output is left to the "),I("code",[g._v("ConsensusExecutor")]),g._v(" (formerly "),I("code",[g._v("ConsensusState")]),g._v(").")]),g._v(" "),I("p",[g._v("Benefits for testing surfacing nicely as testing for a sequence of events\nagainst algorithm could be as simple as the following example:")]),g._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:" go",base64:"ZnVuYyBUZXN0Q29uc2Vuc3VzWFhYKHQgKnRlc3RpbmcuVCkgewoJdHlwZSBleHBlY3RlZCBzdHJ1Y3QgewoJCW1lc3NhZ2UgTWVzc2FnZQoJCXN0YXRlICAgU3RhdGUKCX0KCgkvLyBTZXR1cCBvcmRlciBvZiBldmVudHMsIGluaXRpYWwgc3RhdGUgYW5kIGV4cGVjdGF0aW9uLgoJdmFyICgKCQlldmVudHMgPSBbXXN0cnVjdCB7CgkJCWV2ZW50IEV2ZW50CgkJCXdhbnQgIGV4cGVjdGVkCgkJfXsKCQkvLyAuLi4KCQl9CgkJc3RhdGUgPSBTdGF0ZXsKCQkvLyAuLi4KCQl9CgkpCgoJZm9yIF8sIGUgOj0gcmFuZ2UgZXZlbnRzIHsKCQlzYXRlLCBtc2cgPSBDb25zZW5zdXMoZS5ldmVudCwgc3RhdGUpCgoJCS8vIFRlc3QgbWVzc2FnZSBleHBlY3RhdGlvbi4KCQlpZiBtc2cgIT0gZS53YW50Lm1lc3NhZ2UgewoJCQl0LkZhdGFsZigmcXVvdDtoYXZlICV2LCB3YW50ICV2JnF1b3Q7LCBtc2csIGUud2FudC5tZXNzYWdlKQoJCX0KCgkJLy8gVGVzdCBzdGF0ZSBleHBlY3RhdGlvbi4KCQlpZiAhcmVmbGVjdC5EZWVwRXF1YWwoc3RhdGUsIGUud2FudC5zdGF0ZSkgewoJCQl0LkZhdGFsZigmcXVvdDtoYXZlICV2LCB3YW50ICV2JnF1b3Q7LCBzdGF0ZSwgZS53YW50LnN0YXRlKQoJCX0KCX0KfQo="}}),g._v(" "),I("h2",{attrs:{id:"consensus-executor"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#consensus-executor"}},[g._v("#")]),g._v(" Consensus Executor")]),g._v(" "),I("h2",{attrs:{id:"consensus-core"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#consensus-core"}},[g._v("#")]),g._v(" Consensus Core")]),g._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBFdmVudCBpbnRlcmZhY2V7fQoKdHlwZSBFdmVudE5ld0hlaWdodCBzdHJ1Y3QgewogICAgSGVpZ2h0ICAgICAgICAgICBpbnQ2NAogICAgVmFsaWRhdG9ySWQgICAgICBpbnQKfQoKdHlwZSBFdmVudE5ld1JvdW5kIEhlaWdodEFuZFJvdW5kCgp0eXBlIEV2ZW50UHJvcG9zYWwgc3RydWN0IHsKICAgIEhlaWdodCAgICAgICAgICAgaW50NjQKICAgIFJvdW5kICAgICAgICAgICAgaW50CiAgICBUaW1lc3RhbXAgICAgICAgIFRpbWUKICAgIEJsb2NrSUQgICAgICAgICAgQmxvY2tJRAogICAgUE9MUm91bmQgICAgICAgICBpbnQKICAgIFNlbmRlciAgICAgICAgICAgaW50ICAgCn0KCnR5cGUgTWFqb3JpdHkyM1ByZXZvdGVzQmxvY2sgc3RydWN0IHsKICAgIEhlaWdodCAgICAgICAgICAgaW50NjQKICAgIFJvdW5kICAgICAgICAgICAgaW50CiAgICBCbG9ja0lEICAgICAgICAgIEJsb2NrSUQKfQoKdHlwZSBNYWpvcml0eTIzUHJlY29tbWl0QmxvY2sgc3RydWN0IHsKICAgIEhlaWdodCAgICAgICAgICAgaW50NjQKICAgIFJvdW5kICAgICAgICAgICAgaW50CiAgICBCbG9ja0lEICAgICAgICAgIEJsb2NrSUQKfQoKdHlwZSBIZWlnaHRBbmRSb3VuZCBzdHJ1Y3QgewogICAgSGVpZ2h0ICAgICAgICAgICBpbnQ2NAogICAgUm91bmQgICAgICAgICAgICBpbnQKfQoKdHlwZSBNYWpvcml0eTIzUHJldm90ZXNBbnkgSGVpZ2h0QW5kUm91bmQKdHlwZSBNYWpvcml0eTIzUHJlY29tbWl0QW55IEhlaWdodEFuZFJvdW5kCnR5cGUgVGltZW91dFByb3Bvc2UgSGVpZ2h0QW5kUm91bmQKdHlwZSBUaW1lb3V0UHJldm90ZXMgSGVpZ2h0QW5kUm91bmQKdHlwZSBUaW1lb3V0UHJlY29tbWl0IEhlaWdodEFuZFJvdW5kCgoKdHlwZSBNZXNzYWdlIGludGVyZmFjZXt9Cgp0eXBlIE1lc3NhZ2VQcm9wb3NhbCBzdHJ1Y3QgewogICAgSGVpZ2h0ICAgICAgICAgICBpbnQ2NAogICAgUm91bmQgICAgICAgICAgICBpbnQKICAgIEJsb2NrSUQgICAgICAgICAgQmxvY2tJRAogICAgUE9MUm91bmQgICAgICAgICBpbnQKfQoKdHlwZSBWb3RlVHlwZSBpbnQKCmNvbnN0ICgKCVZvdGVUeXBlVW5rbm93biBWb3RlVHlwZSA9IGlvdGEKCVByZXZvdGUKCVByZWNvbW1pdAopCgoKdHlwZSBNZXNzYWdlVm90ZSBzdHJ1Y3QgewogICAgSGVpZ2h0ICAgICAgICAgICBpbnQ2NAogICAgUm91bmQgICAgICAgICAgICBpbnQKICAgIEJsb2NrSUQgICAgICAgICAgQmxvY2tJRAogICAgVHlwZSAgICAgICAgICAgICBWb3RlVHlwZQp9CgoKdHlwZSBNZXNzYWdlRGVjaXNpb24gc3RydWN0IHsKICAgIEhlaWdodCAgICAgICAgICAgaW50NjQKICAgIFJvdW5kICAgICAgICAgICAgaW50CiAgICBCbG9ja0lEICAgICAgICAgIEJsb2NrSUQKfQoKdHlwZSBUcmlnZ2VyVGltZW91dCBzdHJ1Y3QgewogICAgSGVpZ2h0ICAgICAgICAgICBpbnQ2NAogICAgUm91bmQgICAgICAgICAgICBpbnQKICAgIER1cmF0aW9uICAgICAgICAgRHVyYXRpb24KfQoKCnR5cGUgUm91bmRTdGVwIGludAoKY29uc3QgKAoJUm91bmRTdGVwVW5rbm93biBSb3VuZFN0ZXAgPSBpb3RhCglSb3VuZFN0ZXBQcm9wb3NlICAgICAgIAoJUm91bmRTdGVwUHJldm90ZQoJUm91bmRTdGVwUHJlY29tbWl0CglSb3VuZFN0ZXBDb21taXQKKQoKdHlwZSBTdGF0ZSBzdHJ1Y3QgewoJSGVpZ2h0ICAgICAgICAgICBpbnQ2NAoJUm91bmQgICAgICAgICAgICBpbnQKCVN0ZXAgICAgICAgICAgICAgUm91bmRTdGVwCglMb2NrZWRWYWx1ZSAgICAgIEJsb2NrSUQKCUxvY2tlZFJvdW5kICAgICAgaW50CglWYWxpZFZhbHVlICAgICAgIEJsb2NrSUQKCVZhbGlkUm91bmQgICAgICAgaW50CglWYWxpZGF0b3JJZCAgICAgIGludAoJVmFsaWRhdG9yU2V0U2l6ZSBpbnQKfQoKZnVuYyBwcm9wb3NlcihoZWlnaHQgaW50NjQsIHJvdW5kIGludCkgaW50IHt9CmZ1bmMgZ2V0VmFsdWUoKSBCbG9ja0lEIHt9CgpmdW5jIENvbnNlbnN1cyhldmVudCBFdmVudCwgc3RhdGUgU3RhdGUpIChTdGF0ZSwgTWVzc2FnZSwgVHJpZ2dlclRpbWVvdXQpIHsKICAgIG1zZyA9IG5pbAogICAgdGltZW91dCA9IG5pbAoJc3dpdGNoIGV2ZW50IDo9IGV2ZW50Lih0eXBlKSB7CiAgICAJY2FzZSBFdmVudE5ld0hlaWdodDoKICAgIAkJaWYgZXZlbnQuSGVpZ2h0ICZndDsgc3RhdGUuSGVpZ2h0IHsKICAgIAkJICAgIHN0YXRlLkhlaWdodCA9IGV2ZW50LkhlaWdodAogICAgCQkgICAgc3RhdGUuUm91bmQgPSAtMQogICAgCQkgICAgc3RhdGUuU3RlcCA9IFJvdW5kU3RlcFByb3Bvc2UKICAgIAkJICAgIHN0YXRlLkxvY2tlZFZhbHVlID0gbmlsCiAgICAJCSAgICBzdGF0ZS5Mb2NrZWRSb3VuZCA9IC0xCiAgICAJCSAgICBzdGF0ZS5WYWxpZFZhbHVlID0gbmlsCiAgICAJCSAgICBzdGF0ZS5WYWxpZFJvdW5kID0gLTEKICAgIAkJICAgIHN0YXRlLlZhbGlkYXRvcklkID0gZXZlbnQuVmFsaWRhdG9ySWQKICAgIAkJfSAKICAgIAkgICAgcmV0dXJuIHN0YXRlLCBtc2csIHRpbWVvdXQKICAgIAkKICAgIAljYXNlIEV2ZW50TmV3Um91bmQ6CiAgICAJCWlmIGV2ZW50LkhlaWdodCA9PSBzdGF0ZS5IZWlnaHQgYW5kIGV2ZW50LlJvdW5kICZndDsgc3RhdGUuUm91bmQgewogICAgICAgICAgICAgICBzdGF0ZS5Sb3VuZCA9IGV2ZW50Um91bmQKICAgICAgICAgICAgICAgc3RhdGUuU3RlcCA9IFJvdW5kU3RlcFByb3Bvc2UKICAgICAgICAgICAgICAgaWYgcHJvcG9zZXIoc3RhdGUuSGVpZ2h0LCBzdGF0ZS5Sb3VuZCkgPT0gc3RhdGUuVmFsaWRhdG9ySWQgewogICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSBzdGF0ZS5WYWxpZFZhbHVlCiAgICAgICAgICAgICAgICAgICBpZiBwcm9wb3NhbCA9PSBuaWwgewogICAgICAgICAgICAgICAgICAgCSAgICBwcm9wb3NhbCA9IGdldFZhbHVlKCkKICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgIG1zZyA9ICBNZXNzYWdlUHJvcG9zYWwgeyBzdGF0ZS5IZWlnaHQsIHN0YXRlLlJvdW5kLCBwcm9wb3NhbCwgc3RhdGUuVmFsaWRSb3VuZCB9CiAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgdGltZW91dCA9IFRyaWdnZXJUaW1lb3V0IHsgc3RhdGUuSGVpZ2h0LCBzdGF0ZS5Sb3VuZCwgdGltZW91dFByb3Bvc2Uoc3RhdGUuUm91bmQpIH0KICAgICAgICAgICAgfQogICAgCSAgICByZXR1cm4gc3RhdGUsIG1zZywgdGltZW91dAogICAgCQogICAgCWNhc2UgRXZlbnRQcm9wb3NhbDoKICAgIAkJaWYgZXZlbnQuSGVpZ2h0ID09IHN0YXRlLkhlaWdodCBhbmQgZXZlbnQuUm91bmQgPT0gc3RhdGUuUm91bmQgYW5kIAogICAgCSAgICAgICBldmVudC5TZW5kZXIgPT0gcHJvcG9zYWwoc3RhdGUuSGVpZ2h0LCBzdGF0ZS5Sb3VuZCkgYW5kIHN0YXRlLlN0ZXAgPT0gUm91bmRTdGVwUHJvcG9zZSB7IAogICAgCSAgICAgICAJaWYgZXZlbnQuUE9MUm91bmQgJmd0Oz0gc3RhdGUuTG9ja2VkUm91bmQgb3IgZXZlbnQuQmxvY2tJRCA9PSBzdGF0ZS5CbG9ja0lEIG9yIHN0YXRlLkxvY2tlZFJvdW5kID09IC0xIHsKICAgIAkgICAgICAgCQltc2cgPSBNZXNzYWdlVm90ZSB7IHN0YXRlLkhlaWdodCwgc3RhdGUuUm91bmQsIGV2ZW50LkJsb2NrSUQsIFByZXZvdGUgfQogICAgCSAgICAgICAJfQogICAgCSAgICAgICAJc3RhdGUuU3RlcCA9IFJvdW5kU3RlcFByZXZvdGUKICAgICAgICAgICAgfQogICAgCSAgICByZXR1cm4gc3RhdGUsIG1zZywgdGltZW91dAogICAgCQogICAgCWNhc2UgVGltZW91dFByb3Bvc2U6CiAgICAJCWlmIGV2ZW50LkhlaWdodCA9PSBzdGF0ZS5IZWlnaHQgYW5kIGV2ZW50LlJvdW5kID09IHN0YXRlLlJvdW5kIGFuZCBzdGF0ZS5TdGVwID09IFJvdW5kU3RlcFByb3Bvc2UgewogICAgCQkgICAgbXNnID0gTWVzc2FnZVZvdGUgeyBzdGF0ZS5IZWlnaHQsIHN0YXRlLlJvdW5kLCBuaWwsIFByZXZvdGUgfQogICAgCQkJc3RhdGUuU3RlcCA9IFJvdW5kU3RlcFByZXZvdGUKICAgICAgICAgICAgfQogICAgCSAgICByZXR1cm4gc3RhdGUsIG1zZywgdGltZW91dAogICAgCQogICAgCWNhc2UgTWFqb3JpdHkyM1ByZXZvdGVzQmxvY2s6CiAgICAJCWlmIGV2ZW50LkhlaWdodCA9PSBzdGF0ZS5IZWlnaHQgYW5kIGV2ZW50LlJvdW5kID09IHN0YXRlLlJvdW5kIGFuZCBzdGF0ZS5TdGVwICZndDs9IFJvdW5kU3RlcFByZXZvdGUgYW5kIGV2ZW50LlJvdW5kICZndDsgc3RhdGUuVmFsaWRSb3VuZCB7CiAgICAJCSAgICBzdGF0ZS5WYWxpZFJvdW5kID0gZXZlbnQuUm91bmQKICAgIAkJICAgIHN0YXRlLlZhbGlkVmFsdWUgPSBldmVudC5CbG9ja0lECiAgICAJCSAgICBpZiBzdGF0ZS5TdGVwID09IFJvdW5kU3RlcFByZXZvdGUgewogICAgCQkgICAgCXN0YXRlLkxvY2tlZFJvdW5kID0gZXZlbnQuUm91bmQKICAgIAkJICAgIAlzdGF0ZS5Mb2NrZWRWYWx1ZSA9IGV2ZW50LkJsb2NrSUQKICAgIAkJICAgIAltc2cgPSBNZXNzYWdlVm90ZSB7IHN0YXRlLkhlaWdodCwgc3RhdGUuUm91bmQsIGV2ZW50LkJsb2NrSUQsIFByZWNvbW1pdCB9CiAgICAJCSAgICAJc3RhdGUuU3RlcCA9IFJvdW5kU3RlcFByZWNvbW1pdAogICAgCQkgICAgfQogICAgICAgICAgICB9CiAgICAJICAgIHJldHVybiBzdGF0ZSwgbXNnLCB0aW1lb3V0CiAgICAJCiAgICAJY2FzZSBNYWpvcml0eTIzUHJldm90ZXNBbnk6CiAgICAJCWlmIGV2ZW50LkhlaWdodCA9PSBzdGF0ZS5IZWlnaHQgYW5kIGV2ZW50LlJvdW5kID09IHN0YXRlLlJvdW5kIGFuZCBzdGF0ZS5TdGVwID09IFJvdW5kU3RlcFByZXZvdGUgewogICAgCQkJdGltZW91dCA9IFRyaWdnZXJUaW1lb3V0IHsgc3RhdGUuSGVpZ2h0LCBzdGF0ZS5Sb3VuZCwgdGltZW91dFByZXZvdGUoc3RhdGUuUm91bmQpIH0KICAgIAkJfQogICAgCSAgICByZXR1cm4gc3RhdGUsIG1zZywgdGltZW91dAogICAgCQogICAgCWNhc2UgVGltZW91dFByZXZvdGU6CiAgICAJCWlmIGV2ZW50LkhlaWdodCA9PSBzdGF0ZS5IZWlnaHQgYW5kIGV2ZW50LlJvdW5kID09IHN0YXRlLlJvdW5kIGFuZCBzdGF0ZS5TdGVwID09IFJvdW5kU3RlcFByZXZvdGUgewogICAgCQkJbXNnID0gTWVzc2FnZVZvdGUgeyBzdGF0ZS5IZWlnaHQsIHN0YXRlLlJvdW5kLCBuaWwsIFByZWNvbW1pdCB9CiAgICAJCQlzdGF0ZS5TdGVwID0gUm91bmRTdGVwUHJlY29tbWl0CiAgICAJCX0KICAgIAkgICAgcmV0dXJuIHN0YXRlLCBtc2csIHRpbWVvdXQKICAgIAkKICAgIAljYXNlIE1ham9yaXR5MjNQcmVjb21taXRCbG9jazoKICAgIAkJaWYgZXZlbnQuSGVpZ2h0ID09IHN0YXRlLkhlaWdodCB7CiAgICAJCSAgICBzdGF0ZS5TdGVwID0gUm91bmRTdGVwQ29tbWl0CiAgICAJCSAgICBzdGF0ZS5Mb2NrZWRWYWx1ZSA9IGV2ZW50LkJsb2NrSUQKICAgIAkJfQogICAgCSAgICByZXR1cm4gc3RhdGUsIG1zZywgdGltZW91dAogICAgCQkKICAgIAljYXNlIE1ham9yaXR5MjNQcmVjb21taXRBbnk6CiAgICAJCWlmIGV2ZW50LkhlaWdodCA9PSBzdGF0ZS5IZWlnaHQgYW5kIGV2ZW50LlJvdW5kID09IHN0YXRlLlJvdW5kIHsKICAgIAkJCXRpbWVvdXQgPSBUcmlnZ2VyVGltZW91dCB7IHN0YXRlLkhlaWdodCwgc3RhdGUuUm91bmQsIHRpbWVvdXRQcmVjb21taXQoc3RhdGUuUm91bmQpIH0KICAgIAkJfQogICAgCSAgICByZXR1cm4gc3RhdGUsIG1zZywgdGltZW91dAogICAgCQogICAgCWNhc2UgVGltZW91dFByZWNvbW1pdDoKICAgICAgICAgICAgaWYgZXZlbnQuSGVpZ2h0ID09IHN0YXRlLkhlaWdodCBhbmQgZXZlbnQuUm91bmQgPT0gc3RhdGUuUm91bmQgewogICAgICAgICAgICAJc3RhdGUuUm91bmQgPSBzdGF0ZS5Sb3VuZCArIDEKICAgICAgICAgICAgfQogICAgCSAgICByZXR1cm4gc3RhdGUsIG1zZywgdGltZW91dAoJfQp9CQoKZnVuYyBDb25zZW5zdXNFeGVjdXRvcigpIHsKCXByb3Bvc2FsID0gbmlsCgl2b3RlcyA9IEhlaWdodFZvdGVTZXQgeyBIZWlnaHQ6IDEgfQoJc3RhdGUgPSBTdGF0ZSB7CgkJSGVpZ2h0OiAgICAgICAxCgkJUm91bmQ6ICAgICAgICAwICAgICAgICAgIAoJCVN0ZXA6ICAgICAgICAgUm91bmRTdGVwUHJvcG9zZQoJCUxvY2tlZFZhbHVlOiAgbmlsCgkJTG9ja2VkUm91bmQ6ICAtMQoJCVZhbGlkVmFsdWU6ICAgbmlsCgkJVmFsaWRSb3VuZDogICAtMQoJfQoJCglldmVudCA9IEV2ZW50TmV3SGVpZ2h0IHsxLCBpZH0KCXN0YXRlLCBtc2csIHRpbWVvdXQgPSBDb25zZW5zdXMoZXZlbnQsIHN0YXRlKQoJCglldmVudCA9IEV2ZW50TmV3Um91bmQge3N0YXRlLkhlaWdodCwgMH0KCXN0YXRlLCBtc2csIHRpbWVvdXQgPSBDb25zZW5zdXMoZXZlbnQsIHN0YXRlKQoJCglpZiBtc2cgIT0gbmlsIHsKCQlzZW5kIG1zZwoJfQoJCglpZiB0aW1lb3V0ICE9IG5pbCB7CgkJdHJpZ2dlciB0aW1lb3V0Cgl9CgkKCWZvciB7CgkJc2VsZWN0IHsKCQkgICAgY2FzZSBtZXNzYWdlIDo9ICZsdDstIG1zZ0NoOgoJCSAgICAJc3dpdGNoIG1zZyA6PSBtZXNzYWdlLih0eXBlKSB7CgkJICAgIAkgICAgY2FzZSBNZXNzYWdlUHJvcG9zYWw6CgkJICAgIAkgICAgICAgIAoJCSAgICAJICAgIGNhc2UgTWVzc2FnZVZvdGU6CQoJCSAgICAJICAgIAlpZiBtc2cuSGVpZ2h0ID09IHN0YXRlLkhlaWdodCB7CgkJICAgIAkgICAgCQluZXdWb3RlID0gdm90ZXMuQWRkVm90ZShtc2cpCgkJICAgIAkgICAgCQlpZiBuZXdWb3RlIHsKCQkgICAgCSAgICAJCQlzd2l0Y2ggbXNnLlR5cGUgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAljYXNlIFByZXZvdGU6CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCQlwcmV2b3RlcyA9IHZvdGVzLlByZXZvdGVzKG1zZy5Sb3VuZCkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAJCWlmIHByZXZvdGVzLldlYWtDZXJ0aWZpY2F0ZSgpIGFuZCBtc2cuUm91bmQgJmd0OyBzdGF0ZS5Sb3VuZCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCQkJZXZlbnQgPSBFdmVudE5ld1JvdW5kIHsgbXNnLkhlaWdodCwgbXNnLlJvdW5kIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAJCQlzdGF0ZSwgbXNnLCB0aW1lb3V0ID0gQ29uc2Vuc3VzKGV2ZW50LCBzdGF0ZSkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAJCQlzdGF0ZSA9IGhhbmRsZVN0YXRlQ2hhbmdlKHN0YXRlLCBtc2csIHRpbWVvdXQpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCQl9CQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAkJCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCQlpZiBibG9ja0lELCBvayA9IHByZXZvdGVzLlR3b1RoaXJkc01ham9yaXR5KCk7IG9rIGFuZCBibG9ja0lEICE9IG5pbCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCQkgICAgaWYgbXNnLlJvdW5kID09IHN0YXRlLlJvdW5kIGFuZCBoYXNCbG9jayhibG9ja0lEKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCQkgICAgCWV2ZW50ID0gTWFqb3JpdHkyM1ByZXZvdGVzQmxvY2sgeyBtc2cuSGVpZ2h0LCBtc2cuUm91bmQsIGJsb2NrSUQgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAkJICAgIAlzdGF0ZSwgbXNnLCB0aW1lb3V0ID0gQ29uc2Vuc3VzKGV2ZW50LCBzdGF0ZSkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAJCSAgICAJc3RhdGUgPSBoYW5kbGVTdGF0ZUNoYW5nZShzdGF0ZSwgbXNnLCB0aW1lb3V0KQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAkJICAgIH0gCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCQkgICAgaWYgcHJvcG9zYWwgIT0gbmlsIGFuZCBwcm9wb3NhbC5QT0xSb3VuZCA9PSBtc2cuUm91bmQgYW5kIGhhc0Jsb2NrKGJsb2NrSUQpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAJCSAgICAgICAgZXZlbnQgPSBFdmVudFByb3Bvc2FsIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWlnaHQ6IHN0YXRlLkhlaWdodAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdW5kOiAgc3RhdGUuUm91bmQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9ja0lEOiBibG9ja0lECiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUE9MUm91bmQ6IHByb3Bvc2FsLlBPTFJvdW5kCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VuZGVyOiBtZXNzYWdlLlNlbmRlcgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAkJICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCQkgICAgICAgIHN0YXRlLCBtc2csIHRpbWVvdXQgPSBDb25zZW5zdXMoZXZlbnQsIHN0YXRlKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAkJICAgICAgICBzdGF0ZSA9IGhhbmRsZVN0YXRlQ2hhbmdlKHN0YXRlLCBtc2csIHRpbWVvdXQpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCQkgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAkJfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAkJCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCQlpZiBwcmV2b3Rlcy5IYXNUd29UaGlyZHNBbnkoKSBhbmQgbXNnLlJvdW5kID09IHN0YXRlLlJvdW5kIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAJCQlldmVudCA9IE1ham9yaXR5MjNQcmV2b3Rlc0FueSB7IG1zZy5IZWlnaHQsIG1zZy5Sb3VuZCwgYmxvY2tJRCB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCQkJc3RhdGUsIG1zZywgdGltZW91dCA9IENvbnNlbnN1cyhldmVudCwgc3RhdGUpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBoYW5kbGVTdGF0ZUNoYW5nZShzdGF0ZSwgbXNnLCB0aW1lb3V0KQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAkJfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAkJCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCWNhc2UgUHJlY29tbWl0OgkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAJCQoJCSAgICAJICAgIAkJICAgIH0KCQkgICAgCSAgICAJICAgIH0KCQkgICAgCSAgICAgICAgfQoJCSAgICBjYXNlIHRpbWVvdXQgOj0gJmx0Oy0gdGltZW91dENoOgoJCSAgICAKCQkgICAgY2FzZSBibG9jayA6PSAmbHQ7LSBibG9ja0NoOgkKCQkgICAgCQoJCX0KCX0KfQoJCmZ1bmMgaGFuZGxlU3RhdGVDaGFuZ2Uoc3RhdGUsIG1zZywgdGltZW91dCkgU3RhdGUgewoJaWYgc3RhdGUuU3RlcCA9PSBDb21taXQgewoJCXN0YXRlID0gRXhlY3V0ZUJsb2NrKHN0YXRlLkxvY2tlZFZhbHVlKQoJfQkKCWlmIG1zZyAhPSBuaWwgewoJCXNlbmQgbXNnCgl9CQoJaWYgdGltZW91dCAhPSBuaWwgewoJCXRyaWdnZXIgdGltZW91dAoJfQkKfQoK"}}),g._v(" "),I("h3",{attrs:{id:"implementation-roadmap"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#implementation-roadmap"}},[g._v("#")]),g._v(" Implementation roadmap")]),g._v(" "),I("ul",[I("li",[g._v("implement proposed implementation")]),g._v(" "),I("li",[g._v("replace currently scattered calls in "),I("code",[g._v("ConsensusState")]),g._v(" with calls to the new\n"),I("code",[g._v("Consensus")]),g._v(" function")]),g._v(" "),I("li",[g._v("rename "),I("code",[g._v("ConsensusState")]),g._v(" to "),I("code",[g._v("ConsensusExecutor")]),g._v(" to avoid confusion")]),g._v(" "),I("li",[g._v("propose design for improved separation and clear information flow between\n"),I("code",[g._v("ConsensusExecutor")]),g._v(" and "),I("code",[g._v("ConsensusReactor")])])]),g._v(" "),I("h2",{attrs:{id:"status"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[g._v("#")]),g._v(" Status")]),g._v(" "),I("p",[g._v("Draft.")]),g._v(" "),I("h2",{attrs:{id:"consequences"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[g._v("#")]),g._v(" Consequences")]),g._v(" "),I("h3",{attrs:{id:"positive"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[g._v("#")]),g._v(" Positive")]),g._v(" "),I("ul",[I("li",[g._v("isolated implementation of the algorithm")]),g._v(" "),I("li",[g._v("improved testability - simpler to proof correctness")]),g._v(" "),I("li",[g._v("clearer separation of concerns - easier to reason")])]),g._v(" "),I("h3",{attrs:{id:"negative"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[g._v("#")]),g._v(" Negative")]),g._v(" "),I("h3",{attrs:{id:"neutral"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[g._v("#")]),g._v(" Neutral")])],1)}),[],!1,null,null,null);C.default=d.exports}}]);