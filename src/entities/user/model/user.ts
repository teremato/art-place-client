import { User } from '@/shared/api/types';
import { defineStore } from 'pinia';

interface IInititalState {
    authUsers: User,
}

const useUsersStore = defineStore('users', {

});

export default useUsersStore;