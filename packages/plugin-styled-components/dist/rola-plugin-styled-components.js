require("react");var e=require("styled-components"),t=new Map;module.exports=function(n){return void 0===n&&(n={}),{createConfig:function(e){confing.plugins.push("babel-plugin-styled-components")},wrapApp:function(n){var r=n.component,o=n.context,a=new e.ServerStyleSheet;return t.set(o.pathname,a),a.collectStyles(r)},appDidRender:function(e){var n=t.get(e.context.pathname);if(!n)return{};var r=n.getStyleTags();return n.seal(),{style:r}}}};
//# sourceMappingURL=rola-plugin-styled-components.js.map
