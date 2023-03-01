<template>
    <div class="app-popaver">

        <div v-on="{ click: (customTrigger) ? null : activePopaver }" 
        class="app-popaver-trigger" >

            <slot name="button" :trigger="activePopaver">
            </slot>
        </div>
        <div class="app-popaver-target"
            :class="(isOpen) ? 'app-popaver-active' : 'app-popaver-disabled' ">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onDeactivated, withDefaults , onMounted, ref } from 'vue';

interface Props {
    customTrigger?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    customTrigger: false
});

const isOpen = ref<boolean>(false);

const activePopaver = () => {
    isOpen.value = true;
}

onMounted(() => {
    window.addEventListener('mousedown', disabledPopaver)
});

onDeactivated(() => {
    window.removeEventListener('mousedown', disabledPopaver)
});

const disabledPopaver = (event: Event) => {
    const el = event.target as HTMLDivElement;
    if(!el.closest('.app-popaver-target') && isOpen) {
        isOpen.value = false;
    }
}

</script>

<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>