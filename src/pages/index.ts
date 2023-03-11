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
        path: '/art/create',
        component: () => import('@/pages/art/create/ArtCreatePage.vue')
    },
    {
        path: '/art/:id',
        component: () => import('@/pages/art/item/ArtItemPage.vue')
    },
    {
        path: '/auth/register',
        component: () => import('@/pages/auth/register/AuthRegisterPage.vue')
    },
    {
        path: '/auth/login',
        component: () => import('@/pages/auth/login/AuthLoginPage.vue')
    }
]