const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback) =>
    ipcOn("statistics", (stats: any) => {
      callback(stats);
    }),
  getStaticData: () => ipcInvoke("getStaticData"),
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
  electron.ipcRenderer.on(key, (_, payload) => callback(payload));
}
