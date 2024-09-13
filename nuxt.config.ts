// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  buildModules: ['nuxt-gsap-module'],

  app: {
    head: {
      title: 'Template project',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el: any) {
      this.$gsap.set(el, {
        opacity: 0
      })
    },

    enter(el: any, done: any) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el: any, done: any) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  },

  colorMode: {
    preference: 'light',
  },

  ui: {
    primary: 'green',
    gray: 'cool',
  },

  ssr: false,
})
