<!--default.vue-->
<template>
  <q-layout view="lHh Lpr lFf">
    <div id="top" class="sr-only" tabindex="-1"  aria-hidden="false" role="region"/>
    <AppHeader />
    <q-page-container>
      <NuxtPage />
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter, type RouteLocationNormalized } from 'vue-router'

const router = useRouter()

// ✅ tab만 바뀐 경우 감지 함수
function isOnlyTabChanged(to: RouteLocationNormalized, from: RouteLocationNormalized): boolean {
  const { tab: toTab, ...toRest } = to.query
  const { tab: fromTab, ...fromRest } = from.query

  return (
    to.path === from.path &&
    toTab !== fromTab &&
    JSON.stringify(toRest) === JSON.stringify(fromRest)
  )
}

onMounted(() => {
  // ✅ 페이지 전환 전 포커스 제거
  router.beforeEach((to, from, next) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    next()
  })

  // ✅ 페이지 전환 후 최상단 포커싱
  router.afterEach((to, from) => {
    if (isOnlyTabChanged(to, from)) return

    setTimeout(() => {
      document.getElementById('top')?.focus()
    }, 250) // VoiceOver 안정성을 위해 약간의 지연
  })
})
</script>

<style scoped>
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
