<template>
  <div class="q-gutter-md">

    <div>
      <p class="text-body1 q-mb-sm" tabindex="0">
        가입하실 회원 유형을 선택해주세요. 이후 단계에서 선택에 따라 절차가 다를 수 있습니다.
      </p>
    </div>

    <q-card
      bordered
      class="q-pa-md"
      :class="{ 'active-card': userType === 'personal' }"
      @click="userType = 'personal'"
      tabindex="0"
      role="radio"
      aria-checked="userType === 'personal'"
    >
      <div class="row items-center q-gutter-sm">
        <q-icon name="person" size="24px" />
        <div>
          <div class="text-subtitle2">개인회원</div>
          <div class="text-caption">일반 사용자용 계정입니다.</div>
        </div>
      </div>
    </q-card>

    <q-card
      bordered
      class="q-pa-md"
      :class="{ 'active-card': userType === 'corporate' }"
      @click="userType = 'corporate'"
      tabindex="0"
      role="radio"
      aria-checked="userType === 'corporate'"
    >
      <div class="row items-center q-gutter-sm">
        <q-icon name="business" size="24px" />
        <div>
          <div class="text-subtitle2">기업회원</div>
          <div class="text-caption">사업자 등록이 필요한 기업 전용 계정입니다.</div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue'])

const userType = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<style scoped>
.active-card {
  border: 2px solid #1976d2;
  background-color: #e3f2fd;
}
</style>
