<template>
  <q-page class="register-page q-pa-md flex flex-center" role="main">
    <q-card flat bordered class="q-pa-lg shadow-1 register-card">
      <h1 class="text-h5 text-center q-mb-lg">회원가입</h1>

      <q-stepper
        v-model="step"
        flat
        animated
        header-nav
        aria-label="회원가입 단계"
      >
        <q-step :name="1" title="회원유형" subtitle="개인 or 기업 선택" done-icon="check">
          <Step1UserType v-model="userType" />
        </q-step>

        <q-step :name="2" title="약관동의" subtitle="이용약관 및 개인정보 수집" done-icon="check">
          <Step2Terms v-model:terms="terms" v-model:privacy="privacy" />
        </q-step>

        <q-step :name="3" title="본인인증" subtitle="휴대폰 또는 이메일 인증" done-icon="check">
          <Step3Verify v-model="phone" />
        </q-step>
      </q-stepper>

      <div class="row justify-between q-gutter-sm q-mt-md">
        <q-btn
          label="이전"
          color="grey-6"
          flat
          :disable="step === 1"
          @click="goToPrevStep"
        />
        <q-btn
          label="다음"
          color="primary"
          :disable="step === 3"
          @click="goToNextStep"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Step1UserType from '~/components/register/Step1UserType.vue'
import Step2Terms from '~/components/register/Step2Terms.vue'
import Step3Verify from '~/components/register/Step3Verify.vue'

definePageMeta({ title: '회원가입 페이지' })

const step = ref(1)
const userType = ref('')
const terms = ref(false)
const privacy = ref(false)
const phone = ref('')

// ✅ step 변경될 때 탭 포커스
watch(step, () => {
  focusActiveStepperTab()
})

// ✅ 버튼 핸들러
function goToNextStep() {
  if (step.value < 3) step.value++
}
function goToPrevStep() {
  if (step.value > 1) step.value--
}

// ✅ 현재 활성화된 QStepper 탭에 포커스
function focusActiveStepperTab() {
  requestAnimationFrame(() => {
    const activeTab = document.querySelector('.q-stepper__tab--active') as HTMLElement | null

    if (!activeTab) {
      console.warn('[QStepper] .q-stepper__tab--active not found')
      return
    }

    // 포커스 헬퍼 무시
    const focusHelper = activeTab.querySelector('.q-focus-helper') as HTMLElement | null
    if (focusHelper) {
      focusHelper.setAttribute('tabindex', '-1')
    }

    // 포커스 가능하게 만들고 초점 이동
    activeTab.setAttribute('tabindex', '0')
    activeTab.focus()

    console.log('[QStepper] 포커스 이동됨:', activeTab)
  })
}
</script>
