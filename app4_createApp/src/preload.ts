// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer, contextBridge } from 'electron';

contextBridge.exposeInMainWorld('dialog', {
    openDialog() {

        ipcRenderer.send('hey-open-my-dialog-now');

    }
});

ipcRenderer.on('async-test-complete', (event, message) => {
    console.log("aaaaaa");
    console.log(message)
});
