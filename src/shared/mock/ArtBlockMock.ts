import { ArtTypes } from "@/entities/art";
import { Art } from "@/shared/api/types";

export const mock: Art = {
    id: 1,
    author: {
        id: 1,
        name: 'Teremato',
        avatar: {
            id: 1,
            default: 'https://f.vividscreen.info/soft/7f36886fe1136dd84de182ff72eb7f8d/Photographer-of-Scenery-2048x2048.jpg',
            mini: 'https://f.vividscreen.info/soft/7f36886fe1136dd84de182ff72eb7f8d/Photographer-of-Scenery-2048x2048.jpg',
        },
        isSubscribe: false,
        subscribeCount: 0,
        commonLikes: 0,
        commonWatch: 0,
    },
    text: 'Прекрасный день для блога',
    title: 'Горный пейзаж',
    type: ArtTypes.PHOTO,
    mainPhoto: {
        id: 3,
        default: 'https://cdn140.picsart.com/298996135426201.jpg',
        mini: 'https://cdn140.picsart.com/298996135426201.jpg'
    },
    media: [],
    isLike: false,
    isFavorite: true,
    likesCount: 0,
    watchCount: 0,
    created_at: '10:13',
    updated_at: '10:134'
}