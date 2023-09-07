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
                    href: "mandy_logo.png",
                },
                {
                    rel: "apple-touch-icon-precomposed",
                    sizes: "57x57",
                    href: "/favicon/apple-icon-57x57.png",
                },
                {
                    rel: "apple-touch-icon-precomposed",
                    sizes: "72x72",
                    href: "/favicon/apple-icon-72x72.png",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "114x114",
                    href: "/favicon/apple-icon-114x114.png",
                },
                {
                    rel: "apple-touch-icon-precomposed",
                    sizes: "144x144",
                    href: "/favicon/apple-icon-144x144.png",
                },
                {
                    rel: "apple-touch-icon-precomposed",
                    sizes: "180x180",
                    href: "/favicon/apple-icon-180x180.png",
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
