<template>
    <div class="home app-container">
        <ArtBlock :art-block="ArtBlockMock"/>
        <ArtBlock :art-block="ArtBlockMock"/>
        <ArtBlock :art-block="ArtBlockMock"/>
        <ArtBlock :art-block="ArtBlockMock"/>
        <ArtBlock :art-block="ArtBlockMock"/>
        <ArtBlock :art-block="ArtBlockMock"/>
        <ArtBlock :art-block="ArtBlockMock"/>
    </div>
</template>

<script setup lang="ts">
import { ArtBlock } from '@/widgets/art-block-item';
import { mock as ArtBlockMock } from '@/shared/mock/ArtBlockMock';

</script>
<style 
    lang="scss"
    scoped
    src="./styles.scss">
</style>