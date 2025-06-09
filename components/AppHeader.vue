<template>
  <q-header elevated class="bg-white text-black" role="banner">
    <q-toolbar>

      <!-- 햄버거 메뉴 버튼 -->
      <q-btn
        flat
        round
        dense
        icon="menu"
        aria-label="전체 메뉴 페이지로 이동"
        @click="goToMenu"
      />

      <q-toolbar-title>
        <h1  class="text-h6 q-ma-none" >접근성 프로젝트욝오오!지발요용!!ㅡ2ㅠ !!!</h1>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
const router = useRouter()
const goToMenu = () => {
  router.push('/menu')
}
</script>
