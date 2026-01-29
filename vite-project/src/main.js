import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import zoomBar from './components/zoomBar.vue'
const app = createApp(App)

app.component('zoomBar', zoomBar)
app.mount('#app')

