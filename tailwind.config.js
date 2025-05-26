/** @type {import ('tailwindcss').Config} */
export default {
    content: [
        "./index.html", "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    safelist: [
        {
            pattern: /bg-(.*)-(.*)/,
            variants: ['hover'],
        },
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },

        },
    },
    plugins: [],
}