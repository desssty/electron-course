import { ipcMain, WebContents } from "electron";

export function isDev(): boolean {
  return process.env.NODE_ENV === "development";
}

export function ipcMainHandle<Key extends keyof EventPayLoadMapping>(
  key: Key,
  handler: () => EventPayLoadMapping[Key]
) {
  ipcMain.handle(key, () => handler());
}

export function ipcWebContentsSend<Key extends keyof EventPayLoadMapping>(
  key: Key,
  webContents: WebContents,
  payload: EventPayLoadMapping[Key]
) {
  webContents.send(key, payload);
}
