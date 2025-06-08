<template>
  <q-page class="q-pa-md">
    <q-btn
      icon="arrow_back"
      flat
      dense
      label="목록으로"
      @click="goBack"
      class="q-mb-md"
    />

    <div v-if="notice">
      <h1 class="text-h6 q-mb-sm">{{ notice.title }}</h1>
      <p class="text-caption text-grey">{{ notice.date }}</p>
      <q-separator class="q-my-md" />
      <p class="text-body1">{{ notice.content }}</p>
    </div>
    <div v-else>
      <p>공지사항을 찾을 수 없습니다.</p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

// 예시 데이터
const noticeMap: Record<string, { title: string; date: string; content: string }> = {
  maintenance: {
    title: '서비스 점검 안내 (6/15)',
    date: '2025-06-05',
    content: '2025년 6월 15일 오전 2시부터 4시까지 서비스 점검이 예정되어 있습니다. 이용에 참고 부탁드립니다.',
  },
  'feature-update': {
    title: '신규 기능 출시 안내',
    date: '2025-05-28',
    content: '새로운 기능이 추가되어 서비스 이용이 더욱 편리해졌습니다. 자세한 내용은 메인 공지에서 확인해주세요.',
  },
  'terms-update': {
    title: '이용약관 개정 안내',
    date: '2025-05-10',
    content: '2025년 5월 25일부터 개정된 이용약관이 적용됩니다. 반드시 확인 부탁드립니다.',
  },
}

const notice = noticeMap[id]

const goBack = () => {
  router.back()
}
</script>
