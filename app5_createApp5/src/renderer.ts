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

// JQuery初期処理
$(() => {

    let index = 0;

    // 子ウィンドウからのメッセージを待ち受け
    appAPI.onReply(() => {
        // メインプロセスから転送されてきたメッセージを表示
        console.log("subwindows called");
        // メインプロセス経由で子ウィンドウへ送信
        appAPI.setupSubWindow({
            room_id: $("#roomidFormControlInput").val(),
            url: $("#socketioFormControlInput").val(),
            index: index,
        });
        index++;
    });

    // ボタン押下時
    $(".btn-win").on('click', function () {

        // URLを取得
        const url = $("#socketioFormControlInput").val();
        // ルームIDを取得
        const roomId = $("#roomidFormControlInput").val();

        // preload.tsのopenWindowsへ連携
        appAPI.openWindow().then((result) => {
            console.log(result);
        });
    });
});
