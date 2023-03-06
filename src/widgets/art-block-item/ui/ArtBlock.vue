<template>
    <app-card>
        <art-card :media="artBlock.mainPhoto">
            <template #header>
                <h4>{{ artBlock.title }}</h4>
                <art-block-options/>
            </template>
            <template #user>
                <app-popaver :custom-trigger="true">
                    <template #button="{ trigger }">
                        <user-author :author="artBlock.author"
                            @avatar:click="trigger" >
                            <template #desc>
                                <span class="created_at">
                                    {{ artBlock.created_at }}
                                </span>
                            </template>
                        </user-author>
                    </template>
                    <template #content>
                        <user-popup>
                            <template #author>
                                <user-author :author="artBlock.author"/>
                            </template>
                            <template #actions>
                                <user-popup-actions/>
                            </template>
                        </user-popup>
                    </template>
                </app-popaver>
            </template>
            <template #events>
                <art-block-reaction 
                    :art-id="artBlock.id"
                    :is-like="artBlock.isLike"
                    :is-favorite="artBlock.isFavorite" />
            </template>
        </art-card>
    </app-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { ArtBlockReaction } from '@/features/art-block-reaction';
import { ArtBlockOptions } from '@/features/art-block-options';
import { UserPopupActions } from '@/features/user-popup-actions';
import { ArtCard } from '@/entities/art';
import { UserAuthor, UserPopup } from '@/entities/user';
import { AppCard, AppPopaver } from '@/shared/ui';
import { Art } from '@/shared/api/types';

interface Props {
    artBlock: Art
}

defineProps<Props>();

</script>

<style 
    lang="scss"
    scoped
    src="./styles.scss" >
</style>