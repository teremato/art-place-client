interface IOptions {
    icon: string,
    name: string
}

export const userOptions: IOptions[] = [
    { name: 'Пожаловаться', icon: 'error_outline' }
]

export const ownerOptions: IOptions[] = [
    { name: 'Редактировать', icon: 'edit' },
    { name: 'Удалить', icon: 'remove_circle_outline' },
]