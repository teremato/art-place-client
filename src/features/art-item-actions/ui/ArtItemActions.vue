<template>
    <div class="art__block-actions">
        <button class="btn btn-bl btn-s btn-circle">
            <span class="material-icons">thumb_up_off_alt</span>
        </button>
        <button class="btn btn-bl btn-s btn-circle">
            <span class="material-icons">bookmark_border</span>
        </button>
        <app-popaver>
            <template #button="{ trigger }">
                <button class="btn" @click="trigger">
                    <span class="material-icons">dehaze</span>
                </button>
            </template>
            <template #content>
                <app-card>
                    <div class="popaver-content">
                        <template v-for="item in ownerOptions" :key="item.name">
                            <div class="popaver-option">
                                <span class="material-icons">{{ item.icon }}</span>
                                <span>{{ item.name }}</span>
                            </div>
                        </template>
                    </div>
                </app-card>
            </template>
        </app-popaver>
    </div>
</template>

<script setup lang="ts">
import { AppPopaver, AppCard } from '@/shared/ui';
import { ownerOptions } from '../model';

</script>

<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>