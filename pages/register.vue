<template>

  <q-page class="register-page q-pa-md flex flex-center" role="main">
    <q-card flat bordered class="q-pa-lg shadow-1 register-card">
      <h1 class="text-h5 text-center q-mb-lg" tabindex="-1">{{ pageTitle }}</h1>

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
          <Step1UserType v-model="userType" />
        </q-step>

        <!-- Step 2: 약관동의 -->
        <q-step :name="2" title="약관동의" subtitle="이용약관 및 개인정보 수집" done-icon="check">
          <Step2Terms v-model:terms="terms" v-model:privacy="privacy" />
        </q-step>

        <!-- Step 3: 본인인증 -->
        <q-step :name="3" title="본인인증" subtitle="휴대폰 또는 이메일 인증" done-icon="check">
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
  </q-page>å
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 컴포넌트 import
import Step1UserType from '~/components/register/Step1UserType.vue'
import Step2Terms from '~/components/register/Step2Terms.vue'
import Step3Verify from '~/components/register/Step3Verify.vue'

import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const pageTitle = computed(() => route.meta.title || '회원가입')

// 상태
const step = ref(1)
const userType = ref('')
const terms = ref(false)
const privacy = ref(false)
const phone = ref('')
</script>
