import { RouteRecordRaw } from "vue-router";
import Home from 'pages/home/index.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
    }
]