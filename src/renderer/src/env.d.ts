declare global {
  interface Window {
    pet: {
      versions: {
        electron: string
        chrome: string
      }
      window: {
        setAlwaysOnTop: (value: boolean) => Promise<boolean>
        quit: () => Promise<void>
      }
    }
  }
}

export {}
