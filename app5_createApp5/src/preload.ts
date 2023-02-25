// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer, contextBridge } from 'electron';

// index.tsに定義したipcMain.handleの処理へ連携する
contextBridge.exposeInMainWorld('api', {
    // コメントを流すためのWindows作成
    openWindow: (params: any) => {
        console.log("openWindow");
        const result = ipcRenderer.invoke('open-window', params);
        return result;
    },

    // サブウィンドウからの起動命令
    initSubWindow: () => {
        console.log("initSubWindow");
        const result = ipcRenderer.invoke('init-sub-window');
        return result;
    },

    // 親ウィンドウからのパラメータ送信
    setupSubWindow: (params: any) => {
        console.log("setupSubWindow");
        const result = ipcRenderer.invoke('setup-sub-window', params);
        return result;
    },

    // 子ウィンドウから親ウィンドウの起動を検知
    onReply: (listener: any) => ipcRenderer.on('reply', listener),

    // 親ウィンドウから子ウィンドウへの送信を検知
    onSubWindowReply: (listener: any) => ipcRenderer.on('sub-window-reply', listener),
});
