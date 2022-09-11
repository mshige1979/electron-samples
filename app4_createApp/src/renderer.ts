/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import $ from "jquery";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

console.log('👋 This message is being logged by "renderer.js", included via webpack');

// preload経由でアクセス
const appAPI = window.api;

$(() => {
    $(".btn-dir").on('click', function () {
        appAPI.openDirDialog().then((result: string[]) => {
            console.log(result);
            if (result === undefined) {
                return;
            }
            $(".dir_path").text(result[0]);
        });
    });
    $(".btn-file").on('click', function () {
        appAPI.openFileDialog().then((result: string[]) => {
            console.log(result);
            if (result === undefined) {
                return;
            }
            $(".file_path").text(result[0]);
        });
    });

    $(".btn-xlsx").on('click', function () {
        appAPI.excelLoad().then((result) => {
            console.log(result);
        });
    });
});
