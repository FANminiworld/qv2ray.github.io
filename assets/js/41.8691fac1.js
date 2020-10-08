(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{408:function(a,e,t){"use strict";t.r(e);var s=t(18),v=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"手动构建-qv2ray-项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动构建-qv2ray-项目"}},[a._v("#")]),a._v(" 手动构建 Qv2ray 项目")]),a._v(" "),t("p",[a._v("你可手动构建 Qv2ray，以支持我们尚未支持的平台。")]),a._v(" "),t("h2",{attrs:{id:"构建依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建依赖"}},[a._v("#")]),a._v(" 构建依赖")]),a._v(" "),t("p",[a._v("首先，请确保你的环境满足以下依赖的要求：")]),a._v(" "),t("ul",[t("li",[a._v("Qt 版本 "),t("code",[a._v(">= 5.11")]),a._v(" （推荐 "),t("code",[a._v("5.13")]),a._v(" 或 "),t("code",[a._v("5.14")]),a._v("）")]),a._v(" "),t("li",[a._v("gRPC 与 protobuf\n"),t("ul",[t("li",[a._v("在 Windows 下构建 Qv2ray 时，"),t("code",[a._v("gRPC")]),a._v(" 和 "),t("code",[a._v("protobuf")]),a._v(" 两者都需要。")]),a._v(" "),t("li",[a._v("在 Linux 和 macOS 下构建 Qv2ray 时，只有 "),t("code",[a._v("protobuf")]),a._v(" 是必须的，而 "),t("code",[a._v("gRPC")]),a._v(" 可以替换成一个自制的库 "),t("code",[a._v("libqvb")]),a._v(" 。")])])]),a._v(" "),t("li",[t("code",[a._v("OpenSSL")]),a._v(" "),t("ul",[t("li",[a._v("如果你没有 "),t("code",[a._v("OpenSSL")]),a._v("，构建可能 "),t("strong",[a._v("不会失败")]),a._v("，因为它是一个 "),t("strong",[a._v("运行时依赖")]),a._v("。")])])])]),a._v(" "),t("p",[a._v("其次，编译器要支持并使用 C++17，需要包括嵌套命名空间（nested namespace）、结构化绑定（tuple expansion）以及内联变量（inline variable）等特性的支持：")]),a._v(" "),t("ul",[t("li",[a._v("Linux 下的 "),t("code",[a._v("gcc7")]),a._v(" 即可支持。")]),a._v(" "),t("li",[a._v("Windows 下的 MSVC 需要 "),t("code",[a._v(">=14.2")]),a._v("。")])]),a._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[a._v("别用 gRPC 1.26.0")]),a._v(" "),t("p",[a._v("注意: 这个版本的 gRPC 有一个已知问题，会导致 Qv2ray 运行后无法退出，并使得 CPU 空转，严重增加系统负担。\n切勿使用 gRPC 1.26.0。")])]),a._v(" "),t("h2",{attrs:{id:"获取源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取源码"}},[a._v("#")]),a._v(" 获取源码")]),a._v(" "),t("p",[a._v("有多种方式获取 Qv2ray 的源码。你可以通过下面的任意方式获取:")]),a._v(" "),t("ul",[t("li",[a._v("Git 客户端: "),t("code",[a._v("git clone https://github.com/Qv2ray/Qv2ray")])]),a._v(" "),t("li",[a._v("通过 GitHub 直接下载仓库上某个分支的源码（不建议这样做，因为它缺少 Git submodule 的元数据）")])]),a._v(" "),t("h2",{attrs:{id:"构建步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建步骤"}},[a._v("#")]),a._v(" 构建步骤")]),a._v(" "),t("p",[a._v("假设你：")]),a._v(" "),t("ol",[t("li",[a._v("安装了 Qt 并且配置了相应的环境变量，从而在 Terminal/Shell/Command Prompt 中至少能成功执行 "),t("code",[a._v("qmake --version")]),a._v("；")]),a._v(" "),t("li",[a._v("正确获取了源码和所有的子模块 (submodule)。")])]),a._v(" "),t("h3",{attrs:{id:"构建之前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建之前"}},[a._v("#")]),a._v(" 构建之前")]),a._v(" "),t("ul",[t("li",[a._v("Arch Linux：使用 pacman 安装这两个包: "),t("code",[a._v("pacman -S grpc protobuf")])]),a._v(" "),t("li",[a._v("macOS：通过 Homebrew 安装两个包: "),t("code",[a._v("brew install grpc protobuf")])]),a._v(" "),t("li",[a._v("Windows:\n"),t("ul",[t("li",[a._v("你可以从 "),t("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray-deps",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qv2ray-deps"),t("OutboundLink")],1),a._v(" 这个仓库 Release 中下载 "),t("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray-deps/releases/download/release/Qv2ray-deps-grpc-x64-windows.7z",target:"_blank",rel:"noopener noreferrer"}},[a._v("gRPC dependency package - x64"),t("OutboundLink")],1),a._v(" 或者 "),t("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray-deps/releases/download/release/Qv2ray-deps-grpc-x86-windows.7z",target:"_blank",rel:"noopener noreferrer"}},[a._v("gRPC dependency package - x86"),t("OutboundLink")],1),a._v("，然后解压到 "),t("code",[a._v("libs/x**-windows/")]),a._v(" 目录, 其中 "),t("code",[a._v("**")]),a._v(" 是 "),t("code",[a._v("86")]),a._v(" 或 "),t("code",[a._v("64")]),a._v("；或者：")]),a._v(" "),t("li",[a._v("你可以使用 "),t("code",[a._v("vcpkg install grpc")]),a._v(" 在 Windows 上通过 MSVC 手动构建 "),t("code",[a._v("gRPC")]),a._v(", 不过这通常会花点时间，且需要稳定的网络环境（没梯子就算了）。")])])])]),a._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[a._v("Windows: Qv2ray-deps -> MSVC2019+")]),a._v(" "),t("p",[a._v("若你选择直接使用 Qv2ray-deps 项目中的预编译包，你至少需要使用 MSVC2019 来进行 Linking，否则可能会遇到各种谜之问题。\n这是因为 GitHub Actions 上用于编译 Qv2ray-deps 项目的编译器是 MSVC2019。\n若你不想安装 MSVC2019+，你可以选择使用 vcpkg 手动编译安装，祝君好运。")])]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("确保你安装了 "),t("code",[a._v("grpc_cpp_plugin")]),a._v(" 和 "),t("code",[a._v("protoc")]),a._v(", 它们在下一步中由 "),t("code",[a._v("cmake")]),a._v(" 使用.")])]),a._v(" "),t("h3",{attrs:{id:"构建脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建脚本"}},[a._v("#")]),a._v(" 构建脚本")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" Qv2ray\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" submodule update --init "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 拉取然后检出所有子模块到对应的目录。例如，Git 仓库目录下的 3rdparty/ 目录。")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" build "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" build\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 调用cmake")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 有不少选项可用, 如果需要,建议使用cmake-gui.")]),a._v("\ncmake "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# 例如： "cmake .. -DCMAKE_INSTALL_PREFIX=" + 想要的安装目录。')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# 又如： "cmake .. -DCMAKE_BUILD_TYPE=Release" 如果你想编译一个 Release 构建。')]),a._v("\n\ncmake --build "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 可以再附加 `--parallel N` 选项加速构建.")]),a._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("莫急！")]),a._v(" "),t("p",[a._v("在 Windows 和 macOS 上经过这些步骤后，你可能还不能直接运行 "),t("code",[a._v("qv2ray.exe")]),a._v(" 或者打开 "),t("code",[a._v("qv2ray.app")]),a._v(" 包。\n你还需要参考下面的部署步骤以为 Qv2ray 补全所需的运行时依赖。")])]),a._v(" "),t("h2",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[a._v("#")]),a._v(" 部署")]),a._v(" "),t("p",[a._v("在打包 Qv2ray 或使用它之前，还有一点事要做，即运行下面命令：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("cmake --install "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# 注意 "--install" 选项后面的点')]),a._v("\n")])])]),t("p",[a._v("在 Windows/macOS 上，这会自动复制所有依赖到一个目录。这个目录是你之前使用 "),t("code",[a._v("CMAKE_INSTALL_PREFIX")]),a._v(" 命令行参数或 CMake GUI 工具指定的。如果要想改变那个目录，你需要重新生产 CMake 缓存文件。")])])}),[],!1,null,null,null);e.default=v.exports}}]);