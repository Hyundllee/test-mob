<template>
  <div class="q-gutter-md">

    <p class="text-body1" tabindex="0">
      아래 약관에 동의하셔야 회원가입이 가능합니다.
    </p>

    <!-- 전체 동의 -->
    <q-checkbox
      v-model="agreeAll"
      label="전체 약관에 동의합니다"
      class="bg-grey-1 q-pa-sm"
    />

    <!-- 이용약관 -->
    <q-checkbox v-model="termsValue">
      <template #default>
        <div class="row items-center justify-between full-width">
          <span>이용약관에 동의합니다</span>
          <q-btn
            flat
            dense
            label="내용 보기"
            color="primary"
            size="sm"
            class="q-ml-sm"
            @click="viewTerms('이용약관')"
          />
        </div>
      </template>
    </q-checkbox>

    <!-- 개인정보 수집 -->
    <q-checkbox v-model="privacyValue">
      <template #default>
        <div class="row items-center justify-between full-width">
          <span>개인정보 수집에 동의합니다</span>
          <q-btn
            flat
            dense
            label="내용 보기"
            color="primary"
            size="sm"
            class="q-ml-sm"
            @click="viewTerms('개인정보 수집')"
          />
        </div>
      </template>
    </q-checkbox>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'

const props = defineProps<{
  terms: boolean
  privacy: boolean
}>()

const emit = defineEmits(['update:terms', 'update:privacy'])

const termsValue = computed({
  get: () => props.terms,
  set: (val) => emit('update:terms', val),
})

const privacyValue = computed({
  get: () => props.privacy,
  set: (val) => emit('update:privacy', val),
})

const agreeAll = computed({
  get: () => termsValue.value && privacyValue.value,
  set: (val: boolean) => {
    termsValue.value = val
    privacyValue.value = val
  },
})

const viewTerms = (type: string) => {
  console.log(`${type} 내용을 확인합니다`)
  // 실제로는 QDialog 또는 라우터 이동
}
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
