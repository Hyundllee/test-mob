<template>
  <div class="q-gutter-md">

    <!-- 휴대폰 입력 -->
    <q-input
      v-model="phone"
      label="휴대폰 번호 입력"
      filled
      dense
      mask="###-####-####"
      aria-label="휴대폰 번호 입력"
    />

    <!-- 인증번호 발송 버튼 -->
    <q-btn
      label="인증번호 발송"
      color="primary"
      class="full-width"
      @click="sendCode"
      :disable="phone.length < 13"
      aria-label="휴대폰으로 인증번호 발송"
    />

    <!-- 인증번호 입력 -->
    <q-input
      v-if="codeSent"
      v-model="verificationCode"
      label="인증번호 입력"
      filled
      dense
      maxlength="6"
      mask="######"
      aria-label="수신된 인증번호 입력"
    />

    <!-- 메시지 -->
    <div v-if="codeSent" class="text-caption text-positive">
      인증번호가 발송되었습니다. (예: 3분 이내 입력)
    </div>

    <!-- 재전송 -->
    <q-btn
      v-if="codeSent"
      label="재전송"
      color="grey"
      flat
      dense
      class="q-mt-sm"
      @click="resendCode"
      aria-label="인증번호 재전송"
    />

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue'])

const phone = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const codeSent = ref(false)
const verificationCode = ref('')

const sendCode = () => {
  if (phone.value.length >= 13) {
    codeSent.value = true
    console.log('✅ 인증번호 발송됨:', phone.value)
    // 실제 API 연동 시도 지점
  }
}

const resendCode = () => {
  console.log('🔁 인증번호 재전송됨')
  // 재전송 처리 로직 (API 호출 등)
}
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
