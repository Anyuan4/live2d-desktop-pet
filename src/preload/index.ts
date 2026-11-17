import { contextBridge, ipcRenderer } from 'electron'

const petApi = {
  versions: {
    electron: process.versions.electron,
    chrome: process.versions.chrome
  },
  window: {
    setAlwaysOnTop: (value: boolean): Promise<boolean> =>
      ipcRenderer.invoke('window:set-always-on-top', value),
    quit: (): Promise<void> => ipcRenderer.invoke('window:quit')
  }
}

contextBridge.exposeInMainWorld('pet', petApi)
