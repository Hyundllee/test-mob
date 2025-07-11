<template>
  <q-page class="q-pa-md" role="main">
    <h1 class="text-h5 q-mb-lg">고객센터</h1>

    <q-tabs
      v-model="currentTab"
      class="text-primary"
      align="justify"
      active-color="primary"
      indicator-color="primary"
      @click="handleTabClick"
      @update:model-value="updateRoute"
    >
      <q-tab name="FAQ" label="FAQ" />
      <q-tab name="Notice" label="공지사항" />
      <q-tab name="Contact" label="문의하기" />
    </q-tabs>

    <q-tab-panels
      v-model="currentTab"
      animated
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-tab-panel name="FAQ"><SupportFAQ /></q-tab-panel>
      <q-tab-panel name="Notice"><SupportNotice /></q-tab-panel>
      <q-tab-panel name="Contact"><SupportContact /></q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SupportFAQ from '~/components/support/SupportFAQ.vue'
import SupportNotice from '~/components/support/SupportNotice.vue'
import SupportContact from '~/components/support/SupportContact.vue'

definePageMeta({ title: '고객센터 페이지' })

const route = useRoute()
const router = useRouter()

const validTabs = ['FAQ', 'Notice', 'Contact']
const currentTab = ref(
  validTabs.includes(route.query.tab as string) ? route.query.tab as string : 'FAQ'
)

// ✅ URL 쿼리(tab) → 탭 값 반영
watch(() => route.query.tab, (newTab) => {
  if (validTabs.includes(newTab as string)) {
    currentTab.value = newTab as string
  }
})

// ✅ 탭 클릭 시 해당 tab 요소에 포커스 유지
const handleTabClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  const tabButton = target.closest('.q-tab') as HTMLElement
  if (tabButton) {
    requestAnimationFrame(() => {
      tabButton.focus()
    })
  }
}

// ✅ 탭 변경 시 URL 쿼리 반영
const updateRoute = (newTab: string) => {
  router.replace({ query: { ...route.query, tab: newTab } })
}
</script>
