// https://nuxt.com/docs/api/configuration/nuxt-config

const THEME = process.env.THEME ? process.env.THEME : "default";

export default defineNuxtConfig({
  dir: {
    middleware: `middlewares`,
    pages: `pages`,
    assets: `assets`,
    public: `public`,
    layouts: `layouts`,
    static: `static`,
  },

  components: {
    dirs: [
      `~/components`,
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

  devtools: {
    viteInspect: true,
    vscode: {
      enabled: true,
      codeServer: "coder-code-server",
    },
    assets: {
      uploadExtensions: "*"
    }
  },
  compatibilityDate: "2024-11-25",
});