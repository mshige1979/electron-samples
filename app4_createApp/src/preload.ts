// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer, contextBridge } from 'electron';
import * as xlsx from 'node-xlsx';

contextBridge.exposeInMainWorld('api', {
    openDirDialog: async () => {
        console.log("dir-open-dialog");
        const result = await ipcRenderer.invoke('dir-open-dialog');
        return result;
    },
    openFileDialog: () => {
        console.log("file-open-dialog");
        const result = ipcRenderer.invoke('file-open-dialog');
        return result;
    },
    excelLoad: () => {
        console.log("xlsx load");
        const result = ipcRenderer.invoke('excel-load');
        return result;
    },
});
