<template>
    <app-card>
        <form class="login__form">
            <h2>Войдите в свой аккаунт</h2>
            <div class="login__form-fields">
                <app-input label="E-mail" type="email" />
                <app-input label="Пароль" type="password"/>
            </div>

            <div class="login__form-middle">
                <button class="btn btn-smpl">Забыли пароль?</button>
                <button class="btn btn-smpl">Регистрация</button>
            </div>
            <div class="login__form-footer">
                <div class="login__form-footer-action">
                    <button class="btn btn-bl btn-auto btn-xl">Войти</button>
                </div>
            </div>
        </form>
    </app-card>
</template>

<script setup lang="ts">
import { AppCard, AppInput } from '@/shared/ui';

</script>

<style 
    lang="scss"
    scoped
    src="./styles.scss">
</style>