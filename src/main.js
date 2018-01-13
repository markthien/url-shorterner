// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Tooltip from 'vue-directive-tooltip'
import 'vue-directive-tooltip/css/index.css'
import VueClipboard from 'vue-clipboard2'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueClipboard)
Vue.use(Tooltip, {
  delay: 500,
  placement: 'bottom',
  class: 'tooltip-red',
  triggers: ['hover'],
  offset: 0
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
