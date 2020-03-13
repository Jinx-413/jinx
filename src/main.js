import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

//引用通用样式
import './assets/css/base.css'
import './assets/css/flex.css'

//引进vuerouter
import router from './plugins/router.js'


let vm = new Vue({
  data:{
    bNav:false,
    bFoot:false,
    bLoading:false,
    bHeader:false,
  },
  render: h => h(App),
  router
}).$mount('#app')

export default vm;
