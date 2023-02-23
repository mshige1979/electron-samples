// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer, contextBridge } from 'electron';

// index.tsに定義したipcMain.handleの処理へ連携する
contextBridge.exposeInMainWorld('api', {
    openWindow: () => {
        console.log("openWindow");
        const result = ipcRenderer.invoke('open-window');
        return result;
    },
});
