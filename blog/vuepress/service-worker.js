/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "eb8df50264c73ec451577f392df1d6f2"
  },
  {
    "url": "api/cli.html",
    "revision": "f5080bc12625bb556578d4ac7423161c"
  },
  {
    "url": "api/node.html",
    "revision": "599e02bef6739ce1a98f67ac014022e7"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.87e12c99.css",
    "revision": "b181d9753d50b6d2cbef691c374a0b80"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.06d1a1dc.js",
    "revision": "0a83978faac04c218b8aafbe4277559f"
  },
  {
    "url": "assets/js/11.5a8aa8a2.js",
    "revision": "19462e0cef5f06d1b1058de1c031cd1f"
  },
  {
    "url": "assets/js/12.382e6733.js",
    "revision": "debe5b7ff440be74e07c00f0ce0ea820"
  },
  {
    "url": "assets/js/13.0680ab22.js",
    "revision": "55fed4596d10ef9111934d72b468c5eb"
  },
  {
    "url": "assets/js/14.0d547e87.js",
    "revision": "ee4fa97d417b6dcc33bf1e6aa3be8f61"
  },
  {
    "url": "assets/js/15.f14252b9.js",
    "revision": "453a0c33c016bf1c8e19bf378cc05e66"
  },
  {
    "url": "assets/js/16.9fd488af.js",
    "revision": "4253ad78008e64f2a2204ae6e0495008"
  },
  {
    "url": "assets/js/17.35b52118.js",
    "revision": "2a10106e6bcd39596d4411b4c0b26cc9"
  },
  {
    "url": "assets/js/18.1bcb83cf.js",
    "revision": "6b93a4980e6864b8ce9030b98a469df6"
  },
  {
    "url": "assets/js/19.44acbc7a.js",
    "revision": "8fd5e677d8dbfc18743c8098c84ee8eb"
  },
  {
    "url": "assets/js/20.de03388c.js",
    "revision": "8550b7f5b30e59bc8deb7245f34fbe17"
  },
  {
    "url": "assets/js/21.0b43ed35.js",
    "revision": "0787ed57027f8b4dcdc5f5606691de45"
  },
  {
    "url": "assets/js/22.28bdcca2.js",
    "revision": "fabb3afb5f4f366225a89df72ada68fb"
  },
  {
    "url": "assets/js/23.bcc40720.js",
    "revision": "6c4995540b35ea743079afdcca012e60"
  },
  {
    "url": "assets/js/24.a30d1a1a.js",
    "revision": "a83ed103f4d597df728c3512d5832f76"
  },
  {
    "url": "assets/js/25.4c44112c.js",
    "revision": "c94eb450f1d72b9763da5fdfb1d5d348"
  },
  {
    "url": "assets/js/26.11e167fa.js",
    "revision": "14614c1fb6733cf7b1a689e60e74dec6"
  },
  {
    "url": "assets/js/27.4c783e28.js",
    "revision": "2f6d52b8d246d766b916a9fc2f82e60d"
  },
  {
    "url": "assets/js/28.649ff00d.js",
    "revision": "6a20ac039b7ca8e42904f20525877eb4"
  },
  {
    "url": "assets/js/29.d815eeec.js",
    "revision": "cc9d01bd659c5b2193d23e1396ff27cd"
  },
  {
    "url": "assets/js/3.df9cf349.js",
    "revision": "f581368356570117d0328cd7b35f4162"
  },
  {
    "url": "assets/js/30.f2a4cc6b.js",
    "revision": "b3d02972e647124c9cc7e83171f16f3e"
  },
  {
    "url": "assets/js/31.cc7ee639.js",
    "revision": "d38c917e86d3c2041fd13d8f8269efb6"
  },
  {
    "url": "assets/js/32.fe0c609c.js",
    "revision": "47dde6a2e6c6020044c8e66cc4c896a9"
  },
  {
    "url": "assets/js/33.f66b4e94.js",
    "revision": "5bbcd31d1bfc0b53043c2bd9d1b774fe"
  },
  {
    "url": "assets/js/34.102f831b.js",
    "revision": "be8d362819bf4515fc9e54c628c03750"
  },
  {
    "url": "assets/js/35.1eb02e83.js",
    "revision": "77b0d4912b7027f7d2fbe01e91ea3504"
  },
  {
    "url": "assets/js/36.94dc1ed6.js",
    "revision": "e4fa5abda070e1b936e4e74d8d4d342e"
  },
  {
    "url": "assets/js/37.bc8ea094.js",
    "revision": "2a708ef211e1d27abc5f01f309c6dead"
  },
  {
    "url": "assets/js/38.818564ef.js",
    "revision": "7893f553d03f65592595fbf32dfb4f84"
  },
  {
    "url": "assets/js/39.ef3285ec.js",
    "revision": "89ebaa812719e62baf321abcd815eded"
  },
  {
    "url": "assets/js/4.6bd24b8a.js",
    "revision": "eb18204f2746486bcabff5f6acba58aa"
  },
  {
    "url": "assets/js/40.811973c5.js",
    "revision": "d9a718ed680296fcfcd1cb4e3c2f92da"
  },
  {
    "url": "assets/js/41.2e840224.js",
    "revision": "76898ac13a9bbd69584f439a184672cf"
  },
  {
    "url": "assets/js/42.ce735a49.js",
    "revision": "eacf54fc517fc61eec92531f9f704a0b"
  },
  {
    "url": "assets/js/43.ea6a4f93.js",
    "revision": "928a0953bd242fee7c9f3435b4d78d05"
  },
  {
    "url": "assets/js/44.b37cb1c9.js",
    "revision": "58c77707ac2616e14269cf3c4db7363f"
  },
  {
    "url": "assets/js/45.00ad5311.js",
    "revision": "5f1b547f2d9fdbfec7f4bf7889107fc9"
  },
  {
    "url": "assets/js/46.8e23adb7.js",
    "revision": "6fa189f8e2cec5270ee0bec3220b9555"
  },
  {
    "url": "assets/js/47.a3927361.js",
    "revision": "ebab0842f59b30bdb237add3b010625f"
  },
  {
    "url": "assets/js/48.207442c3.js",
    "revision": "02bb100e763ae40b292679619f61560a"
  },
  {
    "url": "assets/js/49.f2c2ea96.js",
    "revision": "297f711e153a16d05d11ea7ca1c1bba9"
  },
  {
    "url": "assets/js/5.a25cc222.js",
    "revision": "a54c2cedaddeba44bc65f1fca99786b4"
  },
  {
    "url": "assets/js/50.dd9a87ce.js",
    "revision": "2602fdbac1641e7848f1a19a4247d40d"
  },
  {
    "url": "assets/js/51.768b9dfc.js",
    "revision": "93108b7f6e762c067b654231c577a222"
  },
  {
    "url": "assets/js/52.53753664.js",
    "revision": "c75e47f91e71c352b0c6900faa13c3f7"
  },
  {
    "url": "assets/js/53.09c1f589.js",
    "revision": "3973658ed775d9615d04b5022a0266f0"
  },
  {
    "url": "assets/js/54.9ff1bfb8.js",
    "revision": "eec796a8a4eeb936f9b531d19c35cfd7"
  },
  {
    "url": "assets/js/55.d6aca9d7.js",
    "revision": "cb737f69a2354dd2f10cbb5696ad6c5d"
  },
  {
    "url": "assets/js/56.bb797e19.js",
    "revision": "2aeaa567816307b4e33e417922ccd2f4"
  },
  {
    "url": "assets/js/57.cd4dcd4d.js",
    "revision": "613ae05d68ba1a282562c59935fa5110"
  },
  {
    "url": "assets/js/58.ab761e7e.js",
    "revision": "24def424b6c17e8196c8a7413511c532"
  },
  {
    "url": "assets/js/59.bf82c005.js",
    "revision": "dbde994434d048c6bcedf54df824bb14"
  },
  {
    "url": "assets/js/6.d5d100cf.js",
    "revision": "d70275883dffeeed8a31c89e61fdc76b"
  },
  {
    "url": "assets/js/60.74bf6a33.js",
    "revision": "2f802dbe090233b57f6b900cb51d09d2"
  },
  {
    "url": "assets/js/61.1b996f4c.js",
    "revision": "720fb793a7835b6b63fb3926c5285038"
  },
  {
    "url": "assets/js/62.a4ce1d5a.js",
    "revision": "6f906761c5663d651357367428c0e295"
  },
  {
    "url": "assets/js/63.7940225a.js",
    "revision": "59146f42301cbf84a2c381f031562b3b"
  },
  {
    "url": "assets/js/64.b09bd6e2.js",
    "revision": "210115186f6fa65891db9f4308fd041c"
  },
  {
    "url": "assets/js/65.4dcbfda1.js",
    "revision": "3a8f6cdcbe87385d24e4f8238e4ecc49"
  },
  {
    "url": "assets/js/66.5514028e.js",
    "revision": "5d318a92a9c5c1af5897fd484e96ccfe"
  },
  {
    "url": "assets/js/67.d3d643dd.js",
    "revision": "01e2c5be8a09affa1c604c7ff2dba00c"
  },
  {
    "url": "assets/js/68.9eb4ef5f.js",
    "revision": "108f956143d440e8b31a26abfcfbd176"
  },
  {
    "url": "assets/js/69.9d17073a.js",
    "revision": "d9e7fc38c139441f5d9af793ecb5c3f8"
  },
  {
    "url": "assets/js/7.fa069c66.js",
    "revision": "4e35cf7b327ba6a3d66ce434de348ec2"
  },
  {
    "url": "assets/js/70.71a49550.js",
    "revision": "c0a9d925ab402af5a6dc357e561b7075"
  },
  {
    "url": "assets/js/71.8fab4488.js",
    "revision": "9b1f68463d04a25ad7197ec115f22cc2"
  },
  {
    "url": "assets/js/72.0c3b8749.js",
    "revision": "698047e2b273be3d4a6e4cf058141ef6"
  },
  {
    "url": "assets/js/73.45f4bbec.js",
    "revision": "de5ce6646daade5d9367c2504dcfc341"
  },
  {
    "url": "assets/js/74.028887f5.js",
    "revision": "88c51cf91c8b839476e75fcc890ac9a2"
  },
  {
    "url": "assets/js/8.5721b185.js",
    "revision": "100d586b70f7dd7bba2dbe2b56048852"
  },
  {
    "url": "assets/js/9.d9eb7053.js",
    "revision": "a90cac9306c4ca155ee5fd47b59697b6"
  },
  {
    "url": "assets/js/app.43f487e3.js",
    "revision": "5640b5a512c3010f7251ec88e9c79519"
  },
  {
    "url": "assets/js/vendors~notification.cbdafca2.js",
    "revision": "54a1fe623df31572658e9c9fc549f584"
  },
  {
    "url": "config/index.html",
    "revision": "db57649e99391c955c4e69f605af83eb"
  },
  {
    "url": "faq/index.html",
    "revision": "9fb3b5c003ac53dc1354549d4c46503c"
  },
  {
    "url": "guide/assets.html",
    "revision": "e3792fa8a78f0504b6e1cb5ee9d4c85d"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "81e501c3a744c1591bffc2559976a415"
  },
  {
    "url": "guide/deploy.html",
    "revision": "9e443680a6cbf1d96bd72747863ebf33"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "fd8e55066024f430d2248407dec4f330"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "de487e9ec6a78962bc39a6ca098c677a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9cc0af3c7bc480e7ca2de268f6ee4be5"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "c31eaa676c43465dff616f611ad1f9cd"
  },
  {
    "url": "guide/i18n.html",
    "revision": "02cd283d134c8acbb3e6774a8af807f6"
  },
  {
    "url": "guide/index.html",
    "revision": "e400f10d22bd0136379928b37c366b08"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "0a03d17c538e6bf8acc79da5a48d4d08"
  },
  {
    "url": "guide/markdown.html",
    "revision": "d954e935662396e23396e651ab871900"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "a68656d5879205f58d561ae47bc1ca7e"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "0fc4e84be1a8962f9d3b414ebd0bbf1d"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "0da8a39cfd3f6554da5a25c7a3649697"
  },
  {
    "url": "java/SpringBoot.html",
    "revision": "667621e31e509f55fb064c93b5c4dedc"
  },
  {
    "url": "java/SpringCloud.html",
    "revision": "b46e3432b151bfcb625e79dd4abc8be4"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "linux/docker/concept.html",
    "revision": "5fe3383373c14964d972e82d3a54ea63"
  },
  {
    "url": "linux/docker/container_operating.html",
    "revision": "6294d631dc217f5bb1737388b0846d1f"
  },
  {
    "url": "linux/docker/container.html",
    "revision": "ec9756d4aebca84eb7ef4d69678f07d8"
  },
  {
    "url": "linux/docker/image_get.html",
    "revision": "d739048a05c11504beb362f1959829f6"
  },
  {
    "url": "linux/docker/image_instruction.html",
    "revision": "3f460eb681af8de923663b190ab58593"
  },
  {
    "url": "linux/docker/image_list.html",
    "revision": "b834857f7cb660aa9b70f866c0cb56fc"
  },
  {
    "url": "linux/docker/image_make.html",
    "revision": "f3316eed89761b37d1c35a156b951db2"
  },
  {
    "url": "linux/docker/image.html",
    "revision": "54794e397344701007694bac2d5dc089"
  },
  {
    "url": "linux/docker/imageFast.html",
    "revision": "06a2576bf70ecdcb1e5937948f7cee0a"
  },
  {
    "url": "linux/docker/index.html",
    "revision": "efd345541ceb7cc2726cbb4e028a2f85"
  },
  {
    "url": "linux/docker/install.html",
    "revision": "d20a2e5c64ce8e486a1faeed594f6ee1"
  },
  {
    "url": "linux/docker/introduce.html",
    "revision": "4508c46b6a2c42aa3a184ad73aaec164"
  },
  {
    "url": "linux/docker/manager.html",
    "revision": "724aeac158084410248d395347902b54"
  },
  {
    "url": "linux/docker/repository.html",
    "revision": "7ec8e59a248ae5518f3889c558e56564"
  },
  {
    "url": "linux/git/index.html",
    "revision": "04b05c20383baae68979b6aadf415a01"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "dc48527dbd583cbde595dbe4d731f425"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "b1fbef8a15412769251c79a9ee11d523"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "dd1a23b71bf89056c487a9fc02c9a57e"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "e671b722be5bad4a63c974539607979a"
  },
  {
    "url": "plugin/index.html",
    "revision": "1dd12527563c1638b65a3b21b1d518a7"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "670c4f096f6b88247cc15bbbb0d5041a"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "b67ef353c946d7baeb338cac201fc040"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "dd3e64246d021b0abff17b4ac810cfa4"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "23218a9aee62d594877fa48b00673dd7"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "11a4f3a6e9a9ae2631929ee1926127b8"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "4ad81ff5bdc51c3d2ef5cb430ec1420a"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "42ca90250af8cf53ad078bb6f6fb39a5"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "8cb3fab67f49cd5c1cac190e5ed3d34e"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "5fc0b0cf5fb761eb0e47bec070691efc"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "3cb6d292d3561641f95b84124093a0cc"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "89d35e2fd695e805e116247b7fe792de"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "f78c39039d84c465dca3c7aea1b1b2a4"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "185a670b13e0de3bd98c13eef5708008"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "4a018ea59dc3a3c8980210a663423bb8"
  },
  {
    "url": "theme/index.html",
    "revision": "57fb94c7058bc3665857cd327172b175"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "b8b6096ec00e35485668c30ef1eab820"
  },
  {
    "url": "theme/option-api.html",
    "revision": "16333d24876cc7c5da117463f19d8922"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "13b338da722e1340b674e34fe0407019"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "8aaecb45cb5980f6523d26aa74da5713"
  },
  {
    "url": "web/index.html",
    "revision": "be55c172003f980506ecce7fe60d275d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
