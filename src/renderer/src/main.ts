let alwaysOnTop = true

const runtime = document.querySelector<HTMLParagraphElement>('#runtime')
if (runtime) {
  const { electron, chrome } = window.pet.versions
  runtime.textContent = `Electron ${electron} · Chromium ${chrome}`
}

const toggleButton = document.querySelector<HTMLButtonElement>('#toggle-top')
toggleButton?.addEventListener('click', async () => {
  alwaysOnTop = await window.pet.window.setAlwaysOnTop(!alwaysOnTop)
  toggleButton.textContent = alwaysOnTop ? '关闭置顶' : '开启置顶'
})

document.querySelector<HTMLButtonElement>('#quit')?.addEventListener('click', () => {
  void window.pet.window.quit()
})
