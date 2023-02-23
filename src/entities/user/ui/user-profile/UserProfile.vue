<template>
    <div class="user__profile-block">
        <div class="user__profile-main">
            <Image src="dfdf"/>
            <div class="user__profile-main-bio">
                <h3></h3>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="user__actions">
                <slot name="actions"></slot>
            </div>
        </div>
        <div class="user__create-date">
            <span></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Image } from '@/shared/ui';

</script>

<style scoped>

</style>