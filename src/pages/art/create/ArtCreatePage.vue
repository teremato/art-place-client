<template>
    <div class="art__create-page app-container">
        <div class="create-page_left">
            <Input v-model:model-value="form.title"/>
            <TextArea v-model:model-value="form.text"/>
        </div>
        <div class="create-page_right">

        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Input, TextArea } from '@/shared/ui';

interface Form {
    title: string,
    text: string
}

const form = reactive<Form>({
    title: '',
    text: ''
});

/**
 * title field,
 * text field,
 * main photo,
 * photos
 * type select
*/
</script>

<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>