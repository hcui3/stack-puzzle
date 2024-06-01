/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          500: "hsla(217, 100%, 46%, 1)",
          100: "hsla(220, 100%, 95%, 1)",
        },
        dark: {
          "100": "hsla(0, 0%, 0%, 1)",
          "200": "hsla(225, 11%, 7%, 1)",
          "300": "hsla(225, 17%, 10%, 1)",
          "400": "hsla(222, 23%, 17%, 1)",
          "500": "hsla(240, 8%, 6%, 1)",
        },
        light: {
          "900": "hsla(0, 0%, 100%, 1)",
          "800": "hsla(210, 14%, 97%, 1)",
          "850": "hsla(0, 0%, 99%, 1)",
          "700": "hsla(216, 37%, 91%, 1)",
          "500": "hsla(228, 34%, 65%, 1)",
          "400": "hsla(227, 16%, 61%, 1)",
        },
        "accent-blue": "hsla(204, 86%, 57%, 1)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px hsla(0, 0%, 72%, 0.03), 0px 6px 12px 0px hsla(0, 0%, 72%, 0.02), 0px 2px 4px 0px hsla(0, 0%, 72%, 0.03)",
        "light-200": "10px 10px 20px 0px hsla(0, 9%, 85%, 0.10)",
        "light-300": "-10px 10px 20px 0px hsla(0, 9%, 85%, 0.10)",
        "dark-100": "0px 2px 10px 0px hsla(204, 10%, 20%, 0.10)",
        "dark-200": "2px 0px 20px 0px hsla(0, 5%, 14%, 0.04)",
      },
      backgroundImage: {
        "auth-dark": "url('/assets/images/auth-dark.png')",
        "auth-light": "url('/assets/images/auth-light.png')",
      },
      screens: {
        xs: "420px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
