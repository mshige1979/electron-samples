declare global {
    interface Window {
        api: API;
    }
}

export interface API {
    openWindow: () => Promise<string[]>;
}
