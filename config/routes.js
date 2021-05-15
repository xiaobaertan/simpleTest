export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/login',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/login',
            component: './User/login',
          },
          
          
        ],
      },
      {
        path: '/error',
        // component: '../layouts/UserLayout',
        routes: [
          {
            name: 'error',
            path:'/error',
            component: './Error'
          }
        ]
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/index',
              },
              
              {
                path: '/index',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              
              // {
              //   path: '/admin',
              //   name: 'admin',
              //   icon: 'crown',
              //   component: './Admin',
              //   authority: ['admin'],
              //   routes: [
              //     {
              //       path: '/admin/sub-page',
              //       name: 'sub-page',
              //       icon: 'smile',
              //       component: './Welcome',
              //       authority: ['admin'],
              //     },
              //   ],
              // },
              // {
              //   name: 'list.table-list',
              //   icon: 'table',
              //   path: '/list',
              //   component: './TableList',
              // },
              // {
              //   component: './404',
              // },
            ],
          },
          {
            component: './404',
          },
        ],
      },
      
    ],
  },
  {
    component: './404',
  },
];
