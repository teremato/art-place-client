import { ArtTypes } from "@/entities/art";

export interface IForm {
    title: string,
    text: string,
    type: string,
    mainPhoto: File | null,
    photos: File[] | null
}
interface ISelectType {
    name: string,
    type: ArtTypes,
}

export const selectOptions: ISelectType[] = [
    { name: 'Иллюстрация', type: ArtTypes.ILLUSTRATION },
    { name: 'Фото', type: ArtTypes.PHOTO },
    { name: 'Игра', type: ArtTypes.GAME }
]

export const createArt = (form: IForm) => {
    return;
}

export const updateArt = (form: IForm) => {
    return;
}

export const actionController = () => {
    return;
} 