(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{233:function(e,a,n){},236:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(14),o=n.n(i),l=n(15),s=n(87),c=n(78),d=n(79),u=n(88),f=n(80),g=n(89),h=n(25),m=n(86),b=n.n(m),p=n(26),w=n.n(p),v=n(17),E=n(82),_=n.n(E),x=n(84),z=n.n(x),k=n(21),y=n.n(k),j=n(83),N=n.n(j),O=n(35),C=n.n(O);var S,W=Object(v.withStyles)({window:{backgroundColor:"#FE6B8B",borderRadius:"6px"},buffer:{backgroundColor:"#FF8E53",borderRadius:"6px"}})(function(e){var a=e.row_info.next_char?e.row_info.next_char:"\u22a5";return r.a.createElement(C.a,null,r.a.createElement(y.a,{className:e.className},e.index),r.a.createElement(y.a,{className:e.className},r.a.createElement("span",null,e.row_info.head),r.a.createElement("span",{className:e.classes.window},e.row_info.window),r.a.createElement("span",{className:e.classes.buffer},e.row_info.buffer),r.a.createElement("span",null,e.row_info.tail)),r.a.createElement(y.a,{className:e.className},"<",e.row_info.offset,", ",e.row_info.distance,", ",a,">"))}),A={lztable:{marginTop:"20px",fontSize:"1.5rem !important",border:0,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"},lztableheading:(S={background:"rgb(254,107,139)"},Object(l.a)(S,"background","-moz-linear-gradient(90deg, rgba(254,107,139,1) 0%, rgba(255,142,83,1) 100%)"),Object(l.a)(S,"background","-webkit-linear-gradient(90deg, rgba(254,107,139,1) 0%, rgba(255,142,83,1) 100%)"),Object(l.a)(S,"background","linear-gradient(90deg, rgba(254,107,139,1) 0%, rgba(255,142,83,1) 100%)"),Object(l.a)(S,"backgroundAttachment","fixed"),Object(l.a)(S,"border",0),S),lztableheadingcell:{fontSize:"1.7rem"},lztablecell:{fontSize:"1.3rem",fontFamily:"Roboto Mono, Lucida Console, DejaVu Sans Mono, Monaco, monospace"}};var B=Object(v.withStyles)(A)(function(e){var a=e.dict_info.map(function(a,n){return r.a.createElement(W,{className:e.classes.lztablecell,key:n,index:n,row_info:a})}),n=["Step","Window & Buffer","<Offset, Length, Next Char>"].map(function(a,n){return r.a.createElement(y.a,{className:e.classes.lztableheadingcell,key:n},a)});return r.a.createElement(_.a,{className:e.classes.lztable},r.a.createElement(N.a,{className:e.classes.lztableheading},r.a.createElement(C.a,null,n)),r.a.createElement(z.a,null,a))}),I=n(36),L=n.n(I),F=n(27),P=n.n(F);var R=function(e){var a={fontSize:"2.5rem"};return r.a.createElement(P.a,{container:!0,spacing:24},r.a.createElement(P.a,{item:!0,xs:6,md:2},r.a.createElement(L.a,{inputProps:{style:a},InputLabelProps:{shrink:!0},type:"text",name:"window_size",label:"Window size",value:e.window_size,onChange:e.handleChange,fullWidth:!0})),r.a.createElement(P.a,{item:!0,xs:6,md:2},r.a.createElement(L.a,{inputProps:{style:a},InputLabelProps:{shrink:!0},type:"text",name:"buffer_size",label:"Buffer size",value:e.buffer_size,onChange:e.handleChange,fullWidth:!0})),r.a.createElement(P.a,{item:!0,xs:12,md:8},r.a.createElement(L.a,{inputProps:{style:a},InputLabelProps:{style:{fontSize:"1.6rem"}},type:"text",name:"input_str",label:"Input string",onChange:e.handleChange,fullWidth:!0})))};var T=Object(v.withStyles)({legend:{marginTop:"40px"},window_legend:{display:"inline-block",width:"1rem",height:"1rem",borderRadius:"6px",backgroundColor:"#FE6B8B"},buffer_legend:{display:"inline-block",width:"1rem",height:"1rem",borderRadius:"6px",backgroundColor:"#FF8E53"}})(function(e){return r.a.createElement("div",{className:e.classes.legend},r.a.createElement(w.a,{variant:"subheading",align:"left"},"Window = ",r.a.createElement("span",{className:e.classes.window_legend})),r.a.createElement(w.a,{variant:"subheading",align:"left"},"Buffer = ",r.a.createElement("span",{className:e.classes.buffer_legend})))}),M=n(85),J=n.n(M),D=(n(231),n(233),function(e){function a(e){var n;return Object(c.a)(this,a),(n=Object(u.a)(this,Object(f.a)(a).call(this,e))).state={input_str:"",window_size:6,buffer_size:4,dict:[]},n.handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(g.a)(a,e),Object(d.a)(a,[{key:"prefix_exists",value:function(e,a){for(var n=0;n<a.length;n++){var t=a.substring(0,a.length-n);if(e.includes(t)){var r=e.length-e.lastIndexOf(t),i=t.length;if(r===i)for(var o=a.substring(a.length-n,a.length),l=0;o.charAt(l)===t.charAt(l)&&l<o.length;)i++,l++;return[r,i]}}return!1}},{key:"lz",value:function(){for(var e=this,a=this.state.input_str,n=parseInt(this.state.window_size,10),t=parseInt(this.state.buffer_size,10),r=0,i=function(){var i=a.substring(0,r-n),o=a.substring(r-n,r),l=a.substring(r,r+t),c=a.substring(r+t),d=0,u=0,f=l.charAt(0),g=e.prefix_exists(o,l);g?(d=g[0],u=g[1],f=a.charAt(r+u),r=r+u+1):r++,e.setState(function(e){return{dict:Object(s.a)(e.dict).concat([{head:i,window:o,buffer:l,tail:c,offset:d,distance:u,next_char:f}])}})};r<a.length;)i()}},{key:"handleChange",value:function(e){var a;this.setState((a={},Object(l.a)(a,e.target.name,e.target.value),Object(l.a)(a,"dict",[]),a),this.lz)}},{key:"render",value:function(){return r.a.createElement("div",{style:{maxWidth:1200,padding:50},className:"App"},r.a.createElement(b.a,null),r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:J.a,className:"App-logo",alt:"logo"}),r.a.createElement(w.a,{variant:"display1"},"LZ77 compression algorithm")),r.a.createElement(R,{window_size:this.state.window_size,buffer_size:this.state.buffer_size,handleChange:this.handleChange}),r.a.createElement(T,null),r.a.createElement(B,{dict_info:this.state.dict}))}}]),a}(t.Component)),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(D,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/lempel-ziv",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/lempel-ziv","/service-worker.js");Q?(function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):U(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):U(e)})}}()},85:function(e,a,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},90:function(e,a,n){e.exports=n(236)}},[[90,2,1]]]);
//# sourceMappingURL=main.9ccfd3dc.chunk.js.map