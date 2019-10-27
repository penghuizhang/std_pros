(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{337:function(e,t,s){"use strict";s.r(t);var a=s(28),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"从-vuepress-0-x-迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-vuepress-0-x-迁移","aria-hidden":"true"}},[e._v("#")]),e._v(" 从 VuePress 0.x 迁移")]),e._v(" "),s("h2",{attrs:{id:"站点配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#站点配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 站点配置")]),e._v(" "),s("h3",{attrs:{id:"ga"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ga","aria-hidden":"true"}},[e._v("#")]),e._v(" ga "),s("Badge",{attrs:{text:"替换"}})],1),e._v(" "),s("p",[e._v("GA 已经被分离为一个单独的插件 "),s("router-link",{attrs:{to:"/plugin/official/plugin-google-analytics.html"}},[e._v("@vuepress/plugin-google-analytics")]),e._v("。")],1),e._v(" "),s("UpgradePath",{attrs:{title:""}},[s("ol",[s("li",[e._v("安装 "),s("code",[e._v("@vuepress/plugin-google-analytics")]),e._v(":")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("yarn add -D @vuepress/plugin-google-analytics@next\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR npm install -D @vuepress/plugin-google-analytics@next")]),e._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("更新 "),s("code",[e._v("vuepress/config.js")]),e._v(":")])]),e._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[e._v("module.exports = {\n"),s("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("-  ga: 'UA-12345678-9'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+  plugins: [")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+    ['@vuepress/google-analytics', {")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+      ga: 'UA-12345678-9'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+    }]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+ ]")]),e._v("\n}\n")])])])]),s("h3",{attrs:{id:"markdown-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-config","aria-hidden":"true"}},[e._v("#")]),e._v(" markdown.config "),s("Badge",{attrs:{text:"重命名"}})],1),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("extendMarkdown")]),e._v("：")]),e._v(" "),s("UpgradePath",{attrs:{title:""}},[s("p",[e._v("更新 "),s("code",[e._v("vuepress/config.js")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[e._v("// vuepress/config.js\nmodule.exports = {\n"),s("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("-  markdown: {")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("-    config(md) { /* ... */ }")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("-  },")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+  extendMarkdown(md) { /* ... */ }")]),e._v("\n}\n")])])])]),s("h3",{attrs:{id:"serviceworker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serviceworker","aria-hidden":"true"}},[e._v("#")]),e._v(" serviceWorker "),s("Badge",{attrs:{text:"替换"}})],1),e._v(" "),s("p",[e._v("Service Worker 相关的功能已经被分离为一个单独的插件 "),s("router-link",{attrs:{to:"/plugin/official/plugin-pwa.html"}},[e._v("@vuepress/plugin-pwa")]),e._v("。")],1),e._v(" "),s("UpgradePath",{attrs:{title:""}},[s("p",[e._v("参考: "),s("router-link",{attrs:{to:"/plugin/official/plugin-pwa.html#从-0-x-迁移"}},[e._v("@vuepress/plugin-pwa > 从 0.x 迁移")])],1)]),s("h2",{attrs:{id:"默认主题配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认主题配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 默认主题配置")]),e._v(" "),s("h3",{attrs:{id:"vuepress-override-styl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-override-styl","aria-hidden":"true"}},[e._v("#")]),e._v(" "),s("code",[e._v(".vuepress/override.styl")]),e._v(" "),s("Badge",{attrs:{text:"替换"}})],1),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v(".vuepress/styles/palette.styl")]),e._v(" 代替。")]),e._v(" "),s("UpgradePath",{attrs:{title:""}},[s("p",[e._v("参考: "),s("router-link",{attrs:{to:"/config/#palette-styl"}},[e._v("Config > palette.styl")])],1)]),s("h3",{attrs:{id:"vuepress-style-styl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-style-styl","aria-hidden":"true"}},[e._v("#")]),e._v(" "),s("code",[e._v(".vuepress/style.styl")]),e._v(" "),s("Badge",{attrs:{text:"替换"}})],1),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v(".vuepress/styles/index.styl")]),e._v(" 代替。")]),e._v(" "),s("UpgradePath",{attrs:{title:""}},[s("p",[e._v("参考: "),s("router-link",{attrs:{to:"/config/#index-styl"}},[e._v("Config > index.styl")])],1)])],1)},[],!1,null,null,null);t.default=r.exports}}]);