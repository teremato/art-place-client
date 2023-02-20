<template>
    <div class="header__search">
        <form>
            <input type="text">
            <button>

            </button>
        </form>
        <div>
            <slot name="search-item"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style
    lang="scss"
    scoped
    src="./styles.scss" >
</style>