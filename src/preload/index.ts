import { contextBridge } from 'electron'

const petApi = {
  versions: {
    electron: process.versions.electron,
    chrome: process.versions.chrome
  }
}

contextBridge.exposeInMainWorld('pet', petApi)
