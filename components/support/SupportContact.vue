<template>
  <q-form @submit.prevent="submitForm" class="q-gutter-md">

    <q-input
      v-model="name"
      label="이름"
      filled
      dense
      :rules="[val => !!val || '이름을 입력해주세요.']"
    />

    <q-input
      v-model="email"
      label="이메일"
      type="email"
      filled
      dense
      :rules="[val => !!val || '이메일을 입력해주세요.']"
    />

    <q-input
      v-model="message"
      label="문의 내용"
      type="textarea"
      filled
      dense
      autogrow
      :rules="[val => !!val || '문의 내용을 작성해주세요.']"
    />

    <q-btn label="문의하기" type="submit" color="primary" class="full-width" />
  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  if (!name.value || !email.value || !message.value) return
  console.log('✅ 문의 내용 제출됨:', { name: name.value, email: email.value, message: message.value })
}
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
