// アプリケーションの寿命の制御と、ネイティブなブラウザウインドウを作成するモジュール
import { app, BrowserWindow } from 'electron';
import * as path from "path";

const createWindow = () => {
  // ブラウザウインドウを作成します。
  const mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
    width: 800,
  });

  // そしてアプリの index.html を読み込みます。
  mainWindow.loadFile(path.join(__dirname, "../public/index.html"));

  // デベロッパー ツールを開きます。
  mainWindow.webContents.openDevTools()
};

// このメソッドは、Electron の初期化が完了し、
// ブラウザウインドウの作成準備ができたときに呼ばれます。
// 一部のAPIはこのイベントが発生した後にのみ利用できます。
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // macOS では、Dock アイコンのクリック時に他に開いているウインドウがない
    // 場合、アプリのウインドウを再作成するのが一般的です。
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// macOS を除き、全ウインドウが閉じられたときに終了します。 ユーザーが
// Cmd + Q で明示的に終了するまで、アプリケーションとそのメニューバーを
// アクティブにするのが一般的です。
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
