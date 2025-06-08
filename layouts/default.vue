<!-- layouts/default.vue -->
<template>
  <q-layout view="lHh Lpr lFf">
    <!-- 페이지 진입 알림용 -->
    <div
      id="page-start"
      class="sr-only"
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
import { nextTick, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// 페이지 제목 가져오기
const pageTitle = computed(() => route.meta.title || '페이지')

watch(
  () => route.fullPath,
  async () => {
    await nextTick()

    // 스크롤 상단 이동
    window.scrollTo({ top: 0 })

    // 페이지 시작 영역 포커싱
    const el = document.getElementById('page-start')
    el?.focus()
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