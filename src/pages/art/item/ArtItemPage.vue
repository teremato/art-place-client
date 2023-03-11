<template>
    <div class="art__item-wrapper container">
        <div class="art__item-header">
            <user-author :author="mock.author" size="size-m">
                <template #desc>
                    <span class="art__item-header-user">
                        {{ mock.created_at }}
                    </span>
                </template>
            </user-author>
            <art-item-actions/>
        </div>
        <div class="art__item-middle">
            
            <h2 class="art__item-middle-title">{{ mock.title }}</h2>
            <p class="art__item-middle-desc">{{ mock.text }}</p>

            <div class="art__item-middle-images">
                <template v-for="item in mock.media" :key="item.id">
                    <art-image-preview :media="item" />
                </template>
            </div>
        </div>
        <div class="art__item-footer">
            coming...
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArtImagePreview } from '@/entities/art';
import { UserAuthor } from '@/entities/user';
import { ArtItemActions } from '@/features/art-item-actions';
import { mock } from '@/shared/mock/ArtBlockMock';

</script>

<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>