<template>
    <div class="art__create-page container">
        <div class="art__create-page-header">
            <h2>Создайте сообственную Арт-блог!</h2>
            <div class="art__create-page-actions">
                <button @click="getData" class="btn btn-bl btn-xl">
                    Сохранить
                </button>
                <button class="btn btn-bl btn-xl">
                    Отменить
                </button>
            </div>
        </div>
        <div class="art__create-page-form">
            <div class="create-page-left">

                <app-image-uploader v-model="form.mainPhoto"
                    label="Выберите обложку"/>

                <app-input v-model="form.title"
                    label="Заголовок"
                    placeholder="Например - Море" />

                <app-text-area v-model="form.text"
                    label="Описание"
                    placeholder="Описание вашей статьи"
                    :max-rows="5" />

                <app-select v-model="form.type" 
                    :options="selectCategory"
                    label="Категория" >
                    
                    <template #current="{ current }">
                        <div class="current-option">{{ current }}</div>
                    </template>
                    <template #option="{ option }">
                        <div class="option">{{ option }}</div>
                    </template>
                </app-select>
            </div>
        </div>
        <div class="art__create-page-footer">

        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { 
    AppInput,
    AppTextArea,
    AppSelect,
    AppImageUploader
} from '@/shared/ui';

interface Form {
    title: string,
    text: string,
    type: string,
    mainPhoto: File | null,
    photos: File[] | null
}

const selectCategory: string[] = [
    'Фото', 'Иллюстрация', 'Игры'
]

const getData = () => {
    console.log(form.mainPhoto);
}

const form = reactive<Form>({
    title: '',
    text: '',
    type: '',
    mainPhoto: null,
    photos: []
});
</script>

<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>