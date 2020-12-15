import Vue from "vue"
import VueRouter from "vue-router"
import Login from "@/components/account/Login.vue"
import Notice from "@/components/notice/Notice.vue"

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/',
            component: Login
        },
        {
            path: '/notice',
            component: Notice
        }
    ]
});