import{_ as p,e as h,r as m,o,c as a,d as t,F as r,f as g,t as P,a as f,w as b,b as $}from"./index-c0e2a19a.js";const{VITE_APP_URL:d,VITE_APP_PATH:c}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"firebro42",BASE_URL:"/vueJsClass/week6/dist/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{products:[],form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{RouterLink:h},methods:{getProducts(){this.$http.get(`${d}/v2/api/${c}/products/all`).then(e=>{this.products=e.data.products,console.log("產品列表",e.data.products)})},addToCart(e){const n={product_id:e,qty:1};this.$http.post(`${d}/v2/api/${c}/cart`,{data:n}).then(l=>{console.log(l.data.message)})}},mounted(){this.getProducts()}},T=t("div",null,"產品列表",-1),V=t("hr",null,null,-1),E={class:"table align-middle"},v=["src"],A=["onClick"];function C(e,n,l,x,i,u){const _=m("router-link");return o(),a(r,null,[T,V,t("table",E,[t("tbody",null,[(o(!0),a(r,null,g(i.products,s=>(o(),a("tr",{class:"",key:s.id},[t("td",null,P(s.title),1),t("td",null,[t("img",{class:"img-fluid",src:s.imageUrl,width:"200",alt:""},null,8,v)]),t("td",null,[f(_,{to:`product/${s.id}`,class:"btn btn-outline-secondary"},{default:b(()=>[$("查看產品內容")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:y=>u.addToCart(s.id)}," 加入購物車 ",8,A)])]))),128))])])],64)}const L=p(k,[["render",C]]);export{L as default};