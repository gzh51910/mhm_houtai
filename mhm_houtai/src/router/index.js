import Vue from 'vue';
import VueRouter from "vue-router"

Vue.use(VueRouter);
import dbClient from '../pages/dbClient.vue'
import dbELSWORD_list from '../pages/dbELSWORD_list.vue'
import dbELSWORD_list_jywc from '../pages/dbELSWORD_list_jywc.vue'
import dbELSWORD_list_syzk from '../pages/dbELSWORD_list_syzk.vue'
import dbGame_nav from '../pages/dbGame_nav.vue'
import dbHearthStone from '../pages/dbHearthStone.vue'
import dbHomeList from '../pages/dbHomeList.vue'
import dbHonor from '../pages/dbHonor.vue'
import dbMMOARPG from '../pages/dbMMOARPG.vue'
import dbMolder3rd from '../pages/dbMolder3rd.vue'
import dbPhone from '../pages/dbPhone.vue'
import dbSkin from '../pages/dbSkin.vue'
import dbfn_nav from '../pages/dbfn_nav.vue'
import dbnotice from '../pages/dbnotice.vue'
import dbslideshow from '../pages/dbslideshow.vue'
import dbuser from '../pages/dbuser'
let router = new VueRouter({
    routes: [{
            name: 'dbClient',
            path: '/dbClient',
            component: dbClient
        },
        {
            name: 'dbELSWORD_list',
            path: '/dbELSWORD_list',
            component: dbELSWORD_list
        }, {
            name: 'dbELSWORD_list_jywc',
            path: '/dbELSWORD_list_jywc',
            component: dbELSWORD_list_jywc
        }, {
            name: 'dbELSWORD_list_syzk',
            path: '/dbELSWORD_list_syzk',
            component: dbELSWORD_list_syzk
        }, {
            name: 'dbGame_nav',
            path: '/dbGame_nav',
            component: dbGame_nav
        }, {
            name: 'dbHearthStone',
            path: '/dbHearthStone',
            component: dbHearthStone
        }, {
            name: 'dbHomeList',
            path: '/dbHomeList',
            component: dbHomeList
        }, {
            name: 'dbHonor',
            path: '/dbHonor',
            component: dbHonor
        }, {
            name: 'dbMMOARPG',
            path: '/dbMMOARPG',
            component: dbMMOARPG
        }, {
            name: 'dbMolder3rd',
            path: '/dbMolder3rd',
            component: dbMolder3rd
        }, {
            name: 'dbPhone',
            path: '/dbPhone',
            component: dbPhone
        }, {
            name: 'dbSkin',
            path: '/dbSkin',
            component: dbSkin
        }, {
            name: 'dbfn_nav',
            path: '/dbfn_nav',
            component: dbfn_nav
        }, {
            name: 'dbnotice',
            path: '/dbnotice',
            component: dbnotice
        }, {
            name: 'dbnotice',
            path: '/dbnotice',
            component: dbnotice
        }, {
            name: 'dbslideshow',
            path: '/dbslideshow',
            component: dbslideshow
        }, {
            name: 'dbuser',
            path: '/dbuser',
            component: dbuser
        }





    ]
});

export default router;