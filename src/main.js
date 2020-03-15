import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

//引用通用样式
import './assets/css/base.css'
import './assets/css/flex.css'

import server from './configs/server.js'
Vue.prototype.$baseUrl = server.baseUrl;//把服务器基础地址，作为实例属性，捆绑到了vue上

//引进vuerouter
import router from './plugins/router.js'

//引入animate.css
import 'animate.css'

//引入axios配置
import './plugins/axios.js'

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
