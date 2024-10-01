// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-icons/font/bootstrap-icons.css",
  ],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  runtimeConfig: {
    secretRedisHost: process.env.NUXT_SECRET_REDIS_HOST || "172.20.0.2", // Accessible seulement côté serveur
    secretRedisPort: process.env.NUXT_SECRET_REDIS_PORT || "6379", // Accessible seulement côté serveur
    secretRedisPassword: process.env.NUXT_SECRET_REDIS_PASSWORD || "", // Optionnel
  },
  modules: ["nuxt-security"],
  security: {
    csrf: true,
    headers: {
      crossOriginResourcePolicy: "cross-origin",
    },
    corsHandler: {
      origin: ["http://localhost:3000", "https://privatemessage.ovh"],
      methods: ["GET", "POST"],
    },
  },
});
