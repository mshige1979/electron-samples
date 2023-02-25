declare global {
    interface Window {
        api: API;
    }
}

export interface API {
    openWindow: () => Promise<string[]>;
    initSubWindow: () => Promise<string[]>;
    setupSubWindow: (any) => Promise<string[]>;
    onReply: (any) => Promise<any>;
    onSubWindowReply: (any) => Promise<any>;
}
