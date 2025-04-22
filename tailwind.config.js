/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,css}",
    ],
    theme: {
        extend: {
            fontFamily: {
                zentry: ['zentry', 'sans-serif'],
                general: ['general', 'sans-serif'],
                'circular-web': ['circular-web', 'sans-serif'],
                'robert-medium': ['robert-medium', 'sans-serif'],
                'robert-regular': ['robert-regular', 'sans-serif'],
            },
            colors: {
                light: {
                    primary: '#f5f6f5',
                    secondary: '#f8f8f8',
                    tertiary: '#ffffff',
                    quaternary: '#ddf0ff',
                },
                dark: {
                    primary: '#2a2f42',
                    secondary: '#1f213a',
                    tertiary: '#161821',
                    quaternary: '#0d1117',
                },
                cinzaAzulado: {
                    50: '#8295a2',
                    100: '#7f919d',
                    200: '#71828d',
                    300: '#6e7d87',
                    400: '#5d6b75',
                    500: '#4d5962',
                },
                redPastel: {
                    50: '#af5b70',
                    100: '#c6677f',
                    200: '#f1b0b7',
                    300: '#db6c88',
                    400: '#e03e31',
                    500: '#c82333',
                },
                LaranjaPastel: {
                    50: '#cb9255',
                    100: '#d6a76b',
                    200: '#e1b882',
                    300: '#e8c5a0',
                    400: '#f0d1b6',
                    500: '#f7d9c1',
                },
                violeta: {
                    300: '#5724ff',
                },
                amareloLima: {
                    100: '#8e983f',
                    300: '#edff66'
                }
            },
        },
    },
    safelist: [
        'special-font', // Adicione suas classes personalizadas aqui
        'mask-clip-path',
        'border-hsla',
        'nav-hover-btn',
        'floating-nav',
        'absolute-center',
        'flex-center',
      ],
    plugins: [],
}