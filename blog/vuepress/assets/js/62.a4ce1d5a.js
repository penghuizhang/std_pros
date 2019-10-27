(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{379:function(t,s,n){"use strict";n.r(s);var a=n(28),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vuepress-plugin-register-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-register-components","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-register-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-register-components"),n("OutboundLink")],1)]),t._v(" "),n("blockquote",[n("p",[t._v("register-components plugin for vuepress")])]),t._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("yarn add -D @vuepress/plugin-register-components@next\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D @vuepress/plugin-register-components@next")]),t._v("\n")])])]),n("h2",{attrs:{id:"使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/register-components'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"选项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#选项","aria-hidden":"true"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),n("h3",{attrs:{id:"componentsdir"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#componentsdir","aria-hidden":"true"}},[t._v("#")]),t._v(" componentsDir")]),t._v(" "),n("ul",[n("li",[t._v("类型: "),n("code",[t._v("Array | String")])]),t._v(" "),n("li",[t._v("默认值: "),n("code",[t._v("[]")])])]),t._v(" "),n("p",[t._v("在这个目录下的所有组件将会被注册为全局组件，组件的命名将遵循在 "),n("a",{attrs:{href:"https://vuepress.vuejs.org/guide/using-vue.html#using-components",target:"_blank",rel:"noopener noreferrer"}},[t._v(".vuepress/components"),n("OutboundLink")],1),t._v(" 中找到的组件的命名。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'register-components'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        componentsDir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" somepath\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#components","aria-hidden":"true"}},[t._v("#")]),t._v(" components")]),t._v(" "),n("ul",[n("li",[t._v("类型: "),n("code",[t._v("{ name: string, path: string }")])]),t._v(" "),n("li",[t._v("默认值: "),n("code",[t._v("[]")])])]),t._v(" "),n("p",[t._v("通过明确的名称和路径来注册组件。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'register-components'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'V-Card'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/card.vue'")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"getcomponentname"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getcomponentname","aria-hidden":"true"}},[t._v("#")]),t._v(" getComponentName")]),t._v(" "),n("ul",[n("li",[t._v("类型: "),n("code",[t._v("(file: string) => string")])]),t._v(" "),n("li",[t._v("默认值: "),n("code",[t._v("file => file.replace(/\\/|\\\\/g, '-')")])])]),t._v(" "),n("p",[t._v("自定义 "),n("code",[t._v("componentsDir")]),t._v(" 中注册的组件的名称。")])])},[],!1,null,null,null);s.default=e.exports}}]);