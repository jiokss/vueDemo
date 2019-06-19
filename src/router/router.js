import Home from '@/views/Home'

export default [
  {
    path: '/',
    alias:'/home_page',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    //动态路由加载
    path:'/argu/:name',
    name:'argu',
    component: () => import('@/views/argu.vue')
  },
  {
    //嵌套路由
    path:'/parent',
    name:'parent',
    component: () => import("@/views/parent.vue"),
    children:[
      {
        path:'child',
        component: () => import("@/views/child.vue")
      }
    ]
  },
  {
    //命名视图
    path:'/named_views',
    components:{
        default: () => import("@/views/child.vue"),
        email: () => import("@/views/email.vue"),
        tel: () => import("@/views/tel.vue")
      }

  },{
    //重定向
    path:'/main',
    //redirect:'/'
    // redirect:{
    //   name:'Home'
    // }
    //只有return 简写： to => '/'
    redirect: to => {
      // console.log(to);
      // return{
      //   name:'home'
      // }
      return '/'
    }
  }
]
