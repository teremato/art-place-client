<template>
    <header class="app__header">
        <div class="header__top app-container">
            <div class="header__top-left">
                <h3>ART-PLACE</h3>
            </div>
            <div class="header__top-right ">
                <div class="auth-buttons">
                    <button class="btn btn-s">Войти</button>
                    <button class="btn btn-bl btn-s">Регистрация</button>
                </div>
            </div>
        </div>
        <div class="header__bottom app-container">
            <header-search />
            <div class="header__bottom-chapters">
                <template v-for="item in chapters" :key="item.event">
                    <div class="chapter-item">
                        <span class="material-icons">{{ item.icon }}</span>
                        <span>{{ item.title }}</span>
                    </div>
                </template>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
import HeaderSearch from './header-search/HeaderSearch.vue';
import { chapters } from '../model';



</script>
<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>