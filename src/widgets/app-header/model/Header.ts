interface IChapter {
    title: string,
    icon: string,
    event: Chapters
}

export enum Chapters {
    PHOTO = 'chapter:photos',
    ILLUSTRATIONS = 'chapter:illustrations',
    GAMES = 'chapter:games',
    AUTHORS = 'chapter:authors'
}

export const chapters: IChapter[] = [
    { title: 'Фото', icon: 'photo_camera', event: Chapters.PHOTO },
    { title: 'Иллюстрации', icon: 'image', event: Chapters.ILLUSTRATIONS },
    { title: 'Игры', icon: 'videogame_asset', event: Chapters.GAMES },
    { title: 'Авторы', icon: 'videogame_asset', event: Chapters.AUTHORS },
]