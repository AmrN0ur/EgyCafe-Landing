// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    head: {
      title: "EgyCafe",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/webp", href: "/logo.webp" },
      ],
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
    },
  },
})
