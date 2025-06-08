<template>
  <div class="q-gutter-md">
    <q-expansion-item
      v-for="(item, idx) in faqs"
      :key="idx"
      :label="item.q"
      expand-separator
      dense
    >
      <div class="text-body2">{{ item.a }}</div>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
const faqs = [
  { q: '비밀번호를 잊어버렸어요.', a: '로그인 페이지에서 "비밀번호 찾기"를 클릭하세요.' },
  { q: '회원정보를 수정하려면?', a: '마이페이지에서 정보 변경이 가능합니다.' },
  { q: '탈퇴는 어떻게 하나요?', a: '고객센터를 통해 탈퇴 요청이 가능합니다.' },
]
</script>
