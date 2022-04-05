import * as vueRouter from "vue-router";
import Dianzan from "../pages/dianzan";
import Toubi from '../pages/toubi'
import Shoucang from '../pages/shoucang'


const routes = [
  { path: "/dianzan", component: Dianzan },
  { path: "/toubi", component: Toubi },
  { path: "/shoucang", component: Shoucang },
];

export const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(), //没有#
//   history: vueRouter.createWebHashHistory(), //多#

  routes,
});
