// Peter Van Horn
// Clientside Programming 
// Task 2
// 12/11/2023

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')