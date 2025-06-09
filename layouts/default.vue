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

onMounted(() => {
  router.beforeEach((to, from, next) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    next()
  })

  router.afterEach((to, from) => {
    const toPath = to.fullPath.split('?')[0]
    const fromPath = from.fullPath.split('?')[0]

    // ✅ 전체 경로가 같고 쿼리만 바뀐 경우 (탭 이동)
    const isTabChangeOnly = (
      toPath === fromPath &&
      to.query.tab !== from.query.tab
    )

    if (isTabChangeOnly) return // ⛔ 탭 이동이면 포커스 이동 안 함

    // ✅ 일반 페이지 이동 시 포커스 이동
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