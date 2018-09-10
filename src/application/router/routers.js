
// 1.导入组件
import Login from '@/components/login/MyLogin'
import Home from '@/components/home/Home'

//2.配置路由表
const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
  },
];


//3.定义路由类
class Router {
  static getRouters() {
    return routes;
  }
}

export default Router;