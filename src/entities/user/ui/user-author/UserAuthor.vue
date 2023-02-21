<template>
    <div class="author_item">
        <img :src="author.avatar.default">
        <div class="info">
            <span class="name">
                {{ author.name }}
            </span>
            <slot name="desc"></slot>
        </div>
        <slot name="popup"></slot>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Author } from '@/shared/api/types';

interface Props {
    author: Author
}

defineProps<Props>()

</script>

<style 
    lang="scss"
    src="./styles.scss"
    scoped >
</style>