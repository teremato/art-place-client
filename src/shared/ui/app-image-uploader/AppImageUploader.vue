<template>
    <div class="ui__image-uploader"
        :class="{ 'uploader-empty': !isFile }" >

        <div v-if="isFile" class="image-preview">
            <button class="btn btn-blc-op btn-s" @click="removeImage">
                <span class="material-icons">close</span>
            </button>
            <img :src="createFakeUrl(file)">
        </div>
        <label v-else for="file-upld">
            <div class="uploader-label">
                <span>{{ label }}</span>
                <span class="material-icons">image</span>
            </div>
        </label>
        <input @change="uploadImage" 
            type="file"
            id="file-upld"
            multiple="false">
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
    modelValue?: null | File,
    label?: string
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
    emit('update:modelValue', file.value);
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