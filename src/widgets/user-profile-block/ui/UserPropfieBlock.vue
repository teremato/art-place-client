<template>
    <card>
        <user-profile :user="userMock">
            <template #actions>
                <div class="user__profile-actions">
                    <button class="btn btn-bl btn-xl btn-auto">
                        Подписаться
                    </button>
                    <button class="btn btn-bl btn-xl btn-auto">
                        Написать
                    </button>
                </div>
            </template>
        </user-profile>
    </card>
</template>

<script setup lang="ts">
import { UserProfile } from '@/entities/user';
import { userMock } from '@/shared/mock/UserMock';
import { Card } from '@/shared/ui';


</script>

<style 
    lang="scss"
    scoped
    src="./styles.scss" >
</style>