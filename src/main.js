import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import "./assests/styles/css/index.scss"
import ECharts from "./plugins/echarts"

const app = createApp(App).use(router);
app.use(router);
app.use(store);
app.component("v-chart", ECharts);
app.mount('#app');