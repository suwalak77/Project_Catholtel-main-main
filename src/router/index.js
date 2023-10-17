import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainpage from '../views/mainpage.vue'
import Newcard from '../components/Newcard.vue'


import Newcard_01 from '../components/newcard_1.vue';
import Newcard_02 from '../components/newcard_2.vue';







const shopRoutes = [
  { name: 'news_1', component: Newcard_01, shop: 'เกี่ยวกับเรา' },
  { name: 'news_2', component: Newcard_02, shop: 'ห้องพักและราคา' },
];

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/news',
    name: 'allnews',
    component: Newcard
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
 


];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/news/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;