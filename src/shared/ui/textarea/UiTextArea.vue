<template>
    <div class="ui__textarea">
        <textarea @change="updateValue"
            @input="autoSize"
            :placeholder="placeholder"
            :maxlength="maxLenght"
            :maxRows="maxRows"
            spellcheck="false" />
    </div>
</template>
<script setup lang="ts">

interface Props {
    modelValue: string,
    maxRows?: number,
    maxLenght?: number,
    placeholder?: string,
    resize?: boolean 
}

withDefaults(defineProps<Props>(), {
    resize: true,
    maxLenght: 800,
    maxRows: 2,
    placeholder: 'Введите'
})

const emits = defineEmits<{
    (e: 'update:modelValue', event: string): string
}>();

const updateValue = (event: Event) => {
    const el = event.target as HTMLTextAreaElement;
    emits('update:modelValue', el.value); 
}

const autoSize = (event: Event) => {

    const el = event.target as HTMLTextAreaElement;
    const offset = el.offsetHeight - el.clientHeight;

    el.style.height = 'auto';
    el.style.height = el.scrollHeight + offset + 'px';
}

</script>
<style 
    lang="scss"
    scoped
    src="./styles.scss" >
</style>