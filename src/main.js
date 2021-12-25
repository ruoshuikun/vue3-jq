import { createApp } from 'vue'
// 引入jQuery、bootstrap
import $ from 'jquery'
import 'bootstrap'

// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
// 全局注册 $
app.config.globalProperties.$ = $

app.use(store).use(router).mount('#app')
