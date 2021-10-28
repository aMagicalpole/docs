(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{451:function(t,a,v){"use strict";v.r(a);var _=v(16),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"html-基础整理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#html-基础整理"}},[t._v("#")]),t._v(" html 基础整理")]),t._v(" "),v("h2",{attrs:{id:"doctype-的作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#doctype-的作用"}},[t._v("#")]),t._v(" Doctype 的作用？")]),t._v(" "),v("p",[t._v("Doctype 是作用于文档最顶部的文档声明，是告诉浏览器是以标准模式还是以怪异模式展示该页面。Doctype 不存在或格式错误都会导致页面以怪异模式展示页面。")]),t._v(" "),v("h2",{attrs:{id:"标准模式和怪异模式的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标准模式和怪异模式的区别"}},[t._v("#")]),t._v(" 标准模式和怪异模式的区别：")]),t._v(" "),v("p",[t._v("标准模式的页面排版和 JS 运作模式都是浏览器支持的最高标准，而怪异模式是向后兼容，模拟老浏览器模式行为，防止页面无法正常工作")]),t._v(" "),v("h2",{attrs:{id:"行内元素-块级元素-空元素有哪些"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#行内元素-块级元素-空元素有哪些"}},[t._v("#")]),t._v(" 行内元素/块级元素/空元素有哪些？")]),t._v(" "),v("p",[t._v("行内元素: a/img/span/b/strong/input/select/section\n块级元素: div/p/table/ul/ol/li/h1-h6\n空元素: br/hr/img/input/link/meta")]),t._v(" "),v("h2",{attrs:{id:"iframe-有哪些缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#iframe-有哪些缺点"}},[t._v("#")]),t._v(" Iframe 有哪些缺点?")]),t._v(" "),v("p",[t._v("Iframe 会阻碍页面的 onload 事件\n浏览器的搜索引擎一般读无法解读 iframe 页面,不利于 SEO 的搜索\nIframe 和主页面共享链接池,会影响页面的并行加载\n使用 js 动态添加 iframe src 属性,可以避免一三问题")]),t._v(" "),v("h2",{attrs:{id:"介绍一下你对浏览器内核的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下你对浏览器内核的理解"}},[t._v("#")]),t._v(" 介绍一下你对浏览器内核的理解?")]),t._v(" "),v("p",[t._v("浏览器主要分为两个部分:渲染引擎和 JS 引擎\n渲染引擎：主要负责获取页面内容和排版渲染页面\nJS 引擎：解析和执行 JS 来实现页面的动态效果，以及交互内容")]),t._v(" "),v("h2",{attrs:{id:"页面导入样式时-使用-link-和-import-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页面导入样式时-使用-link-和-import-有什么区别"}},[t._v("#")]),t._v(" 页面导入样式时,使用 link 和@import 有什么区别?")]),t._v(" "),v("ol",[v("li",[t._v("link 属于 XHTML 标签,除了加载 CSS 之外还能用于定义 RSS,@import 是 CSS 提供的,只能用于加载 CSS")]),t._v(" "),v("li",[t._v("link 加载的文件,在页面加载的时候,link 文件会同时加载,而@import 引入的 CSS 文件,是页面在加载完成后再加载的")]),t._v(" "),v("li",[t._v("@import 有兼容性问题,IE5 以下的浏览器是无法识别的,而 link 无兼容性问题")])]),t._v(" "),v("h2",{attrs:{id:"浏览器渲染机制、重绘、重排"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染机制、重绘、重排"}},[t._v("#")]),t._v(" 浏览器渲染机制、重绘、重排")]),t._v(" "),v("h3",{attrs:{id:"网页生成过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网页生成过程"}},[t._v("#")]),t._v(" 网页生成过程：")]),t._v(" "),v("ul",[v("li",[t._v("HTML 被 HTML 解析器解析成 DOM 树")]),t._v(" "),v("li",[t._v("css 则被 css 解析器解析成 CSSOM 树")]),t._v(" "),v("li",[t._v("结合 DOM 树和 CSSOM 树，生成一棵渲染树(Render Tree)")]),t._v(" "),v("li",[t._v("生成布局（flow），即将所有渲染树的所有节点进行平面合成")]),t._v(" "),v("li",[t._v("将布局绘制（paint）在屏幕上")])]),t._v(" "),v("h3",{attrs:{id:"重排-也称回流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重排-也称回流"}},[t._v("#")]),t._v(" 重排(也称回流):")]),t._v(" "),v("p",[t._v("当 DOM 的变化影响了元素的几何信息(DOM 对象的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。重排是 DOM 元素的几何属性变化，DOM 树的结构变化，渲染树需要重新计算.")]),t._v(" "),v("p",[t._v("触发：")]),t._v(" "),v("ul",[v("li",[t._v("页面渲染初始化时（这个无法避免）")]),t._v(" "),v("li",[t._v("浏览器窗口改变尺寸")]),t._v(" "),v("li",[t._v("添加或者删除可见的 DOM 元素")]),t._v(" "),v("li",[t._v("元素尺寸改变 —— 边距、填充、边框、宽度和高度")]),t._v(" "),v("li",[t._v("元素位置改变时")]),t._v(" "),v("li",[t._v("元素内容改变时")])]),t._v(" "),v("h3",{attrs:{id:"重绘"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[t._v("#")]),t._v(" 重绘：")]),t._v(" "),v("p",[t._v("当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。")]),t._v(" "),v("p",[t._v("触发：")]),t._v(" "),v("ul",[v("li",[t._v("改变元素的 color、background、box-shadow 等属性")])]),t._v(" "),v("h3",{attrs:{id:"简述重绘和重排的关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简述重绘和重排的关系"}},[t._v("#")]),t._v(" 简述重绘和重排的关系")]),t._v(" "),v("p",[t._v("重绘不会引起重排，但重排一定会引起重绘，一个元素的重排通常会带来一系列的反应，甚至触发整个文档的重排和重绘，性能代价是高昂的。")]),t._v(" "),v("h3",{attrs:{id:"重排优化建议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重排优化建议"}},[t._v("#")]),t._v(" 重排优化建议")]),t._v(" "),v("ol",[v("li",[t._v("将多次改变样式属性的操作合并成一次操作，减少 DOM 访问。")]),t._v(" "),v("li",[t._v("如果要批量添加 DOM，可以先让元素脱离文档流，操作完后再带入文档流，这样只会触发一次重排。（fragment 元素的应用）")]),t._v(" "),v("li",[t._v("将需要多次重排的元素，position 属性设为 absolute 或 fixed，这样此元素就脱离了文档流，它的变化不会影响到其他元素。例如有动画效果的元素就最好设置为绝对定位。")]),t._v(" "),v("li",[t._v("由于 display 属性为 none 的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排。如果要对一个元素进行复杂的操作时，可以先隐藏它，操作完成后再显示。这样只在隐藏和显示时触发两次重排。")]),t._v(" "),v("li",[t._v("在内存中多次操作节点，完成后再添加到文档中去。例如要异步获取表格数据，渲染到页面。可以先取得数据后在内存中构建整个表格的 html 片段，再一次性添加到文档中去，而不是循环添加每一行。")])]),t._v(" "),v("p",[t._v("transform 不重绘，不回流是因为 transform 属于合成属性，对合成属性进行 transition/animate 动画时，将会创建一个合成层。这使得动画元素在一个独立的层中进行渲染。当元素的内容没有发生改变，就没有必要进行重绘。浏览器会通过重新复合来创建动画帧。")]),t._v(" "),v("h2",{attrs:{id:"什么是-bfc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是-bfc"}},[t._v("#")]),t._v(" 什么是 BFC？")]),t._v(" "),v("p",[t._v("BFC 是 Block Formatting Context 的缩写，即块格式化上下文。BFC 是 CSS 布局的一个概念，是一个环境，里面的元素不会影响外面的元素。")]),t._v(" "),v("h2",{attrs:{id:"bfc-的布局规则是什么-如何创建-bfc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bfc-的布局规则是什么-如何创建-bfc"}},[t._v("#")]),t._v(" BFC 的布局规则是什么？如何创建 BFC？")]),t._v(" "),v("h3",{attrs:{id:"布局规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#布局规则"}},[t._v("#")]),t._v(" 布局规则：")]),t._v(" "),v("p",[t._v("Box 是 CSS 布局的对象和基本单位，页面是由若干个 Box 组成的。元素的类型和 display 属性，决定了这个 Box 的类型。不同类型的 Box 会参与不同的 Formatting Context。")]),t._v(" "),v("h3",{attrs:{id:"创建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[t._v("#")]),t._v(" 创建：")]),t._v(" "),v("p",[t._v("浮动元素 display：inline-block position:absolute")]),t._v(" "),v("h2",{attrs:{id:"bfc-应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bfc-应用"}},[t._v("#")]),t._v(" BFC 应用？")]),t._v(" "),v("p",[t._v("应用: 1.分属于不同的 BFC 时,可以防止 margin 重叠 2.清除内部浮动 3.自适应多栏布局")]),t._v(" "),v("h2",{attrs:{id:"dom、bom-对象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dom、bom-对象"}},[t._v("#")]),t._v(" DOM、BOM 对象")]),t._v(" "),v("h3",{attrs:{id:"bom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bom"}},[t._v("#")]),t._v(" BOM")]),t._v(" "),v("p",[t._v('BOM（Browser Object Model）是指浏览器对象模型，可以对浏览器窗口进行访问和操作。使用 BOM，开发者可以移动窗口、改变状态栏中的文本以及执行其他与页面内容不直接相关的动作。\n使 JavaScript 有能力与浏览器"对话"。')]),t._v(" "),v("h3",{attrs:{id:"dom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dom"}},[t._v("#")]),t._v(" DOM")]),t._v(" "),v("p",[t._v('DOM （Document Object Model）是指文档对象模型，通过它，可以访问 HTML 文档的所有元素。\nDOM 是 W3C（万维网联盟）的标准。DOM 定义了访问 HTML 和 XML 文档的标准：\n"W3C 文档对象模型（DOM）是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。"')]),t._v(" "),v("p",[t._v("W3C DOM 标准被分为 3 个不同的部分：")]),t._v(" "),v("ul",[v("li",[t._v("核心 DOM - 针对任何结构化文档的标准模型")]),t._v(" "),v("li",[t._v("XML DOM - 针对 XML 文档的标准模型")]),t._v(" "),v("li",[t._v("HTML DOM - 针对 HTML 文档的标准模型")])]),t._v(" "),v("p",[t._v("什么是 XML DOM？")]),t._v(" "),v("p",[t._v("XML DOM 定义了所有 XML 元素的对象和属性，以及访问它们的方法。")]),t._v(" "),v("p",[t._v("什么是 HTML DOM？")]),t._v(" "),v("p",[t._v("HTML DOM 定义了所有 HTML 元素的对象和属性，以及访问它们的方法。")]),t._v(" "),v("h2",{attrs:{id:"浏览器从输入地址到渲染完成的过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器从输入地址到渲染完成的过程"}},[t._v("#")]),t._v(" 浏览器从输入地址到渲染完成的过程")])])}),[],!1,null,null,null);a.default=r.exports}}]);