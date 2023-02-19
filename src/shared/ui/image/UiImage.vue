<template>
    <div :class="$style.ui_image">
        <div v-show="!isLoad" :class="$style.empty_block"></div>
        <img @load="imageLoad" :src="src"
            :class="(!isLoad) ? $style.load_image : ''" >

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


interface Props { 
    src: string
}
defineProps<Props>();

const isLoad = ref<boolean>(false);

const imageLoad = (event: Event) => {
    const el = event.target as HTMLImageElement;

    if(el.complete && el.naturalWidth !== 0) {
        isLoad.value = true;
    }
}

</script>

<style 
    lang="scss"
    module
    src="./styles.scss" >
</style>