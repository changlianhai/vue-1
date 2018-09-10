import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './routers'

Vue.use(VueRouter);

export default new VueRouter({
    routes: Router.getRouters()  //==>>类的静态方法， 返回路由表数据
});