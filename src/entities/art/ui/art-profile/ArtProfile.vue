<template>
    <div class="art__profile"
        @mouseenter="handleFocus"
        @mouseleave="handleFocus" >
        
        <div v-if="isFocus" class="art__profile-info" >

            <div class="art__desc">
                <div class="art__desc-title">
                    {{ art.title }}
                </div>
            </div>
            <art-block-reaction :art-id="art.id" 
                :is-like="art.isLike"
                :is-favorite="art.isFavorite"
                custom-class="events-color" />
        </div>
        <img :src="art.mainPhoto.mini" alt="">
    </div>
</template>

<script setup lang="ts">
import { Art } from '@/shared/api/types';
import { ArtBlockReaction } from '@/features/art-block-reaction';
import { ref } from 'vue';


interface Props {
    art: Art
}

defineProps<Props>();

const isFocus = ref<boolean>(false);

const handleFocus = () => {
    isFocus.value = !isFocus.value;
}

</script>

<style 
    lang="scss"
    scoped
    src="./styles.scss" >
</style>