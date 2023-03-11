import { User } from '../api/types';

export const userMock: User = {
    id: 1,
    name: 'teremato',
    email: 'teremato@mail.ru',
    avatar: {
        id: 1,
        default: 'https://f.vividscreen.info/soft/7f36886fe1136dd84de182ff72eb7f8d/Photographer-of-Scenery-2048x2048.jpg',
        mini: 'https://f.vividscreen.info/soft/7f36886fe1136dd84de182ff72eb7f8d/Photographer-of-Scenery-2048x2048.jpg',
        desc: ''
    },
    role: 'user',
    direction: 'photos',
    isSubscribe: false,
    subscribeCount: 12,
    commonLikes: 23,
    commonWatch: 104,
    created_at: '14-12'
}