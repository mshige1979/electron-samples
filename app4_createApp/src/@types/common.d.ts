declare global {
    interface Window {
        api: API;
    }
}

export interface API {
    openDirDialog: () => Promise<string[]>;
    openFileDialog: () => Promise<string[]>;
    excelLoad: () => Promise<string[]>;
}
