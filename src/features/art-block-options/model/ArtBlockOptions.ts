import { ArtEmits } from "@/entities/art"

interface IOption {
    icon: string,
    name: string,
    event: ArtEmits
}

export const userOptions: IOption[] = [
    { icon: 'bookmark_border', name: 'В избранное', event: ArtEmits.FAVORITE },
    { icon: 'error_outline', name: 'Пожаловаться', event: ArtEmits.COMPLAIN },
];

export const ownerOptions: IOption[] = [
    { icon: 'edit', name: 'Редактировать', event: ArtEmits.EDIT },
    { icon: 'remove_circle_outline', name: 'Удалить', event: ArtEmits.REMOVE }
];