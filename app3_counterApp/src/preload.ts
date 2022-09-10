// All of the Node.js APIs are available in the preload process.
const { contextBridge } = require('electron');
const Store = require('electron-store')
const store = new Store()

// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector: string, text: string) => {
        const element = document.getElementById(selector);
        if (element) {
            element.innerText = text;
        }
    };

    for (const type of ["chrome", "node", "electron"]) {
        //replaceText(`${type}-version`, process.versions[(type]);
        replaceText(`${type}-version`, type);
    }
});

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
});

contextBridge.exposeInMainWorld('store', {
    get: (key: string): any => {
        return store.get(key);
    },
    set: (key: string, value: any) => {
        store.set(key, value);
    },
});
