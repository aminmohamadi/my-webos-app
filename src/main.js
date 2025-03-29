import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSpatialNavigation from "vue-spatialnavigation";

createApp(App).use(store).use(router).use(VueSpatialNavigation).mount('#app')
