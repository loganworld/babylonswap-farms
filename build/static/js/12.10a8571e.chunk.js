(this["webpackJsonpbabylon-frontend"]=this["webpackJsonpbabylon-frontend"]||[]).push([[12],{1005:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Ze}));var c=t(62),r=t(14),a=t(15),o=t(22),i=t(5),s=t.n(i),l=t(0),b=t.n(l),j=t(285),u=t(6),d=t(34),x=t(68),p=t(13),O=t.n(p),m=t(96),f=t(44),h=t(978);h.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new h.a(1);var k,g,v=new h.a(10512e3),y=u.e.div(k||(k=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]))),w=t(279),S=t(161),C=t(200),T=t(199),A=t(41),B=t(277),P=t(11),F=u.e.div(g||(g=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),I=function(e){var n=e.onClick,t=e.expanded;return Object(P.jsxs)(F,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(P.jsx)(f.x,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(P.jsx)(f.h,{}):Object(P.jsx)(f.g,{})]})};I.defaultProps={expanded:!1};var z,q,D,L,N,M,E,Q,H,W,X,U,V,G,J,R,_,K,$,Y,Z,ee,ne,te,ce,re,ae=I,oe=function(e){var n=e.quoteTokenAdresses,t=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===t?"ETH":n[56],a=c[56];return"".concat(r,"/").concat(a)},ie=u.e.div(z||(z=Object(c.a)(["\n  margin-top: 24px;\n"]))),se=Object(u.e)(f.o)(q||(q=Object(c.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),le=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,c=(e.removed,e.totalValueFormated,e.lpLabel),r=e.quoteTokenAdresses,a=e.quoteTokenSymbol,o=e.tokenAddresses,i=Object(B.a)(),s=oe({quoteTokenAdresses:r,quoteTokenSymbol:a,tokenAddresses:o});return Object(P.jsxs)(ie,{children:[Object(P.jsxs)(f.j,{justifyContent:"space-between",children:[Object(P.jsxs)(f.x,{children:[i(316,"Stake"),":"]}),Object(P.jsx)(se,{href:n?"https://swap.babyloanswap.finance/#/swap/".concat(o[56]):"https://swap.babyloanswap.finance/#/add/".concat(s),children:c})]}),Object(P.jsx)(f.j,{justifyContent:"flex-start",children:Object(P.jsx)(f.n,{external:!0,href:t,bold:!1,children:i(356,"View on BscScan")})})]})},be=function(){return Object(P.jsx)(f.w,{variant:"success",outline:!0,startIcon:Object(P.jsx)(f.y,{}),children:"No Fees"})},je=Object(u.e)(f.j)(D||(D=Object(c.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),ue=(Object(u.e)(f.w)(L||(L=Object(c.a)(["\n  margin-left: 4px;\n"]))),function(e){var n=e.lpLabel,t=(e.multiplier,e.risk,e.farmImage,e.tokenSymbol,e.depositFee);return Object(P.jsx)(je,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:Object(P.jsxs)(f.j,{flexDirection:"column",alignItems:"flex-end",children:[Object(P.jsx)(f.k,{mb:"4px",children:n}),Object(P.jsx)(f.j,{justifyContent:"center",children:0===t?Object(P.jsx)(be,{}):null})]})})}),de=t(983),xe=t(982),pe=(t(977),t(975)),Oe=t(976),me=function(e){var n=Object(x.b)(),t=Object(m.m)().account,c=Object(Oe.c)(),a=Object(l.useCallback)(function(){var a=Object(r.a)(s.a.mark((function r(a){var o;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(pe.i)(c,e,a,t);case 2:o=r.sent,n(Object(T.a)(t)),console.info(o);case 5:case"end":return r.stop()}}),r)})));return function(e){return a.apply(this,arguments)}}(),[t,n,c,e]);return{onStake:a}},fe=function(e){var n=Object(x.b)(),t=Object(m.m)().account,c=Object(Oe.c)(),a=Object(l.useCallback)(function(){var a=Object(r.a)(s.a.mark((function r(a){var o;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(pe.j)(c,e,a,t);case 2:o=r.sent,n(Object(T.a)(t)),console.info(o);case 5:case"end":return r.stop()}}),r)})));return function(e){return a.apply(this,arguments)}}(),[t,n,c,e]);return{onUnstake:a}},he=t(971),ke=u.e.div(N||(N=Object(c.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),ge=function(e){var n,t=e.size,c=void 0===t?"md":t,r=Object(l.useContext)(u.a).spacing;switch(c){case"lg":n=r[6];break;case"sm":n=r[2];break;default:n=r[4]}return Object(P.jsx)(ke,{size:n})},ve=u.e.div(M||(M=Object(c.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),ye=u.e.div(E||(E=Object(c.a)(["\n  flex: 1;\n  text-align: center;\n"]))),we=function(e){var n=e.children,t=b.a.Children.toArray(n).length;return Object(P.jsx)(ve,{children:b.a.Children.map(n,(function(e,n){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(ye,{children:e}),n<t-1&&Object(P.jsx)(ge,{})]})}))})},Se=u.e.div(Q||(Q=Object(c.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),Ce=u.e.input(H||(H=Object(c.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.colors.primary})),Te=function(e){var n=e.endAdornment,t=e.onChange,c=e.placeholder,r=e.startAdornment,a=e.value;return Object(P.jsxs)(Se,{children:[!!r&&r,Object(P.jsx)(Ce,{placeholder:c,value:a,onChange:t}),!!n&&n]})},Ae=u.e.div(W||(W=Object(c.a)([""]))),Be=u.e.div(X||(X=Object(c.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),Pe=u.e.div(U||(U=Object(c.a)(["\n  align-items: center;\n  display: flex;\n"]))),Fe=u.e.div(V||(V=Object(c.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),Ie=u.e.span(G||(G=Object(c.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),ze=function(e){var n=e.max,t=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,o=e.depositFeeBP,i=void 0===o?0:o,s=Object(B.a)();return Object(P.jsxs)(Ae,{children:[Object(P.jsxs)(Fe,{children:[n.toLocaleString()," ",t," ",s(526,"Available")]}),Object(P.jsx)(Te,{endAdornment:Object(P.jsxs)(Pe,{children:[Object(P.jsx)(Ie,{children:t}),Object(P.jsx)(Be,{}),Object(P.jsx)("div",{children:Object(P.jsx)(f.d,{size:"sm",onClick:r,children:s(452,"Max")})})]}),onChange:c,placeholder:"0",value:a}),i>0?Object(P.jsxs)(Fe,{children:[s(10001,"Deposit Fee"),": ",new h.a(a||0).times(i/1e4).toString()," ",t]}):null]})},qe=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,a=e.tokenName,i=void 0===a?"":a,b=e.depositFeeBP,j=void 0===b?0:b,u=Object(l.useState)(""),d=Object(o.a)(u,2),x=d[0],p=d[1],O=Object(l.useState)(!1),m=Object(o.a)(O,2),h=m[0],k=m[1],g=Object(B.a)(),v=Object(l.useMemo)((function(){return Object(he.b)(n)}),[n]),y=Object(l.useCallback)((function(e){p(e.currentTarget.value)}),[p]),w=Object(l.useCallback)((function(){p(v)}),[v,p]);return Object(P.jsxs)(f.s,{title:"".concat(g(316,"Deposit")," ").concat(i," Tokens"),onDismiss:c,children:[Object(P.jsx)(ze,{value:x,onSelectMax:w,onChange:y,max:v,symbol:i,depositFeeBP:j}),Object(P.jsxs)(we,{children:[Object(P.jsx)(f.d,{variant:"secondary",onClick:c,children:g(462,"Cancel")}),Object(P.jsx)(f.d,{disabled:h,onClick:Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,t(x);case 3:k(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:h?g(488,"Pending Confirmation"):g(464,"Confirm")})]})]})},De=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,a=e.tokenName,i=void 0===a?"":a,b=Object(l.useState)(""),j=Object(o.a)(b,2),u=j[0],d=j[1],x=Object(l.useState)(!1),p=Object(o.a)(x,2),O=p[0],m=p[1],h=Object(B.a)(),k=Object(l.useMemo)((function(){return Object(he.b)(c)}),[c]),g=Object(l.useCallback)((function(e){d(e.currentTarget.value)}),[d]),v=Object(l.useCallback)((function(){d(k)}),[k,d]);return Object(P.jsxs)(f.s,{title:"Withdraw ".concat(i),onDismiss:t,children:[Object(P.jsx)(ze,{onSelectMax:v,onChange:g,value:u,max:k,symbol:i}),Object(P.jsxs)(we,{children:[Object(P.jsx)(f.d,{variant:"secondary",onClick:t,children:h(462,"Cancel")}),Object(P.jsx)(f.d,{disabled:O,onClick:Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,n(u);case 3:m(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:O?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})},Le=u.e.div(J||(J=Object(c.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),Ne=function(e){var n=e.stakedBalance,t=e.tokenBalance,c=e.tokenName,r=e.pid,a=e.depositFeeBP,i=Object(B.a)(),s=me(r).onStake,l=fe(r).onUnstake,b=Object(he.a)(n),j=b.toLocaleString(),u=Object(f.A)(Object(P.jsx)(qe,{max:t,onConfirm:s,tokenName:c,depositFeeBP:a})),d=Object(o.a)(u,1)[0],x=Object(f.A)(Object(P.jsx)(De,{max:n,onConfirm:l,tokenName:c})),p=Object(o.a)(x,1)[0];return Object(P.jsxs)(f.j,{justifyContent:"space-between",alignItems:"center",children:[Object(P.jsx)(f.k,{color:0===b?"textDisabled":"text",children:j}),0===b?Object(P.jsx)(f.d,{onClick:d,children:i(999,"Stake")}):Object(P.jsxs)(Le,{children:[Object(P.jsx)(f.l,{variant:"tertiary",onClick:p,mr:"6px",children:Object(P.jsx)(f.r,{color:"primary"})}),Object(P.jsx)(f.l,{variant:"tertiary",onClick:d,children:Object(P.jsx)(f.a,{color:"primary"})})]})]})},Me=t(981),Ee=u.e.div(R||(R=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),Qe=function(e){var n=e.earnings,t=e.pid,c=Object(B.a)(),a=Object(l.useState)(!1),i=Object(o.a)(a,2),b=i[0],j=i[1],u=Object(Me.b)(t).onReward,d=me(t).onStake,x=Object(he.a)(n);x.toLocaleString();return Object(P.jsx)(f.j,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:Object(P.jsxs)(Ee,{children:[12===t?Object(P.jsx)(f.d,{disabled:0===x||b,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,d(x.toString());case 3:j(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(P.jsx)(f.d,{disabled:0===x||b,onClick:Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,u();case 3:j(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})})},He=u.e.div(_||(_=Object(c.a)(["\n  padding-top: 16px;\n"]))),We=function(e){var n=e.farm,t=e.ethereum,c=e.account,a=Object(B.a)(),i=Object(l.useState)(!1),b=Object(o.a)(i,2),j=b[0],u=b[1],d=Object(S.a)(n.pid),p=d.pid,O=d.lpAddresses,h=d.tokenAddresses,k=d.isTokenOnly,g=d.depositFeeBP,v=Object(S.b)(p),y=v.allowance,w=v.tokenBalance,C=v.stakedBalance,A=v.earnings,F=O[56],I=h[56],z=n.lpSymbol.toUpperCase(),q=c&&y&&y.isGreaterThan(0),D=function(e){var n=Object(x.b)(),t=Object(m.m)().account,c=Object(Oe.c)();return{onApprove:Object(l.useCallback)(Object(r.a)(s.a.mark((function r(){var a;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(pe.a)(e,c,t);case 3:return a=r.sent,n(Object(T.a)(t)),r.abrupt("return",a);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",!1);case 11:case"end":return r.stop()}}),r,null,[[0,8]])}))),[t,n,e,c])}}(Object(l.useMemo)((function(){return k?Object(de.a)(t,I):Object(de.a)(t,F)}),[t,F,I,k])),L=D.onApprove,N=Object(l.useCallback)(Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,L();case 4:u(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[L]);return Object(P.jsxs)(He,{children:[Object(P.jsxs)(f.j,{children:[Object(P.jsx)(f.x,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"".concat(n.tokenSymbol,",").concat(n.quoteTokenSymbol)}),Object(P.jsx)(f.x,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(999,"Earned")})]}),Object(P.jsx)(Qe,{earnings:A,pid:p}),Object(P.jsxs)(f.j,{children:[Object(P.jsx)(f.x,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:z}),Object(P.jsx)(f.x,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(999,"Staked")})]}),c?q?Object(P.jsx)(Ne,{stakedBalance:C,tokenBalance:w,tokenName:z,pid:p,depositFeeBP:g}):Object(P.jsx)(f.d,{mt:"8px",fullWidth:!0,disabled:j,onClick:N,children:a(999,"Approve Contract")}):Object(P.jsx)(xe.a,{mt:"8px",fullWidth:!0})]})},Xe=Object(u.f)(K||(K=Object(c.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),Ue=u.e.div($||($=Object(c.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 255, 0, 1) 0%,\n  rgba(255, 255, 255, 1) 10%,\n  rgba(255, 0, 255, 1) 20%,\n  rgba(255, 0, 0, 1) 30%,\n  rgba(0, 255, 255, 1) 40%,\n  rgba(0, 0, 255, 1) 50%,\n  rgba(0, 255, 0, 1) 60%,\n  rgba(255, 255, 0, 1) 70%,\n  rgba(255, 255, 255, 1) 80%,\n  rgba(255, 0, 255, 1) 90%,\n  rgba(0, 0, 255, 1) 100%);\n  background-size: 600% 600%;\n  animation: "," 5s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),Xe),Ve=u.e.div(Y||(Y=Object(c.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),Ge=u.e.div(Z||(Z=Object(c.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Je=u.e.div(ee||(ee=Object(c.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),Re=function(e){var n=e.farm,t=e.removed,c=e.cakePrice,r=e.bnbPrice,a=e.ethereum,i=e.account,s=Object(B.a)(),b=Object(l.useState)(!1),j=Object(o.a)(b,2),u=j[0],d=j[1],x=n.isTokenOnly?n.tokenSymbol.toLowerCase():"".concat(n.tokenSymbol.toLowerCase(),"-").concat(n.quoteTokenSymbol.toLowerCase()),p=Object(l.useMemo)((function(){return n.lpTotalInQuoteToken?n.quoteTokenSymbol===A.b.BNB?r.times(n.lpTotalInQuoteToken):n.quoteTokenSymbol===A.b.CAKE?c.times(n.lpTotalInQuoteToken):n.lpTotalInQuoteToken:null}),[r,c,n.lpTotalInQuoteToken,n.quoteTokenSymbol]),m=p?"$".concat(Number(p).toLocaleString(void 0,{maximumFractionDigits:0})):"-",h=n.lpSymbol,k="".concat(n.tokenSymbol,",").concat(n.quoteTokenSymbol),g=(n.apy&&n.apy.times(new O.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),n.quoteTokenAdresses),v=n.quoteTokenSymbol,y=n.tokenAddresses,w=n.risk;return Object(P.jsxs)(Ve,{children:["XBT"===n.tokenSymbol&&Object(P.jsx)(Ue,{}),Object(P.jsx)(ue,{lpLabel:h,multiplier:n.multiplier,risk:w,depositFee:n.depositFeeBP,farmImage:x,tokenSymbol:n.tokenSymbol}),Object(P.jsxs)(f.j,{justifyContent:"space-between",children:[Object(P.jsxs)(f.x,{children:[s(318,"Earn"),":"]}),Object(P.jsx)(f.x,{bold:!0,children:k})]}),Object(P.jsxs)(f.j,{justifyContent:"space-between",children:[Object(P.jsxs)(f.x,{style:{fontSize:"24px"},children:[s(10001,"Deposit Fee"),":"]}),Object(P.jsxs)(f.x,{bold:!0,style:{fontSize:"24px"},children:[0,"%"]})]}),Object(P.jsx)(We,{farm:n,ethereum:a,account:i}),Object(P.jsx)(Ge,{}),Object(P.jsx)(ae,{onClick:function(){return d(!u)},expanded:u}),Object(P.jsx)(Je,{expanded:u,children:Object(P.jsx)(le,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://bscscan.com/token/".concat(n.tokenAddresses[56]):"https://bscscan.com/token/".concat(n.lpAddresses[56]),totalValueFormated:m,lpLabel:h,quoteTokenAdresses:g,quoteTokenSymbol:v,tokenAddresses:y})})]})},_e=function(e){e.stakedOnly,e.setStakedOnly,e.isPublic;var n=e.setIsPublic,t=Object(d.g)(),c=(t.url,t.isExact,Object(B.a)());return Object(P.jsxs)(Ke,{children:[Object(P.jsx)(f.d,{style:{height:"50px"},onClick:function(){return n(!0)},children:c(698,"Public")}),Object(P.jsx)(f.d,{style:{height:"50px"},onClick:function(){return n(!1)},children:c(700,"Personal")})]})},Ke=u.e.div(ne||(ne=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),$e=(u.e.div(te||(te=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),f.x),u.e.div(ce||(ce=Object(c.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle}))),Ye=t(294),Ze=function(e){var n=Object(d.g)().path,t=Object(B.a)(),c=Object(S.c)(),i=Object(S.f)(),b=Object(S.e)(),u=Object(m.m)(),p=u.account,h=u.ethereum,k=e.tokenMode,g=Object(x.b)(),F=Object(C.a)().fastRefresh;Object(l.useEffect)((function(){p&&g(Object(T.a)(p))}),[p,g,F]);var I=Object(l.useState)(""),z=Object(o.a)(I,2),q=z[0],D=z[1],L=Object(l.useState)(!1),N=Object(o.a)(L,2),M=N[0],E=N[1],Q=Object(l.useState)(!0),H=Object(o.a)(Q,2),W=H[0],X=H[1],U=Object(l.useState)([]),V=Object(o.a)(U,2),G=V[0],J=V[1],R=c.filter((function(e){return!!e.isTokenOnly===!!k&&"0X"!==e.multiplier})),_=(c.filter((function(e){return!!e.isTokenOnly===!!k&&"0X"===e.multiplier})),R.filter((function(e){return e.userData&&new O.a(e.userData.stakedBalance).isGreaterThan(0)}))),K=Object(l.useCallback)((function(e,n){return e.map((function(e){var n=new O.a(e.eggPerBlock||1).times(new O.a(e.poolWeight)).div(new O.a(10).pow(18)).times(v),t=i.times(n),c=new O.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===A.b.BNB&&(c=c.times(b)),c.comparedTo(0)>0&&(t=t.div(c)),Object(a.a)(Object(a.a)({},e),{},{apy:t})})).map((function(e){return Object(P.jsx)(Re,{farm:e,removed:n,bnbPrice:b,cakePrice:i,ethereum:h,account:p},e.pid)}))}),[b,p,i,h]),$=function(){var e=Object(r.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Ye.c)(q);case 3:return n=e.sent,console.log("farmIndex",n),e.next=7,Object(Ye.b)(n);case 7:t=e.sent,console.log("farm",t),J([t]),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("handle find error",e.t0.message),j.NotificationManager.error("Invalide address","Find Farm failed");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(P.jsxs)(w.a,{children:[Object(P.jsx)(f.k,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:t(320,"Stake LP tokens to earn tokens")}),Object(P.jsx)(f.k,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:"All add listed Pair on Babylonswap has farm and you can earn tokens by staking on it"}),Object(P.jsx)(_e,{stakedOnly:M,setStakedOnly:E,isPublic:W,setIsPublic:X}),W?Object(P.jsxs)("div",{children:[Object(P.jsx)($e,{}),Object(P.jsx)(y,{children:Object(P.jsx)(d.a,{exact:!0,path:"".concat(n),children:K(M?_:R,!1)})})]}):Object(P.jsxs)("div",{children:[Object(P.jsx)($e,{}),Object(P.jsx)(y,{children:Object(P.jsxs)(en,{children:[Object(P.jsx)(f.m,{value:q,onChange:function(e){return D(e.target.value)}}),Object(P.jsx)(f.d,{style:{height:"50px"},onClick:$,children:"Find"})]})}),Object(P.jsx)(y,{children:K(G,!1)})]})]})},en=u.e.div(re||(re=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"])))}}]);
//# sourceMappingURL=12.10a8571e.chunk.js.map