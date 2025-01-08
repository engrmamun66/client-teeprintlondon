// https://nuxt.com/docs/api/configuration/nuxt-config

const THEME = process.env.THEME ? process.env.THEME : "default";

export default defineNuxtConfig({
  dir: {
    middleware: `middlewares`,
    pages: `themes/${THEME}/pages`,
    assets: `themes/${THEME}/assets`,
    public: `themes/${THEME}/public`,
    layouts: `themes/${THEME}/layouts`,
    static: `themes/${THEME}/static`,
  },

  components: {
    dirs: [
      `~/themes/${THEME}/components`,
    ],
  },

  modules: ["@pinia/nuxt", "@nuxtjs/device"],

  runtimeConfig: {
    public: { ...process.env }, //process.env
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  compatibilityDate: "2024-11-25",
});