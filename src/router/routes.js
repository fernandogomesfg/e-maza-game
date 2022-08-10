
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/computer', component: () => import('src/pages/ComputerPage.vue') },
      { path: '/profile', component: () => import('src/pages/ProfilePage.vue') },
      { path: '/ranking', component: () => import('src/pages/RankingPage.vue') },
      { path: '/star', component: () => import('src/pages/StarPage.vue') }
    ]
  },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
