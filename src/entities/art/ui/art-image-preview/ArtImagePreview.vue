<template>
    <div class="image__block-item">
        <div class="image__block-item-img">
            <button class="btn btn-blc-op btn-xl">
                Сохранить
            </button>
            <img :src="media.default" alt="">
        </div>
        <div v-if="media.desc" class="image__block-item-p">
            <p>{{ media.desc }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Media } from '@/shared/api/types';


interface Props {
    media: Media
}

defineProps<Props>();

</script>

<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>