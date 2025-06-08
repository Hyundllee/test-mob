<template>
  <q-list bordered separator>
    <q-item
      v-for="(notice, i) in notices"
      :key="i"
      clickable
      @click="goToDetail(notice.id)"
    >
      <q-item-section>
        <q-item-label class="text-weight-bold">{{ notice.title }}</q-item-label>
        <q-item-label caption>{{ notice.date }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const notices = [
  { id: 'maintenance', title: '서비스 점검 안내 (6/15)', date: '2025-06-05' },
  { id: 'feature-update', title: '신규 기능 출시 안내', date: '2025-05-28' },
  { id: 'terms-update', title: '이용약관 개정 안내', date: '2025-05-10' },
]

const goToDetail = (id: string) => {
  router.push(`/support/notice/${id}`)
}
</script>
