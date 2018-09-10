// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/application/router/index'
import '@/assets/css/reset.css'  //==>> 导入公共样式reset.css
import 'vant/lib/vant-css/index.css' //==>>导入vant.css
import i18n from './application/third/vue-i18n'
import Init from './assets/js/init'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
console.log(i18n)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  i18n
})
