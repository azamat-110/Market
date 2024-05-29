import { createApp } from 'vue'
import './assets/style/main.scss';
import './store';
import {createPinia} from 'pinia';

const pinia = createPinia();

import App from './App.vue'

createApp(App).use(pinia).mount('#app')
