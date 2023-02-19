<template>
    <div :class="$style.art_block">
        <div :class="$style.art_block_header">
            <slot name="header"></slot>
        </div>
        <div :class="$style.art_block_middle">
            <div :class="$style.art_block_media"
                @mouseenter="focusMedia"
                @mouseleave="blurMedia">
                
                <button @click="mediaItemSave"
                    class="btn btn-blc-op btn-s"
                    :class="(isFocus) ? $style.button_focus : $style.button_blur" >

                    <span class="material-icons">bookmark_border</span>
                </button>
                <Image :src="media.default" />
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
import { Image } from '@/shared/ui';
import { ref } from 'vue';

interface Props {
    media: Media
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (e: 'media:favorite', id: number): number
}>()

const isFocus = ref<boolean>(false);

const mediaItemSave = () => {
    emit('media:favorite', props.media.id);
}
const focusMedia = () => {
    isFocus.value = true;
}
const blurMedia = () => {
    isFocus.value = false;
}

</script>

<style 
    lang="scss"
    src="./styles.scss"
    module >
</style>