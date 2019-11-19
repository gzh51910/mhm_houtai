import Vue from 'vue';
import VueRouter from "vue-router"

Vue.use(VueRouter);
import main from '../pages/main.vue'
import login from '../pages/login.vue'
let router = new VueRouter({
    routes: [{
        name: 'main',
        path: '/main',
        component: main
    }, {
        name: "login",
        path: "/login",
        component: login
    }, {
        path: "/",
        component: login
    }]
});

export default router;