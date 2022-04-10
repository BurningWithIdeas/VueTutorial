import { createApp } from 'vue';
import store from './store';
import router from './router';
import Unicon from 'vue-unicons';
import { uniCheck, uniTimes } from 'vue-unicons/dist/icons';
import App from './App.vue';

Unicon.add([uniCheck, uniTimes]);

createApp(App).use(router).use(store).use(Unicon).mount('#app');
