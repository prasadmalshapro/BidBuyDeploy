(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8098],{1125:(e,s,t)=>{Promise.resolve().then(t.bind(t,7159))},7159:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>N});var a=t(5155),l=t(6911),r=t(2313),n=t(9894),i=t(8128),c=t(1091);let d=(0,t(4057).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);var o=t(8173),x=t.n(o),m=t(2115);let u=function(e){let{f_name:s,l_name:t,address1:l,address2:r,city:n,postal:i,contact_no:c,onClick:d}=e;return(0,a.jsxs)("div",{className:"flex flex-col w-full bg-secondary bg-opacity-35 py-2 px-5  cursor-pointer hover:scale-x-105 transition-all rounded-md border border-secondary",onClick:d,children:[(0,a.jsxs)("span",{className:"text-sm font-semibold",children:[s," ",t]}),(0,a.jsxs)("span",{className:"text-xs text-gray-600",children:[l,", ",r,", ",n,"."]})]})};var h=t(689),f=t(5565);let p=function(e){let{item:s,image:t,variation:l,quantity:r,price:n,onClick:i}=e;return(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row  gap-3 p-2 sm:w-full justify-center border-b border-secondary",children:[(0,a.jsx)("div",{className:"flex w-full sm:w-4/12 justify-center",children:(0,a.jsx)(f.default,{src:t,alt:"product Image",width:100,height:100})}),(0,a.jsxs)("div",{className:"flex flex-col mt-3 w-full sm:w-7/12 items-center sm:items-start",children:[(0,a.jsx)("span",{className:"font-bold text-sm text-center",children:s}),l.map(e=>(0,a.jsxs)("div",{className:"flex gap-1 text-xs text-gray-600 pl-5",children:[(0,a.jsxs)("span",{children:[e.var," :"]}),(0,a.jsx)("span",{children:e.value})]},e.var)),(0,a.jsxs)("div",{className:"flex gap-1 text-xs text-gray-600 pl-5",children:[(0,a.jsx)("span",{children:"Quanity :"}),(0,a.jsx)("span",{children:r})]}),(0,a.jsx)("span",{className:"font-bold text-sm pl-5",children:n})]}),(0,a.jsxs)("div",{className:"flex justify-center items-center text-red-500 w-full sm:w-1/6",children:[(0,a.jsx)(h.A,{className:"hidden sm:flex cursor-pointer hover:text-red-700",onClick:i}),(0,a.jsx)("span",{className:"sm:hidden flex cursor-pointer rounded-2xl p-2 text-xs  text-white bg-red-500 hover:bg-red-700",onClick:i,children:"Remove"})]})]})};var j=t(1219),g=t(3152);let v=JSON.parse('[{"address_id":"1","firsname":"Saman","lastname":"Bandara","ad_line1":"222/2","ad_line2":"New Kandy Road, Naramwala","city":"Gampaha","postal":"11111","contact":"0771111111"},{"address_id":"2","firsname":"Mihili","lastname":"Sewwandi","ad_line1":"123/3","ad_line2":"New Kandy Road, Udupila","city":"Delgoda","postal":"11111","contact":"0772221111"}]'),b=JSON.parse('[{"item":"Mens T-shirt ABS Brand Popular","variation":[{"var":"size","value":"L"},{"var":"color","value":"Blue"}],"quantity":2,"price":1200,"shipping_cost":250,"image":"https://wearekingly.com/wp-content/uploads/2021/06/Custom-made-T-Shirts-35.jpg"},{"item":"Cosplay Samurai Katana","variation":[{"var":"size","value":"140cm"},{"var":"design","value":"DMC"},{"var":"material","value":"Bamboo"}],"quantity":1,"price":3200,"shipping_cost":350,"image":"https://cdn11.bigcommerce.com/s-sd2rb2jpmz/images/stencil/1280x1280/products/5877/14782/W-3012BL__48498.1702665593.jpg?c=2"}]'),y=JSON.parse('[{"coupon":"123456","discount":250},{"coupon":"123333","discount":200},{"coupon":"123444","discount":350},{"coupon":"123555","discount":300},{"coupon":"123666","discount":450}]'),N=function(){let[e,s]=(0,m.useState)({address_id:"1",firsname:"",lastname:"",ad_line1:"",ad_line2:"",city:"",postal:"",contact:""}),t=Object.values(e).every(e=>""!==e.trim()),o=e=>{let{name:t,value:a}=e.target;s(e=>({...e,[t]:a}))},h=e=>{s(e)},[f,N]=(0,m.useState)(!1),[w,_]=(0,m.useState)(b),A=e=>{_(w.filter(s=>s.item!==e))},k=w.reduce((e,s)=>e+s.price,0),C=w.reduce((e,s)=>e+s.shipping_cost,0),[S,O]=(0,m.useState)(""),[E,L]=(0,m.useState)(0),[z,B]=(0,m.useState)(!1),M=v.some(s=>s.firsname===e.firsname&&s.lastname===e.lastname&&s.ad_line1===e.ad_line1&&s.ad_line2===e.ad_line2&&s.city===e.city&&s.postal===e.postal&&s.contact===e.contact);return(0,m.useEffect)(()=>{N(!M&&t&&k+C-E>0)},[e,k,C,E]),(0,a.jsx)("div",{className:"min-h-screen bg-gray-199",children:(0,a.jsxs)("div",{className:"p-3 sm:py-10 sm:px-20 xl:px-40 flex flex-col gap-5 justify-center",children:[(0,a.jsx)(i.A,{varient:"secondary",heading:"Checkout"}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row items-start justify-between gap-20",children:[(0,a.jsxs)("div",{className:"flex flex-col w-full items-center gap-10 shadow-md bg-white p-5 rounded-lg",children:[(0,a.jsx)(r.A,{active:"address"}),(0,a.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,a.jsx)(c.A,{heading:"Shipping Details"}),(0,a.jsxs)("div",{className:"flex flex-col p-1 border border-primary rounded-md",children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row w-full",children:[(0,a.jsx)("div",{className:"flex w-full sm:w-1/2",children:(0,a.jsx)(n.A,{place_holder:"First Name",value:e.firsname,name:"firsname",onChange:o})}),(0,a.jsx)("div",{className:"flex w-full sm:w-1/2",children:(0,a.jsx)(n.A,{place_holder:"Last Name",value:e.lastname,name:"lastname",onChange:o})})]}),(0,a.jsx)(n.A,{place_holder:"Address Line 1",value:e.ad_line1,name:"ad_line1",onChange:o}),(0,a.jsx)(n.A,{place_holder:"Address Line 2",value:e.ad_line2,name:"ad_line2",onChange:o}),(0,a.jsx)(n.A,{place_holder:"City",value:e.city,name:"city",onChange:o}),(0,a.jsx)("div",{className:"flex w-full sm:w-1/2",children:(0,a.jsx)(n.A,{place_holder:"Posta Code",value:e.postal,name:"postal",onChange:o})}),(0,a.jsx)(n.A,{place_holder:"Contact Number",value:e.contact,name:"contact",onChange:o})]})]}),(0,a.jsxs)("div",{className:f?"flex justify-center items-center gap-3":"hidden",children:[(0,a.jsx)("span",{className:"text-sm",children:"Save Address for feture Orders"}),(0,a.jsx)(j.A,{})]}),(0,a.jsxs)("div",{className:"flex flex-col w-full gap-2",children:[(0,a.jsx)("h4",{className:"text-sm font-bold text-primary",children:"Saved Addresses:"}),(0,a.jsx)("div",{className:"flex flex-col px-2 gap-3",children:v.map(e=>(0,a.jsx)(u,{f_name:e.firsname,l_name:e.lastname,address1:e.ad_line1,address2:e.ad_line2,city:e.city,postal:e.postal,contact_no:e.contact,onClick:()=>h(e)},e.address_id))})]})]}),(0,a.jsxs)("div",{className:"flex flex-col w-full items-center gap-10 shadow-md bg-white p-5 rounded-lg",children:[(0,a.jsx)(c.A,{heading:"Your Cart"}),(0,a.jsxs)("div",{className:"flex flex-col gap-3 w-full bg-secondary bg-opacity-15 p-0 sm:p-5 rounded-md",children:[w.map(e=>(0,a.jsx)(p,{item:e.item,image:e.image,quantity:e.quantity,price:e.price,variation:e.variation,onClick:()=>A(e.item)},e.item)),(0,a.jsx)("span",{className:0===w.length?"text-center font-semibold text-secondary":"hidden",children:"-- No Items to checkout! --"})]}),(0,a.jsxs)("div",{className:"flex w-full items-center",children:[(0,a.jsx)("div",{className:"flex w-full",children:(0,a.jsx)(n.A,{place_holder:"Coupun Code",value:S,onChange:e=>{let s=e.target.value;O(s),console.log(S);let t=y.find(e=>e.coupon===s);t?(B(!0),L(t.discount)):(B(!1),L(0))}})}),z&&(0,a.jsx)("div",{className:"flex p-0 h-10 w-10 justify-center items-center text-white  bg-primary rounded-full",children:(0,a.jsx)(d,{})})]}),(0,a.jsx)(g.A,{subtotal:k,shipping:C,discount:0!==E?E:null}),(0,a.jsx)(x(),{href:"./payment?var1=".concat(k,"&var2=").concat(C,"&var3=").concat(E),children:(0,a.jsx)(l.A,{title:"Continue",variant:"primary",disabled:!t})})]})]})]})})}},6911:(e,s,t)=>{"use strict";t.d(s,{A:()=>r});var a=t(5155),l=t(2115);let r=function(e){let{type:s,title:t,children:r,variant:n,disabled:i,onClick:c}=e,d="text-black bg-primary  hover:bg-opacity-50",[o,x]=(0,l.useState)(d);return(0,l.useEffect)(()=>{switch(n){case"primary":default:x(d);break;case"secondary":x("text-green-700 bg-white hover:bg-gray-300");break;case"red":x("text-white font-semibold bg-red-400 hover:bg-red-200 hover:text-red-800")}},[n]),(0,a.jsxs)("button",{className:"flex items-center justify-center gap-3 font-normal text-sm shadow-xl rounded-xl \n      border cursor-pointer px-8 py-4 transition-all hover:scale-x-110 ".concat(o," \n      disabled:bg-opacity-50 disabled:hover:scale-x-100 disabled:cursor-not-allowed"),type:s,disabled:!!i&&i,onClick:c,children:[r,(0,a.jsxs)("label",{className:"bold-16 whitespace-nowrap ".concat(i?"cursor-not-allowed":"cursor-pointer"),children:[" ",t," "]})]})}},8128:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});var a=t(5155);t(2115);let l=function(e){let{heading:s,varient:t}=e;return(0,a.jsx)("h1",{className:"text-".concat(t||"primary"," text-2xl sm:text-3xl font-bold"),children:s})}},1091:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});var a=t(5155);t(2115);let l=function(e){let{heading:s,varient:t}=e;return(0,a.jsx)("h2",{className:"text-".concat(t||"primary"," text-xl sm:text-2xl font-bold"),children:s})}},1542:(e,s,t)=>{"use strict";t.d(s,{A:()=>r});var a=t(5155),l=t(689);t(2115);let r=e=>{let{isOpen:s,onClose:t,bg:r,children:n}=e;return s?(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,a.jsxs)("div",{className:"".concat(r?"bg-".concat(r):"bg-white"," p-6 rounded-lg shadow-lg w-[90%] max-w-3xl relative"),children:[(0,a.jsx)("button",{onClick:t,className:"absolute top-2 right-2 text-white font-semibold bg-red-400 p-1 rounded-full hover:bg-red-200 hover:text-red-800",children:(0,a.jsx)(l.A,{size:20,strokeWidth:3})}),n]})}):null}},1219:(e,s,t)=>{"use strict";t.d(s,{A:()=>r});var a=t(5155),l=t(2115);function r(e){let{isOn:s=!1,onToggle:t,varient:r}=e,[n,i]=(0,l.useState)(s);return(0,a.jsx)("button",{onClick:()=>{let e=!n;i(e),t&&t(e)},className:"w-14 h-7 flex items-center rounded-full p-1 transition-all\n        ".concat(n?r?"bg-".concat(r):"bg-primary":"bg-gray-400"),children:(0,a.jsx)("div",{className:"w-5 h-5 bg-white rounded-full shadow-md transform transition-transform\n        ".concat(n?"translate-x-7":"translate-x-0")})})}},2313:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});var a=t(5155);t(2115);let l=function(e){let{active:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"address"===s?"flex justify-center items-center gap-1":"hidden",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("span",{className:"flex justify-center items-center bg-primary w-5 h-5 font-semibold rounded-full text-white text-sm",children:"1"}),(0,a.jsx)("span",{className:"font-bold text-primary text-xl",children:"Addres"})]}),(0,a.jsx)("div",{className:"w-8 sm:w-24 h-1 bg-gray-400 rounded-full"}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("span",{className:"flex justify-center items-center bg-gray-400 w-5 h-5 rounded-full text-white text-sm",children:"2"}),(0,a.jsx)("span",{className:"font-bold text-gray-400",children:"Payment"})]})]}),(0,a.jsxs)("div",{className:"payment"===s?"flex justify-center items-center gap-1":"hidden",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("span",{className:"flex justify-center items-center bg-green_2 w-5 h-5 rounded-full text-white text-sm",children:"1"}),(0,a.jsx)("span",{className:"font-bold text-green_2",children:"Addres"})]}),(0,a.jsx)("div",{className:"w-8 sm:w-24 h-1 bg-green_2 rounded-full"}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("span",{className:"flex justify-center items-center bg-primary w-5 h-5 font-semibold rounded-full text-white text-sm",children:"2"}),(0,a.jsx)("span",{className:"font-bold text-primary text-xl",children:"Payment"})]})]})]})}},3152:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});var a=t(5155);t(2115);let l=function(e){let{subtotal:s,shipping:t,discount:l}=e;return(0,a.jsxs)("div",{className:"flex flex-col w-full",children:[(0,a.jsxs)("div",{className:"flex justify-between w-full",children:[(0,a.jsx)("span",{className:"text-sm",children:"SubTotal"}),(0,a.jsx)("span",{className:"text-sm",children:s})]}),(0,a.jsxs)("div",{className:"flex justify-between w-full",children:[(0,a.jsx)("span",{className:"text-sm",children:"Shipping"}),(0,a.jsx)("span",{className:"text-sm",children:t})]}),(0,a.jsxs)("div",{className:l?"flex justify-between w-full text-green_2":"hidden",children:[(0,a.jsx)("span",{className:"text-sm",children:"Discount"}),(0,a.jsx)("span",{className:"text-sm",children:l})]}),(0,a.jsx)("div",{className:"flex w-full h-[1px] bg-black"}),(0,a.jsxs)("div",{className:"flex justify-between w-full font-semibold",children:[(0,a.jsx)("span",{className:"text-sm",children:"Total"}),(0,a.jsx)("span",{className:"text-sm",children:l?s+t-l:s+t})]})]})}},9894:(e,s,t)=>{"use strict";t.d(s,{A:()=>i});var a=t(5155),l=t(9523),r=t(2115),n=t(1542);let i=function(e){let{value:s,name:t,place_holder:i,hint:c,onChange:d,type:o}=e,[x,m]=(0,r.useState)(!1);return(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-start   py-1 px-2 w-full",children:[(0,a.jsxs)("div",{className:"flex w-full",children:[(0,a.jsx)("input",{className:"w-full p-2 rounded-md focus:ring-2 focus:ring-primary  focus:outline-none text-gray-700 bg-primary bg-opacity-15",placeholder:i,name:t,value:s,onChange:d,type:o}),(0,a.jsx)("div",{className:c?"hidden sm:flex w-4":"hidden",onClick:()=>m(!0),children:(0,a.jsx)("div",{className:"flex rounded-full font-bold text-secondary  cursor-pointer",children:(0,a.jsx)(l.A,{size:20,strokeWidth:3})})})]}),(0,a.jsx)(n.A,{isOpen:x,onClose:()=>m(!1),bg:"opacity-0",children:(0,a.jsx)("div",{className:"flex bg-blue-200  text-sm text-blue-900 p-5  border border-blue-900 rounded-lg",children:c})})]})}},4057:(e,s,t)=>{"use strict";t.d(s,{A:()=>c});var a=t(2115);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r=function(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return s.filter((e,s,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===s).join(" ").trim()};var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,a.forwardRef)((e,s)=>{let{color:t="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:c,className:d="",children:o,iconNode:x,...m}=e;return(0,a.createElement)("svg",{ref:s,...n,width:l,height:l,stroke:t,strokeWidth:c?24*Number(i)/Number(l):i,className:r("lucide",d),...m},[...x.map(e=>{let[s,t]=e;return(0,a.createElement)(s,t)}),...Array.isArray(o)?o:[o]])}),c=(e,s)=>{let t=(0,a.forwardRef)((t,n)=>{let{className:c,...d}=t;return(0,a.createElement)(i,{ref:n,iconNode:s,className:r("lucide-".concat(l(e)),c),...d})});return t.displayName="".concat(e),t}},9523:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});let a=(0,t(4057).A)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]])},689:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});let a=(0,t(4057).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])}},e=>{var s=s=>e(e.s=s);e.O(0,[8173,5565,8441,1517,7358],()=>s(1125)),_N_E=e.O()}]);