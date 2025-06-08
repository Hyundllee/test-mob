<template>
  <q-page class="main-content q-pa-md" role="main">
    <!-- 스크린리더 전용 제목 -->
    <h1 class="sr-only">모바일 접근성 메인 페이지</h1>

    <!-- 소개 카드 -->
    <q-card flat bordered class="q-pa-md q-mb-lg bg-grey-1">
      <h2 class="text-h6 text-primary q-mb-sm">서비스 소개</h2>
      <p class="text-body1">
        이 웹사이트는 모바일 사용자를 위한 웹 접근성을 최우선으로 고려하여 제작되었습니다.
        스크린리더, 키보드 내비게이션, 명확한 시맨틱 구조를 제공합니다.
      </p>
    </q-card>

    <!-- 기능 목록 -->
    <q-card flat bordered class="q-pa-md bg-grey-1">
      <h2 class="text-h6 text-primary q-mb-sm">주요 기능</h2>
      <q-list dense>
        <q-item v-for="(item, index) in features" :key="index" clickable tag="li" tabindex="0">
          <q-item-section avatar>
            <q-icon name="check_circle" color="positive" />
          </q-item-section>
          <q-item-section>{{ item }}</q-item-section>
        </q-item>
      </q-list>
    </q-card>

    <!-- 이동 버튼 -->
    <div class="q-mt-xl">
      <q-btn
        label="접근성 가이드 보기"
        color="primary"
        unelevated
        size="lg"
        class="full-width"
        aria-label="접근성 가이드 페이지로 이동"
        @click="goToGuide"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
const features = [
  '시맨틱 태그 기반의 콘텐츠 구조',
  '모든 인터랙션 요소에 키보드 접근 지원',
  '스크린리더를 위한 ARIA 속성 적용',
  '모바일 화면 기준 최적화된 UI 구성',
]

const goToGuide = () => {
  // 추후 라우터 연동: navigateTo('/guide') 등
  console.log('접근성 가이드 버튼 클릭됨')
}
</script>