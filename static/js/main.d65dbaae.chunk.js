(this["webpackJsonpreact-memo-game"]=this["webpackJsonpreact-memo-game"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/faceDown.f7583149.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.cd5f27f2.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.32d87486.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.baaa08e4.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.9713d1f6.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.8344ca5d.jpg"},function(e,t,a){e.exports=a.p+"static/media/6.81886094.jpg"},function(e,t,a){e.exports=a.p+"static/media/7.dd8cc4a0.jpg"},function(e,t,a){e.exports=a.p+"static/media/8.94eb3343.jpg"},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),c=a.n(r),o=(a(19),a(1)),l=a(3),s=a.n(l);var m=function(e){var t=e.isFaceDown,a=e.handleSquareClick,n=e.id,r=e.isFaded,c=e.image,o=e.isBlocked,l={maxWidth:"100%",maxHeight:"100%",opacity:r?.5:1,transition:"0.3s ease-in-out",boxShadow:!t&&"0px 0px 29px -2px rgba(0,0,0,0.75)",cursor:o?"wait":"pointer"};return i.a.createElement("img",{alt:"alt",src:t?s.a:c,onClick:function(){t&&a(n)},style:l})},u=a(4),p=a.n(u),d=a(5),g=a.n(d),f=a(6),h=a.n(f),y=a(7),b=a.n(y),x=a(8),E=a.n(x),v=a(9),w=a.n(v),j=a(10),S=a.n(j),O=a(11),C=a.n(O),F=a(22),k=[{image:p.a,name:"pic1"},{image:g.a,name:"pic2"},{image:h.a,name:"pic3"},{image:b.a,name:"pic4"},{image:E.a,name:"pic5"},{image:w.a,name:"pic6"},{image:S.a,name:"pic7"},{image:C.a,name:"pic8"},{image:p.a,name:"pic1"},{image:g.a,name:"pic2"},{image:h.a,name:"pic3"},{image:b.a,name:"pic4"},{image:E.a,name:"pic5"},{image:w.a,name:"pic6"},{image:S.a,name:"pic7"},{image:C.a,name:"pic8"}],M=k.map((function(e){return{image:e.image,name:e.name,isFaceDown:!0,id:Object(F.a)(),isFaded:!1}})),D={fontSize:"15px",width:"100%",marginBottom:"50px"},B={width:"100px",margin:"0 auto",textAlign:"center",fontWeight:"300",marginBottom:0,fontSize:"25px",borderBottom:"2px solid rgba(255, 255, 255, 0.7)"},z={width:"50px",height:"50px",marginRight:"10px"},U={display:"flex",alignItems:"center",height:"100%",marginBottom:"10px"},P={display:"flex",width:"100%",justifyContent:"space-between"},W={listStyle:"none",width:"100%"},I={textAlign:"center",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0"};var R=function(){var e=D,t=B,a=P,n=W,r=I,c=z,o=U;return i.a.createElement("div",{style:e},i.a.createElement("h3",{style:t},"Credits"),i.a.createElement("div",{style:a},i.a.createElement("div",null,i.a.createElement("ul",{style:n},i.a.createElement("li",{style:o},i.a.createElement("img",{alt:"creditMiniature",style:c,src:k[0].image}),"Photo by Mikey Wu on Unsplash"),i.a.createElement("li",{style:o},i.a.createElement("img",{alt:"creditMiniature",style:c,src:k[1].image}),"Photo by FOODISM360 on Unsplash"),i.a.createElement("li",{style:o},i.a.createElement("img",{alt:"creditMiniature",style:c,src:k[2].image}),"Photo by Jeff Kingma on Unsplash"),i.a.createElement("li",{style:o},i.a.createElement("img",{alt:"creditMiniature",style:c,src:k[3].image}),"Photo by kalpesh patel on Unsplash"))),i.a.createElement("div",null,i.a.createElement("ul",{style:{listStyle:"none",width:"100%"}},i.a.createElement("li",{style:o},i.a.createElement("img",{alt:"creditMiniature",style:c,src:k[4].image}),"Photo by LuAnn Hunt on Unsplash"),i.a.createElement("li",{style:o},i.a.createElement("img",{alt:"creditMiniature",style:c,src:k[5].image}),"Photo by Lukasz Szmigiel on Unsplash"),i.a.createElement("li",{style:o},i.a.createElement("img",{alt:"creditMiniature",style:c,src:k[6].image}),"Photo by Ralf Skirr on Unsplash"),i.a.createElement("li",{style:o},i.a.createElement("img",{alt:"creditMiniature",style:c,src:k[7].image}),"Photo by Simon Matzinger on Unsplash")))),i.a.createElement("p",{style:r},i.a.createElement("img",{alt:"creditMiniature",style:c,src:s.a}),"Photo by Dulcey Lima on Unsplash"))},A={width:"40vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",fontSize:30,color:"rgba(255, 255, 255, 0.7)"},G={borderBottom:"2px solid rgba(255, 255, 255, 0.7)",paddingBottom:"5px",letterSpacing:"2px",fontSize:"50px",margin:"60px 0 20px 0"},H={borderBottom:"2px solid white",fontSize:40},J={width:200,height:50,borderRadius:"5px",outline:"none",border:"1px solid rgba(255, 255, 255, 0.8)",color:"rgba(255, 255, 255, 0.8)",fontSize:"30px",letterSpacing:"2px",lineHeight:"20px",backgroundColor:"rgba(255, 255, 255, 0.2)",cursor:"pointer"},L={display:"flex",flexDirection:"column"},q=function(e){return{margin:"20px 0",fontSize:"40px",paddingBottom:"2px",letterSpacing:"1 px",fontWeight:e.isCurrent?500:300,borderBottom:e.isCurrent?"2px solid rgba(255, 255, 255, 0.8)":"none"}};var T=function(e){var t=e.players,a=e.handleRestart,n=e.isFinished,r=Object(o.a)(t,2),c=r[0],l=r[1],s=A,m=G,u=q,p=J,d=H,g=L,f="";return f=c.score>l.score?c.name:c.score<l.score?l.name:"Draw",i.a.createElement("div",{style:s},i.a.createElement("p",{style:m},"Unsplash Memory Game"),n&&i.a.createElement("p",{style:d},"Draw"===f?"It's a draw":"Winner: ".concat(f)),i.a.createElement("div",{style:g},i.a.createElement("p",{style:u(c)},c.name,": ",i.a.createElement("span",null,c.score)),i.a.createElement("p",{style:u(l)},l.name,": ",i.a.createElement("span",null,l.score))),i.a.createElement("button",{onClick:a,style:p},"Restart"),i.a.createElement(R,null))},K=a(2),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["Wiktor","Gosia"],t=e.map((function(e){return{name:e,score:0,isCurrent:!1}}));t[0].isCurrent=!0;var a=Object(n.useState)(t),i=Object(o.a)(a,2),r=i[0],c=i[1],l=function(e){var t=r.map((function(t){return t.name===e?Object(K.a)({},t,{score:t.score+1}):t}));c(t)},s=function(){var e=r.map((function(e){return Object(K.a)({},e,{isCurrent:!e.isCurrent})}));c(e)},m=function(){var e=r.map((function(e){return Object(K.a)({},e,{isCurrent:!1,score:0})}));e[0].isCurrent=!0,c(e)};return[r,l,s,m]},N=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e},Q=function(e){var t=N(e),a=Object(n.useState)(t),i=Object(o.a)(a,2),r=i[0],c=i[1];return[r,function(){var t=N(e);c(t)},function(e){var t=r.map((function(t){return t.id===e?Object(K.a)({},t,{isFaceDown:!1}):t}));c(t)},function(e){var t=r.map((function(t){return t.name===e[0].name?Object(K.a)({},t,{isFaded:!0}):t}));c(t)},function(){var e=r.map((function(e){return e.isFaded?e:Object(K.a)({},e,{isFaceDown:!0})}));c(e)}]};var V=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(o.a)(c,2),s=l[0],u=l[1],p=$(),d=Object(o.a)(p,4),g=d[0],f=d[1],h=d[2],y=d[3],b=Q(M),x=Object(o.a)(b,5),E=x[0],v=x[1],w=x[2],j=x[3],S=x[4],O=function(e){a||w(e)};return Object(n.useEffect)((function(){var e=E.filter((function(e){return!1===e.isFaceDown&&!1===e.isFaded}));2===e.length&&(e[0].name===e[1].name?function(e){j(e),f(g.find((function(e){return!0===e.isCurrent})).name)}(e):(r(!0),setTimeout((function(){S(),h(),r(!1)}),800)))})),Object(n.useEffect)((function(){E.every((function(e){return e.isFaded}))&&u(!0)}),[E]),i.a.createElement(i.a.Fragment,null,i.a.createElement(T,{handleRestart:function(){y(),v(),u(!1)},players:g,isFinished:s}),i.a.createElement("div",{style:{width:"95vh",height:"95vh",display:"grid",gridTemplateColumns:"repeat(4, 23%)",gridGap:"2.67% 2.67%"}},E.map((function(e){return i.a.createElement(m,{key:e.id,id:e.id,image:e.image,name:e.name,isFaceDown:e.isFaceDown,isFaded:e.isFaded,handleSquareClick:O,isBlocked:a})}))))};var X=function(){return i.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"space-evenly",fontFamily:"Roboto",fontWeight:"300",backgroundColor:"rgba(0,0,0)"}},i.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.d65dbaae.chunk.js.map