declare global {
  interface Window {
    pet: {
      versions: {
        electron: string
        chrome: string
      }
    }
  }
}

export {}
