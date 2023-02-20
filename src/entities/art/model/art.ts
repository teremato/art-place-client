import { Art } from '@/shared/api/types';
import { defineStore } from 'pinia';

interface IInitialState {
    arts: Art[],
}

export enum ArtEmits {
    LIKE = 'art:like',
    FAVORITE = 'art:favorite',
    COMPLAIN = 'art:complain',
    EDIT = 'art:edit',
    REMOVE = 'art:remove'
}

const useArtsStore = defineStore('arts', {
    
});

export default useArtsStore;