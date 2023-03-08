<template>
    <div class="art__image">
        <div class="art__image-block">
            <button class="btn btn-blc-op btn-s" 
                type="button" 
                @click="emit(ArtImageEmits.REMOVE, index)">
                
                <span class="material-icons">close</span>
            </button>
            <img :src="artImage.timesURL">
        </div>
        <app-text-area @update:model-value="updateText"
            :model-value="artImage.description"
            :resize="false"
            :max-rows="2"
            placeholder="Описание картинки" />
    </div>
</template>

<script setup lang="ts">
import { AppTextArea } from '@/shared/ui';
import { ArtImageEmits } from '../../model/art';
import { ArtImage } from '@/shared/api/types';
import { useDebounce } from '@/shared/hooks';


interface Props {
    artImage: ArtImage,
    index: number
}

const props = defineProps<Props>();
const debounce = useDebounce();

const emit = defineEmits<{
    (e: ArtImageEmits.REMOVE, index: number): number,
    (e: ArtImageEmits.TEXT_UPDATE, text: string, index: number): string
}>();

const updateText = (text: string) => {
    debounce(() => {
        emit(ArtImageEmits.TEXT_UPDATE, text, props.index)
    }, 300)
}

</script>

<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>