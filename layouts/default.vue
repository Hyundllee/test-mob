<!-- layouts/default.vue -->
<template>
  <q-layout view="lHh Lpr lFf">
      <!-- 스크린리더 전용 페이지 시작 알림 -->
      <div
        id="page-announcer"
        class="sr-only"
        tabindex="-1"
        aria-live="assertive"
        role="region"
        :aria-label="`페이지 진입: ${route.meta.title || '페이지'}`"
        ref="pageHeadingRef"
      >
        페이지 진입: {{ route.meta.title || '페이지' }}
      </div>
    <AppHeader />
    <q-page-container>

      <NuxtPage />
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup lang="ts">
import { nextTick, watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pageHeadingRef = ref<HTMLElement | null>(null)

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    // scroll 위치 먼저 이동
    window.scrollTo({ top: 0 })

    // 페이지 시작 heading에 focus 이동
    pageHeadingRef.value?.focus()
  }
)
</script>

<style scoped>
.sr-only {
  position: absolute !important;
  width: 1px; height: 1px;
  margin: -1px; padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0); clip-path: inset(50%);
  border: 0;
}
</style>