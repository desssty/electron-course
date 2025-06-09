const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback: (statistics: any) => void) => {
    electron.ipcRenderer.on(
      "statistics",
      (_: Electron.IpcRendererEvent, stats: any) => {
        callback(stats);
      }
    );
  },
  getStaticData: () => electron.ipcRenderer.invoke("get-static-data"),
});
