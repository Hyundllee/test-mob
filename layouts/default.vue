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

<script setup>
import { nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

let previousPath = route.path

router.afterEach((to, from) => {
  const isSamePath = to.path === from.path

  if (isSamePath) return // ✅ query(tab) 변경처럼 페이지 전환이 아닐 경우 무시

  nextTick(() => {
    setTimeout(() => {
      const el = document.getElementById('top')
      el?.focus({ preventScroll: true })
    }, 250)
  })

  previousPath = to.path
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