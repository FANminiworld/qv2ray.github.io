(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{406:function(v,_,o){"use strict";o.r(_);var t=o(25),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,o=v._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h1",{attrs:{id:"高级路由设置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#高级路由设置"}},[v._v("#")]),v._v(" 高级路由设置")]),v._v(" "),o("p",[o("strong",[v._v("高级路由设置")]),v._v(" 和 "),o("strong",[v._v("路由编辑器")]),v._v(" 是 Qv2ray 的特色功能。有了它们的加持，你可以实现对流量的精准控制，如"),o("strong",[v._v("按需代理")]),v._v("、"),o("strong",[v._v("国内外分流")]),v._v("等，甚至还可以"),o("strong",[v._v("套娃")]),v._v("🤣~")]),v._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[v._v("路由是什么？我心心念念的 PAC 和 GFWList 去哪了？")]),v._v(" "),o("p",[v._v("如果你不了解 V2Ray 的路由功能是什么，那么你可以把它理解成配置更简单、使用更高效、规则更完善的新一代 PAC 实现。")]),v._v(" "),o("p",[v._v("路由功能远比 PAC 更强大，所以请不要再问 Qv2ray 支不支持 PAC 了！路由功能使用的数据比 GFWList 更加完善，故无需再使用 GFWList。")])]),v._v(" "),o("h2",{attrs:{id:"全局路由规则"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#全局路由规则"}},[v._v("#")]),v._v(" 全局路由规则")]),v._v(" "),o("p",[v._v("全局路由规则配置功能在 "),o("code",[v._v("首选项")]),v._v(" 的 "),o("code",[v._v("高级路由设置")]),v._v(" 选项卡中。")]),v._v(" "),o("h3",{attrs:{id:"域名策略"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#域名策略"}},[v._v("#")]),v._v(" 域名策略")]),v._v(" "),o("p",[v._v("包含 "),o("code",[v._v("AsIs")]),v._v("、"),o("code",[v._v("IPIfNonMatch")]),v._v("、"),o("code",[v._v("IPOnDemand")]),v._v(" 三种。")]),v._v(" "),o("p",[v._v("根据 "),o("a",{attrs:{href:"https://www.v2fly.org/config/routing.html#routingobject",target:"_blank",rel:"noopener noreferrer"}},[v._v("V2Ray 的官方文档"),o("OutboundLink")],1),v._v("，三种域名策略的含义如下：")]),v._v(" "),o("ul",[o("li",[o("strong",[o("code",[v._v("AsIs")])]),v._v("：只使用域名进行路由选择。默认值。")]),v._v(" "),o("li",[o("strong",[o("code",[v._v("IPIfNonMatch")])]),v._v("：当域名没有匹配任何规则时，将域名解析成 IP（A 记录或 AAAA 记录）再次进行匹配：\n"),o("ul",[o("li",[v._v("当一个域名有多个 A 记录时，会尝试匹配所有的 A 记录，直到其中一个与某个规则匹配为止；")]),v._v(" "),o("li",[v._v("解析后的 IP 仅在路由选择时起作用，转发的数据包中依然使用原始域名。")])])]),v._v(" "),o("li",[o("strong",[o("code",[v._v("IPOnDemand")])]),v._v("：当匹配时碰到任何基于 IP 的规则，将域名立即解析为 IP 进行匹配。")])]),v._v(" "),o("p",[v._v("简而言之，根据某开发者的"),o("s",[v._v("暴论")]),v._v("发言：")]),v._v(" "),o("ul",[o("li",[o("strong",[o("code",[v._v("AsIs")])]),v._v("：快速解析，不精确分流；")]),v._v(" "),o("li",[o("strong",[o("code",[v._v("IPIfNonMatch")])]),v._v("：解析稍慢，分流精确；")]),v._v(" "),o("li",[o("strong",[o("code",[v._v("IPOnDemand")])]),v._v("：没卵用。")])]),v._v(" "),o("blockquote",[o("p",[v._v("笔者注："),o("code",[v._v("IPOnDemand")]),v._v(" 理应是最慢但最精确的，但大多数情况下，"),o("code",[v._v("IPIfNonMatch")]),v._v(" 已经足够，因此 "),o("code",[v._v("IPOnDemand")]),v._v(" 的实际效果并不明显。")])]),v._v(" "),o("p",[v._v("你可以根据你的实际需求，选择相应的域名策略。通常来说，"),o("strong",[o("code",[v._v("IPIfNonMatch")])]),v._v(" 是大多数情况下的理想选择。")]),v._v(" "),o("h3",{attrs:{id:"路由方案"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#路由方案"}},[v._v("#")]),v._v(" 路由方案")]),v._v(" "),o("p",[v._v("路由方案由一个 "),o("code",[v._v("3x2")]),v._v(" 的矩阵组成，从左上到右下依次是："),o("code",[v._v("IP直连")]),v._v("、"),o("code",[v._v("IP代理")]),v._v("、"),o("code",[v._v("IP阻断")]),v._v("、"),o("code",[v._v("域名直连")]),v._v("、"),o("code",[v._v("域名代理")]),v._v("、"),o("code",[v._v("域名阻断")]),v._v("，每行一个，不需要逗号分隔。")]),v._v(" "),o("p",[v._v("这 6 种规则在 Qv2ray 中的按照 "),o("code",[v._v("域名阻断")]),v._v(" -> "),o("code",[v._v("域名代理")]),v._v(" -> "),o("code",[v._v("域名直连")]),v._v(" -> "),o("code",[v._v("IP阻断")]),v._v(" -> "),o("code",[v._v("IP代理")]),v._v(" -> "),o("code",[v._v("IP直连")]),v._v(" 的优先级进行匹配，如果匹配失败，则私有地址和大陆境内地址直连，否则走代理。")]),v._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[v._v("人家就是想要全局代理嘛~~~ 🤗")]),v._v(" "),o("p",[v._v("很简单，只需这些规则清空，再转到 "),o("code",[v._v("首选项")]),v._v(" 的 "),o("code",[v._v("连接")]),v._v(" 选项卡，取消 "),o("code",[v._v("绕过中国大陆")]),v._v(" 复选框的选中状态即可。🙄")])]),v._v(" "),o("p",[v._v("根据 "),o("a",{attrs:{href:"https://www.v2fly.org/config/routing.html#routingobject",target:"_blank",rel:"noopener noreferrer"}},[v._v("V2Ray 的官方文档"),o("OutboundLink")],1),v._v("：")]),v._v(" "),o("p",[v._v("IP 规则的写法如下（按常用程度排序）：")]),v._v(" "),o("ul",[o("li",[o("strong",[v._v("GeoIP")]),v._v("：形如 "),o("code",[v._v("geoip:cn")]),v._v("，必须以 "),o("code",[v._v("geoip:")]),v._v("（全部小写）开头，后面跟双字符国家代码，如 "),o("code",[v._v("geoip:cn")]),v._v(" 代表中国境内的 IP 地址，"),o("code",[v._v("geoip:us")]),v._v(" 代表美国境内的 IP 地址。")]),v._v(" "),o("li",[o("strong",[v._v("特殊值")]),v._v("："),o("code",[v._v("geoip:private")]),v._v("，包含所有私有地址，如"),o("code",[v._v("127.0.0.1")]),v._v("（本条规则仅支持 "),o("code",[v._v("V2Ray 3.5")]),v._v(" 以上版本）。")]),v._v(" "),o("li",[o("strong",[v._v("IP")]),v._v("：形如 "),o("code",[v._v("127.0.0.1")]),v._v("。")]),v._v(" "),o("li",[o("strong",[v._v("CIDR")]),v._v("：形如 "),o("code",[v._v("10.0.0.0/8")]),v._v("。")]),v._v(" "),o("li",[o("strong",[v._v("从外部文件中加载 IP 规则")]),v._v("：形如 "),o("code",[v._v("ext:file:tag")]),v._v("，必须以 "),o("code",[v._v("ext:")]),v._v("（全部小写）开头，后面跟文件名（不含扩展名）"),o("code",[v._v("file")]),v._v(" 和标签 "),o("code",[v._v("tag")]),v._v("，文件必须存放在 V2Ray 核心的资源目录中，文件格式与 "),o("code",[v._v("geoip.dat")]),v._v(" 相同，且指定的 "),o("code",[v._v("tag")]),v._v(" 必须在文件中存在。")])]),v._v(" "),o("p",[v._v("域名规则的写法如下（按常用程度排序）：")]),v._v(" "),o("ul",[o("li",[o("strong",[v._v("预定义域名列表")]),v._v("：由 "),o("code",[v._v("geosite:")]),v._v(" 开头，余下部分是一个名称，如 "),o("code",[v._v("geosite:google")]),v._v(" 或者 "),o("code",[v._v("geosite:cn")]),v._v("。名称及域名列表可参考"),o("a",{attrs:{href:"https://www.v2fly.org/config/routing.html#%E9%A2%84%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E5%88%97%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"}},[v._v("预定义域名列表"),o("OutboundLink")],1),v._v("。")]),v._v(" "),o("li",[o("strong",[v._v("子域名")]),v._v("：由 "),o("code",[v._v("domain:")]),v._v(" 开始，余下部分是一个域名。当此域名是目标域名或其子域名时，该规则生效。例如 "),o("code",[v._v("domain:v2ray.com")]),v._v(" 匹配 "),o("code",[v._v("www.v2ray.com")]),v._v(" 、"),o("code",[v._v("v2ray.com")]),v._v("，但不匹配 "),o("code",[v._v("xv2ray.com")]),v._v("。")]),v._v(" "),o("li",[o("strong",[v._v("完整匹配")]),v._v("：由 "),o("code",[v._v("full:")]),v._v(" 开始，余下部分是一个域名。当此域名完整匹配目标域名时，该规则生效。例如 "),o("code",[v._v("full:v2ray.com")]),v._v(" 匹配 "),o("code",[v._v("v2ray.com")]),v._v(" 但不匹配 "),o("code",[v._v("www.v2ray.com")]),v._v("。")]),v._v(" "),o("li",[o("strong",[v._v("纯字符串")]),v._v("：当此字符串匹配目标域名中任意部分，该规则生效。比如 "),o("code",[v._v("sina.com")]),v._v(" 可以匹配 "),o("code",[v._v("sina.com")]),v._v("、"),o("code",[v._v("sina.com.cn")]),v._v(" 和 "),o("code",[v._v("www.sina.com")]),v._v("，但不匹配 "),o("code",[v._v("sina.cn")]),v._v("。")]),v._v(" "),o("li",[o("strong",[v._v("正则表达式")]),v._v("：由 "),o("code",[v._v("regexp:")]),v._v(" 开始，余下部分是一个正则表达式。当此正则表达式匹配目标域名时，该规则生效。例如 "),o("code",[v._v("regexp:\\\\.goo.*\\\\.com$")]),v._v(" 匹配 "),o("code",[v._v("www.google.com")]),v._v("、"),o("code",[v._v("fonts.googleapis.com")]),v._v("，但不匹配 "),o("code",[v._v("google.com")]),v._v("。")]),v._v(" "),o("li",[o("strong",[v._v("从外部文件中加载域名规则")]),v._v("：形如 "),o("code",[v._v("ext:file:tag")]),v._v("，必须以 "),o("code",[v._v("ext:")]),v._v("（全部小写）开头，后面跟文件名（不含扩展名）"),o("code",[v._v("file")]),v._v(" 和标签 "),o("code",[v._v("tag")]),v._v("，文件必须存放在 V2Ray 核心的资源目录中，文件格式与 "),o("code",[v._v("geosite.dat")]),v._v(" 相同，且指定的标签 "),o("code",[v._v("tag")]),v._v(" 必须在文件中存在。")])]),v._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[v._v("我是小白，能说人话吗？😓")]),v._v(" "),o("ul",[o("li",[v._v("如果你想实现全局代理，即无论目标地址如何，所有流量都走代理，那么参考上面的另一个 Tips 即可。😅")]),v._v(" "),o("li",[v._v("如果你想实现精准分流，应出尽出，让大部分出境流量都走代理，那么只需点击界面中的 "),o("code",[v._v("预置方案")]),v._v(" 按钮，选择 "),o("code",[v._v("空白方案")]),v._v(" 或者 "),o("code",[v._v("广告拦截方案")]),v._v("，并将域名策略设置为 "),o("code",[v._v("IPIfNonMatch")]),v._v(" 即可。😋")])])]),v._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[v._v("我是大白（资深用户）！我需要更精确的分流规则！🤔")]),v._v(" "),o("p",[v._v("笔者推荐 "),o("code",[v._v("V2Ray 规则文件加强版")]),v._v(" 项目，仓库地址为 "),o("a",{attrs:{href:"https://github.com/Loyalsoldier/v2ray-rules-dat",target:"_blank",rel:"noopener noreferrer"}},[v._v("Loyalsoldier/v2ray-rules-dat"),o("OutboundLink")],1),v._v("。🤗")])]),v._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[v._v("我是老白（折腾型用户）！我需要高度可定制化的分流规则！🤪")]),v._v(" "),o("p",[v._v("请参考下一节 "),o("code",[v._v("路由编辑器")]),v._v("。😄")])]),v._v(" "),o("h2",{attrs:{id:"路由编辑器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#路由编辑器"}},[v._v("#")]),v._v(" 路由编辑器")]),v._v(" "),o("p",[v._v("在 Qv2ray 的主界面中，"),o("code",[v._v("右键点击")]),v._v(" 代理节点，选择 "),o("code",[v._v("编辑为复杂配置")]),v._v("，即可打开 "),o("code",[v._v("路由编辑器")]),v._v(" 界面。")]),v._v(" "),o("p",[v._v("在这一界面中，你可以将"),o("strong",[v._v("用户")]),v._v("、"),o("strong",[v._v("源IP")]),v._v("、"),o("strong",[v._v("目标IP")]),v._v("、"),o("strong",[v._v("域名目标域名")]),v._v("、"),o("strong",[v._v("协议")]),v._v("和"),o("strong",[v._v("端口")]),v._v("等匹配条件进行任意组合，从而创建出足够精确的入站/出站规则，还可以任意调整规则"),o("strong",[v._v("优先级")]),v._v("，甚至实现"),o("strong",[v._v("负载均衡")]),v._v("。")]),v._v(" "),o("p",[v._v("需要提醒的是，每项路由规则中的匹配条件为 "),o("code",[v._v("与")]),v._v(" / "),o("code",[v._v("and")]),v._v(" / "),o("code",[v._v("&&")]),v._v(" 关系，即若一项路由规则中包含多种匹配条件，则最终得到的实际匹配条件是这些条件的交集。举个例子，若某项路由规则中，既包含端口条件 "),o("code",[v._v("443")]),v._v("，又包含目标域名条件 "),o("code",[v._v("qv2ray.github.io")]),v._v("，那么只有同时满足这两个条件的目标 "),o("code",[v._v("qv2ray.github.io:443")]),v._v(" 才会匹配该项规则。")]),v._v(" "),o("p",[v._v("如果你对 V2Ray 的路由规则机制不太了解，请参考 "),o("a",{attrs:{href:"https://www.v2fly.org/config/routing.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("V2Ray 的官方文档"),o("OutboundLink")],1),v._v("。")]),v._v(" "),o("h2",{attrs:{id:"相关链接"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[v._v("#")]),v._v(" 相关链接")]),v._v(" "),o("p",[o("a",{attrs:{href:"https://www.v2fly.org/config/routing.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("V2Ray 官方文档：路由规则"),o("OutboundLink")],1)]),v._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/Loyalsoldier/v2ray-rules-dat",target:"_blank",rel:"noopener noreferrer"}},[v._v("V2Ray 规则文件加强版"),o("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=e.exports}}]);