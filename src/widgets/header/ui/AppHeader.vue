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
        </div>
    </header>
</template>
<script setup lang="ts">
import { HeaderSearch } from '@/features/header-search';

</script>
<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>