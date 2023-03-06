<template>
    <div class="art-form">
        <form>
            <app-image-uploader/>
            <app-input/>
            <app-text-area/>
            <app-select :options="selectOptions">
                <template #current="{ current }">
                    <span>{{ current }}</span>
                </template>
                <template #option="{ option }">
                    <span>{{ option }}</span>
                </template>
            </app-select>
            <app-multiplay-uploader/>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import {
    AppInput,
    AppTextArea,
    AppMultiplayUploader,
    AppImageUploader,
    AppSelect,
} from '@/shared/ui';
import {
    selectOptions,
    IForm,
} from '@/widgets/art-form/model';

const form = reactive<IForm>({
    title: '',
    text: '',
    type: '',
    mainPhoto: null,
    photos: [],
});

</script>

<style
    lang="scss"
    scoped
    src="./styles.scss">
</style>