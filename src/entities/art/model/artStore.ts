import { Art } from '@/shared/api/types';
import { defineStore } from 'pinia';


export enum ArtTypes {
    PHOTO = 'photo',
    ILLUSTRATION = 'illustration',
    GAME = 'game'
}

export enum ArtEmits {
    LIKE = 'art:like',
    FAVORITE = 'art:favorite',
    COMPLAIN = 'art:complain',
    EDIT = 'art:edit',
    REMOVE = 'art:remove'
}

export enum ArtImageEmits {
    REMOVE = 'image:remove',
    TEXT_UPDATE = 'image:textUpdate'
}

interface IInitialState {
    artCollect: Art[]
}

const useArtsStore = defineStore('arts', {
    state: (): IInitialState => {
        return {
            artCollect: []
        }
    },
    getters: {
        getArtsCount: (state: IInitialState) => state.artCollect?.length ?? 0
    },
    actions: {
        /** art user actions POST */
        likeToArt(id: number) {
            return;
        },
        complainToArt(id: number) {
            return;
        },
        favorite(id: number) {
            return;
        },
        /** art actions POST */
        editArt(id: number, form: any) {
            return;
        },
        createArt(form: any) {
            return;
        },
        deleteArt(id: number) {
            return;
        },
        /** art get GET */
        getArtItem(id: number) {
            return;
        },
        getUserArts(id: number, params: any) {
            return;
        },
        getArts(params: any) {
            return;
        },
    }
});

export default useArtsStore;