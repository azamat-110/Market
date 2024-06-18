import { createApp } from 'vue'
import './assets/style/main.scss';
import './store';
import { createPinia } from 'pinia';
import router from "./router/router.js";


const pinia = createPinia();

import App from './App.vue';


const app = createApp(App);
app.use(pinia).use(router).mount('#app');
