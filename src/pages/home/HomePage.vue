<template>
    <div class="home app-container">
        <template v-for="item in arr" :key="item.id">
            <art-block @art:like="(id) => {}"
                :art-block="item" />
        </template>
    </div>
</template>

<script setup lang="ts">
import { ArtBlock } from '@/widgets/art-block-item';
import { mock as ArtBlockMock } from '@/shared/mock/ArtBlockMock';
import { useUser } from '@/entities/user';
import { useArt } from '@/entities/art';
import { Art } from '@/shared/api/types';
import { onMounted, ref } from 'vue';

const userModel = useUser();
const artModel = useArt();

const arr = ref<Art[]>([
    ArtBlockMock,
    ArtBlockMock,
    ArtBlockMock,
    ArtBlockMock,
    ArtBlockMock,
    ArtBlockMock,
])

</script>
<style 
    lang="scss"
    scoped
    src="./styles.scss">
</style>