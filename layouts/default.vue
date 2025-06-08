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
import { nextTick, watch, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.fullPath,
  async () => {
    await nextTick()

    // ✅ Quasar 요소 초기 렌더링 이후로 지연
    setTimeout(() => {
      const el = document.getElementById('top')
      el?.focus()
    }, 100)  // 여유 있게 100ms 정도 지연 (경험상 Quasar 렌더보다 살짝 늦게)
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