// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { 
        enabled: true 
    },
    modules: ['@nuxtjs/google-fonts'],
    googleFonts: {
        families: {
            'Kanit': true,
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: "@use './scss/style.scss' as *;"
                }
            },
        },
    },

    
})