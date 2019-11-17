import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
import router from './router'
import dbLink from './plugin'
Vue.config.productionTip = false

// 使用ElementUI
Vue.use(ElementUI);
Vue.use(dbLink);
Vue.prototype.$axios = axios;


new Vue({
    router,

    // 4. 把store注入Vue实例
    render: h => h(App),
}).$mount('#app')