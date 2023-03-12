import { Art } from "@/shared/api/types";


export const changeLike = (art: Art) => {

    if(art.isLike) {
        art.isLike = false;
        art.likesCount -= 1;
    }
    else {
        art.isLike = true;
        art.likesCount += 1;
    }

    return art;
}

export const changeFavorite = (art: Art) => {
    const changeArt = art;
    changeArt.isFavorite = !changeArt.isFavorite;

    return changeArt;
}