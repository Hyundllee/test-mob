export function removeQuasarFocusHelpers() {
  document.querySelectorAll('.q-focus-helper[tabindex="-1"]').forEach(el => {
    el.removeAttribute('tabindex')
  })
}