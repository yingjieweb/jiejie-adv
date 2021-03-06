import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//监测视口断度 - 准备手机端适配
if (document.documentElement.clientWidth > 500) {
  store.commit('superviseDevice', 'pc')
} else {
  store.commit('superviseDevice', 'mobile')
}
