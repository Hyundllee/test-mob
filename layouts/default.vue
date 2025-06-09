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
import { useRouter, type RouteLocationNormalized } from 'vue-router'

const router = useRouter()

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
  router.beforeEach((to, from, next) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    next()
  })

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