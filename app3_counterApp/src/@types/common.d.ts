declare global {
    interface Window {
        versions: Versions;
        store: Store;
    }
}

export interface Versions {
    node: () => string;
    chrome: () => string;
    electron: () => string;
}

export interface Store {
    get: (string) => any;
    set: (string, any) => void;
}
