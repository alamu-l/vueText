import Vue from 'vue'
import App from './vue_signaIR.vue'
//import axios from 'axios'
// app.config.globalProperties.$axios=axios
//qs
//import qs from 'qs'
// app.config.globalProperties.$qs=qs


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
