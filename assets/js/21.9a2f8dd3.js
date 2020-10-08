(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{374:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{input:""}},computed:{escaped:function(){return encodeURIComponent(this.input)}}},o=s(18),r=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"step-4-configuring-softwares-to-use-qv2ray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-4-configuring-softwares-to-use-qv2ray"}},[t._v("#")]),t._v(" Step 4: Configuring Softwares to Use Qv2ray")]),t._v(" "),s("p",[t._v("Congratulations! There's only one step left in order to access the unlocked Internet!")]),t._v(" "),s("h2",{attrs:{id:"general-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-methods"}},[t._v("#")]),t._v(" General Methods")]),t._v(" "),s("h3",{attrs:{id:"using-system-proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-system-proxy"}},[t._v("#")]),t._v(" Using System Proxy")]),t._v(" "),s("p",[t._v("For "),s("strong",[t._v("Windows")]),t._v(" and "),s("strong",[t._v("macOS")]),t._v(" users, almost all of the applications will follow the system proxy settings. For "),s("strong",[t._v("Linux")]),t._v(" users, some applications such as Firefox and Chromium, but not all, will read and obey the proxy configurations in GNOME/KDE Settings.")]),t._v(" "),s("p",[t._v("Currently, automatic setting of system proxy is supported by Qv2ray, including "),s("strong",[t._v("Windows")]),t._v(", "),s("strong",[t._v("macOS")]),t._v(" and "),s("strong",[t._v("Linux")]),t._v(" (GNOME/KDE). You may find System Proxy options of Qv2ray in the following positions:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Qv2ray Tray Menu")]),t._v(".\n"),s("ol",[s("li",[t._v("Right click on the tray icon.")]),t._v(" "),s("li",[t._v("In the popup menu, choose "),s("strong",[t._v("System Proxy")]),t._v(" -> "),s("strong",[t._v("Enable/Disable System Proxy")]),t._v(".")])])]),t._v(" "),s("li",[s("strong",[t._v("Qv2ray Preference Window")]),t._v(".\n"),s("ol",[s("li",[t._v("Click "),s("strong",[t._v("Preferences")]),t._v(" button in the main window.")]),t._v(" "),s("li",[t._v("In "),s("strong",[t._v("Preference Window")]),t._v(", choose the tab "),s("strong",[s("a",{attrs:{href:"qv2ray://open/preference/inbound"}},[t._v("Inbound Settings")])]),t._v(".")]),t._v(" "),s("li",[t._v("Check the option "),s("strong",[t._v("Set System Proxy")]),t._v(".")]),t._v(" "),s("li",[t._v("Click "),s("strong",[t._v("OK")]),t._v(" to apply the settings.")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Linux Users: KDE/GNOME Proxy Settings")]),t._v(" "),s("p",[t._v("If you are using GNOME as your main desktop environment, you may find it quite useful to set a system proxy. That's because GNOME Proxy Settings is almost universally acknowledged.")]),t._v(" "),s("p",[t._v("However, KDE users may have a difficult time, since KDE Proxy Settings is more like a toy. Even KDE Applications themselves won't read and obey that configuration. In that case, you may seek for an alternative solution to configure your applications.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Windows Users: UWP Loopback Problem")]),t._v(" "),s("p",[t._v("By default, UWP applications are prohibited from using a proxy with a loopback address (127.0.0.1), so the system proxy settings will probably cause your UWP applications cease to work normally.")]),t._v(" "),s("p",[t._v("You can use some third-party tool to "),s("strong",[t._v("enable UWP loopback")]),t._v(" for your program to be proxied. We here present you "),s("a",{attrs:{href:"/EnableLoopback.zip"}},[t._v("this program")]),t._v(" from "),s("a",{attrs:{href:"https://www.telerik.com/fiddler",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fiddler"),s("OutboundLink")],1),t._v(" project.")])]),t._v(" "),s("h3",{attrs:{id:"configure-manually-in-applications"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-manually-in-applications"}},[t._v("#")]),t._v(" Configure Manually in Applications")]),t._v(" "),s("h4",{attrs:{id:"telegram"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#telegram"}},[t._v("#")]),t._v(" Telegram")]),t._v(" "),s("p",[t._v("You can configure Telegram to use proxies in the app. Go to "),s("strong",[t._v("Settings")]),t._v(" -> "),s("strong",[t._v("Advanced")]),t._v(" -> "),s("strong",[t._v("Network and proxy")]),t._v(" and click "),s("strong",[t._v("Connection type")]),t._v(", where "),s("strong",[t._v("Proxy Settings")]),t._v(" dialog will be opened.")]),t._v(" "),s("p",[t._v("In "),s("strong",[t._v("Proxy Settings")]),t._v(", click "),s("strong",[t._v("Add Proxy")]),t._v(" button on the bottom. Choose SOCKS5/HTTP according to your own flavor and fill in the blanks with the information from Qv2ray Inbound Settings.")]),t._v(" "),s("p",[t._v("Finally, click on the proxy entry that you've just configured. You are done.")]),t._v(" "),s("h4",{attrs:{id:"web-browsers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-browsers"}},[t._v("#")]),t._v(" Web Browsers")]),t._v(" "),s("p",[t._v("Almost all web browsers support manual configuration of proxies. Taking Firefox as example, you can find this settings in "),s("strong",[t._v("Preferences -> General -> Network -> Manual Proxy Configuration")]),t._v(". Fill these fields with the information from Qv2ray Inbound Settings to use Qv2ray.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Using Proxy Plugins")]),t._v(" "),s("p",[t._v("To avoid switching back and forth among proxy configurations, you may want to use a third-party plugin (eg: SwitchyOmega) to enhance your browser. These plugins can help to implement a more sophisticated configuration, including multiple profiles and further traffic diversion.")])]),t._v(" "),s("h4",{attrs:{id:"java-applications"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-applications"}},[t._v("#")]),t._v(" Java Applications")]),t._v(" "),s("p",[t._v("For Java applications, you may use configure proxies through JVM arguments.")]),t._v(" "),s("p",[t._v("Here are some examples:")]),t._v(" "),s("ul",[s("li",[t._v("Using SOCKS5:"),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("java -DsocksProxyHost"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 -DsocksProxyPort"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1088")]),t._v(" -jar some-application.jar\n")])])])]),t._v(" "),s("li",[t._v("Using HTTP(S):"),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("java -Dhttp.proxyHost"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 -Dhttp.proxyPort"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v(" -Dhttps.proxyHost"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 -Dhttps.proxyPort"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v(" -jar some-application.jar\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Buggy Minecraft")]),t._v(" "),s("p",[t._v("Newer versions of Minecraft ("),s("code",[t._v(">=1.5.2")]),t._v(") won't follow JVM proxy settings. That is not Qv2ray's problem. If you really want to play Minecraft through proxy, consider setting up a Dokodemo-door inbound for that server and connect directly to "),s("code",[t._v("localhost")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"platform-dependent-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#platform-dependent-methods"}},[t._v("#")]),t._v(" Platform-dependent Methods")]),t._v(" "),s("h3",{attrs:{id:"using-environment-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-environment-variables"}},[t._v("#")]),t._v(" Using Environment Variables")]),t._v(" "),s("p",[t._v("Many CLI programs (for example "),s("code",[t._v("curl")]),t._v(" and "),s("code",[t._v("wget")]),t._v(") will use the proxies given by "),s("code",[t._v("<PROTOCOL>_PROXY")]),t._v(" environment variable.")]),t._v(" "),s("p",[t._v("Here is a configuration example:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Change the host and port according to Qv2ray inbound configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTP_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:8000"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTPS_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:8000"')]),t._v("\n")])])]),s("p",[t._v("If authentication is enabled in Qv2ray, use the following settings:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Change user/pass according to your configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTP_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://user:pass@127.0.0.1:8000"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTPS_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://user:pass@127.0.0.1:8000"')]),t._v("\n")])])]),s("p",[t._v("Note that if there is a special character in your username or password, you need to encode it. Here's a quick reference:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("code",[t._v("!")])]),t._v(" "),s("th",[s("code",[t._v("#")])]),t._v(" "),s("th",[s("code",[t._v("$")])]),t._v(" "),s("th",[s("code",[t._v("&")])]),t._v(" "),s("th",[s("code",[t._v("'")])]),t._v(" "),s("th",[s("code",[t._v("(")])]),t._v(" "),s("th",[s("code",[t._v(")")])]),t._v(" "),s("th",[s("code",[t._v("*")])]),t._v(" "),s("th",[s("code",[t._v("+")])]),t._v(" "),s("th",[s("code",[t._v(",")])]),t._v(" "),s("th",[s("code",[t._v("/")])]),t._v(" "),s("th",[s("code",[t._v(":")])]),t._v(" "),s("th",[s("code",[t._v(";")])]),t._v(" "),s("th",[s("code",[t._v("=")])]),t._v(" "),s("th",[s("code",[t._v("?")])]),t._v(" "),s("th",[s("code",[t._v("@")])]),t._v(" "),s("th",[s("code",[t._v("[")])]),t._v(" "),s("th",[s("code",[t._v("]")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("%21")])]),t._v(" "),s("td",[s("code",[t._v("%23")])]),t._v(" "),s("td",[s("code",[t._v("%24")])]),t._v(" "),s("td",[s("code",[t._v("%26")])]),t._v(" "),s("td",[s("code",[t._v("%27")])]),t._v(" "),s("td",[s("code",[t._v("%28")])]),t._v(" "),s("td",[s("code",[t._v("%29")])]),t._v(" "),s("td",[s("code",[t._v("%2A")])]),t._v(" "),s("td",[s("code",[t._v("%2B")])]),t._v(" "),s("td",[s("code",[t._v("%2C")])]),t._v(" "),s("td",[s("code",[t._v("%2F")])]),t._v(" "),s("td",[s("code",[t._v("%3A")])]),t._v(" "),s("td",[s("code",[t._v("%3B")])]),t._v(" "),s("td",[s("code",[t._v("%3D")])]),t._v(" "),s("td",[s("code",[t._v("%3F")])]),t._v(" "),s("td",[s("code",[t._v("%40")])]),t._v(" "),s("td",[s("code",[t._v("%5B")])]),t._v(" "),s("td",[s("code",[t._v("%5D")])])])])]),t._v(" "),s("p",[t._v("Or enter the text you want to encode: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),t._v(" "),t.input?[t._v("\n  Encoded text: "),s("code",[t._v(t._s(t.escaped))])]:t._e(),t._v(" "),s("p",[t._v("For programs running in "),s("code",[t._v("sudo")]),t._v(", it is required to configure "),s("code",[t._v("sudo")]),t._v(" to preserve these variables if you do not run "),s("code",[t._v("sudo")]),t._v(" in a shell. Call "),s("code",[t._v("visudo")]),t._v(" with root and add the following line:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("Defaults env_keep "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP_PROXY HTTPS_PROXY"')]),t._v("\n")])])]),s("p",[t._v("Still, there are some programs who are using their own variables. For example, "),s("code",[t._v("rsync")]),t._v(" uses "),s("code",[t._v("RSYNC_PROXY")]),t._v(" for HTTP proxies:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RSYNC_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("user:pass@127.0.0.1:8000\n")])])]),s("p",[t._v("It is strongly recommended to read the manual of programs that you want to configure proxy with.")]),t._v(" "),s("h3",{attrs:{id:"using-proxychains"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-proxychains"}},[t._v("#")]),t._v(" Using "),s("code",[t._v("proxychains")])]),t._v(" "),s("p",[t._v("If none of the above methods works, you can try using "),s("code",[t._v("proxychains")]),t._v(", which hijacks program's function/library to redirect network connections into your proxies.")]),t._v(" "),s("p",[t._v("First, you should install "),s("code",[t._v("proxychains-ng")]),t._v(". Installation methods varies with each operating system.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/rofl0r/proxychains-ng",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux/macOS"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/shunf4/proxychains-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Edit "),s("code",[t._v("/etc/proxychains.conf")]),t._v(" (for global proxychains) or "),s("code",[t._v("$HOME/.proxychains/proxychains.conf")]),t._v(" (for user), edit "),s("code",[t._v("[ProxyList]")]),t._v(" section and change the proxy to SOCKS5 Proxy in Qv2ray:")]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[ProxyList]")]),t._v("\nsocks5  127.0.0.1  1088\n")])])]),s("p",[t._v("After configuring "),s("code",[t._v("proxychains")]),t._v(", you may use "),s("code",[t._v("proxychains <program>")]),t._v(" in terminal to make "),s("code",[t._v("proxychains")]),t._v(" hijack the program to use the given proxy. If you are fed up with the noisy output, you may append "),s("code",[t._v("-q")]),t._v(" option after "),s("code",[t._v("proxychains")]),t._v(".")]),t._v(" "),s("p",[t._v("One thing to note is that "),s("code",[t._v("proxychains")]),t._v(" does not work with statically-linked programs, for example, Golang programs.")])],2)}),[],!1,null,null,null);e.default=r.exports}}]);