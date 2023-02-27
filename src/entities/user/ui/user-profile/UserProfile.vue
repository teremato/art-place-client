<template>
    <div class="user__profile-block">
        <div class="user__profile-main">
            <div class="user__profile-main-avatar">
                <div class="avatar-block">
                    <Image :src="user.avatar.mini" :circle="true"/>
                </div>
            </div>
            <div class="user__profile-main-bio">
                <h3>{{ user.name }}</h3>
                <div class="direction">
                    {{ user.direction }}
                </div>
            </div>
            <div class="user__profile-main-stats">
                <div class="stats-field">
                    <span class="name">Подписчики</span>
                    <span class="count">{{ user.subscribeCount }}</span>
                </div>
                <div class="stats-field">
                    <span class="name">Лайки</span>
                    <span class="count">{{ user.commonLikes }}</span>
                </div>
                <div class="stats-field">
                    <span class="name">Просмотры</span>
                    <span class="count">{{ user.commonWatch }}</span>
                </div>
            </div>
            <div class="user__actions">
                <slot name="actions"></slot>
            </div>
        </div>
        <div class="user__create-date">
            <span>Зарегистрирован {{ user.created_at }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { User } from '@/shared/api/types';
import { Image } from '@/shared/ui';

interface Props {
    user: User
}

defineProps<Props>();

</script>

<style 
    lang="scss"
    scoped
    src="./styles.scss" >
</style>