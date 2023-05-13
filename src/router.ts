import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/demo/SwitchDemo.vue';
import ButtonDemo from './components/demo/ButtonDemo.vue'
import DialogDemo from './components/demo/DialogDemo.vue'
import TabsDemo from './components/demo/TabsDemo.vue'

import { h } from 'vue'
import Markdown from './components/Markdown.vue'
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                {path:"",redirect:'/doc/introduce'},
                { path: "introduce", component: md('introduce') },
                { path: "install", component: md('install') },
                { path: "get-started", component: md('get-started') },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
            ]
        },
    ],
});
