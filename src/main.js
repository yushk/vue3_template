import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

var vm = createApp(App)
vm.config.globalProperties.$url = process.env.VUE_APP_url
vm.config.globalProperties.$GeoworldLib = window.GeoworldLib
vm.use(store).use(router).mount('#app')
