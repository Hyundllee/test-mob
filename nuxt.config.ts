// nuxt.config.ts
export default defineNuxtConfig({
  pages: true, // 이러면 app.vue만 사용됨
  modules: ['nuxt-quasar-ui'],
  devtools: { enabled: true },
  compatibilityDate: '2025-05-15',
  ssr: false, 
  nitro : {
  preset : 'github-pages' 
  },
  app : {
  baseURL : '/test-mob/' 
  },
   css: ['@/assets/styles/mobile.scss', '@/assets/styles/mobile.scss',],
})