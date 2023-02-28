import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/pages/home/HomePage.vue'),
    },
    {
        path: '/profile/:id',
        component: () => import('@/pages/user/profile/UserProfilePage.vue')
    },
    {
        path: '/art/create/:id',
        component: () => import('@/pages/art/create/ArtCreatePage.vue')
    }
]