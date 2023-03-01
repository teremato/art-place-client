<template>
    <div class="art__block-options">

        <app-popaver :custom-trigger="false">
            <template #button>
                <button class="btn">
                    <span class="material-icons">dehaze</span>
                </button>
            </template>
            <template #content>
                <app-card>
                    <div class="options_list">
                        <template v-for="item in userOptions" :key="item.name">
                            <div @click="optionAction(item.event)"
                                class="options_list-item">
                                <span class="material-icons">
                                    {{ item.icon }}
                                </span>
                                <span class="option-name">
                                    {{ item.name }}
                                </span>
                            </div>
                        </template>
                    </div>
                </app-card>
            </template>
        </app-popaver>
    </div>
</template>

<script setup lang="ts">
import { AppCard, AppPopaver } from '@/shared/ui';
import { ArtEmits } from '@/entities/art';
import { 
    userOptions,
    // ownerOptions
} from '@/features/art-block-options/model';


const optionAction = (event: ArtEmits) => {
    switch(event) {}
}

</script>

<style 
    lang="scss"
    scoped
    src="./styles.scss">
</style>