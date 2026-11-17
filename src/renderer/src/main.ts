const runtime = document.querySelector<HTMLParagraphElement>('#runtime')

if (runtime) {
  const { electron, chrome } = window.pet.versions
  runtime.textContent = `Electron ${electron} · Chromium ${chrome}`
}
