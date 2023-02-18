export type User = {
    id: number,
    name: string,
    email: string,
    avatar: Media,
    role: string,
    description: string,
    isSubscribe: boolean | null
}

export type Author = {
    id: number,
    name: string,
    avatar: Media,
    isSubscribe: boolean | null
}

export type Art = {
    id: number,
    author: Author,
    title: string,
    text: string,
    mainPhoto: Media,
    media: Media[],
    isLike: boolean | null,
    isFavorite: boolean | null,
    created_at: string,
    updated_at: string
}

export type Media = {
    id: number,
    default: string,
    mini: string
}