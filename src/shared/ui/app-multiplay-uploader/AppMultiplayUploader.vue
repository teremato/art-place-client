<template>
    <div class="app__multiplay-upload">
        <div class="button_upload">
            <label for="multiplay-uploader">
                <span class="material-icons-outlined">collections</span>
                <span v-if="label">{{ label }}</span>
            </label>
        </div>
        <input @change="uploadFiles"
            type="file" 
            id="multiplay-uploader" 
            :multiple="true">
    </div>
</template>

<script setup lang="ts">

interface Props {
    label?: string
}

withDefaults(defineProps<Props>(), {
    label: ''
});
const emit = defineEmits<{
    (e: 'update:modelValue', payload: File[]): File[],
}>();

const uploadFiles = (event: Event) => {
    const el = event.target as HTMLInputElement;
    const files = el.files as FileList;

    emit('update:modelValue', [...files]);
}

</script>

<style 
    lang="scss"
    scoped
    src="./styles.scss">
</style>