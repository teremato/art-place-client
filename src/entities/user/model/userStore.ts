import { ApiClient } from '@/shared/api';
import { User } from '@/shared/api/types';
import { defineStore } from 'pinia';

interface IInititalState {
    userPage: User | null,
}

const useUserStore = defineStore('users', {
    state:  (): IInititalState => {
        return {
            userPage: null,
        }
    },
    actions: {
        /** user actions POST */
        async subscribeToAUser(id: number) {
            const client = new ApiClient(this.getToken());
        },
        async getUser(id: number) {
            const client = new ApiClient(this.getToken());
        },
        getToken() {
            return localStorage.getItem('token') ?? '';
        }
    }
});

export default useUserStore;