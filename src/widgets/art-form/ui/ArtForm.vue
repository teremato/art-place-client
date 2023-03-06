<template>
    <div class="art_form">
        <form>
            <div class="art-form-header">
                <slot name="form-title"></slot>
                <div class="art-form-header-actions">
                    <button class="btn btn-bl btn-xl">Сохранить</button>
                    <button class="btn btn-bl btn-xl">Удалить</button>
                </div>
            </div>
            <div class="art_form-top">
                <div class="art_form-top-left">
                    <app-input v-model="form.title"
                        label="Заголовок"
                        placeholder="Например - Море" />
                    <app-select v-model="form.type" 
                        :options="selectOptions"
                        label="Категория" >

                        <template #current="{ current }">
                            <span class="current-option">
                                {{ current }}
                            </span>
                        </template>
                        <template #option="{ option }">
                            <span class="option">
                                {{ option }}
                            </span>
                        </template>
                    </app-select>
                </div>
                <div class="art_form-top-right">
                    <app-image-uploader v-model="form.mainPhoto"
                        label="Главное фото" />
                </div>
            </div>
            <div class="art_form-middle">
                <app-text-area v-model="form.text"
                    placeholder="Описание"
                    :max-rows="5" />
            </div>
            <div class="art_form-footer">
                <app-multiplay-uploader v-model="form.photos"
                    label="Добавить фото" />
                <div class="multiplay-media">
                    <template>
                        
                    </template>
                </div>
            </div>
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