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
import { nextTick, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
watch(
  () => route.fullPath,
  async () => {
    await nextTick()

    // 강제로 스크롤 최상단 이동
    window.scrollTo({ top: 0 })

    // 강제로 초점 이동 (모바일 스크린리더용)
    const el = document.getElementById('page-heading')
    if (el) {
      el.focus()
    }
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