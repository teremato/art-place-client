import { ArtTypes } from "@/entities/art";
import { ArtImage } from "@/shared/api/types";
import { MediaHelpers } from "@/shared/helpers";

export interface IForm {
    title: string,
    text: string,
    type: string,
    mainPhoto: File | null,
    photos: ArtImage[] | null
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

export const createArtImage = (file: File): ArtImage => {
    return {
        file: file,
        description: '',
        timesURL: MediaHelpers.createFakeURL(file)
    }
}