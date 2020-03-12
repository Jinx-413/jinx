import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

//引用通用样式
import './assets/css/base.css'
import './assets/css/flex.css'


new Vue({
  render: h => h(App),
}).$mount('#app')
