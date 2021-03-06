export default {
    serverMiddleware: process.env.NODE_ENV === 'production' ? [] : ['~/api/hello.js'],

    head: {
        titleTemplate: 'Riode - Ultimate eCommerce Template',
        title: 'Riode - Ultimate eCommerce Template',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Riode - Ultimate eCommerce Template'
            },
            {
                name: 'author',
                content: 'd-themes'
            },
            {
                name: 'keywords',
                content: 'Riode Vue eCommerce Template'
            },
            {
                name: 'app-mobile-web-app-title',
                content: 'Riode'
            },
            {
                name: 'application-name',
                content: 'Riode Vue eCommerce Template',
            },
            {
                name: 'msapplication-TileColor',
                content: '#cc9966'
            },
            {
                name: 'msapplication-config',
                content: '/images/icons/browserconfig.xml'
            }
        ],
        link: [
            {
                rel: 'dns-prefetch',
                href: "//fonts.googleapis.com"
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href:
                    './images/icons/favicon.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href:
                    './images/icons/favicon.png'
            },
            {
                rel: 'shortcut icon',
                href:
                    './images/icons/favicon.png'
            },
            {
                rel: 'mask-icon',
                color: '#666',
                href:
                    './images/icons/safari-pinned-tab.svg'
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800'
            }
        ]
    },

    css: [
        'swiper/dist/css/swiper.css',
        'vue-image-lightbox/dist/vue-image-lightbox.min.css',
        'vue-image-zoom/dist/vue-image-zoom.css',
        '~/static/vendor/swiper-slider/swiper-slider.min.css',
        '~/static/vendor/riode-icon/riode-icons.min.css',
        '~/static/vendor/animate/animate.min.css',
        '~/static/vendor/fontawesome-free/css/all.min.css',
        '~/static/sass/style.scss'
    ],

    plugins: [
        { src: '~/plugins' },
        { src: '~/plugins/directives/parallax.js' },
        { src: '~/plugins/localstorage.js' },
        { src: '~/plugins/filters.js' },
        { src: '~/plugins/directives/animate.js' }
    ],

    buildModules: [
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt'
    ],

    modules: ['@nuxtjs/axios'],

    router: {
        base: '/vue/demo-1/'
    },

    build: {
        extend(config, { loaders }) {
            loaders.scss.additionalData = '@use "sass:math";';
        },
        publicPath: "https://nuxtjs-oi1ruygt1-nicedev0908.vercel.app/"
    },

    generate: {
        subFolders: false,
        fallback: '404.html'
    },

    loading: false,
    loadingIndicator: false,

    pageTransition: 'page',
    target: "server",

    server: {
        port: 4002,
        host: 'localhost'
    }
};
