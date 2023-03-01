<template>
    <div class="ui_image">
        <div v-show="!isLoad" class="empty_block"
            :class="{ 'image-circle': circle }" >
        </div>
        <img @load="imageLoad" :src="src"
            :class="[
                (!isLoad) ? 'load_image' : '',
                (circle) ? 'image-circle' : '' ]" >

    </div>
</template>

<script setup lang="ts">
import { ref, withDefaults } from 'vue';


interface Props { 
    src: string,
    circle: boolean
}
withDefaults(defineProps<Props>(), {
    src: '',
    circle: false
});

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
    scoped
    src="./styles.scss" >
</style>