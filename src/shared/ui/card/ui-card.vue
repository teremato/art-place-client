<template>
    <div :class="$style.card">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ui-card',
    setup () {
        

        return {}
    }
})
</script>

<style module src="styles.scss">

</style>