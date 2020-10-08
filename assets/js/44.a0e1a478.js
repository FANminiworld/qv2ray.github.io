(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{411:function(v,_,s){"use strict";s.r(_);var t=s(18),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"常规设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常规设置"}},[v._v("#")]),v._v(" 常规设置")]),v._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"qv2ray://open/preference/general"}},[v._v("常规设置")])]),v._v(" 是针对 Qv2ray 本身的设置，包括"),s("strong",[v._v("外观")]),v._v("、"),s("strong",[v._v("行为")]),v._v("和"),s("strong",[v._v("网络设置")]),v._v("。")]),v._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[v._v("强调")]),v._v(" "),s("p",[v._v("常规设置是针对 Qv2ray 本身的设置，这意味着这些设置只会改变 Qv2ray 本身的行为，而不会影响 V2Ray 核心代理的行为。")])]),v._v(" "),s("h2",{attrs:{id:"外观"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外观"}},[v._v("#")]),v._v(" 外观")]),v._v(" "),s("p",[v._v("设置 Qv2ray 的外观属性。")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("最近列表")]),v._v("：设置在 "),s("strong",[v._v("通知图标右键菜单")]),v._v(" - "),s("strong",[v._v("最近连接")]),v._v(" 列表中，展示的最近使用过的连接数量。")]),v._v(" "),s("li",[s("strong",[v._v("日志最大行数")]),v._v("：设置在 Qv2ray 主界面右侧的"),s("strong",[v._v("日志")]),v._v("窗格中，日志的记录数量上限。超过设定值后，将自动删除时间较早的日志。")]),v._v(" "),s("li",[v._v("其他：怎么喜欢就怎么设啦~🤐")])]),v._v(" "),s("h2",{attrs:{id:"行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行为"}},[v._v("#")]),v._v(" 行为")]),v._v(" "),s("p",[v._v("设置 Qv2ray 的行为。")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("安静模式")]),v._v("：启用后，Qv2ray 将不会主动弹出任何通知提醒。")]),v._v(" "),s("li",[v._v("其他：已经很浅显了，这还用我说嘛？😶")])]),v._v(" "),s("h2",{attrs:{id:"网络设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络设置"}},[v._v("#")]),v._v(" 网络设置")]),v._v(" "),s("p",[v._v("设置 Qv2ray 访问网络的方式。")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("延迟测试方案")]),v._v("：设置节点延迟的测试方法。\n"),s("ul",[s("li",[s("strong",[v._v("TCPing")]),v._v("：Qv2ray 默认的延迟测试方法。测试结果更接近于实际使用体验，但无法测试基于 mKCP 协议的节点。")]),v._v(" "),s("li",[s("strong",[v._v("ICMPing")]),v._v("：基于 ICMP / UDP 协议的延迟测试方法，是目前市面上公认的、主流的延迟测试方法，也是 Windows 和 Unix 系统中 "),s("code",[v._v("ping")]),v._v(" 命令的测试原理。测试结果远低于 TCPing，远优于实际使用体验。可以用于测试基于 mKCP 协议的节点。")])])]),v._v(" "),s("li",[s("strong",[v._v("User Agent")]),v._v("：Qv2ray 在进行网络请求时声明的客户端信息。如果你不了解何为 UA，请不要变更本项设置。")]),v._v(" "),s("li",[s("strong",[v._v("Qv2ray 代理")]),v._v("：Qv2ray 在进行网络请求时使用的代理设置，而非 V2Ray 核心的出口流量所使用的代理设置。")])]),v._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[v._v("Qv2ray 代理到底有什么意义？")]),v._v(" "),s("p",[v._v("如果你想让 Qv2ray 通过代理来更新订阅或检测版本更新，请配置此项。")]),v._v(" "),s("p",[v._v("如果你想让被 V2Ray 代理的流量通过另一个代理，或者你的网络需要通过一层代理才能连接到互联网，那么请使用前置代理功能，不要配置此项。")])]),v._v(" "),s("h2",{attrs:{id:"高级行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级行为"}},[v._v("#")]),v._v(" 高级行为")]),v._v(" "),s("p",[v._v("设置 Qv2ray 的高级行为。请注意，滥用这些设置可能会造成负面影响！")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("默认设置 "),s("code",[v._v("AllowInsecure")])]),v._v("：所有通过 "),s("strong",[v._v("订阅")]),v._v(" / "),s("strong",[v._v("二维码")]),v._v(" / "),s("strong",[v._v("VMess 协议链接")]),v._v(" 导入的新连接将默认开启 "),s("code",[v._v("允许不安全的证书")]),v._v(" 选项。开启此项设置将会使相关节点失去 TLS 的保护，存在遭受中间人攻击的风险。通过手动填写连接属性或编辑 JSON 添加的节点不受此选项影响。如果你不了解该选项的实际用途，请切勿开启！")]),v._v(" "),s("li",[s("strong",[v._v("默认设置 "),s("code",[v._v("AllowInsecureCiphers")])]),v._v("：所有通过 "),s("strong",[v._v("订阅")]),v._v(" / "),s("strong",[v._v("二维码")]),v._v(" / "),s("strong",[v._v("VMess 协议链接")]),v._v(" 导入的新连接将默认开启 "),s("code",[v._v("允许不安全的 TLS 算法")]),v._v(" 选项。开启此项设置将会使相关节点失去 TLS 的保护，存在遭受中间人攻击的风险。通过手动填写连接属性或编辑 JSON 添加的节点不受此选项影响。如果你不了解该选项的实际用途，请切勿开启！")]),v._v(" "),s("li",[s("strong",[v._v("默认启用 "),s("code",[v._v("SessionResumption")])]),v._v(": Qv2ray v2.6.0 新增。开启时，新导入的 TLS 链接会默认开启 "),s("strong",[v._v("Session Resumption")]),v._v(" 以减少握手时的 RTT。然而这会极大程度上提高流量被识别的风险。")]),v._v(" "),s("li",[s("strong",[v._v("定时测试延迟")]),v._v("：开启此选项后，Qv2ray 将会定期测试当前已连接节点的延迟。开启该选项可能会使 GFW 更容易识别出你的连接。")])]),v._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[v._v("再次强调")]),v._v(" "),s("p",[v._v("滥用上述设置可能会造成负面影响，甚至导致安全问题！如果你不了解这些选项的实际用途，请切勿开启！")])]),v._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[v._v("有关 V2ray-Core 4.23.1 以下版本")]),v._v(" "),s("p",[s("strong",[v._v("2020-05-30 更新：")]),v._v(" 由于实现缺陷，V2ray-Core 在禁用 "),s("code",[v._v("AllowInsecureCiphers")]),v._v(" 选项时，会使用硬编码的 TLS 加密套件列表，这将导致 V2ray-Core 的 TLS 流量出现明显特征，在 Qv2ray 中启用 "),s("code",[v._v("AllowInsecureCiphers")]),v._v(" 会暂时缓解此问题，开启此选项后需要"),s("strong",[v._v("重新导入所有受影响的连接")]),v._v("。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);