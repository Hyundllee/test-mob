<!-- layouts/default.vue -->
<template>
  <q-layout view="lHh Lpr lFf">
    <!-- ✅ 페이지 최상단 포커스 타겟 -->
    <div
      id="top"
      class="sr-only"
      tabindex="-1"
    >
    </div>
    <AppHeader />
    <q-page-container>
      <NuxtPage />
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 🚀 helper: tab만 바뀐 건지 비교
function isOnlyTabChanged(to: any, from: any): boolean {
  if (to.path !== from.path) return false

  const { tab: toTab, ...toRest } = to.query
  const { tab: fromTab, ...fromRest } = from.query

  return (
    toTab !== fromTab &&
    JSON.stringify(toRest) === JSON.stringify(fromRest)
  )
}

onMounted(() => {
  // ✅ 포커스 제거
  router.beforeEach((to, from, next) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    next()
  })

  // ✅ 페이지 이동 후 포커싱
  router.afterEach((to, from) => {
    if (isOnlyTabChanged(to, from)) return

    setTimeout(() => {
      document.getElementById('top')?.focus()
    }, 250)
  })
})
</script>


<style scoped>
/* scoped든 global이든 */
.sr-only {
  position: absolute !important;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  border: 0;
}
</style>