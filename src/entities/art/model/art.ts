import { Art } from '@/shared/api/types';
import { defineStore } from 'pinia';

interface IInitialState {
    arts: Art[],
}

const useArtsStore = defineStore('arts', {
    
});

export default useArtsStore;