<template>
    <div class="art__block-options">
        <button @click="openOptions" class="btn">
            <span class="material-icons">dehaze</span>
        </button>
        <div v-if="isOpen" class="options_list-dropdown"
            :class="(isOpen) ? 'dropdown_open' : 'dropdown_close'">

            <card>
                <div class="options_list">
                    <template v-for="item in userOptions" :key="item.name">
                        <div @click="optionAction(item.event)"
                            class="options_list-item">
                            <span class="material-icons">{{ item.icon }}</span>
                            <span class="option-name">{{ item.name }}</span>
                        </div>
                    </template>
                </div>
            </card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onDeactivated, onMounted, ref } from 'vue';
import { Card } from '@/shared/ui';
import { ArtEmits } from '@/entities/art';
import { 
    userOptions,
    ownerOptions
} from '@/features/art-block-options/model';

const isOpen = ref<boolean>(false);

const openOptions = () => {
    isOpen.value = true;
}

onMounted(() => {
    window.addEventListener('mousedown', closeOption);
})
onDeactivated(() => {
    window.removeEventListener('mousedown', closeOption);
});

const closeOption = (event: Event) => {
    const el = event.target as HTMLDivElement;
    if(!el.closest('.options_list-dropdown') && isOpen) {
        isOpen.value = false;
    }
}
const optionAction = (event: ArtEmits) => {
    switch(event) {}
}

</script>

<style 
    lang="scss"
    scoped
    src="./styles.scss">
</style>