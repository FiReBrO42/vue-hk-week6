import{_ as c,o as a,c as u,d as e,t as r,F as i}from"./index-bbc0e49b.js";const{VITE_APP_URL:n,VITE_APP_PATH:l}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"firebro42",BASE_URL:"/vueJsClass/week6/dist/",MODE:"production",DEV:!1,PROD:!0},p={data(){return{product:{}}},methods:{getProduct(){console.log(this.$route.params);const{id:o}=this.$route.params;this.$http.get(`${n}/v2/api/${l}/product/${o}`).then(t=>{this.product=t.data.product}).catch(t=>{alert(t.response.data.message)})}},mounted(){this.getProduct()}},d=e("div",null,"單一產品",-1),_=["src"];function h(o,t,P,m,s,g){return a(),u(i,null,[d,e("h2",null,r(s.product.title),1),e("img",{src:s.product.imageUrl,class:"img-fluid",alt:""},null,8,_),e("p",null,"價格:"+r(s.product.price)+"元",1)],64)}const E=c(p,[["render",h]]);export{E as default};