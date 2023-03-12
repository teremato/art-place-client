import { User } from "@/shared/api/types";
import { ApiClient } from '@/shared/api';
import { defineStore } from "pinia";

interface IInititalState {
    authUser: User | null,
    token: string
}

const useAuthUserStore = defineStore('auth-user', {
    state: (): IInititalState => {
        return {
            authUser: null,
            token: ''
        }
    },
    getters: {
        isAuth: (state: IInititalState): boolean => (state.token) ? true : false,
        authUserID: (state: IInititalState) => state.authUser?.id,
    },
    actions: {
        async registerUser(form: any) {
            const client = new ApiClient(this.token);
        },
        async loginUser(form: any) {
            const client = new ApiClient(this.token);
        },
        /** auth user Post */
        setUser(user: User) {
            this.authUser = user;
        },
        async getAuthUser(id: number) {
            const client = new ApiClient(this.token);
        },
    }

})

export default useAuthUserStore;