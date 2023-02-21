<template>
    <div class="author_item"
        :class="{ 'popaver-active': isFocus }" >
        
        <img :src="author.avatar.default"
            @mouseenter="focusPopaver"
            @mouseleave="focusPopaver" >

        <div class="info">
            <span class="name">
                {{ author.name }}
            </span>
            <slot name="desc"></slot>
        </div>
        <slot name="popup" :isFocus="isFocus"></slot>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { Author } from '@/shared/api/types';

interface Props {
    author: Author,
}

defineProps<Props>()

const isFocus = ref<boolean>(false);

const focusPopaver = () => {
    isFocus.value = !isFocus.value;
}

</script>

<style 
    lang="scss"
    src="./styles.scss"
    scoped >
</style>