import { ArtTypes } from "@/entities/art"

export type User = {
    id: number,
    name: string,
    email: string,
    avatar: Media,
    role: string,
    direction: string,
    isSubscribe: boolean | null,
    subscribeCount: number,
    commonLikes: number,
    commonWatch: number,
    created_at: string
}

export type Author = {
    id: number,
    name: string,
    avatar: Media,
    subscribeCount: number,
    commonLikes: number,
    commonWatch: number,
    isSubscribe: boolean | null,
}

export type Art = {
    id: number,
    author: Author,
    title: string,
    text: string,
    type: ArtTypes,
    mainPhoto: Media,
    media: Media[],
    likesCount: number,
    watchCount: number,
    isLike: boolean | null,
    isFavorite: boolean | null,
    created_at: string,
    updated_at: string
}

export type Media = {
    id: number,
    default: string,
    mini: string,
    desc: string | null
}

export type ArtImage = {
    file: File,
    description?: string,
    timesURL: string
}