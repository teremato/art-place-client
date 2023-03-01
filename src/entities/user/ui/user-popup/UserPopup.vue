<template>
    <app-card>
        <div class="user-popup">            
            <slot name="author"></slot>
            <div class="user__popup-common-stats">
                <div class="common-stats-field">
                    <span class="material-icons">people_alt</span>
                    <span class="count">0</span>
                </div>
                <div class="common-stats-field">
                    <span class="material-icons">thumb_up_off_alt</span>
                    <span class="count">0</span>
                </div>
                <div class="common-stats-field">
                    <span class="material-icons-outlined">remove_red_eye</span>
                    <span class="count">0</span>
                </div>
            </div>
            <slot name="actions"></slot>
        </div>
    </app-card>
</template>

<script setup lang="ts">
import { AppCard } from '@/shared/ui';

</script>

<style
    lang="scss"
    scoped
    src="./styles.scss" > 
</style>