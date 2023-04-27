import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import{createWebHashHistory,createRouter} from 'vue-router'
import shanzhu from './components/shanzhu.vue'
import shanzhu2 from './components/shanzhu2.vue'

const history=createWebHashHistory()
const router=createRouter({
    history:history,
    routes:[
        {path:'/',component:shanzhu},
        {path:'/xxx',component:shanzhu2}
    ]
})


const app=createApp(App)
app.use(router)
app.mount('#app')
