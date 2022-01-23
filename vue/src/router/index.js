import {createRouter, createWebHistory} from 'vue-router'
import Layout from "@/layout/Layout";

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: 'recoder',
                name: 'recoder',
                component: () => import("@/view/Controler")
            },
            {
                path: 'annotation',
                name: 'annotation',
                component: () => import("@/view/annotation")
            }
        ]
    },
    

    
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router