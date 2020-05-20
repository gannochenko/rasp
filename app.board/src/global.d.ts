declare const __DEV__: boolean;
declare const __TEST__: boolean;

declare module '*.proto' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const content: any;
    export default content;
}

declare module 'cpuse';
