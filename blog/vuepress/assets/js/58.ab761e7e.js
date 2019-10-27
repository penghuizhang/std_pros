(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{341:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-last-updated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-last-updated","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-last-updated",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-last-updated"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("last-updated 插件。")])]),t._v(" "),s("p",[t._v("如果你使用默认主题，你无需安装本插件，因为 VuePress 的 "),s("code",[t._v("core")]),t._v(" 中已经包含此插件，同时，你应该直接使用 "),s("router-link",{attrs:{to:"/theme/default-theme-config.html#最后更新时间"}},[t._v("themeConfig.lastUpdated")]),t._v(" 选项。")],1),t._v(" "),s("p",[t._v("如果你在你的自定义主题中使用该插件，你将需要自己在主题中完成 lastUpdated 的 UI，你可以使用 "),s("strong",[s("router-link",{attrs:{to:"/guide/global-computed.html#page"}},[t._v("$page.lastUpdated")])],1),t._v(" 去访问当前页面的时间字符串。")]),t._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/last-updated'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项","aria-hidden":"true"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),s("h3",{attrs:{id:"transformer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transformer","aria-hidden":"true"}},[t._v("#")]),t._v(" transformer")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("(timestamp: number, lang: string) => string")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("默认情况下，本插件为每个页面生成一个 13 位的时间戳，你可以传入一个 transformer 将其转换为你想要的任何格式。")]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/last-updated'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        transformer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不要忘了安装 moment")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          moment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("locale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("moment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromNow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("如果你在 "),s("router-link",{attrs:{to:"/guide/i18n.html"}},[t._v("i18n")]),t._v(" 模式下运行，你还可以使用第二个参数 "),s("code",[t._v("lang")]),t._v(" 为不同语言生成时间字符串。")],1),t._v(" "),s("p",[t._v("请注意，在 VuePress 中，我们遵循以下规范："),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Language_localisation",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C > Language tags in HTML and XML"),s("OutboundLink")],1),t._v("，因此 "),s("code",[t._v("zh-CN")]),t._v(" 使用连字符（"),s("code",[t._v("-")]),t._v("）而不是下划线（"),s("code",[t._v("_")]),t._v("）。 请确保你使用的库遵循此规范，否则请自行转换。")])])])},[],!1,null,null,null);a.default=e.exports}}]);