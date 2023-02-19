<template>
    <div :class="$style.author_item">
        <img :src="author.avatar.default">
        <div :class="$style.info">
            <span :class="$style.name">
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
    author: Author
}

defineProps<Props>()

</script>

<style 
    lang="scss"
    src="./styles.scss"
    module >
</style>