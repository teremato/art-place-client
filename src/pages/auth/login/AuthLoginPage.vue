<template>
    <div class="auth__login-page">
        <div class="auth__login-page-left">
        </div>
        <div class="auth__login-page-right">
            <div>
                <auth-login-form/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AuthLoginForm } from '@/widgets/auth-login-form';

</script>

<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>