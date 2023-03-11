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
            desc: null
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
        mini: 'https://cdn140.picsart.com/298996135426201.jpg',
        desc: ''
    },
    media: [
        {
            id: 1,
            default: 'https://vsegda-pomnim.com/uploads/posts/2022-04/1648927017_17-vsegda-pomnim-com-p-gori-alpi-zimoi-foto-22.jpg',
            mini: 'https://vsegda-pomnim.com/uploads/posts/2022-04/1648927017_17-vsegda-pomnim-com-p-gori-alpi-zimoi-foto-22.jpg',
            desc: 'Пезайж зимних гор'
        },
        {
            id: 2,
            default: 'https://wp-s.ru/wallpapers/9/0/402385903273859/zimnij-pejzazh-yarkoe-solnce-belosnezhnyj-svet.jpg',
            mini: 'https://wp-s.ru/wallpapers/9/0/402385903273859/zimnij-pejzazh-yarkoe-solnce-belosnezhnyj-svet.jpg',
            desc: 'Зимний лес'
        },
        {
            id: 3,
            default: 'https://sportishka.com/uploads/posts/2022-03/1647913347_14-sportishka-com-p-gori-les-reka-zima-turizm-krasivo-foto-20.jpg',
            mini: 'https://sportishka.com/uploads/posts/2022-03/1647913347_14-sportishka-com-p-gori-les-reka-zima-turizm-krasivo-foto-20.jpg',
            desc: 'Река в зимнию пору'
        },
    ],
    isLike: true,
    isFavorite: true,
    likesCount: 0,
    watchCount: 0,
    created_at: '10:13',
    updated_at: '10:134'
}