export const useDebounce = () => {

    let time: number | undefined;

    return <T>(cb: () => T, ms: number) => {
        clearTimeout(time);

        time = setTimeout(cb, ms)
    }
}