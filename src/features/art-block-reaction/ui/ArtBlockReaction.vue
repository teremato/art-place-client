<template>
    <div :class="$style.reactions_block">
        <button @click="setLike" 
            class="btn"
            :class="{ 'active': isLike }" >

            <span class="material-icons">thumb_up_off_alt</span>
        </button>
        <button @click="setFavorite"
            class="btn"
            :class="{ 'btn-active': isFavorite }" >
            
            <span class="material-icons">bookmark_border</span>
        </button>
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
    (e: 'art:favorite'): void
}>();

const setLike = () => emit('art:like');
const setFavorite = () => emit('art:favorite')

</script>

<style 
    lang="scss"
    module
    src="./styles.scss" >
</style>