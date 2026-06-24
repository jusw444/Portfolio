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
            animation: {
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