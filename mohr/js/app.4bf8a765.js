(function(){"use strict";var a={6725:function(a,t,e){var l=e(455),n=e(8111),i=e.n(n),o=e(4743),r=e(6904);const u={class:"centerDiv"};function s(a,t,e,l,n,i){const o=(0,r.g2)("CircleForm"),s=(0,r.g2)("a-col"),m=(0,r.g2)("MainStree"),c=(0,r.g2)("a-tab-pane"),f=(0,r.g2)("ObliqueFomulate"),d=(0,r.g2)("ObliqueChart"),g=(0,r.g2)("a-image"),b=(0,r.g2)("a-tabs"),p=(0,r.g2)("a-row"),v=(0,r.g2)("a-card");return(0,r.uX)(),(0,r.CE)("div",u,[(0,r.bF)(v,{class:"mainCard",title:"两轴莫尔圆计算"},{default:(0,r.k6)((()=>[(0,r.bF)(p,null,{default:(0,r.k6)((()=>[(0,r.bF)(s,{span:10},{default:(0,r.k6)((()=>[(0,r.bF)(o)])),_:1}),(0,r.bF)(s,{span:14},{default:(0,r.k6)((()=>[(0,r.bF)(b,{"default-active-key":"1"},{default:(0,r.k6)((()=>[(0,r.bF)(c,{key:"1",title:"主应力"},{default:(0,r.k6)((()=>[(0,r.bF)(m)])),_:1}),(0,r.bF)(c,{key:"2",title:"斜截面应力公式"},{default:(0,r.k6)((()=>[(0,r.bF)(f)])),_:1}),(0,r.bF)(c,{key:"3",title:"斜截面应力图表"},{default:(0,r.k6)((()=>[(0,r.bF)(d)])),_:1}),(0,r.bF)(c,{key:"4",title:"说明"},{default:(0,r.k6)((()=>[(0,r.bF)(g,{width:"100%",src:"./images/mirecircel_desc.png"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}const m=a=>((0,r.Qi)("data-v-602d0404"),a=a(),(0,r.jt)(),a),c={class:"container"},f={class:"centerDiv"},d=m((()=>(0,r.Lk)("div",{class:"centerDiv"},[(0,r.Lk)("div",{class:"imageTitle"},"图1. 两轴应力状态")],-1))),g={class:"twoDiv"},b={class:"twoDiv"},p={class:"twoDiv"},v={class:"centerDiv",style:{"padding-top":"10px"}},_=m((()=>(0,r.Lk)("div",null,"请输入应力值",-1)));function h(a,t,e,l,n,i){const o=(0,r.g2)("a-image"),u=(0,r.g2)("a-col"),s=(0,r.g2)("vue-mathjax"),m=(0,r.g2)("a-input-number"),h=(0,r.g2)("a-row"),k=(0,r.g2)("a-button"),F=(0,r.g2)("a-form"),$=(0,r.g2)("a-modal");return(0,r.uX)(),(0,r.CE)("div",c,[(0,r.bF)(h,null,{default:(0,r.k6)((()=>[(0,r.bF)(u,{span:24},{default:(0,r.k6)((()=>[(0,r.Lk)("div",f,[(0,r.bF)(o,{width:"350",src:"./images/morcercle.png"})])])),_:1}),(0,r.bF)(u,null,{default:(0,r.k6)((()=>[d])),_:1}),(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(F,{model:n.form,style:{"padding-top":"20px"}},{default:(0,r.k6)((()=>[(0,r.bF)(h,{class:"rowForm"},{default:(0,r.k6)((()=>[(0,r.bF)(u,{span:24},{default:(0,r.k6)((()=>[(0,r.Lk)("div",g,[(0,r.bF)(s,{formula:n.sigmaX},null,8,["formula"]),(0,r.bF)(m,{modelValue:n.form.sigmaX,"onUpdate:modelValue":t[0]||(t[0]=a=>n.form.sigmaX=a),placeholder:"Please Enter"},null,8,["modelValue"])])])),_:1})])),_:1}),(0,r.bF)(h,{class:"rowForm"},{default:(0,r.k6)((()=>[(0,r.bF)(u,{span:24},{default:(0,r.k6)((()=>[(0,r.Lk)("div",b,[(0,r.bF)(s,{formula:n.sigmaY},null,8,["formula"]),(0,r.bF)(m,{modelValue:n.form.sigmaY,"onUpdate:modelValue":t[1]||(t[1]=a=>n.form.sigmaY=a),placeholder:"Please Enter"},null,8,["modelValue"])])])),_:1})])),_:1}),(0,r.bF)(h,{class:"rowForm"},{default:(0,r.k6)((()=>[(0,r.bF)(u,{span:24},{default:(0,r.k6)((()=>[(0,r.Lk)("div",p,[(0,r.bF)(s,{formula:n.tauX},null,8,["formula"]),(0,r.bF)(m,{modelValue:n.form.tauX,"onUpdate:modelValue":t[2]||(t[2]=a=>n.form.tauX=a),placeholder:"Please Enter"},null,8,["modelValue"])])])),_:1})])),_:1}),(0,r.bF)(h,null,{default:(0,r.k6)((()=>[(0,r.bF)(u,{span:24},{default:(0,r.k6)((()=>[(0,r.Lk)("div",v,[(0,r.bF)(k,{type:"primary",onClick:i.onClick},{default:(0,r.k6)((()=>[(0,r.eW)("一键计算")])),_:1},8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),(0,r.bF)($,{visible:n.visible,"onUpdate:visible":t[3]||(t[3]=a=>n.visible=a),onOk:i.handleClick,onCancel:i.handleClick},{title:(0,r.k6)((()=>[(0,r.eW)(" 错误 ")])),default:(0,r.k6)((()=>[_])),_:1},8,["visible","onOk","onCancel"])])}var k=e(2852);const F=(0,k.A)();var $=F,x={methods:{onClick(){if(0===this.form.sigmaX&&0===this.form.sigmaY&&0===this.form.tauX)return void(this.visible=!0);const a=this.form.sigmaX,t=this.form.sigmaY,e=this.form.tauX;$.emit("p-click",{sigmaX:a,sigmaY:t,tauX:e})},handleClick(){this.visible=!0}},data(){const a={sigmaX:0,sigmaY:0,tauX:0};return{sigmaX:"$\\sigma_{x}$",sigmaY:"$\\sigma_{y}$",tauX:"$\\tau_{x}$",tauY:"$\\tau_{y}$",form:a,visible:!1}}},y=e(7782);const w=(0,y.A)(x,[["render",h],["__scopeId","data-v-602d0404"]]);var X=w,M=e(5912);const C={class:"formula"},O={class:"formula"},L={class:"formula"},j={class:"formula"},Y="\\left.\\begin{matrix}\n\\tau_{max}\n \\\\\n\\tau_{min}\n\\end{matrix}\\right\\} = \\pm \\sqrt{\\left ( \\frac{\\sigma_x - \\sigma_y}{2}  \\right )^2 + \\tau_{x}^{2} }",S="\\beta =\\frac{1}{2}arctan\\frac{\\sigma_x - \\sigma_y}{2\tau_x}";var q={__name:"obliquefomulate",setup(a){const t=(0,M.KR)("$$\\sigma_{\\alpha} = \\frac{\\sigma_x + \\sigma_y}{2} + \\frac{\\sigma_x - \\sigma_y }{2}cos2\\alpha -\\tau_xsin2\\alpha$$"),e=(0,M.KR)("$$\\tau_{\\alpha} = \\frac{\\sigma_{x} - \\sigma_{y}}{2}sin2\\alpha + \\tau_{x}cos2\\alpha$$"),l=(0,M.KR)(`$$${Y}$$`),n=(0,M.KR)(`$$${S}$$`);return $.on("p-click",(a=>{const{sigmaX:t,sigmaY:e,tauX:i}=a,o=Math.sqrt(Math.pow((t-e)/2,2)+i*i).toFixed(2),r=-o,u=.5*Math.atan((t-e)/(2*i))*180/Math.PI;l.value=`$$${Y} = \\left\\{\\begin{matrix}\n${o}\n \\\\\n${r}\n\\end{matrix}\\right. $$`,n.value=`$$${S}=${u.toFixed(2)}°$$`})),(a,i)=>{const o=(0,r.g2)("vue-mathjax"),u=(0,r.g2)("a-col"),s=(0,r.g2)("a-row");return(0,r.uX)(),(0,r.Wv)(s,null,{default:(0,r.k6)((()=>[(0,r.bF)(u,{span:24},{default:(0,r.k6)((()=>[(0,r.Lk)("div",C,[(0,r.bF)(o,{formula:t.value},null,8,["formula"])])])),_:1}),(0,r.bF)(u,{span:24},{default:(0,r.k6)((()=>[(0,r.Lk)("div",O,[(0,r.bF)(o,{formula:e.value},null,8,["formula"])])])),_:1}),(0,r.bF)(u,{span:24},{default:(0,r.k6)((()=>[(0,r.Lk)("div",L,[(0,r.bF)(o,{formula:l.value},null,8,["formula"])])])),_:1}),(0,r.bF)(u,{span:24},{default:(0,r.k6)((()=>[(0,r.Lk)("div",j,[(0,r.bF)(o,{formula:n.value},null,8,["formula"])])])),_:1})])),_:1})}}};const A=(0,y.A)(q,[["__scopeId","data-v-117ef206"]]);var P=A;const V={class:"formula"},E={class:"formula"},K="\\left.\\begin{matrix}\n\\sigma_{1}\n \\\\\n\\sigma_{2}\n\\end{matrix}\\right\\} = \\frac{\\sigma_x+\\sigma_y}{2}\\pm \\sqrt{\\left (\\frac{\\sigma_x-\\sigma_y}{2}  \\right )^2+\\tau _{x}^{2} }",R="\\alpha_{0} = -\\frac{1}{2} arctan\\frac{2\\tau_x}{\\sigma_{x} - \\sigma_{y}}";var D={__name:"MainStree",setup(a){const t=(0,M.KR)("$$"+K+"$$"),e=(0,M.KR)(`$$${R}$$`);return $.on("p-click",(a=>{const{sigmaX:l,sigmaY:n,tauX:i}=a,o=(l+n)/2+Math.sqrt(Math.pow((l-n)/2,2)+i*i),r=(l+n)/2-Math.sqrt(Math.pow((l-n)/2,2)+i*i);t.value="$$"+K+`= \\left\\{\\begin{matrix}\n${o.toFixed(2)}\n \\\\\n${r.toFixed(2)}\n\\end{matrix}\\right.$$`;let u=-.5*Math.atan(2*i/(l-n));Math.abs(u)<1e-10&&(u=0);const s=(u*(180/Math.PI)).toFixed(2);e.value="$$"+R+`=${s}°$$`})),(a,l)=>{const n=(0,r.g2)("vue-mathjax"),i=(0,r.g2)("a-col"),o=(0,r.g2)("a-row");return(0,r.uX)(),(0,r.Wv)(o,null,{default:(0,r.k6)((()=>[(0,r.bF)(i,{span:24},{default:(0,r.k6)((()=>[(0,r.Lk)("div",V,[(0,r.bF)(n,{formula:t.value},null,8,["formula"])])])),_:1}),(0,r.bF)(i,{span:24},{default:(0,r.k6)((()=>[(0,r.Lk)("div",E,[(0,r.bF)(n,{formula:e.value},null,8,["formula"])])])),_:1})])),_:1})}}};const T=(0,y.A)(D,[["__scopeId","data-v-dad6226e"]]);var I=T,U=(e(6043),e(7264)),W=e(2682),Q=e(2699),z=e(59),B=e(7087),G=e(392),H=e(5957),J=e(1766),N={__name:"obliquechart",setup(a){(0,U.Y)([Q.a,W.a,z.a,B.a,G.a,H.a]);const t=(0,M.Kh)({animation:!1,grid:{top:40,left:50,right:40,bottom:50},tooltip:{trigger:"axis"},legend:{orient:"vertical",right:30,top:35},xAxis:{name:"角度",min:0,max:180,minorTick:{show:!0},minorSplitLine:{show:!0}},yAxis:{name:"应力",minorTick:{show:!0},minorSplitLine:{show:!0}},series:[{type:"line",showSymbol:!1,clip:!0,name:"正应力",data:[]},{type:"line",showSymbol:!1,clip:!0,name:"剪应力",data:[]}]});M.KR;return $.on("p-click",(a=>{const{sigmaX:e,sigmaY:l,tauX:n}=a,i=[],o=[];for(let t=0;t<=180;t++){const a=t*Math.PI/180,r=(e+l)/2+(e-l)/2*Math.cos(2*a)-n*Math.sin(2*a),u=(e-l)/2*Math.sin(2*a)+n*Math.cos(2*a);i.push([t,r]),o.push([t,u])}t.series[0].data=i,t.series[1].data=o})),(a,e)=>((0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)((0,M.R1)(J.Ay),{option:t,style:{height:"400px"}},null,8,["option"])]))}};const Z=N;var aa=Z,ta={name:"App",components:{CircleForm:X,ObliqueFomulate:P,MainStree:I,ObliqueChart:aa}};const ea=(0,y.A)(ta,[["render",s]]);var la=ea;e(5931);(0,l.Ef)(la).use(i()).use(o.A).mount("#app")}},t={};function e(l){var n=t[l];if(void 0!==n)return n.exports;var i=t[l]={exports:{}};return a[l].call(i.exports,i,i.exports,e),i.exports}e.m=a,function(){var a=[];e.O=function(t,l,n,i){if(!l){var o=1/0;for(m=0;m<a.length;m++){l=a[m][0],n=a[m][1],i=a[m][2];for(var r=!0,u=0;u<l.length;u++)(!1&i||o>=i)&&Object.keys(e.O).every((function(a){return e.O[a](l[u])}))?l.splice(u--,1):(r=!1,i<o&&(o=i));if(r){a.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var m=a.length;m>0&&a[m-1][2]>i;m--)a[m]=a[m-1];a[m]=[l,n,i]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var l in t)e.o(t,l)&&!e.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:t[l]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){var a={524:0};e.O.j=function(t){return 0===a[t]};var t=function(t,l){var n,i,o=l[0],r=l[1],u=l[2],s=0;if(o.some((function(t){return 0!==a[t]}))){for(n in r)e.o(r,n)&&(e.m[n]=r[n]);if(u)var m=u(e)}for(t&&t(l);s<o.length;s++)i=o[s],e.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return e.O(m)},l=self["webpackChunkvue3_mathjax_demo"]=self["webpackChunkvue3_mathjax_demo"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=e.O(void 0,[504],(function(){return e(6725)}));l=e.O(l)})();
//# sourceMappingURL=app.4bf8a765.js.map