<template>
  <q-page class="register-page q-pa-md flex flex-center" role="main">
    <q-card flat bordered class="q-pa-lg shadow-1 register-card">
      <h1 class="text-h5 text-center q-mb-lg">회원가입</h1>

      <!-- ✅ QStepper -->
      <q-stepper
        v-model="step"
        flat
        animated
        header-nav
        class="q-mb-lg"
        aria-label="회원가입 단계"
      >
        <!-- Step 1: 회원유형 -->
        <q-step :name="1" title="회원유형" subtitle="개인 or 기업 선택" done-icon="check">
          <div ref="step1Ref" tabindex="-1" class="sr-only" />
          <Step1UserType v-model="userType" />
        </q-step>

        <!-- Step 2: 약관동의 -->
        <q-step :name="2" title="약관동의" subtitle="이용약관 및 개인정보 수집" done-icon="check">
          <div ref="step2Ref" tabindex="-1" class="sr-only" />
          <Step2Terms v-model:terms="terms" v-model:privacy="privacy" />
        </q-step>

        <!-- Step 3: 본인인증 -->
        <q-step :name="3" title="본인인증" subtitle="휴대폰 또는 이메일 인증" done-icon="check">
          <div ref="step3Ref" tabindex="-1" class="sr-only" />
          <Step3Verify v-model="phone" />
        </q-step>
      </q-stepper>

      <!-- ✅ 하단 네비게이션 -->
      <div class="row justify-between q-gutter-sm q-mt-md">
        <q-btn
          label="이전"
          color="grey-6"
          flat
          :disable="step === 1"
          @click="step--"
        />
        <q-btn
          label="다음"
          color="primary"
          :disable="step === 3"
          @click="step++"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

// 컴포넌트 import
import Step1UserType from '~/components/register/Step1UserType.vue'
import Step2Terms from '~/components/register/Step2Terms.vue'
import Step3Verify from '~/components/register/Step3Verify.vue'

// 페이지 메타 정보
definePageMeta({
  title: '회원가입 페이지'
})

// 상태 관리
const step = ref(1)
const userType = ref('')
const terms = ref(false)
const privacy = ref(false)
const phone = ref('')

// Step별 포커스 타겟 ref
const step1Ref = ref<HTMLElement | null>(null)
const step2Ref = ref<HTMLElement | null>(null)
const step3Ref = ref<HTMLElement | null>(null)

// Step 변경 시 해당 영역에 포커싱
watch(step, async (newVal) => {
  await nextTick()

  const focusTarget: Record<number, HTMLElement | null> = {
    1: step1Ref.value,
    2: step2Ref.value,
    3: step3Ref.value
  }

  focusTarget[newVal]?.focus()
})
</script>

<style scoped>
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
