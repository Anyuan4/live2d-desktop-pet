import { app, BrowserWindow, ipcMain, shell } from 'electron'
import { join } from 'node:path'

function createMainWindow(): void {
  const window = new BrowserWindow({
    width: 480,
    height: 720,
    show: false,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    hasShadow: false,
    resizable: true,
    alwaysOnTop: true,
    maximizable: false,
    fullscreenable: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  })

  window.once('ready-to-show', () => {
    window.show()
  })

  window.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })

  const devServerUrl = process.env['ELECTRON_RENDERER_URL']
  if (!app.isPackaged && devServerUrl) {
    window.loadURL(devServerUrl)
  } else {
    window.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

ipcMain.handle('window:set-always-on-top', (event, value: unknown) => {
  if (typeof value !== 'boolean') {
    throw new TypeError('window:set-always-on-top expects a boolean')
  }

  const window = BrowserWindow.fromWebContents(event.sender)
  if (!window) {
    return false
  }

  window.setAlwaysOnTop(value)
  return window.isAlwaysOnTop()
})

ipcMain.handle('window:quit', () => {
  app.quit()
})

app.whenReady().then(() => {
  createMainWindow()
})

app.on('window-all-closed', () => {
  app.quit()
})
