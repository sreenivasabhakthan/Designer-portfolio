import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#FF671F",
                "primary-hover": "#E55615",
                secondary: "#1A2530",
                accent: "#F9F3E3",
                "dark-accent": "#222222",
                "background-light": "#FAF9F6",
                "background-dark": "#111111",
                "surface-light": "#FFFFFF",
                "surface-dark": "#1C1C1C",
                "linen": "#FAF3E1",
                "champagne": "#F5E7CE",
                "blaze-orange": "#FF7426",
                "raisin-black": "#222222",
            },
            fontFamily: {
                display: ["var(--font-cinzel)", "var(--font-playfair)", "serif"],
                heading: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-montserrat)", "sans-serif"],
            },
            backgroundImage: {
                'palm-pattern': "url('https://images.unsplash.com/photo-1487739572428-21d3f2334960?q=80&w=2072&auto=format&fit=crop')",
                'hero-pattern': "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
                'texture': "url('https://www.transparenttextures.com/patterns/cubes.png')",
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
export default config;
