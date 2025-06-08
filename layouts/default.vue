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
  // ✅ 페이지 전환 전 포커스 제거
  router.beforeEach((to, from, next) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    next()
  })

  // ✅ 페이지 전환 후 포커싱
  router.afterEach((to, from) => {
    const excludeKey = 'tab'

    // ❗ tab 외 나머지 쿼리 비교
    const stripQuery = (query: Record<string, any>, exclude: string) => {
      const { [exclude]: _, ...rest } = query
      return rest
    }

    const tabChangedOnly =
      to.path === from.path &&
      to.query.tab !== from.query.tab &&
      JSON.stringify(stripQuery(to.query, excludeKey)) ===
        JSON.stringify(stripQuery(from.query, excludeKey))

    if (tabChangedOnly) return // ✅ tab만 바뀐 경우 무시

    setTimeout(() => {
      document.getElementById('top')?.focus()
    }, 250) // ✅ voiceover 안정성 위해 약간 지연
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