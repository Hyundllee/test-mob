<template>
  <q-page class="login-page q-pa-md flex flex-center" role="main">
    <q-card flat bordered class="q-pa-lg shadow-1 login-card">

      <!-- 제목 -->
      <h1 id="page-heading" tabindex="-1" class="text-h5 text-center q-mb-md" >로그인</h1>

      <!-- 로그인 폼 -->
      <q-form @submit.prevent="handleLogin" class="q-gutter-md" aria-label="로그인 폼">
        <q-input
          v-model="userId"
          label="아이디"
          filled
          dense
          autofocus
          autocomplete="username"
          :rules="[val => !!val || '아이디를 입력해주세요.']"
          aria-label="아이디 입력"
        />

        <q-input
          v-model="password"
          label="비밀번호"
          filled
          dense
          type="password"
          autocomplete="current-password"
          :rules="[val => !!val || '비밀번호를 입력해주세요.']"
          aria-label="비밀번호 입력"
        />

        <q-btn
          label="로그인"
          type="submit"
          color="primary"
          unelevated
          class="full-width"
          aria-label="로그인 버튼"
        />
      </q-form>

      <!-- 링크 -->
      <div class="q-mt-md text-center">
        <q-btn flat size="sm" label="회원가입" to="/register" aria-label="회원가입 페이지로 이동" />
      </div>

    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()
const userId = ref('')
const password = ref('')

const handleLogin = () => {
  if (!userId.value || !password.value) return

  console.log('✅ 로그인 시도:', userId.value)
  router.push('/')
}

definePageMeta({
  title: '로그인 페이지'
})
</script>
