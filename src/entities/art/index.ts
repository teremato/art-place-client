import ArtCard from './ui/art-card/ArtCard.vue';
import ArtProfile from './ui/art-profile/ArtProfile.vue';
import ArtImageBlock from './ui/art-image/ArtImage.vue';
import ArtImagePreview from './ui/art-image-preview/ArtImagePreview.vue';
import { ArtEmits, ArtTypes, ArtImageEmits } from './model/artStore';


export { 
    ArtCard,
    ArtProfile,
    ArtImageBlock,
    ArtImagePreview,
    ArtEmits,
    ArtTypes,
    ArtImageEmits
};

import { changeLike, changeFavorite } from './model/artEvents';
import useArt from './model/artStore';

export {
    changeFavorite,
    changeLike,
    useArt
}