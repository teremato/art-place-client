import { Author } from "@/shared/api/types";


export const changeSubscribe = (author: Author): Author => {
   const changeAuthor = author;
   changeAuthor.isSubscribe = !author.isSubscribe;

   return changeAuthor;
}