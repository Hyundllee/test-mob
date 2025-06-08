<!-- layouts/default.vue -->
<template>
  <q-layout view="lHh Lpr lFf">
        <!-- 스크린리더용 페이지 시작 안내 -->
    <div
      ref="pageStart"
      tabindex="-1"
      class="sr-only"
      aria-live="polite"
    >
      페이지 시작: {{ pageTitle }}
    </div>
    <AppHeader />
    <q-page-container>

      <NuxtPage />
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, computed } from 'vue'
import { useRoute } from 'vue-router'

const pageStart = ref<HTMLElement | null>(null)
const route = useRoute()

const pageTitle = computed(() => route.meta.title || '페이지')

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    window.scrollTo({ top: 0 })        // 시각적으로도 상단 이동
    pageStart.value?.focus()           // 스크린리더 초점 이동
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