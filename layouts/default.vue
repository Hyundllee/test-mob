<!-- layouts/default.vue -->
<template>
  <q-layout view="lHh Lpr lFf">
    <!-- 스크린리더용 페이지 시작 알림 -->
    <div
      id="page-start"
      class="sr-only"
      role="heading"
      aria-level="1"
      tabindex="-1"
      :aria-label="`${pageTitle} 시작`"
    >
      {{ pageTitle }} 시작
    </div>

    <AppHeader />
    <q-page-container>

      <NuxtPage />
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup lang="ts">
import { nextTick, watch, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageTitle = computed(() => route.meta.title || '페이지')

// 포커스 이동 처리
watch(
  () => route.fullPath,
  async () => {
    await nextTick()

    // 스크롤 최상단 이동
    window.scrollTo({ top: 0 })

    // 강제 포커싱 (일부 Quasar 요소가 방해하는 경우가 있음)
    const el = document.getElementById('page-start')
    el?.focus?.()
  }
)
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