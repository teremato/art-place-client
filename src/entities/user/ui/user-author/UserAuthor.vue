<template>
    <div class="author_item" >
        
        <img @click="emit('avatar:click')"
            :src="author.avatar.default">

        <div class="info">
            <span class="name">
                {{ author.name }}
            </span>
            <slot name="desc"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Author } from '@/shared/api/types';

interface Props {
    author: Author,
}

defineProps<Props>()
const emit = defineEmits<{
    (e: 'avatar:click'): void
}>();

</script>

<style 
    lang="scss"
    src="./styles.scss"
    scoped >
</style>