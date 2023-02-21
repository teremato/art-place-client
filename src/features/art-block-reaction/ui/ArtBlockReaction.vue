<template>
    <div class="reactions_block">
        <div @click="setLike" 
            class="likes-count"
            :class="{ 'active': isLike }" >

            <span class="material-icons">thumb_up_off_alt</span>
            <span class="count">6</span>
    </div>
        <div class="watch-count">
            <span class="material-icons-outlined">remove_red_eye</span>
            <span class="count">6</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

interface Props {
    artId: number,
    isLike: boolean | null,
    isFavorite: boolean | null,
}

defineProps<Props>();
const emit = defineEmits<{
    (e: 'art:like'): void,
}>();

const setLike = () => emit('art:like');

</script>

<style 
    lang="scss"
    scoped
    src="./styles.scss" >
</style>