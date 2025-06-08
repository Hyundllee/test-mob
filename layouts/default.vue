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

       <!-- ✅ 클릭 보호용 오버레이 -->
    <div v-if="isTransitioning" class="click-blocker" aria-hidden="true" ></div>
    <AppHeader />
    <q-page-container>
      <NuxtPage />
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isTransitioning = ref(false)

router.afterEach((to, from) => {
  const isSamePath = to.path === from.path
  const onlyQueryChanged = isSamePath && JSON.stringify(to.query) !== JSON.stringify(from.query)
  if (onlyQueryChanged) return

  // ✅ 클릭 방지 시작
  isTransitioning.value = true

  setTimeout(() => {
    // ✅ 최상단 포커싱
    document.getElementById('top')?.focus()

    // ✅ 클릭 방지 해제
    isTransitioning.value = false
  }, 300) // 300ms 동안 클릭 차단 후 포커스 이동
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


/* ✅ 클릭 방지 오버레이 */
.click-blocker {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: transparent;
  pointer-events: all;
}
</style>