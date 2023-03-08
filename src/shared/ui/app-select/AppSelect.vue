<template>
    <div class="ui__select-wrapper">
        <h3 v-if="label">{{ label }}</h3>
        <div class="ui__select" :class="{'select-active-wrapper': isActive}">
            <div class="select-main" @click="openSelect">
                <slot name="current" :current="current"></slot>
            </div>
            <div v-if="isActive" class="select-dropdown select-active">
                <template v-for="(item, index) in options" :key="index">
                    <div class="select-option" @click="handleChoose(item)">
                        <slot name="option" :option="item"></slot>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';


interface Props {
    options: any[],
    label?: string
}

const props = withDefaults(defineProps<Props>(), {
    options: () => [],
    label: ''
});
const emit = defineEmits<{
    <T>(e: 'update:modelValue', currentOption: T): T
}>();
/** Понятие не имею как прокинуть дженерик на пропс */
const current = ref<any>('');
const isActive = ref<boolean>(false);

onMounted(() => current.value = props.options[0]);

const openSelect = () => {
    isActive.value = true;
}
const handleChoose = (item: string | object | number) => {
    current.value = item;
    isActive.value = false;

    emit('update:modelValue', current.value);
}

</script>

<style
    lang="scss"
    scoped
    src="./styles.scss">
</style>