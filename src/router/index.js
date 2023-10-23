import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import RegisterView from '../views/RegisterView.vue';
import UserListView from '../views/UserList.vue';
import UserProfileView from '../views/UserProfile.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/:catchall(.*)',
    redirect: "/404/"
  },
  {
    path: '/register/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/userlist/',
    name: 'userlist',
    component: UserListView
  },
  {
    path: '/userprofile/:userId/',
    name: 'userprofile',
    component: UserProfileView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
