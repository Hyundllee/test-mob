export function removeUnwantedTabindex() {
  const elements = document.querySelectorAll('[tabindex="-1"]')

  elements.forEach((el) => {
    const tag = el.tagName.toLowerCase()
    const role = el.getAttribute('role') || ''
    const classList = el.classList
    const hasUserControl =
      el.hasAttribute('aria-hidden') ||
      el.hasAttribute('aria-expanded')

    const isInMenuOrPopup =
      el.closest('.q-menu, .q-popup-edit')

    const isException =
      tag === 'input' ||
      tag === 'textarea' ||
      tag === 'select' ||
      isInMenuOrPopup ||
      role.includes('dialog') ||
      hasUserControl

    const isNoOutline = classList.contains('no-outline')

    // ✅ 제거 조건: 예외가 아니고 + no-outline 클래스가 있거나 기본 제거 대상이면
    if (!isException || isNoOutline) {
      el.removeAttribute('tabindex')
    }
  })
}
