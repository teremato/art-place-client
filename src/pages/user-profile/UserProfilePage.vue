<template>
    <div class="user__profile-wrapper app-container">
        <div class="user__profile-left">
            <user-profile-block/>
        </div>
        <div class="user__profile-right">
            <div class="user__profile-filters">
                <button class="btn btn-s btn-hv-op btn-blc-active">
                    Работы
                </button>
                <button class="btn btn-s btn-hv-op">
                    Доски
                </button>
                <button class="btn btn-s btn-hv-op">
                    Оценки
                </button>
            </div>
            <div class="user__profile-content">
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UserProfileBlock } from '@/widgets/user-profile-block';


</script>

<style 
    lang="scss"
    scoped
    src="./styles.scss" >
</style>