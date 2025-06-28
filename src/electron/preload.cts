const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback) =>
    ipcOn("statistics", (stats: any) => {
      callback(stats);
    }),
  getStaticData: () => ipcInvoke("getStaticData"),
  subscribeChangeView: (callback) =>
    ipcOn("changeView", (stats: any) => {
      callback(stats);
    }),
  sendFrameAction: (payload) => ipcSend("sendFrameAction", payload),
} satisfies Window["electron"]);

function ipcInvoke<Key extends keyof EventPayLoadMapping>(
  key: Key
): Promise<EventPayLoadMapping[Key]> {
  return electron.ipcRenderer.invoke(key);
}

function ipcOn<Key extends keyof EventPayLoadMapping>(
  key: Key,
  callback: (payload: EventPayLoadMapping[Key]) => void
) {
  const cb = (_: Electron.IpcRendererEvent, payload: any) => callback(payload);
  electron.ipcRenderer.on(key, cb);
  return () => electron.ipcRenderer.off(key, cb);
}

function ipcSend<Key extends keyof EventPayLoadMapping>(
  key: Key,
  payload: EventPayLoadMapping[Key]
) {
  electron.ipcRenderer.send(key, payload);
}
