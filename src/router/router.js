import {
  createRouter,
  createWebHashHistory
} from 'vue-router';
import Main from "../components/Main.vue";
import CardInfo from "../components/CardInfo.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: 'Main', path: '/', component: Main },
    { name: 'CardInfo', path: '/cardInfo:id', component: CardInfo },
  ],
});
export default router;
