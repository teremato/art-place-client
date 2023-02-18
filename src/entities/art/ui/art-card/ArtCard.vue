<template>
    <div :class="$style.art_block">
        <div :class="$style.art_block_header">
            <slot name="header"></slot>
        </div>
        <div :class="$style.art_block_middle">
            <div :class="$style.art_block_media">
                
                <button @click="mediaItemSave" 
                    class="btn btn-blc-op" >

                    <span class="material-icons">bookmark_border</span>
                </button>
                <img :src="media?.default">
            </div>
        </div>
        <div :class="$style.art_block_footer">
            <slot name="user"></slot>
            <slot name="events"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Media } from '@/shared/api/types';

interface Props {
    media: Media
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (e: 'media:favorite', id: number): number
}>()

const mediaItemSave = () => {
    emit('media:favorite', props.media.id);
}

</script>

<style 
    lang="scss"
    src="./styles.scss"
    module >
</style>