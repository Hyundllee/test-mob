<template>
  <q-page class="q-pa-md">
    <q-toolbar class="bg-white text-black" style="position: sticky; top: 0; z-index: 10;">
      <q-btn
        flat
        round
        dense
        icon="arrow_back"
        aria-label="이전 페이지로 돌아가기"
        @click="goBack"
      />
      <q-toolbar-title>
        <h2 class="text-subtitle1 q-ma-none" id="page-heading" tabindex="-1" >전체 메뉴</h2>
      </q-toolbar-title>
    </q-toolbar>

    <q-list bordered class="q-mt-md">

      <!-- 홈 -->
      <q-item clickable @click="navigateTo('/')">
        <q-item-section avatar><q-icon name="home" /></q-item-section>
        <q-item-section>홈</q-item-section>
      </q-item>

      <!-- 로그인 -->
      <q-item clickable @click="navigateTo('/login')">
        <q-item-section avatar><q-icon name="login" /></q-item-section>
        <q-item-section>로그인</q-item-section>
      </q-item>

      <!-- 회원가입 -->
      <q-item clickable @click="navigateTo('/register')">
        <q-item-section avatar><q-icon name="person_add" /></q-item-section>
        <q-item-section>회원가입</q-item-section>
      </q-item>

      <!-- 고객센터 -->
      <q-item clickable @click="navigateTo('/support')">
        <q-item-section avatar><q-icon name="support_agent" /></q-item-section>
        <q-item-section>고객센터</q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
definePageMeta({
  title: '전체메뉴'
})

const router = useRouter()

const goBack = () => {
  router.back()
}

const navigateTo = (path: string) => {
  router.push(path)
}
</script>
