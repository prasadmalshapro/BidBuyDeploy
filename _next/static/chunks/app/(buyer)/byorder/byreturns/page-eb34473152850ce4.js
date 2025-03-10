(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5900],{5213:(e,t,r)=>{Promise.resolve().then(r.bind(r,3047))},3047:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(5155),n=r(817),s=r(6815),d=r(2115),l=r(844),i=r(1815),o=r(1091),u=r(2736);let c=function(){let[e,t]=(0,d.useState)("latest"),[r,c]=(0,d.useState)("all"),m=e=>{if(!e)return!1;let t=new Date(e),a=new Date;switch(r){case"today":return t.toDateString()===a.toDateString();case"this_week":let n=new Date(a);return n.setDate(a.getDate()-a.getDay()),t>=n;case"this_month":return t.getFullYear()===a.getFullYear()&&t.getMonth()===a.getMonth();default:return!0}},h=[...l].filter(e=>m(e.return_acceptdate)).sort((t,r)=>"latest"===e?new Date(r.return_acceptdate).getTime()-new Date(t.return_acceptdate).getTime():new Date(t.return_acceptdate).getTime()-new Date(r.return_acceptdate).getTime()),p=[...l].filter(e=>""==e.return_acceptdate&&m(e.return_date)).sort((t,r)=>"latest"===e?new Date(r.return_date).getTime()-new Date(t.return_date).getTime():new Date(t.return_date).getTime()-new Date(r.return_date).getTime());return(0,a.jsx)("div",{className:"min-h-screen bg-gray-100",children:(0,a.jsxs)("div",{className:"p-3 sm:p-10 flex flex-col gap-5 justify-center",children:[(0,a.jsx)(i.A,{user:"buyer"}),(0,a.jsx)("div",{className:"bg-white flex flex-col w-full justify-evenly items-center gap-10 px-3 sm:px-10 py-4 rounded-md",children:(0,a.jsx)("div",{className:"flex flex-col justify-center items-center gap-5 w-full ",children:(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-10 w-full",children:[(0,a.jsx)(s.A,{label:"Period",varient:"primary",options:[{value:"today",label:"Today"},{value:"this_week",label:"This Week"},{value:"this_month",label:"This Month"},{value:"all",label:"All"}],value:r,onChange:c}),(0,a.jsx)(s.A,{label:"Sort",varient:"primary",options:[{value:"latest",label:"Latest"},{value:"oldest",label:"Oldest"}],value:e,onChange:t})]})})}),(0,a.jsx)("div",{className:"flex justify-center sm:justify-start",children:(0,a.jsx)(o.A,{heading:"Return Requested",varient:"secondary"})}),(0,a.jsxs)("div",{className:"bg-white flex flex-col w-full justify-evenly items-center gap-10  px-3 sm:px-10 py-4 rounded-md",children:[p.map(e=>(0,a.jsx)(n.A,{item:e.item,order:e.order,image:e.image,seller:e.seller,return_date:e.return_date,refund:e.refund,type:"return",returnby:e.returnby,method:e.method,reson:e.reson,refunddate:e.refunddate},e.order)),(0,a.jsx)("div",{className:0==p.length?"flex":"hidden",children:(0,a.jsx)(u.A,{message:"No orders to View !"})})]}),(0,a.jsx)("div",{className:"flex justify-center sm:justify-start mt-5 w-full border-t-2 border-primary",children:(0,a.jsx)(o.A,{heading:"My Returns",varient:"secondary"})}),(0,a.jsxs)("div",{className:"bg-white flex flex-col w-full justify-evenly items-center gap-10 px-3 sm:px-10 py-4 rounded-md",children:[h.map(e=>(0,a.jsx)(n.A,{item:e.item,order:e.order,image:e.image,seller:e.seller,return_date:e.return_date,refund:e.refund,type:"return",returnby:e.returnby,method:e.method,reson:e.reson,return_acceptdate:e.return_acceptdate,refunddate:e.refunddate},e.order)),(0,a.jsx)("div",{className:0==h.length?"flex":"hidden",children:(0,a.jsx)(u.A,{message:"No orders to View !"})})]})]})})}},1091:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var a=r(5155);r(2115);let n=function(e){let{heading:t,varient:r}=e;return(0,a.jsx)("h2",{className:"text-".concat(r||"primary"," text-xl sm:text-2xl font-bold"),children:t})}},844:e=>{"use strict";e.exports=JSON.parse('[{"item":"Smart Watch","image":"https://img.freepik.com/free-vector/cosmetic-bottles-cleanser-gel-cream-mockup-natural-beauty-cosmetics-product_1441-3490.jpg","order":"34567","buyer":"Alice Johnson","seller":"Tech Store","return_date":"2025-02-25 11:47:36","refund":"500.00","type":"return","returnby":"Buyer","method":"Debit / Credit Card","reson":"Not delivered on time","return_acceptdate":"2025-02-10 11:00:36","refunddate":"2025-03-10 11:00:36"},{"item":"External Hard Drive","image":"https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg","order":"45678","buyer":"Alice Johnson","seller":"Tech Store","return_date":"2025-02-25 11:00:36","refund":"500.00","type":"return","returnby":"Buyer","method":"Debit / Credit Card","reson":"Not delivered on time","return_acceptdate":"2025-02-01 11:00:36","refunddate":"02025-03-10 11:00:36"},{"item":"Tech-Pro Mechanical Keyboard","image":"https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D","order":"56789","buyer":"Alice Johnson","seller":"Tech Store","return_date":"2025-02-25 11:00:36","refund":"500.00","type":"return","returnby":"Buyer","method":"Debit / Credit Card","reson":"Not delivered on time","return_acceptdate":"2025-02-10 11:40:36","refunddate":"2025-03-10 11:00:36"},{"item":"Smartphone Case","image":"https://cdn.pixabay.com/photo/2022/03/17/04/57/cosmetic-products-7073743_640.jpg","order":"67891","buyer":"Alice Johnson","seller":"Tech Store","return_date":"2025-02-25 11:00:36","refund":"500.00","type":"return","returnby":"Buyer","method":"Debit / Credit Card","reson":"Not delivered on time","return_acceptdate":"","refunddate":""},{"item":"Tech-Pro Mechanical Keyboard","image":"https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D","order":"56783","buyer":"Alice Johnson","seller":"Tech Store","return_date":"2025-02-26 11:00:36","refund":"500.00","type":"return","returnby":"Buyer","method":"Debit / Credit Card","reson":"Not delivered on time","return_acceptdate":"","refunddate":""},{"item":"Smartphone Case","image":"https://cdn.pixabay.com/photo/2022/03/17/04/57/cosmetic-products-7073743_640.jpg","order":"67892","buyer":"Alice Johnson","seller":"Tech Store","return_date":"2025-02-26 11:00:36","refund":"500.00","type":"return","returnby":"Buyer","method":"Debit / Credit Card","reson":"Not delivered on time","return_acceptdate":"2025-02-25 11:00:36","refunddate":"2025-03-10 11:00:36"}]')}},e=>{var t=t=>e(e.s=t);e.O(0,[8173,5565,7172,8441,1517,7358],()=>t(5213)),_N_E=e.O()}]);