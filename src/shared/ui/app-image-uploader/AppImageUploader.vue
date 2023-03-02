<template>
    <div class="ui__image-upload">
        <div v-if="isFile" class="remove-image">
            <button class="btn btn-blc-op btn-s" @click="removeImage">
                <span class="material-icons">close</span>
            </button>
        </div>
        <div v-if="isFile" class="image-wrapper">
            <img :src="createFakeUrl(file)" alt="">
        </div>
        <div v-else class="upload-wrapper">
            <label for="image_load">
                <span class="material-icons">image</span>
            </label>
            <input @change="uploadImage" 
                id="image_load"
                multiple="false"
                type="file">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
    modelValue?: null | File 
}

defineProps<Props>();
const emit = defineEmits<{
    (e: 'update:modelValue', file: null | File): File
}>();

const file = ref<File | null>(null);

const isFile = computed<boolean>(() => (file.value) ? true : false);

const uploadImage = (event: Event) => {
    const el = event.target as HTMLInputElement;
    const files = el.files as FileList;

    file.value = files[0];
    emit('update:modelValue', file.value);
}
const removeImage = () => {
    file.value = null;
}
const createFakeUrl = (file: File | null): string => {
    return (file) ? URL.createObjectURL(file) : '';
}

</script>

<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>