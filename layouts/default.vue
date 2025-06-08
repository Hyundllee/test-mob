<!-- layouts/default.vue -->
<template>
  <q-layout view="lHh Lpr lFf">
    <AppHeader />
    <q-page-container>

      <NuxtPage />
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup lang="ts">
import { nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.fullPath,
  async () => {
    await nextTick()

    // 1. scroll 위치 초기화
    window.scrollTo({ top: 0 })

    // 2. 페이지 내 id="page-heading" 요소에 초점 이동
    const el = document.getElementById('page-heading')
    el?.focus()
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