<template>
    <div class="app__multiplay-upload">
        <div class="button_upload">
            <label for="multiplay-uploader">
                <span class="material-icons-outlined">collections</span>
                <span v-if="label">{{ label }}</span>
            </label>
        </div>
        <input type="file" 
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

</script>

<style 
    lang="scss"
    scoped
    src="./styles.scss">
</style>