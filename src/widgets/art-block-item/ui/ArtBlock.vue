<template>
    <card>
        <art-card :media="artBlock.mainPhoto">
            <template #header>
                <h4>{{ artBlock.title }}</h4>
                <art-block-options/>
            </template>
            <template #user>
                <user-author :author="artBlock.author">
                    <template #desc>
                        <span :class="$style.created_at">
                            {{ artBlock.created_at }}
                        </span>
                    </template>
                </user-author>
            </template>
            <template #events>
                <art-block-reaction 
                    :art-id="artBlock.id"
                    :is-like="artBlock.isLike"
                    :is-favorite="artBlock.isFavorite" />
            </template>
        </art-card>
    </card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { ArtCard } from '@/entities/art';
import { ArtBlockReaction } from '@/features/art-block-reaction';
import { ArtBlockOptions } from '@/features/art-block-options';
import { UserAuthor } from '@/entities/user'
import { Card } from '@/shared/ui';
import { Art } from '@/shared/api/types';

interface Props {
    artBlock: Art
}

defineProps<Props>();

</script>

<style 
    lang="scss"
    module
    src="./styles.scss" >
</style>