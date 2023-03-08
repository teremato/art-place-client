import { Art } from '@/shared/api/types';
import { defineStore } from 'pinia';

interface IInitialState {
    arts: Art[],
}

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

const useArtsStore = defineStore('arts', {
    
});

export default useArtsStore;