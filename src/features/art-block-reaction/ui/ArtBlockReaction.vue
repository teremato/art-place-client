<template>
    <div class="reactions_block" :class="customClass">
        <div @click="emit(ArtEmits.LIKE, artId)" 
            class="likes-count"
            :class="{ 'active': isLike }">

            <span class="material-icons">thumb_up_off_alt</span>
            <span class="count">6</span>
        </div>
        <div @click="emit(ArtEmits.REMOVE, artId)" class="watch-count">
            <span class="material-icons-outlined">remove_red_eye</span>
            <span class="count">6</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { ArtEmits } from '@/entities/art';

interface IProps {
    artId: number,
    isLike: boolean | null,
    isFavorite: boolean | null,
    customClass?: string
}

withDefaults(defineProps<IProps>(), {
    customClass: 'color-text'
});

const emit = defineEmits<{
    (e: ArtEmits.LIKE, id: number ): number,
    (e: ArtEmits.REMOVE, id: number): number
}>();

</script>

<style 
    lang="scss"
    scoped
    src="./styles.scss" >
</style>