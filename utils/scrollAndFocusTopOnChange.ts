// utils/scrollAndFocusTopOnChange.ts
import { watch, nextTick, type Ref } from 'vue'

export function scrollAndFocusTopOnChange<T>(targetRef: Ref<T>, deep = false) {
  watch(
    targetRef,
    async (newVal, oldVal) => {
      console.log('[scrollAndFocusTopOnChange] 변경 감지:', oldVal, '→', newVal)

      await nextTick()

      const topEl = document.getElementById('top')
      if (!topEl) {
        console.warn('⚠️ #top element not found')
        return
      }

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }

      requestAnimationFrame(() => {
        topEl.focus()
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 50)
      })
    },
    { deep, immediate: false }
  )
}
