<template>
    <div class="iu__input-wrapper">
        <h3 v-if="label">{{ label }}</h3>
        <div class="iu__input">
            <input @input="updateValue"
                :type="type"
                :placeholder="placeholder" >
        </div>
    </div>
</template>

<script setup lang="ts">

interface Props {
    modelValue: string,
    type?: string,
    placeholder?: string,
    label?: string,
}

const emits = defineEmits<{
    (e: 'update:modelValue', event: string): string
}>();

withDefaults(defineProps<Props>(), {
    type: 'text',
    placeholder: 'Введите',
    label: ''
});

const updateValue = (event: Event): void => {
    const el = event.target as HTMLInputElement;
    emits('update:modelValue', el.value);
}

</script>

<style
    lang="scss"
    scoped
    src="./styles.scss">
</style>