<template>
    <div class="author_item" :class="size" >
        
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
import { defineProps, computed } from 'vue';
import { Author } from '@/shared/api/types';

interface Props {
    author: Author,
    size?: string
}

const SIZE_S = 'author_item-s';
const SIZE_M = 'author_item-m';

const props = withDefaults(defineProps<Props>(), {
    size: ''
});
const emit = defineEmits<{
    (e: 'avatar:click'): void
}>();

const size = computed<string>(() => {
    switch(props.size) {
        case 'size-m':
            return SIZE_M;
        default:
            return SIZE_S;
    }
});

</script>

<style 
    lang="scss"
    src="./styles.scss"
    scoped >
</style>