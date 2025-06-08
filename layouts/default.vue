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
import { useRouter } from 'vue-router'
import { nextTick } from 'vue'

// 라우터 접근
const router = useRouter()

let prevPath = ''

// 페이지 전환 직전 → 클릭 차단
router.beforeEach((to, from, next) => {
  prevPath = from.fullPath
  document.documentElement.style.pointerEvents = 'none'
  next()
})

// 페이지 전환 후 → 포커싱 복원
router.afterEach(async (to) => {
  await nextTick()

  // ✅ tab 내 쿼리 변경이면 포커스 유지
  if (to.path === prevPath) {
    document.documentElement.style.pointerEvents = ''
    return
  }

  // ✅ 페이지 전체 이동 시 top 포커싱
  setTimeout(() => {
    const topEl = document.getElementById('top')
    topEl?.focus()
    document.documentElement.style.pointerEvents = ''
  }, 250)
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