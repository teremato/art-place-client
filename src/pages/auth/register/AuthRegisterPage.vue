<template>
    <div class="auth__register-page">
        <div class="auth__register-page-left">
        </div>
        <div class="auth__register-page-right">
            <div>
                <auth-register-form/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AuthRegisterForm } from '@/widgets/auth-register-form';

</script>

<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>