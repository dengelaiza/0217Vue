// import Vue from 'vue/dist/vue.esm.js'
import Vue from "vue";
import App from "./App.vue";
// new Vue({
//     el:'#root',
//     components:{
//         App
//     },
//     template:'<App />'
// })

new Vue({
  el: "#root",
  render: (h) => h(App),
});
