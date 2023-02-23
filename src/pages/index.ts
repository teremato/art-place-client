import { RouteRecordRaw } from "vue-router";
// import HomePage from '@/pages/home/HomePage.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/pages/home/HomePage.vue'),
    },
    {
        path: '/profile/:id',
        component: () => import('@/pages/user-profile/UserProfilePage.vue')
    }
]