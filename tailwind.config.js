/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chella': ['ChellaType', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'bg-color': 'var(--bg-color)', 
        'navbar-bg': 'var(--navbar-bg-color)',
        'footer-bg': 'var(--footer-bg-color)',
        'card-bg': 'var(--card-bg-color)',
        'card-hover-bg': 'var(--card-hover-bg-color)',
        'default-text': 'var(--default-text-color)',
        'card-text': 'var(--card-text-color)',
        'subheadline-text': 'var(--subheadline-text-color)',
        'active-link': 'var(--active-link-color)',
        'card-title': 'var(--card-title-color)',
        'logo-text': 'var(--logo-text-color)',
        'nav-links-text': 'var(--nav-links-text-color)',
        'hover-link': 'var(--hover-link-color)',
        'primary-button': 'var(--primary-button-color)',
        'primary-button-hover': 'var(--primary-button-hover-color)',
        'secondary-button': 'var(--secondary-button-color)',
        'secondary-button-hover': 'var(--secondary-button-hover-color)',
      },
    },
  },
  plugins: [],
};
