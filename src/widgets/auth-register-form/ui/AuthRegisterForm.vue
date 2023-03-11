<template>
    <app-card>
        <form class="register__form">
            <h2>Создайте аккаунт</h2>
            <div class="register__form-image">
                <div class="register__form-image-container">
                    <app-image-uploader label="Аватар" :circle="true"/>
                </div>
            </div>
            <div class="register__form-fields">
                <div class="register__form-fields-info">
                    <app-input label="Придумайте никнейм" type="text"/>
                </div>
                <div class="register__form-fields-data">
                    <app-input label="E-email" type="email"/>
                    <app-input label="Пароль" type="password"/>
                </div>
            </div>

            <div class="register__form-middle">
                <button class="btn btn-smpl">Есть аккаунт? Войдите</button>
            </div>
            <div class="register__form-footer">
                <div class="register__form-footer-actions">
                    <button class="btn btn-bl btn-auto btn-xl">
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </form>
    </app-card>
</template>

<script setup lang="ts">
import { 
    AppCard,
    AppInput,
    AppImageUploader 
} from '@/shared/ui';

</script>

<style
    lang="scss" 
    scoped
    src="./styles.scss" >
</style>