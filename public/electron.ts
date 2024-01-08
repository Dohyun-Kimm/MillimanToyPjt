import * as path from "path";
import { app, BrowserWindow } from "electron";
import * as isDev from "electron-is-dev";

const BASE_URL = "http://localhost:3000";

let mainWindow: BrowserWindow | null;

function createMainWindow(): void {
  mainWindow = new BrowserWindow({
    width: 960,
    height: 630,
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#ffffff",
      symbolColor: "#000000",
      height: 30,
    },
    frame: false,

    webPreferences: {
      contextIsolation: true,

      nodeIntegration: true,
    },
  });

  mainWindow.once("ready-to-show", () => {
    mainWindow && mainWindow.show();
  });

  if (isDev) {
    mainWindow.loadURL(BASE_URL);

    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
  }

  mainWindow.on("closed", (): void => {
    mainWindow = null;
  });
}

app.on("ready", (): void => {
  createMainWindow();
});

app.on("window-all-closed", (): void => {
  // app.quit();
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", (): void => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
