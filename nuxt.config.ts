// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs';
import path from 'path';
const THEME = process.env.THEME ? process.env.THEME : "default";

export default defineNuxtConfig({
  hooks: {
    'build:before': () => {
      // Define the JSON data
      const jsonData = {
        "women-t-shirt": {
          title: "Teepring Product Title",
          Description: "Lorem ipsum description",
          keywords: 'T-shirt, cloths, women-collection'
        }
      };

      // Define the file path (root directory)
      const filePath = path.resolve(__dirname, 'seo-meta.json');

      // Write the JSON data to the file
      fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

      console.log('data.json file created successfully in the root directory!');
    },
  },
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
    enabled: true,
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