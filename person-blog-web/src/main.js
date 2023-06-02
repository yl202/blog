import { createApp } from 'vue'
import App from './App.vue'
import ant from 'ant-design-vue'

createApp(App).mount('#app')
App.use(ant)

// import axios from './requirest/axios';
// const app = created(App).use(VueAxios, axios).use(router).use(Axios)