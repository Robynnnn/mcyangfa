import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// import index from '../views/index/index'

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'mcyangfa',
        component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue'),
        meta: {
            title: 'mcyangfa'
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

export default router

