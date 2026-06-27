/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.ts",
        "./resources/**/*.tsx",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                'syne': ['Syne', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
                'mono': ['JetBrains Mono', 'monospace'],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
            keyframes: {
                'marquee-right': {
                    '0%': { transform: 'translateX(-33.33%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                'marquee-left': {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-33.33%)' },
                },
                'spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'floatY': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'fadeIn': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            animation: {
                'marquee-right': 'marquee-right 20s linear infinite',
                'marquee-left': 'marquee-left 20s linear infinite',
                'spin': 'spin 8s linear infinite',
                'float': 'floatY 3.5s ease-in-out infinite',
                'float-delay': 'floatY 4s ease-in-out infinite 0.8s',
                'pulse': 'pulse 2s ease-in-out infinite',
                'fadeIn': 'fadeIn 0.3s ease-out forwards',
            },
        },
    },
    plugins: [],
};