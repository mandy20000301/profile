// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content:
                        "width=device-width, initial-scale=1",
                },
            ],
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/favicon.ico",
                },
                {
                    rel: "stylesheet",
                    href: "https://use.typekit.net/xew7hma.css",
                },
            ],
        },
    },
    modules: [
        // doc: https://vueuse.org/guide/
        "@vueuse/nuxt",
        // doc: https://www.npmjs.com/package/nuxt-swiper
        "nuxt-swiper",
    ],
    devtools: { enabled: true },
    postcss: {
        plugins: {
            // doc: https://www.npmjs.com/package/postcss-mixins
            "postcss-mixins": {},
            // doc: https://www.npmjs.com/package/postcss-simple-vars
            "postcss-simple-vars": { silent: true },
            // doc: https://www.npmjs.com/package/postcss-each
            "postcss-each": {},
            "tailwindcss/nesting": {},
            tailwindcss: {},
            // doc: https://www.npmjs.com/package/autoprefixer
            autoprefixer: {},
            // doc: https://www.npmjs.com/package/postcss-easings
            "postcss-easings": {},
        },
    },
    css: ['~/assets/css/main.css'],
})
