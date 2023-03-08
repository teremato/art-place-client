/**
 * @description create URl for File|Blob object
 * @argument file File
 * @return string;
 */
export const createFakeURL = (file: File | null): string => {
    return (file) ? URL.createObjectURL(file) : '';
}