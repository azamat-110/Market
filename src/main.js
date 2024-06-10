import { createApp } from 'vue'
import './assets/style/main.scss';
import './store';
import { createPinia } from 'pinia';


const pinia = createPinia();

import App from './App.vue';


const app = createApp(App);
app.use(pinia).mount('#app');
