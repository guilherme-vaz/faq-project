import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import mainCss from '@/assets/css/main.css'
import 'animate.css';


const app = createApp(App)
app.use(mainCss)
app.use(store)
app.mount('#app')
