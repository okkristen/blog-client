
/**
 * 路由的集合
 */
module.exports = [
  // {
  //   path: '/',
  //   component: resolve => require(['~/frames/main.vue'], resolve),
  //   children: [
  //     {
  //       path: '/',
  //       component: resolve => require(['~/modules/index/index.vue'], resolve)
  //     }
  //   ]
  // }
  {
    path: '/write/:id?',
    component: resolve => require(['~/modules/writeBlog/BlogWrite.vue'], resolve)
  },
  {
    path: '/login',
    component: resolve => require(['~/modules/login/Login.vue'], resolve)
  },
  {
    path: '/register',
    component: resolve => require(['~/modules/register/Register.vue'], resolve)
  },
  {
    path: '/',
    component: resolve => require(['~/frames/main.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['~/modules/aboutMe/aboutMe.vue'], resolve)
        // component: resolve => require(['~/modules/index/index.vue'], resolve)
      },
      {
        path: '/:type/all',
        name: 'BlogAllCategoryTag',
        component: resolve => require(['~/modules/catagory/BlogAllCategoryTag.vue'], resolve)
      },
      {
        path: '/archives/:year?/:month?',
        component: resolve => require(['~/modules/archive/BlogArchive.vue'], resolve)
      },
      {
        path: '/log',
        component: resolve => require(['~/modules/log/Log.vue'], resolve)
      },
      {
        path: '/aboutMe',
        component: resolve => require(['~/modules/aboutMe/aboutMe.vue'], resolve)
      },
      {
        path: '/messageBoard',
        component: resolve => require(['~/modules/messageBoard/MessageBoard.vue'], resolve)
      },
      {
        path: '/view/:id',
        component: resolve => require(['~/modules/conent/BlogView.vue'], resolve)
        // component: r => require.ensure([], () => r(require('@/views/blog/BlogView')), 'blogview')
      },
      {
        path: '/:type/:id',
        component: resolve => require(['~/modules/tag/BlogCategoryTag.vue'], resolve)
        // component: r => require.ensure([], () => r(require('@/views/blog/BlogCategoryTag')), 'blogcategorytag')
      }
    ]
  }
]
