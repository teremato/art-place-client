<template>
    <div class="art_form">
        <form>
            <div class="art-form-header">
                <slot name="form-title"></slot>
                <div class="art-form-header-actions">
                    <button class="btn btn-bl btn-xl">
                        Сохранить
                    </button>
                    <button class="btn btn-bl btn-xl">
                        Удалить
                    </button>
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
                                {{ current.name }}
                            </span>
                        </template>
                        <template #option="{ option }">
                            <span class="option">
                                {{ option.name }}
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

                <app-multiplay-uploader @update:model-value="addPhotos"
                    label="Добавить фото" />
                    
                <div v-if="form.photos" class="multiplay-media">

                    <draggable v-model="form.photos"
                        tag="transition-group"
                        :component-data="{name:'fade'}" >

                        <template #item="{ element, index }">
                            <art-image-block :art-image="element" 
                                :index="index"
                                @image:text-update="updatePhotoText"
                                @image:remove="removePhoto" />
                                
                        </template>
                    </draggable>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import draggable from 'vuedraggable'
import {
    AppInput, AppTextArea,
    AppMultiplayUploader, AppImageUploader,
    AppSelect,
} from '@/shared/ui';

import { ArtImageBlock } from '@/entities/art';
import { createArtImage } from '@/widgets/art-form/model';

import { selectOptions, IForm } from '@/widgets/art-form/model';

const form = reactive<IForm>({
    title: '',
    text: '',
    type: '',
    mainPhoto: null,
    photos: [],
});

const addPhotos = (files: File[]) => {
    files.forEach((item) => {
        const newImage = createArtImage(item);
        form.photos?.push(newImage);
    })
}
const removePhoto = (idx: number) => {
    if(form.photos) {
        form.photos = form.photos.filter((item, index) => idx !== index);
    }
}
const updatePhotoText = (text: string, idx: number) => {
    if(form.photos) {
        form.photos[idx].description = text;
    }
}

</script>

<style
    lang="scss"
    scoped
    src="./styles.scss">
</style>