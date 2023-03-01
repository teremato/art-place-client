<template>
    <div class="art__create-page app-container">
        <div class="create-page_left">
            <app-input v-model:model-value="form.title"/>
            <app-text-area v-model:model-value="form.text" :max-rows="5"/>
            <app-select :options="select">
                <template #current="{ current }">
                    <div>{{ current }}</div>
                </template>
                <template #option="{ option }">
                    <div>{{ option.name }}</div>
                </template>
            </app-select>
        </div>
        <div class="create-page_right">

        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { 
    AppInput,
    AppTextArea,
    AppSelect
} from '@/shared/ui';

interface Form {
    title: string,
    text: string
}

interface Itest {
    name: string,
    age: number
}

const select: Itest[] = [
    { name: 'df', age: 1 },
    { name: 'df', age: 3 },

]

const form = reactive<Form>({
    title: '',
    text: ''
});

/**
 * title field, \/
 * text field, \/
 * main photo,
 * photos
 * type select \/
*/
</script>

<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>